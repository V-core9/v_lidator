module.exports = async (value) => {
  if (typeof value === 'string') {
    const npmVersionRegex = /^[0-9]+\.[0-9]+\.[0-9]+$/;
    return npmVersionRegex.test(value);
  }
  return false;
};
