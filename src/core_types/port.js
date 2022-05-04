module.exports = isPort = async (value) => {
  if (typeof value === 'number') {
    return (0 < value && value < 65536);
  }
  return false;
};
