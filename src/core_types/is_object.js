module.exports = isObject = async (value) => (value != null) ? (typeof value === 'object') : false;
