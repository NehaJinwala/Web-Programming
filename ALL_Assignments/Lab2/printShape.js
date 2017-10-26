
function  printT(space,StartSpace,lastLine,num,isInverted,isRhombus)
{
    let k=1,j=StartSpace,blank="", Sblank="";
    while(k<=space){
        blank=blank+" ";
        k++;
    }
    while(j>0)
    {
        Sblank=Sblank+" ";
        j--;
    }

    if(!isRhombus) {
        if (lastLine === true ) {
            let dash = "--";
            let m = 2;

            while (m < num) {

                dash = dash + "--";
                m++;
            }
            console.log(Sblank + "/" + dash + "\\");
        }
        else
            console.log(Sblank + "/" + blank + "\\");
    }
    else {
        if(blank==""){
            let dash="-";
            blank=dash;
        }
        else
            blank=blank+" ";
        if(isInverted)
            console.log(Sblank + "\\" + blank + "/");
        else
            console.log(Sblank + "/" + blank + "\\");
    }

}

module.exports = {
    description: "This is a printShape module for CS-546",
       PrintTriangle : function(num){
           let flag="Operation Print triangle Completed Successfully";
           var p = new Promise(function (resolve, reject) {

               if (num >= 1 && typeof(num)==="number" && Number.isInteger(num) ) {
               //    num= Math.floor(num);
                   for (let sz = 0; sz < 10; sz++) {
                       console.log("\n");
                       space = 0;
                       StartSpace = num;
                       let lastLine = false;
                       for (let i = 0; i < num; i++) {
                           if (i === num - 1 && num !== 1)
                               lastLine = true;
                           printT(space, StartSpace, lastLine, num, false, false);
                           space = space + 2;
                           StartSpace--;

                       }
                   }
                   resolve("Completed Successfully");
               }           else
               {
                   flag="Operation Print trianlge failed";
                   reject('Cannot print triangle since size is not an Integer greater than equal to 1')
               }
           });

           p.then(function (result) {


                 //  console.log(result);

               },
               function (error) {
               //flag= error;
                   console.log(error);
               });
           return flag;
       },

    printSquare : function(num){
        let flag="Operation Print square Completed Successfully";
        var p = new Promise(function (resolve, reject) {

            if (num >= 2  && typeof(num)=== "number" && Number.isInteger(num)) {
              //  num= Math.floor(num);
                for (let sz = 0; sz < 10; sz++) {
                    console.log("\n");
                    let line = '';
                    for (let i = 0; i < num; i++) {
                        line = '';
                        line += '|';
                        for (let j = 0; j <= num; j++) {
                            if (i == 0 && j < num) {
                                line += '-';
                            } else if (i == (num - 1) && j < num) {
                                line += '-';
                            } else if (j < num) {
                                line += ' ';
                            }
                        }
                        line += '|';
                        console.log(line);
                    }
                }
                resolve("Completed Successfully");
            }    else
            {
               flag="Operation Print square failed";

                reject('Cannot print square since size is not an Integer greater than 1')
            }
        });

        p.then(function (result) {

             //  console.log(result);


            },
            function (error) {

                console.log(error);
            });
return flag;
    },

    printRhombus : function(num){
        let flag="Operation Print Rhombus Completed Successfully";
        var p = new Promise(function (resolve, reject) {

            if (num >= 2 && typeof(num)==="number" && Number.isInteger(num) ) {
            //    num= Math.floor(num);
                let even = (num) % 2;
                if (even === 0) {
                    for(let sz=0;sz<10;sz++){
                        console.log("\n");
                    space = 0;
                    StartSpace = num/2;
                    let lastLine = false;
                    let isInverted = false;
                    isRhombus = true;
                    for (let i = 0; i < num/2; i++) {
                       printT(space, StartSpace, lastLine, num, isInverted, isRhombus);
                        space = space + 2;
                        StartSpace--;
                    }
                    space = num/2+num/2-2;
                    StartSpace = 1;
                    lastLine = false;
                    isInverted = true;
                    for (let i = num/2; i > 0; i--) {

                        printT(space, StartSpace, lastLine, num, isInverted, isRhombus);
                        space = space - 2;
                        StartSpace++;

                    }
                }  resolve("Completed Successfully");
                }

                else{
                    flag="Operation Print Rhombus failed";
                    reject('Cannot print rhombus since size is not even');
                }

            }


            else
            {
                //greater than 2
                flag="Operation Print Rhombus failed";

                reject('Cannot print rhombus since size is not an Integer greater than 1')
            }

        });

        p.then(function (result) {
         //   flag=result;
              //  console.log(result);

            },
            function (error) {
            //flag=error;
               console.log(error);
            });
return flag;
    },


};