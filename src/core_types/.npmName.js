module.exports = isNpmName = async (value) => {
  if (typeof value === 'string') {
    const npmNameRegex = /^[a-z][a-z0-9-_]{0,32}$/;
    return npmNameRegex.test(value);
  }
  return false;
};
