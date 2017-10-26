
module.exports = {
    description: "This is a Text Metrics module for CS-546",
    simplify: function (text) {
         let text1="", text2="", string="";
        return new Promise(function (fulfill, reject) {
            try{
              let res=text;
             text1 = res.toLowerCase();
                string = text1.replace(/\s\s+/g, " ").replace(/[^a-zA-Z0-9 ]/g, "");

        } catch(e){
            reject(e);
          }
            fulfill(string);

        }).then(function (result) {
                return result;
            },
            function (error) {

                console.log("Simplify text : into error: "+error);
                return false;
            });
    },
    createMetrics: function (text) {
        /*
         totalLetters: total number of letters in the text,
         totalWords: total number of words in the text,
         uniqueWords: total number of unique words that appear in the text,
         longWords: number of words in the text that are 6 or more letters long,
         averageWordLength: the average number of letters in a word in the text,
         wordOccurrences: a dictionary of each word (lowercased, no punctuation) and how many times each word occurs in the text.
         }
         */


        return new Promise(function (fulfill, reject) {
            try{
                if(typeof text!== "string")
                    reject("CreateMetrics:Enter a valid data");
                let Obj={};
            let count = 0;
            var myMap = new Map();
            let TotalLetter = text.replace(/ /g, '');

            TotalLetters = TotalLetter.length;
            var myArray = text.split(' ');
  // occurrence = dictionary that holds words and myArray is an array that holds words
                let occurrence = {};
                myArray.forEach(function(word) {
                    if (!(word in occurrence)) {
                        occurrence[word] = 1;
                    } else if (word in occurrence) {
                        occurrence[word]++;
                    }
                }, this);


            let average = 0, total = 0, Lcount = 0;
            for (let k = 0; k < myArray.length; k++) {
                total = total + myArray[k].length;
                if (myArray[k].length >= 6) {
                    Lcount++;

                }
            }

            let longWords = Lcount;
            average = total / myArray.length;
            let averageWordLength = average;

            let longCount = 0;
            //map that holds all the unique words
            for (let i = 0; i < myArray.length; i++) {
                if (myMap.has(myArray[i])) {
                    count = myMap.get(myArray[i]);
                    count = count + 1;
                    myMap.set(myArray[i], count);
                }
                else {
                    myMap.set(myArray[i], 1);
                    let ke=myArray[i];
                }
            }
                let TotalWords = myArray.length;
                let uniqueWords = myMap.size;
                Obj.totalLetters=TotalLetters;
               Obj.totalWords=TotalWords;
                Obj.uniqueWords=uniqueWords;
                Obj.longWords=longWords;
                Obj.averageWordLength=averageWordLength;
                Obj.wordOccurrences=occurrence;
                fulfill(Obj);

        }catch(e){
            reject(e);
            }


        }).then(function (result) {
        //   console.log(result);
                return result;
            },
            function (error) {

                console.log("Metrics error"+error);
                return false;
            });

    },



};