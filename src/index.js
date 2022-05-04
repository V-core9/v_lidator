const typeNameHandle = async (val) => {
  return 'is' + val.charAt(0).toUpperCase() + val.slice(1);
};


const v_rifier = async (typeName, ...args) => {
  typeName = await typeNameHandle(typeName);
  if (v_rifier[typeName] === undefined) return false;
  return await v_rifier[typeName](...args);
};


v_rifier.unregister = async (typeName) => {
  typeName = await typeNameHandle(typeName);
  if (typeof typeName === 'string' && v_rifier[typeName] !== undefined) {
    if (v_rifier[typeName].custom === true) {
      delete v_rifier[typeName];
      return true;
    }
  }
  return false;
};


v_rifier.register = async (typeName, cb) => {
  if (typeof cb === 'function' && typeof typeName === 'string') {
    typeName = await typeNameHandle(typeName);
    if (v_rifier[typeName] === undefined) {
      v_rifier[typeName] = cb;
      v_rifier[typeName].custom = true;
      return true;
    }
    return false;
  }
  return false;
};


v_rifier.listTypes = async () => {
  var types = [];
  for (var type in v_rifier) {
    if (v_rifier[type].custom === true) {
      let oldName = type.replace('is', '');
      types.push(oldName.charAt(0).toLowerCase() + oldName.slice(1));
    }
  }
  return types;
};


v_rifier.loadBuiltIns = async () => {
  const coreTypes = require('./core_types');
  for (var type in coreTypes) {
    await v_rifier.register(type, coreTypes[type]);
  }
};


module.exports = v_rifier;
