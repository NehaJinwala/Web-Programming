const tm = require("./textMetrics");
const prompt = require("prompt");
const fd = require("./fileData");


 var file="C:\\files\\chapter1.result.json";
FileOperations(file,1);
var file="C:\\files\\chapter2.result.json";
FileOperations(file,2);
var file="C:\\files\\chapter3.result.json";
FileOperations(file,3);
function FileOperations(path,filecount){
    return new Promise(function (fulfill, reject) {

        try{
            let resultpath="",pathtext="";
        if (path === undefined || filecount=== undefined )
            throw "path is Invalid";
        else if (path.length == 0)
            throw "Kindly Insert valid path";
        else if (typeof path !== "string" || typeof filecount!== "number")
            throw "Kindly enter a valid data typr";
           if(filecount==1){
               path="C:\\files\\chapter1.txt";
               pathtext="C:\\files\\chapter1.debug.txt";
               resultpath="C:\\files\\chapter1.result.json";
           }

           else if(filecount==2){
               pathtext="C:\\files\\chapter2.debug.txt";
               resultpath="C:\\files\\chapter2.result.json";
               path="C:\\files\\chapter2.txt";
           }

        else if(filecount==3){
               pathtext="C:\\files\\chapter3.debug.txt";
               resultpath="C:\\files\\chapter3.result.json";
               path="C:\\files\\chapter3.txt";
           }
            let result1=fd.getFileAsJSON(file).then((answer)=>{
                if(!answer){
            let res= fd.getFileAsString(path).then((res1)=>{
                    tm.simplify(res1).then((res2)=>{
                    fd.saveStringToFile(pathtext,res2).then((res3)=>{
                });
            tm.createMetrics(res2).then((res4)=>{
                res4= JSON.stringify(res4);
            fd.saveJSONtoFile(resultpath,res4).then((res5)=>{
                console.log(resultpath+"  File saved as JSON Successfully\n:"+ res5);
        });
        });
        });


        });
        }
    else
        {
            console.log("JSON file already exits:\n"+ answer);
        }
    }); }
    catch(e){
        reject(e);
    }
}).then(function (result) {
        console.log(result);
        return result;
    },
    function (error) {
        console.log(error);
        return error;
    });
}

