const printingshape = require("./printShape");

//console.log(printingshape);
console.log(printingshape.description);

let triangle = printingshape.triangle(4);
console.log(`${triangle}`);

let square = printingshape.square(4);
console.log(`${square}`);

let rhombus = printingshape.rhombus(4);
console.log(`${rhombus}`);