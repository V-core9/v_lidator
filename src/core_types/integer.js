const isNumber = require('./number');

module.exports = isInteger = async (value) => (await isNumber(value) && (-2147483649 < value && value < 2147483648) && value % 1 === 0);
