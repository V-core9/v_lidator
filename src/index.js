module.exports = async function v_rifier(options = {}) {
  
  const typeNameHandle = require('./helpers/createFunctionName');
  const getNameFromFunction = require('./helpers/getNameFromFunction');

  let builtIns = (typeof options.builtIns === 'boolean') ? options.builtIns : true;

  async function verify(typeName, ...args) {
    typeName = await typeNameHandle(typeName);
    if (verify[typeName] === undefined) return false;
    return verify[typeName](...args);
  }

  verify.register = async (typeName, cb) => {
    if (typeof cb === 'function' && typeof typeName === 'string') {
      typeName = await typeNameHandle(typeName);
      if (verify[typeName] === undefined) {
        verify[typeName] = cb;
        verify[typeName].custom = true;
        return true;
      }
      return false;
    }
    return false;
  };

  verify.unregister = async (typeName) => {
    typeName = await typeNameHandle(typeName);
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
        types.push(await getNameFromFunction(type));
      }
    }
    return types;
  };


  //? Maybe Load BuiltIns
  if (builtIns) {
    const coreTypes = require('./core_types');
    for (let type in coreTypes) {
      await verify.register(type, coreTypes[type]);
    }
  }

  return verify;

};
