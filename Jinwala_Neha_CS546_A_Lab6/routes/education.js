const express = require('express');
const router = express.Router();

async function education(){
  const education = [
    {
      "schoolName": "Stevens Institute of Technology",
      "degree": " The school's degree : MS in Computer Science",
      "favoriteClass": "Advanced Algorithms Design and Implementation",
      "favoriteMemory": "A memorable memory from your time in that school : Project Presenation on Yelp data analysis with group of friends"
    },
    {
      "schoolName": "Pune University",
      "degree": "BE in Information Technology",
      "favoriteClass": "Fundamentals of Data structure",
      "favoriteMemory": "  A memorable memory from your time in that school : The time I won First Prize in International paper presentation."
    },
    {
      "schoolName": "Garware College of Science ",
      "degree": "High school",
      "favoriteClass": "Physics and Maths",
      "favoriteMemory": "Successfully completing experinments in Physics Lab Classes with friends"
    }
  ]

  return education;
}


router.get('/', async function(req, res){
  try{
    education = await education();
    res.json(education);
  }
  catch(error){
    console.log("Couldn't find the page");
  }
  });

module.exports = router;