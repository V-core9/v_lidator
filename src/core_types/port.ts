module.exports = async (value) => {
  const isInteger = require("./integer");
  return (await isInteger(value)) && 0 < value && value < 65536;
};
