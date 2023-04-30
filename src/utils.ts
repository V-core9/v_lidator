const createFunctionName = (name: string): string => {
  return "is" + name.charAt(0).toUpperCase() + name.slice(1);
};

const getNameFromFunction = (name: string): string => {
  name = name.replace("is", "");
  return name.charAt(0).toLowerCase() + name.slice(1);
};

module.exports = {
  createFunctionName,
  getNameFromFunction,
};
