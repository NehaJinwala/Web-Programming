const express = require('express');
const router = express.Router();

async function about(){
    const about = {
        "name": "Neha Jinwala",
        "biography": "Hi! My name is Neha Jinwala. I am Computer Science graduate student and I am in third and last semester. I have done my undergraduation in Information Technology from South Gujarat University and also obtained a master degree in the same field from Gujarat Technological University.",
        "favoriteShows": [
            "1. Suits",
            "2. Vampire Diaries",
            "3. The Originals",
            "4. Friends",
            "5. Modern Family"
        ],
        "hobbies": [
            "Reading",
            "Listening to music",
            "Playing some sort of sports"
        ] 
    }
    return about;
}


router.get('/', async function(req, res){
    try{
        about = await about();
        res.json(about);
    }
    catch(error){
        console.log("Couldn't find the page");
    }
    
  });

module.exports = router;