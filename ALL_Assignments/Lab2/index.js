/**
 * Created by yesha on 1/29/2017.
 */

const prompt = require("prompt");
const printShape = require("./printShape");
var Promise = require('promise');

var schema = {
    properties: {

        var2: {
            type: 'number',
            required: true,
            description : "Please enter size for Shapes"
        },
    }
};

prompt.start();

    prompt.get(schema, function (err, result) {
        //
        // Log the results.
        //
        //printShape
       let ans= printShape.PrintTriangle(result.var2);
       console.log("The result is::"+ans);
        let ans2=printShape.printSquare(result.var2);
        console.log("The result is::"+ans2);
        let ans3=printShape.printRhombus(result.var2);
        console.log("The result is::"+ans3);
        prompt.stop();
    });

