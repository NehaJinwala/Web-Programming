/**
 * Created by yesha on 2/10/2017.
 */
const mongoCollections = require("../config/mongoCollections");
const recipe= require('./recipes');
const recipes = mongoCollections.recipes;
let exportMethods= {

    AddComment(commentData,recipeId){
        if (!commentData)
            return Promise.reject("You must provide a description");
        if (!recipeId)
            return Promise.reject("You must provide an id");
        const uuidV4 = require('uuid/v4');
        let randomID = uuidV4();
        return recipes().then((RecipeDataCollection) => {

            let comment={
                _id:randomID,
                poster: commentData.poster,
                comment : commentData.comment
            }

            let updateCommand = {
                $push : {'comments': comment}
            };

            return RecipeDataCollection.update({_id: recipeId}, updateCommand).then((result) => {
                 console.log("Result::"+result);
                return this.getByRecipeID(recipeId).then((result)=>{
                    console.log(result);
                    return result;
                    });
            } ,(err)=>{
                return Promise.reject("Error occurred in updating the recipe");
        });
        },(err)=>{
            return Promise.reject("Error occurred in getting recipe Collection");
        });

    },

    getByRecipeID(RecipeId){
        if (!RecipeId)
            return Promise.reject("You must provide an id to search for");
            return recipes().then((recipesCollection) => {
                    return recipesCollection.findOne({_id: RecipeId}).then((recipes) => {
                        let allComments = recipes.comments;
        var dict = []; // create an empty array
        for (var k in allComments) {
            dict.push({

                id: allComments[k]._id,
                recipeid: recipes._id,
                recipetitle: recipes.title,
                poster: allComments[k].poster,
                comment: allComments[k].comment

            });
        }
        console.log(dict)
        return dict;
    },(err)=>{
            return Promise.reject("Error occurred while finding the recipe");
        }
    )
    }  );



    },

    getByCommentId(CommentId){
        if (!CommentId)
            return Promise.reject("You must provide an id to search for");
            return recipes().then((recipesCollection) => {
                return recipesCollection.findOne({'comments._id' : CommentId }).then((recipes)=>{
              //  console.log(recipes);
                let allComments= recipes.comments;
                for(k in allComments) {
                    if (allComments[k]._id == CommentId) {
                        let recipeByComment = {
                            _id: allComments[k]._id,
                            recipe_id: recipes._id,
                            recipe_title: recipes.title,
                            poster: allComments[k].poster,
                            comment: allComments[k].comment
                        }
                        return recipeByComment;
                    }
                }
            },(err)=>{
            return Promise.reject("Error occurred");
        })}
    );




    },


    UpdateComment(recipeid,commentid,updatedComment){

        if (!recipeid)
            return Promise.reject("You must provide an id");
        if (!commentid)
            return Promise.reject("You must provide an id");
        return recipes().then((RecipeDataCollection) => {
            let Newcomment = updatedComment.comment;
         return RecipeDataCollection.update({_id: recipeid, comments : {$elemMatch : { _id: commentid}} },{$set : { 'comments.$.comment' : updatedComment}}).then((result) => {
                return this.getByCommentId(commentid);
            },(err)=>{
            return Promise.reject("Error occurred while updating the entry");
        })



        });


            },

    deleteComment(id){
        if (!id)
            return Promise.reject("You must provide an id to search for");
        return recipes().then((RecipeDataCollection) => {


                  return RecipeDataCollection.update({'comments._id':id},{$pull : {'comments':{'_id':id}}}).then(() => {
                      return "Deleted Successfully";
    },(err)=>{
                      return Promise.reject("Error occurred");
    })


        });

    }
}
module.exports=exportMethods;

