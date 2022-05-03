const isString = require('./is_string');

module.exports = isName = async (value) => {
  if (await isString(value)) {
    const nameRegex = /^[A-Za-z][A-Za-z0-9 ']{0,32}$/;
    return nameRegex.test(value);
  }
  return false;
};
