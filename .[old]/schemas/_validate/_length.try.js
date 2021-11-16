const validLength = require('./_length');


console.log(" ");
console.log( `Valid Length [ TRUE ] : ${validLength("yeadsadseqwe", 2 , 50)} `);
console.log( `Valid Length [ TRUE ] : ${validLength("yeadsadseqwe", 5 , 100)} `);
console.log( `Valid Length [ FALSE ] : ${validLength("123", 5 , 20)} `);
console.log( `Valid Length [ TRUE ] : ${validLength("yeadsadseqwe12312321ytryt", 2 , 150)} `);
console.log( `Valid Length [ FALSE ] : ${validLength("yeadsadseqwe12312321ytrytassadfghuk5434215", 2 , 20)} `);