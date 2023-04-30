module.exports = async (value) => {
  if (typeof value === "string") {
    const hexadecimalRegex = /^[0-9a-fA-F]+$/;
    return hexadecimalRegex.test(value);
  }
  return false;
};
