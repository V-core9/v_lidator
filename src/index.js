module.exports = function v_rifier(options = {}) {
  
  const createFunctionName = require('./helpers/createFunctionName');
  const getNameFromFunction = require('./helpers/getNameFromFunction');

  let builtIns = (typeof options.builtIns === 'boolean') ? options.builtIns : true;

  async function verify(typeName, ...args) {
    typeName = createFunctionName(typeName);
    if (verify[typeName] === undefined) return false;
    return verify[typeName](...args);
  }

  verify.register = (typeName, cb) => {
    if (typeof cb === 'function' && typeof typeName === 'string') {
      typeName = createFunctionName(typeName);
      if (verify[typeName] === undefined) {
        verify[typeName] = cb;
        verify[typeName].custom = true;
        return true;
      }
      return false;
    }
    return false;
  };

  verify.unregister = (typeName) => {
    typeName = createFunctionName(typeName);
    if (typeof typeName === 'string' && verify[typeName] !== undefined) {
      if (verify[typeName].custom === true) {
        delete verify[typeName];
        return true;
      }
    }
    return false;
  };

  verify.listTypes = async () => {
    var types = [];
    for (var type in verify) {
      if (verify[type].custom === true) {
        types.push(getNameFromFunction(type));
      }
    }
    return types;
  };


  //? Maybe Load BuiltIns
  if (builtIns) {
    const coreTypes = require('./core_types');
    for (let type in coreTypes) {
      verify.register(type, coreTypes[type]);
    }
  }

  return verify;

};
