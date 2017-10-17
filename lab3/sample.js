function simplify(text){
    console.log("About to read the file");
    result1 = text.toLowerCase();
    //replaces every extra space and non alphanumeric characters by space including newline and tab.
    result2 = result1.replace(/[^a-z0-9]+/g,' ');
    console.log(result2);
   
}

simplify("Hello, my -! This is a great day to say hello.\n\n\tHello! 2 3 4 23")