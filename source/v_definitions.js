const v_fs = require('v_file_system');
const path = require('path');

definition_template = (data) => {
  return {
    name : data.name,
    created_ts: Date.now(),
    type: data.type,
    length: {
      min: data.length.min,
      max: data.length.max
    },
    forbiddenChars: (data.forbiddenChars)? data.forbiddenChars : []
  };
};

const v_definitions = {
  $_defDir : path.join(__dirname,'./definitions'),
  $_items : [],

  load : async () => {
    return ( v_definitions.$_items = await v_fs.promise.listDir(v_definitions.$_defDir ) ) ? true : false;
  },

  list : async () => {
    return v_definitions.$_items;
  },

  count : async () => {
    return v_definitions.$_items.length;
  },

  new: async (name, type, length = null, forbiddenChars = []  )=>{
    const resp = await v_fs.promise.write(path.join(v_definitions.$_defDir , name+'.json'), JSON.stringify(definition_template({name, type, length, forbiddenChars})));
    v_lidator.load();
    return resp;
  },
};

module.exports = v_definitions;
