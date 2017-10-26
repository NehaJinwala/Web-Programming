
const todoItems = require("./todo");
const connection = require("./mongoConnection");

    let title1 = "Ponder Dinosaurs", title2 = "Play Pokemon with Twitch TV";
    let description1 = "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?", description2 = "Should we revive Helix?";

    let createdTask1 = todoItems.createTask(title1, description1).then((firstpost) => {
        let logtask = todoItems.getTask(firstpost._id);
        logtask.then((task) => {
            console.log("Task1 is:\n" + JSON.stringify(task));
        });

        let createdTask2 = todoItems.createTask(title2, description2).then((secondpost) => {
            let getAllTask = todoItems.getAllTasks();
            getAllTask.then((tasks) => {
                console.log("Total count::" + tasks.length);
                console.log("Created a New task, Tasks are::\n" + JSON.stringify(tasks));
            });

            let result = todoItems.removeTask(firstpost._id).then((removedtask) => {
                let getAllTask = todoItems.getAllTasks();
                getAllTask.then((tasks) => {
                    console.log("Total count::" + tasks.length);
                    console.log("Removed first task, Tasks are::\n" + JSON.stringify(tasks));
                });
                let task = todoItems.completeTask(secondpost._id).then((gettask) => {
                    let logtask = todoItems.getTask(secondpost._id);
                    logtask.then((task) => {
                        console.log("Remaining task is:\n" + JSON.stringify(task));
                    });
                    let getAllTask = todoItems.getAllTasks();
                    getAllTask.then((tasks) => {
                        console.log("Total count::" + tasks.length);
                        console.log("Completed the second task, Tasks are::\n" + JSON.stringify(tasks));
                    });
                    getAllTask.catch().then(() => {
                        return connection();
                    }).then((db) => {
                        return db.close();
                    }).catch(function(e) {
                        console.log(e);
                    });
                }).catch(function(e) {
                    console.log(e);
                });
            }).catch(function(e) {
                console.log(e);
            });
        }).catch(function(e) {
            console.log(e);
        });
    }).catch(function(e) {
        console.log(e);
    });

/*
let ans=todoItems.removeAll().then((result)=>{
    console.log(result);
});
let getAllTask = todoItems.getAllTasks();
getAllTask.then((tasks)=> {
    console.log("Tasks are::\n" + JSON.stringify(tasks));
});

*/