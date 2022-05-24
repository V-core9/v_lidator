module.exports = async (val) => {
  return 'is' + val.charAt(0).toUpperCase() + val.slice(1);
};
