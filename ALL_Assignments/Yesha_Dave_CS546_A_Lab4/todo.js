/**
 * Created by yesha on 2/10/2017.
 */
const mongoCollections = require("./mongoCollections");
const todoItems = mongoCollections.todoItems;
let exportMethods= {

    createTask(title, description){

        if (!title)
            return Promise.reject("You must provide a title");

        if (!description)
            return Promise.reject("You must provide a description");

        const uuidV4 = require('uuid/v4');
        let randomID = uuidV4();
        return todoItems().then((todoItemsCollection) => {
                let todoList = {
                    _id: randomID,
                    title: title,
                    description: description,
                    completed: false,
                    completedAt: null
                };

        return todoItemsCollection
                .insertOne(todoList)
                .then((newInsertInformation) => {

                return newInsertInformation.insertedId;
                }).then((newId) => {
        return this.getTask(newId);
    }).catch(function(e) {
            console.log(e);
        })
    }).catch(function(e) {
            console.log(e);
        });
    },


    getAllTasks(){

        var item;
        let myCursor;
        return todoItems().then((todoItemsCollection) => {
                return todoItemsCollection.find({}).toArray();
        }).catch(function(e) {
            console.log(e);
        })


    },

    getTask(id){
        if (!id)
            return Promise.reject("You must provide an id to search for");
            return todoItems().then((todoItemsCollection) => {
                     return todoItemsCollection.findOne({_id: id});
    }).catch(function(e) {
            console.log(e);
        });
    },

    completeTask(taskId){
        if (!taskId)
            return Promise.reject("You must provide an id to search for");
           let dt= new Date();
           let time= dt.getTime();
           return todoItems().then((todoItemsCollection) => {
               return todoItemsCollection.update(
                    { _id: taskId },
                    { $set: { "completed": "true",
                               "completedAt":time } }
                ).catch(function(e) {
                   console.log(e);
               });
    }).catch(function(e) {
            console.log(e);
        });



    },

    removeAll(){
        return todoItems().then((todoItemsCollection) => {
                return todoItemsCollection
                    .remove({})
                    .then((deletionInfo) => {
                     console.log("count is:"+deletionInfo);
                    if (deletionInfo.deletedCount === 0) {
            throw(`Could not delete task with id of ${id}`)
        }
    }).catch(function(e) {
            console.log(e);
        });
    }).catch(function(e) {
            console.log(e);
        });
    },
    removeTask(id){
        if (!id)
            return Promise.reject("You must provide an id to search for");
        let tryToGetTask = this.getTask(id);
        tryToGetTask.catch((error) => {
            console.error(error);
            return error;
    })
        return todoItems().then((todoItemsCollection) => {
                return todoItemsCollection
                    .removeOne({_id: id})
                    .then((deletionInfo) => {

                    if (deletionInfo.deletedCount === 0) {
            throw(`Could not delete task with id of ${id}`)
        }
    }).catch(function(e) {
            console.log(e);
        });
    }).catch(function(e) {
            console.log(e);
        });

    }
}
module.exports=exportMethods;

