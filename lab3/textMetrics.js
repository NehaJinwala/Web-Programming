const fs = require("fs");

let textMetrics = exports = module.exports;  
    textMetrics.simplify = (text) => {
        let newText = "";
            try{
                
                newText = text.toLowerCase();
                newText = newText.replace(/[^0-9a-z\s]/gi, '');
                newText = newText.replace(/\s\s+/g, ' ');
                // console.log(newText);
                newText = newText.trim();
              
            }
            catch(error){
                reject(error);       
            }
           
            return newText;
    };
    
    // simplify("Hello, my -! This is a great day to say hello.\n\n\tHello! 2 3 4 23");
    
    textMetrics.createMetrics = (text) => {
        
        let objMetrics = {};
        let str = textMetrics.simplify(text);
        //console.log(str);
        let n = str.length;
        let wordsinstring = str.split(' ');
        let numOfWords = wordsinstring.length; 
        let occurrence = 0;
        let wordsOccurrences = {};
        let count = count1 = 0;
        
        for(let j = 0; j < wordsinstring.length; j++){
            if(wordsOccurrences[wordsinstring[j]]){
                wordsOccurrences[wordsinstring[j]]++;
                //console.log("Unique word found");
            }
            else{
                wordsOccurrences[wordsinstring[j]] = 1;
                count++;
            }
        }
    
        let longWord = 0;
        for(let i = 0; i < wordsinstring.length; i++){
            // console.log(wordsinstring[i].length)
            if(wordsinstring[i].length >= 6){
                //console.log("Going inside")
                count1++;
            }
        }
        
        let resultwithnospace = text.replace(/[^a-z0-9]+/g,'');
        // console.log(resultwithnospace);
        let averageWordLength = 0;
        averageWordLength = (resultwithnospace.length/wordsinstring.length);
        
        
        
        // let numOfuniqueWords = uniqueWords.length;
    
        // console.log(`totalLetters: ${n}`);
        // console.log(`totalWords: ${numOfWords}`);
        // console.log(`uniqueWords: ${count}`);
        // console.log(`longWords: ${count1}`);
        // console.log(`averageWordLength: ${averageWordLength}`);
        // console.log("wordOccurrences: ");
        // console.log(uniqueWords);

        objMetrics.totalLetters = n;
        objMetrics.totalWords = numOfWords;
        objMetrics.uniqueWords = count;
        objMetrics.longWord = count1;
        objMetrics.averageWordLength = averageWordLength;
        objMetrics.wordOccurrence = wordsOccurrences;
    
        return objMetrics;
        //createMetrics("Hello, my -! This is a great day to say hello.\n\n\tHello! 2 3 4 23");
    };


    


