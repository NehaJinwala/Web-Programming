const express = require('express');
const router = express.Router();
const recipeData = require("../data/recipes");

router.get("/:id", (req, res) => {
 recipeData.getTask(req.params.id).then((recipe) => {
    res.json(recipe);
 }).catch(() => {
 res.status(404).json({ error: "Recipe not found" });
 });
 });

router.get("/", (req, res) => {
    recipeData.getAllTasks().then((recipeList) => {
        res.json(recipeList);
    }).catch((e) => {
        res.status(500).json({ error: e });
    });
});

router.post("/", (req, res) => {
    let blogRecipeData = req.body;
    recipeData.createTask(blogRecipeData)
        .then((newPost) => {
            res.json(newPost);
        }).catch((e) => {
            res.status(500).json({ error: e });
        });
});

router.put("/:id", (req, res) => {
    let updatedData = req.body;

    let getRecipe = recipeData.getTask(req.params.id);

    getRecipe.then(() => {
        return recipeData.updateTask(req.params.id, updatedData)
            .then((updatedRecipe) => {
                res.json(updatedRecipe);
            }).catch((e) => {
                res.status(500).json({ error: e });
            });
    }).catch(() => {
        res.status(404).json({ error: "Recipe not found" });
    });

});

router.delete("/:id", (req, res) => {
    let getPost = recipeData.getTask(req.params.id);

    getPost.then(() => {
        return recipeData.removeTask(req.params.id)
            .then((status) => {
            res.json(status);
            }).catch((e) => {
                res.status(500).json({ error: e });
            });
    }).catch(() => {
        res.status(404).json({ error: "Recipe not found" });
    });
});

module.exports = router;