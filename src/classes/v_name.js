const v_lidator = require("./v_lidator");

const v_name_definition =  {
  length: {
    min: 6,
    max: 64,
  },
  default: "",
  format: /^[A-Za-z][A-Za-z0-9.'\- ]{5,63}$/
};

const name = new v_lidator(v_name_definition);


module.exports = name;
