const v_fs = require('v_file_system');
const path = require('path');


schemeTemplate = (data) => {
  return {
    name : data.name,
    created_ts: Date.now(),
    items: data.items
  };
};

const v_lidator = {
  $_schemes : [],
  $_schemesDir: path.join(__dirname,"./schemas"),

  new: async (name, items = [] )=>{
    const resp = await v_fs.promise.write(path.join(v_lidator.$_schemesDir, name+'.json'), JSON.stringify(schemeTemplate({name, items})));
    v_lidator.load();
    return resp;
  },
  
  load: async () => {
    v_lidator.$_schemes = await v_fs.promise.listDir(v_lidator.$_schemesDir);
    return  v_lidator.$_schemes;
  },

  list: async ()=> {
    return  await v_lidator.$_schemes;
  },

  count: async ()=> {
    return  await  v_lidator.$_schemes.length;
  },

  remove: async (name)=> {
    const res = await v_fs.promise.deleteFile(path.join(v_lidator.$_schemesDir, name+'.json'));
    v_lidator.load();
    return res;
  }
};

module.exports = v_lidator;
