module.exports = (name) => {
  name = name.replace('is', '');
  return name.charAt(0).toLowerCase() + name.slice(1);
};
