var express = require('express');
var router = express.Router();
const about = require("../data/about.json");
const edu = require("../data/education.json");
const story = require("../data/story.json")

/* GET home page. */
router.get('/', function(req, res, next) {

    res.send("Hello World!!");
});

router.get('/about', function(req, res, next){
    res.json(about);
});

router.get('/education', function(req, res, next){
    res.json(edu);
});

router.get('/Story', function(req, res, next){
    res.json(story);
});
router.get('*', function(req, res, next){
    res.sendStatus(404);
});


module.exports = router;
