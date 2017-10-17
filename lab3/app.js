const bluebird = require("bluebird");
const textmetrics = require("./textMetrics");
const filedatafunctions = require("./fileData");
// const prompt = bluebird.promisifyAll(require("prompt"));
const fs = bluebird.promisifyAll(require("fs"));

async function main(fileName) {
    
        try{    
            if(fileName == undefined || fileName.length == 0 || typeof fileName === "number"){
                throw('Not a valid file');
            }

            let checkPath = fileName.split('.');
            console.log(`Reading ${fileName}`);

            let jsonFile = fs.existsSync(checkPath[0]+".result.json");
            let jsonFileName = checkPath[0]+".result.json";

            if(jsonFile){
                console.log('For',fileName)
                await filedatafunctions.getFileAsJSON(jsonFileName);
            }
            else{
                
                let content = await filedatafunctions.getFileAsString(fileName);
            
                let Content = textmetrics.simplify(content);
                // console.log(Content);
                let checkPath = fileName.split(".");
                let path1 = checkPath[0]+".debug.txt";
                console.log('Saving to text file');
                filedatafunctions.saveStringToFile(path1, Content);

                //metrics
                let metricsResult = textmetrics.createMetrics(Content);
                await filedatafunctions.saveJSONToFile(jsonFileName,metricsResult);
            }
        }
        catch(err){
            console.log(`Cannot read ${fileName}`);
        }

        
    }
// main("123.txt");
main('chapter1.txt');
// main('chapter2.txt');
// main('chapter3.txt');

