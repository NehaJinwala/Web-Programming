function triangle(num){
    let s = "";
    let sp = 1;
    let lastLine = 0;
    for(let size = 0; size < 10; size++){
        for(let i = 1; i <= num; i++){
            for(let space = num-i; space > 0; space--){
                s += " ";
            }
            s += "/";
            lastLine++;
            if(i == num){
                for(let j = 0; j < num*2-2; j++){
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
                if(i != num){
                    s += "\\";
                }
                
            }
            s += "\n";
        }
    }
    console.log(s);
    s += "\n";
}
triangle(3);



// function square(num){
//     let s = "";
//     for(let size = 0; size < 10; size++){
//         //this loop is for the row
//         for(let i = 0; i < num; i++){
//             s += "";
//             s += "|";
//             //this loop is for the columns
//             for(let j = 0; j < num; j++){
//                 if(i == 0 && j < num){
//                     s += "-";
//                 }
//                 else if(i == (num-1) && j < num){
//                     s += "-";
//                 }
//                 else if(j < num){
//                     s += " ";
//                 }
//             }
//             s += "|";
//             console.log(s);
//             s = "";
//         }
//         s += "\n";
//     }
// }
// square(2);

// function rhombus(num){
//     let s = "";
//     // let sp = 1;
//     let firstLine = 0;
//     let lastLine = num;
//     let halfnum = num/2;
//     for(let size = 0; size < 10; size++){    
//         for(let i = 1; i <= halfnum; i++){
//             for(let space = halfnum-i; space > 0; space--){
//                 s += " ";
//             }
//             s += "/";
//             if(i == 1){
//                 s += "-";
//                 //firstLine++;
//             }
//             // if(lastLine == num){
//             //     for(let j = 0; j < num*2-2; j++){
//             //         s += "-";
//             //     }
//             //     s += "\\";
//             // }
//             if(i == 1){
//                 for(let left_space = i; left_space > 0; left_space--){
//                     if(left_space == i){
//                         s += "\\";
//                     }
//                 }
//             }
//             else{
//                 for(let lef_space=0;lef_space<i*2-1;lef_space++){
//                     s += ' ';
//                 }
//                 // if(i != num){
//                 //     s += "\\";
//                 // }
//                 s += "\\";
//             }
            
//             s += "\n";
//         }
//         for(let i = halfnum; i > 0; i--){
//             for(let space = halfnum-i; space > 0; space--){
//                 s += " ";
//             }
//             s += "\\";
//             if(i == 1)
//                 s += '-';
            
//             lastLine--;
            
//             if(i == 1){
//                 // if (lastLine == halfnum){
//                 //     s += "-";
//                 // }
//                 //s += "/";
//                 for(let right_space = i; right_space > 0; right_space--){
//                     if(right_space == i){
//                         s += "/";
//                     }
//                 }
//             }
//             else{
//                 // if(lastLine == i+1){
//                 //     s += "-";
//                 // }
//                 for(let rig_space = 0; rig_space < i*2-1; rig_space++){
//                     s+= ' ';
//                 }
//                 s += "/";
//             }
//             s += "\n";
//         }
//     }
//         console.log(s);
// }
// rhombus(2);