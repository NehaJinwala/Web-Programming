const bluebird = require("bluebird");
const Promise = bluebird.Promise;

const prompt = bluebird.promisifyAll(require("prompt"));
const fs = bluebird.promisifyAll(require("fs"));
const callFunctions = require("./textMetrics");

let filedata = exports = module.exports;
module.exports.getFileAsString = getFileAsString;
module.exports.getFileAsJSON = getFileAsJSON;
module.exports.saveStringToFile = saveStringToFile;
module.exports.saveJSONToFile = saveJSONToFile;

async function getFileAsString(path) {
    console.log("inside getfile as string");
    try{
        if(!path){
            throw("Please provide proper filename. No such file exists");    
        }
        else{
            const data = await fs.readFileAsync(path,"UTF-8");
            return data;
            }
            
        }
    
    catch(err){
        console.log("Please provide proper filename. No such file exists");
    }
};

async function getFileAsJSON(path){
    console.log("Retrieving JSON object");
    
    try{
                
                let jsonRead = await fs.readFileAsync(path, "UTF-8");
                console.log(jsonRead);
                
            }
            catch(err){
                console.log('Error reading JSON object');
            
    }
    
};

async function saveStringToFile(path, text){
    console.log("Writing to the text file");
    try{
        await fs.writeFileAsync(path,text);
    }
    catch(err){
        console.log('Could not write to the text file. Something went wrong');
    }
    
};

async function saveJSONToFile(path, obj){
    console.log("Writing JSON object to the file",path);
    try{
        await fs.writeFileAsync(path, JSON.stringify(obj));
        let readJSON = obj;
        console.log(readJSON);
        
    }
    catch(err){
        console.log('Could write the JSON object. Something went wrong');
    }
    
};


