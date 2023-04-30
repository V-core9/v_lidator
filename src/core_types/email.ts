
module.exports = async (value) => {
  const { isEmpty } = require("v_is_empty_value");
  
  if (await isEmpty(value)) return false;

  const emailRegex = /^[A-Za-z0-9][A-Za-z0-9._]+[A-Za-z0-9_]+@+[A-Za-z0-9][^\s@]+\.[^\s@]+$/;

  if (
    value.split("..").length === 1 &&
    value.split("@").length === 2 &&
    isNaN(value.split("@")[0])
  ) {
    return emailRegex.test(value);
  }
  return false;
};
