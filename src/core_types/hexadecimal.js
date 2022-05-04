module.exports = isHexadecimal = async (value) => {
  if (typeof value === 'string') {
    const hexadecimalRegex = /^[0-9a-fA-F]+$/;
    return hexadecimalRegex.test(value);
  }
  return false;
};
