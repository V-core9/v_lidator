module.exports = isFunction = async (value) => (value !== null) ? (typeof value === 'function') : false;
