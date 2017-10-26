

const connection = require("../config/mongoConnection");
const recipes = require("../data/recipes");
const comments= require("../data/comments")

let description={};
description.title= "Fried Eggs"
description.ingredients= [
    {
        name: "Egg",
        amount: "2 eggs"
    },
    {
        name: "Olive Oil",
        amount: "2 tbsp"
    },
]
description.steps= [
    "First, heat a non-stick pan on medium-high until hot",
    "Add the oil to the pan and allow oil to warm; it is ready the oil immediately sizzles upon contact with a drop of water.",
    "Crack the egg and place the egg and yolk in a small prep bowl; do not crack the yolk!",
    "Gently pour the egg from the bowl onto the oil",
    "Wait for egg white to turn bubbly and completely opaque (approx 2 min)",
    "Using a spatula, flip the egg onto its uncooked side until it is completely cooked (approx 2 min)",
    "Remove from oil and plate",
    "Repeat for second egg"
]
let comment=
{

        poster: "Dummy data",
    comment: "Good recipe. Can be made quickly!"
}

let getAllTask = recipes.createTask(description);
getAllTask.then((tasks)=> {

    console.log("Tasks are11::\n" + JSON.stringify(tasks));
    let getAllTasks = comments.AddComment(comment,tasks._id);


    getAllTasks.then((tasks)=> {
    console.log("Tasks are11::\n" + JSON.stringify(tasks));
}).catch((e)=>{
        console.log("ERROR:couldnt update recipe with the comments");
});
});
