module.exports = isPassword = async (value, confirmation) => {
  const passwordRegex = /^[A-Za-z0-9!@#$%^&*()_.]{6,32}$/;
  return (value === confirmation && passwordRegex.test(value));
};
