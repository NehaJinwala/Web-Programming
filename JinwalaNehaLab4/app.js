const todoItems = require("./todo");
const connection = require("./mongoConnection");

const main = async () => {
    try{
        let firstTask = await todoItems.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
        console.log("First Task logged in");
    
        let secondTask = await todoItems.createTask("Play Pokemon with Twitch TV","Should we revive Helix?");
        console.log("Second Task logged in");
    
        console.log("All task which are logged in are: ");
        const getTasks = await todoItems.getAllTasks();
        console.log(getTasks);
    
        const task = await todoItems.getTask("b02e350f-212c-4837-8f6f-ff18dc711dc4");
        console.log(task);

        console.log("Removing the first task");
        const removeTask = await todoItems.removeTask(firstTask._id);
        console.log(`Removed Task with ${firstTask._id}`);
    
        // const removeTask = await todoItems.removeTask("8463712a-e4b1-4a81-8f10-edb00f841219");
    
        console.log("The remaining tasks after deletion are/is: \n");
        const getTasks1 = await todoItems.getAllTasks();
        console.log(getTasks1);
    
        const task = await todoItems.getTask(secondTask._id);
        const finishedTask = await todoItems.completeTask(task._id);
        console.log(finishedTask);
    
        const db = await connection();
        await db.close();
    
        console.log("Done!");
    }
    catch(error){
        console.log("Something went wrong");
    }
    
};

main();