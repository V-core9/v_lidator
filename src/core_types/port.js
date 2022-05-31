const isInteger = require('./integer');

module.exports = async (value) => (await isInteger(value) && 0 < value && value < 65536);
