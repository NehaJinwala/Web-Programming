/**
 * Created by yesha on 1/22/2017.
 */
/**
 *
 * Name: Yesha Dave
 * ID: 10412905
 */
function UserException(message) {
    this.message = message;
    this.name = "TypeFormatException";
}
function print(message){
    console.log(message);
}
function NotStringOnly(Str){
    var regex = /\d+/g;
    var matches=Str.match(regex);
    if(matches)
        return true;
}
// Fucntion to calculate the sum of the squares of 3 numbers and return that result
function sumOfSquares(num1, num2, num3){

        if (typeof(num1) !== "number" || typeof(num2) !== "number" || typeof(num3) !== "number") {

            throw new UserException("Enter a Number only:");
        }

        answer = (num1 * num1) + (num2 * num2) + (num3 * num3);
        return answer;
}

//Simple function that uses console.log to print hello to someone!
function sayHelloTo(firstName, lastName, title){

    if(typeof(firstName)!== "string" || typeof(lastName)!== "string" || typeof(title)!== "string" ){
        throw new UserException("Enter a String only:");
    }


    if(NotStringOnly(firstName) || NotStringOnly(lastName) || NotStringOnly(title))
    {
        throw new UserException("No Numbers allowed, Enter a String only:");
    }
    if(lastName== "" && title== "")
        print("Hello," + firstName + "!");
    else if(title == "")
        print("Hello," + firstName + " "+ lastName+ ".I hope you are having a good day!");
    else
    print("Hello," + title + firstName +" " + lastName + "! Have a good evening!" );
}

// create and return a simple song called 99 Cups of Coffee on the Desk
function cupsOfCoffee(howManyCups){
    if (typeof(howManyCups) !== "number" ) {

        throw new UserException("Enter a Number only:");
    }
    if(howManyCups >=1 && howManyCups<=99) {

        while(howManyCups>2){
                let leftcups=howManyCups - 1;
                print(howManyCups+" cups of coffee on the desk! "+howManyCups+" cups of coffee!\nPick it up, drink the cup, " +leftcups + " cups of coffee on the desk!");
                howManyCups--;
            }
        if(howManyCups === 2)
        {
                print(howManyCups+" cups of coffee on the desk! "+howManyCups+" cups of coffee!\nPick it up, drink the cup, 1 cup of coffee on the desk!");
                howManyCups--;
        }
        if (howManyCups === 1) {
                print("1 cup of coffee on the desk! 1 cup of coffee!\nPick it up, drink the cup, no more coffee left on the desk!");
        }
    }
    else{
        print("Invalid Input, the cups are in the range 1 to 99 inclusive");
    }
}

//calculate how many times a substring occurs in a given string, also factor in a case where there are overlaps!
function occurrencesOfSubstring(fullString, substring)
{

    if(typeof(fullString)!== "string" || typeof(substring)!== "string"){
        throw new UserException("Enter a String only:");
    }

    let count=0;

    for (let i=0; i<fullString.length ;i++) {
        strsub = fullString.substr(i, substring.length);

        if (strsub == substring) {

            count++;
        }
    }
    print("Substring occurence count is: "+count);

}


let myStringArray=[];
let mynumarray=[];
function randomizeSentences(paragraph)
{

    if(typeof(paragraph)!== "string" ){
        throw new UserException("Enter a String only:");
    }
    let count=0, start=0,endstr=0;

    for(let k=0; k< paragraph.length ; k++){

        if(paragraph.charAt(k)=='.' || paragraph.charAt(k)=='!' || paragraph.charAt(k)== '?' ){
            mynumarray[count]= count;


            endstr=k;
          // print("start:"+start + "\n end is:"+endstr);
           myStringArray[count]=paragraph.substring(start,endstr+1) ;
         //  print("count is:"+ count + myStringArray[count]);

            start=k+1;
            count++;
        }

    }

    print("Given String Array::")
    print(myStringArray);
    function shuffleArray (array) {
        var i = 0
            , j = 0
            , temp = null

        for (i = array.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1))
            temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
       return array;
    }
    let RandomArray=shuffleArray(myStringArray);
    print("Random Array ::");
    print(RandomArray);

}
//function 1
   try {
           let result = sumOfSquares(5, 3, 10);
           print(result); }

   catch(e){
    console.log(e.message, e.name);
       }
//fucntion 2
print("\n");
    try {
           sayHelloTo("yesha","Dave","Miss.");
           sayHelloTo(555, "dave" , "");
           sayHelloTo("Yesha", "", ""); }
    catch(e){
           console.log(e.message, e.name);
         }
//fucntion 3
print("\n");
    try { cupsOfCoffee(5);}
    catch(e){
    console.log(e.message, e.name);
     }
//fucntion 5
    print("\n");
     try {
        occurrencesOfSubstring("rwgfg555", "55");
        occurrencesOfSubstring("Helllllllo, class!", null);
        occurrencesOfSubstring("aaaaaaaaaa aaa", "aaa");}
     catch(e){
    console.log(e.message, e.name);
    }
//function 6
print("\n");
     try {
        var paragraph = "Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations.";
        randomizeSentences(paragraph);
     }
     catch(e){
        console.log(e.message, e.name);
      }


