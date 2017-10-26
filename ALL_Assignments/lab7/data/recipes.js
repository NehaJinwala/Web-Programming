/**
 * Created by yesha on 2/10/2017.
 */
const mongoCollections = require("../config/mongoCollections");
const comments= require('./comments');
const recipes = mongoCollections.recipes;
let exportMethods= {


    createTask(description){
        if (!description)
            return Promise.reject("You must provide a description");
        if (!description.title)
            return Promise.reject("You must provide a recipe  title");
        if (!description.ingredients)
            return Promise.reject("You must provide  recipe ingredients");
        if (!description.steps)
            return Promise.reject("You must provide recipe steps");

        const uuidV4 = require('uuid/v4');
        let randomID = uuidV4();
        return recipes().then((recipesCollection) => {
  let comments=[];

                let recipe = {
                    _id: randomID,
                    title: description.title,
                    ingredients: description.ingredients,
                    steps:description.steps,
                    comments: comments
                };

        return recipesCollection
                .insertOne(recipe)
                .then((newInsertInformation) => {

                return newInsertInformation.insertedId;
                }).then((newId) => {
        return this.getTask(newId);
    },(err)=>{
            return Promise.reject("Error occurred");
        } )
    });
    },

    getAllTasks(){

      var item;
      let myCursor;
     return recipes().then((recipesCollection) => {


        return recipesCollection.find({}).toArray();


        } ,(err)=>{
            return Promise.reject("Error occurred");
        })


 },

    updateTask(id, updatedRecipe) {
        return recipes().then((RecipeDataCollection) => {
            let updatedRecipeData = {};

            if (updatedRecipe.title) {
                updatedRecipeData.title = updatedRecipe.title;
            }

            if (updatedRecipe.ingredients) {
                updatedRecipeData.ingredients = updatedRecipe.ingredients;
            }
            if (updatedRecipe.steps) {
                updatedRecipeData.steps = updatedRecipe.steps;
            }

            if (updatedRecipe.body) {
                updatedRecipeData.body = updatedRecipe.body;
            }
              if (updatedRecipe.comments) {

               return "Use /comments/:recipeID to add comments in the recipe";

        }
            let updateCommand = {
                $set: updatedRecipeData
            };

            return RecipeDataCollection.updateOne({_id: id}, updateCommand).then((result) => {
                return this.getTask(id);
            } ,(err)=>{
            return Promise.reject("Error occurred");
        });
        });
    },

        getTask(id){


            if (!id)
                return Promise.reject("You must provide an id to search for");

            return recipes().then((recipesCollection) => {

                  return   recipesCollection.findOne({_id: id}).then((recipe)=>{
                         if(!recipe)
                           throw "Recipe Not found";
                      return recipe;
                }
        )
        } );

        },


    removeAll(){
        return recipes().then((recipesCollection) => {
                return recipesCollection
                    .remove({})
                    .then((deletionInfo) => {
                     console.log("count is:"+deletionInfo);
                    if (deletionInfo.deletedCount === 0) {
            throw(`Could not delete recipe with id of ${id}`)
        }
    });
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
        return recipes().then((recipesCollection) => {
                return recipesCollection.removeOne({_id: id}).then((deletionInfo) => {

                    if (deletionInfo.deletedCount === 0)
                        throw(`Could not delete recipe with id of ${id}`)
                  else
                      return "Deleted successfully";

    });
    });


    }
}
module.exports=exportMethods;

