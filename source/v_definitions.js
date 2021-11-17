const v_fs = require('v_file_system');
const path = require('path');


const v_definitions = {
  $_items : [],

  load : async () => {
    v_definitions.$_items = await v_fs.promise.listDir(path.join(__dirname,'./definitions'));
    return v_definitions.$_items;
  },

  count : async () => {
    return v_definitions.$_items.length;
  }
};

module.exports = v_definitions;
