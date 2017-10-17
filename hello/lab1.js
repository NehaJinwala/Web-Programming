function UserException(message){
    this.message = message;
    this.name = 'UserException';
}

function numberInStringFormat(val){
    var matches = val.match(/\d+/g);
    if (matches != null) {
        return true;
    }
}

//The below defined function sumOfSquares takes 3 numbers as input and print the sum of their squares.
function sumOfSquares(num1, num2, num3){
    //checks whether the user input consists of numbers or other variable type.
    if(typeof(num1) !== "number" || typeof(num2) !== "number" || typeof(num3) !== "number"){
        // If found other than numbers, an error message will be displayed.
        throw new UserException("Please enter only numbers!");
    }
    else{
        return ((num1*num1)+(num2*num2)+(num3*num3));
    }
}
//Exception handling for function 1
try {
    console.log("Output for function 1:");
    console.log(sumOfSquares(3, 5, 7) + "\n");
    console.log(sumOfSquares(5, 10, 15) + "\n");
    console.log(sumOfSquares(7, 8, 12) + "\n");
    console.log(sumOfSquares(4, 6, 3) + "\n");
    console.log(sumOfSquares(14, 15, 17) + "\n");
}
catch(e){
    console.log(e.message, e.name);
}
//console.log(sumOfSquares(3, 5, 10));

//The below defined function sayHelloTo takes the name of the person as input and greets the person.
function sayHelloTo(firstName, lastName, title){
    if(firstName == "" || lastName == "" || title == ""){
        console.log("First name, last name or title cannot be empty");
    }

    if(firstName == undefined && lastName == undefined && title == undefined){
        console.log('Error: There are no arguements\n');
    }
    else if(lastName == undefined && title == undefined){
        console.log('Hello, ' + firstName + '!\n'); 
    }
    else if(title == undefined){
        console.log('Hello, ' + firstName + ' ' + lastName + '. I hope you are having a good day!\n');
    }
    else if(typeof(firstName) !== "string" || typeof(lastName) !== "string" || typeof(title) !== "string"){
         // If found other than numbers, an error message will be displayed.
         throw new UserException("Please enter your name and not numbers!\n");
    }
    // I check here whether the number is entered in string format.
    else if(numberInStringFormat(firstName) || numberInStringFormat(lastName) || numberInStringFormat(title))
    {
        throw new UserException("Please enter string only, not numbers in string format\n");
    }
    else{
            console.log('Hello, ' + title + ' ' + firstName + ' ' + lastName + '! Have a good evening!\n');
    }
}
//Exception handling for function 2
try{
    console.log("Output for function 2:");
    sayHelloTo();
    sayHelloTo("Neha");
    sayHelloTo("Neha", "Jinwala");
    sayHelloTo("Neha", "Jinwala", "Ms.");
    sayHelloTo("Neha", 10, "Ms.");
    sayHelloTo("Neha", "29", "Ms.");
}
catch(e){
    console.log(e.message, e.name);
}
//sayHelloTo("Neha", "Jinwala", "Ms.");

//The function below creates and returns a simple song called 99 cups of coffee on the desk.
function cupsOfCoffee(howManyCups){
    let s="";
    
    //checks that the number of cups entered is a number only.
    if(typeof(howManyCups) !== "number"){
         throw new UserException("Please enter only numbers!");
    }
    if(howManyCups >= 1 && howManyCups <= 99){
        for(let i = howManyCups; i > 0; i--) {
            if(i == 2){
                s += howManyCups + " cups of coffee on desk! " + howManyCups + " cups of coffee!" + "\n" + "Pick one up, drink the cup, " + (howManyCups-1) + " cup of coffee on the desk!\n";
                s += "\n";
            }
            else if(i == 1){
                s += howManyCups + " cup of coffee on desk! " + howManyCups + " cup of coffee!" + "\n" + "Pick one up, drink the cup, no more coffee on the desk!\n";
                //s += "\n";
            }
            else{
                s += howManyCups + " cups of coffee on desk! " + howManyCups + " cups of coffee!" + "\n" + "Pick one up, drink the cup, " + (howManyCups-1) + " cups of coffee on the desk!\n";
                s += "\n";
            }
            //return s;
            howManyCups--;
        }
    }
    else{
         console.log("\nPlease enter a number between 1 and 99 only as the song describes.");
    }
    return s;
}
//Exception handling for function 3
try{
    console.log("Output for function 3:");
    console.log("\n" + cupsOfCoffee(5));
}
catch(e){
    console.log(e.message, e.name);
}

//The function below calculates how many times a substring occurs in a given string.
function occurrencesOfSubstring(fullString, substring){
    let indexAt = 0;
    let count = 0;

    // checks whether the fullstring and substring is string. If string not found then throws an exception.
    if(typeof(fullString) !== "string" || typeof(substring) !== "string"){
        throw new UserException("Please enter only strings!");
    }

    //checks whether the fullstring or the substring is empty or not. If found empty prints a message.
    if(substring.length <= 0 && fullString.length <= 0){
        console.log("Please pass a substring and fullstring");
    }
    else if(substring.length <= 0){
        console.log("Please pass a substring to match");
    }
    else if(fullString.length <= 0){
        console.log("Please pass a fullstring");
    }
    else{
        console.log("Everything looks good!");
    }

    // first we store the occurrences in a variable which we use it later.
    for(let i = 0; i < fullString.length; i++){
         let s = fullString.substr(i, substring.length);

        //we need to check whether the s and substring are same or not so that we can count the occurrences.
        if(s == substring){
            count++;
        }
    }

    //console.log("return");
    return count;
}
try{
    console.log("Output for function 4:");
    console.log(occurrencesOfSubstring("helllllllo world", "ll") + "\n");
}
catch(e){
    console.log(e.message, e.name);
}

//The function below takes in a paragragh as input and randomizes the sentence in it.
function randomizeSentences(paragraph){
    let splitarr = [];
    let indexSplitarr = 0;
    let startindex = count = 0;
    let randomindex;

    //checks whether the input of the paragraph is a string. If string not found then throws an exception.
    if(typeof(paragraph) !== "string" || paragraph == undefined){
        throw new UserException("Please enter only strings and no empty paragraph allowed. Also please enter 2-3 lines for randomizing the paragraph.");
    }

    for(let i = 0; i < paragraph.length; i++){
        if(paragraph.charAt(i) == "!" || paragraph.charAt(i) == "?" || paragraph.charAt(i) == "."){
            if(count == 0){
                splitarr[indexSplitarr] = " " + paragraph.substring(startindex, i + 1);
                indexSplitarr += 1;
                startindex = i + 1;
                count++;
            }
            else{
                splitarr[indexSplitarr] = paragraph.substring(startindex, i + 1);
                indexSplitarr += 1;
                startindex = i + 1;
                //console.log("coming1");
            }

        }
        //console.log("coming");
    }
         let i = 0;
         let temp = null;
    
         for(i = splitarr.length - 1; i > 0; i--){
           randomindex = Math.floor(Math.random() * (i + 1))
           temp = splitarr[i];
           splitarr[i] = splitarr[randomindex];
           splitarr[randomindex] = temp;
         }
         let s = "";
         for(let k = 0; k < splitarr.length; k++){
             s += splitarr[k];
         }
        return s;
}
try{
    console.log("Output for function 5:");
    console.log(randomizeSentences("Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations."));
}
catch(e){
    console.log(e.message, e.name);
}


