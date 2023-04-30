module.exports = async (value) => value !== null ? typeof value === "function" : false;
