const mongoCollections = require("./mongoCollections");
const uuidv4 = require("uuid/v4");
const todoItems = mongoCollections.todoItems;

let exportedMetohds = {
    async createTask(title, description){
        try{
            if(!title){
                throw "You must provide title";
            }
            
            if(!description){
                throw "You must provide description";
            }

            const todoCollection = await todoItems();

            let randomID = uuidv4();
            const todoList = {
                _id: randomID,
                title: title,
                description: description,
                completed: false,
                completedAt: null
            };

            const insertInfo = await todoCollection.insertOne(todoList);
            
            if(insertInfo.insertedCount === 0){
                throw "Could not add items";
            }

            const newList = await this.getTask(insertInfo.insertedId);
            return newList;
        }
        catch(error){
            console.log("Could not insert item");
        }
    },

    async getAllTasks(){
        try{
            const todoCollection = await todoItems();
            
            const todoItemsList = await todoCollection.find({}).toArray();
            
            if(todoItemsList === null){
                    throw "There are no items in the list to display";
            }
            
            return todoItemsList;
        }
        catch(error){
            console.log("Could not get all tasks");
        }
        
    },

    async getTask(id){
        try{
            if(!id){
                throw "You must provide an id to search for";
            }

            const todoCollection = await todoItems();

            const todoItem = await todoCollection.findOne({_id: id});

            if(todoItem === null){
                throw "No item with that id";
            }

            return todoItem;
        }
        catch(error){
            console.log("Could not get task with that particular id");
        }
    },

    async completeTask(taskId){
        try{
            if(!taskId){
                throw "You must provide an id to update for";
            }
            let date = new Date();
            let time = date + " " + date.toLocaleTimeString();
            const todoCollection = await todoItems();
            const getDetails = await todoCollection.findOne({_id: taskId});
    
            // console.log("Details  "+getDetails.description);
    
            console.log("Updating the item with time");
            let updatedList = {
                _id : taskId,
                title: getDetails.title,
                description: getDetails.description,
                completed: true,
                completedAt: time
            };
    
            const updatedInfo = await todoCollection.updateOne(
                {_id: taskId}, 
                updatedList
            );
            console.log("Item updated");
    
            if(updatedInfo.modifiedCount === 0){
                throw "could not update list successfully";
            }
    
            return await this.getTask(taskId);
        }
        catch(error){
            console.log("Could not update the item. Something went wrong");
        }
    },

    async removeTask(id){
        // console.log("Removing items");
        try{
            const todoCollection = await todoItems();
            const deletionInfo = await todoCollection.removeOne({_id: id});
    
            if(deletionInfo.deletedCount === 0){
                throw `Could not delete item with id of ${id}`;
            }
        }
        catch(error){
            console.log("Could not delete the item.");
        }
        // console.log(`Removed Task with ${id}`);
    },
};

module.exports = exportedMetohds;