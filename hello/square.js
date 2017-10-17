function square(lines){
    console.log(lines);
    let s = "";
    for(let size = 0; size < 10; size++){
        //this loop is for the row
        for(let i = 0; i < lines; i++){
            //s += "";
            s += "|";
            //this loop is for the columns
            for(let j = 0; j < lines; j++){
                if(i == 0 && j < lines){
                    s += "-";
                }
                else if(i == (lines-1) && j < lines){
                    s += "-";
                }
                else if(j < lines){
                    s += " ";
                }
            }
            s += "|\n";
            
            //s = "";
        }
    }
    return s;
    // square(2);
}

console.log(square(4))