module.exports = {
    description: "This is the function for printing different shapes for CS-546.",


triangle: function (lines){
    let s = "";
    let sp = 1;
    let lastLine = 0;

    if(lines == undefined || typeof lines !== "number" ){
        throw "Must be a number and please do not enter words.";
    }
    for(let size = 0; size < 10; size++){
        for(let i = 1; i <= lines; i++){
            for(let space = lines-i; space > 0; space--){
                s += " ";
            }
            s += "/";
            lastLine++;
            if(i == lines){
                for(let j = 0; j < lines*2-2; j++){
                    s += "-";
                }
                s += "\\";
            }
            if(i == 1){
                for(let left_space = i; left_space > 0; left_space--){
                    if(left_space == i){
                        s += "\\";
                    }
                }
            }
            else{
                for(let lef_space=0;lef_space<i*2-2;lef_space++){
                    s=s+' ';
                }
                if(i != lines){
                    s += "\\";
                }
                
            }
            s += "\n";
        }
    }
    // console.log(s);
   
    s += "\n";
    return s;
    // triangle(3);
},

square: function (lines){
    let s = "";
    if(lines == undefined || typeof lines !== "number"){
        throw "Please enter only numbers.";
    }

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
},


rhombus: function (lines){
    let s = "";
    // let sp = 1;
    let firstLine = 0;
    let lastLine = lines;
    let halfnum = lines/2;

    if(lines == undefined || typeof lines !== "number"){
        throw "Please enter only numbers."
    }
    for(let size = 0; size < 10; size++){    
        for(let i = 1; i <= halfnum; i++){
            for(let space = halfnum-i; space > 0; space--){
                s += " ";
            }
            s += "/";
            if(i == 1){
                s += "-";
                //firstLine++;
            }
            // if(lastLine == num){
            //     for(let j = 0; j < num*2-2; j++){
            //         s += "-";
            //     }
            //     s += "\\";
            // }
            if(i == 1){
                for(let left_space = i; left_space > 0; left_space--){
                    if(left_space == i){
                        s += "\\";
                    }
                }
            }
            else{
                for(let lef_space=0;lef_space<i*2-1;lef_space++){
                    s += ' ';
                }
                // if(i != num){
                //     s += "\\";
                // }
                s += "\\";
            }
            
            s += "\n";
        }
        for(let i = halfnum; i > 0; i--){
            for(let space = halfnum-i; space > 0; space--){
                s += " ";
            }
            s += "\\";
            if(i == 1)
                s += '-';
            
            lastLine--;
            
            if(i == 1){
                // if (lastLine == halfnum){
                //     s += "-";
                // }
                //s += "/";
                for(let right_space = i; right_space > 0; right_space--){
                    if(right_space == i){
                        s += "/";
                    }
                }
            }
            else{
                // if(lastLine == i+1){
                //     s += "-";
                // }
                for(let rig_space = 0; rig_space < i*2-1; rig_space++){
                    s+= ' ';
                }
                s += "/";
            }
            s += "\n";
        }
    }
    return s;
    //     console.log(s);
    // rhombus(2);
}

};