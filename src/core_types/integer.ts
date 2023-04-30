module.exports = async (value) => (await require('./number')(value) && (-2147483649 < value && value < 2147483648) && value % 1 === 0);
