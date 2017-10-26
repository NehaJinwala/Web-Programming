const express = require('express');
const router = express.Router();
const commentData = require("../data/comments");
const recipeData = require("../data/recipes");


router.get("/recipe/:recipeId", (req, res) => {
         commentData.getByRecipeID(req.params.recipeId).then((user) => {
              res.json(user);
        }).catch((e) => {
           res.status(400).json({ error: "Recipe not found" });
        });
});

router.get("/:id", (req, res) => {
           commentData.getByCommentId(req.params.id).then((user) => {
                   res.json(user);
              }).catch((e) => {
                        res.status(400).json({ error: "comment not found" });
                      });
});

router.post("/:recipeId/", (req, res) => {
        let blogCommentData = req.body;

    if (!blogCommentData) {
        res.status(400).json({ error: "You must provide data to add a user" });
        return;
    }
     let getRecipe = recipeData.getTask(req.params.recipeId);
            getRecipe.then(() => {
                commentData.AddComment(blogCommentData,req.params.recipeId)
                .then((newcomment) => {
                res.json(newcomment);
            }).catch((e) => {
                res.status(500).json({ error: e })
            });

            }).catch(() => {

                res.status(404).json({ error: "Recipe not found" });
            });


});

router.put("/:recipeId/:commentId", (req, res) => {
        let userInfo = req.body;

        if (!userInfo) {
            res.status(400).json({ error: "You must provide data to update a user" });
            return;
        }

        if (!userInfo.comment) {
            res.status(400).json({ error: "You must provide a comment" });
            return;
        }
    let getRecipe = recipeData.getTask(req.params.recipeId);

    getRecipe.then(() => {
        let comments= commentData.getByCommentId(req.params.commentId);
            comments.then(()=>{
                commentData.UpdateComment(req.params.recipeId,req.params.commentId,userInfo.comment)
                .then((newcomment) => {
                res.json(newcomment);
            }).catch((e) => {
                res.status(500).json({ error: e });
            });
            }).catch(() => {

                res.status(404).json({ error: "Comment not found" });
            });

    }).catch(() => {

        res.status(404).json({ error: "Recipe not found" });
    });

});

router.delete("/:id", (req, res) => {
        let comments= commentData.getByCommentId(req.params.id);
            comments.then(()=>{
                commentData.deleteComment(req.params.id)
                .then((newcomment) => {
                res.json(newcomment);
            }).catch((e) => {
                res.status(500).json({ error: e });
            });

            }).catch(() => {

                res.status(404).json({ error: "Comment not found" });
            });
   });

module.exports = router;