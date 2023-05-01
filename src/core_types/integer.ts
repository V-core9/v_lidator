const isNumber = require('./number');

const isInteger = async (value : any) => (await isNumber(value) && (-2147483649 < value && value < 2147483648) && value % 1 === 0);

module.exports = isInteger;
