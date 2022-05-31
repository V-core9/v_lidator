const { isEmpty } = require('v_is_empty_value');


module.exports = async (value) => {
  if (await isEmpty(value)) return false;

  const usernameRegex = /^[A-Za-z][A-Za-z0-9_.]{2,32}$/;

  return usernameRegex.test(value);
};
