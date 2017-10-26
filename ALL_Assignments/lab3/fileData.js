
const fs = require('fs');
const textMetrics= require('./textMetrics');
let InputString= "";

module.exports = {
    description: "This is a Filedata module for CS-546",

    getFileAsString: function (path) {
        return new Promise(function (fulfill, reject) {


            fs.readFile(path, 'utf8', function (err, data) {
                if (err) {
                    reject(err);
                }
                InputString = data;

                fulfill(InputString);

            });


        }).then(function (result) {
                return result;
            },
            function (error) {
                return error;
            });

    },

    getFileAsJSON: function (path) {
    return new Promise(function (fulfill, reject) {
        let obj;
      //  console.log(path);
        fs.readFile(path, 'utf8', function (err, data) {
            if (err)
                reject(err);
            console.log(data);
                     fulfill(data);
                });
    }).then(function (result) {
            return result;
        },
        function (error) {
            console.log("Error while reading file as JASON:"+ error);
            return false;
        });
},

    saveStringToFile: function (path, text) {
    return new Promise(function (fulfill, reject) {


        fs.writeFile(path, text, function (err) {
            if (err)
                reject(err);
            //  console.log('Hello World > helloworld.txt');
            fulfill("Completed Saving string to file")
        });


    }).then(function (result) {
            console.log(result);
            return result;
        },
        function (error) {

            console.log(error);
            return false;
        });
},

    saveJSONtoFile: function (path, jsonObj) {
    return new Promise(function (fulfill, reject) {


        let text = JSON.stringify(jsonObj);
        console.log(path);
        fs.writeFile(path, text, function (err) {
            if (err)
                reject(err);
         //   console.log(text);
            fulfill(text)
        });
    }).then(function (result) {
          //  console.log(result);
            return result;
        },
        function (error) {
            console.log(error);
            return error;
        });
}


};

