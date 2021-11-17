const v_lidator = require("./v_lidator");

const v_title_definition =  {
  length: {
    min: 0,
    max: 320,
  },
  default: "",
  format: /^[A-Za-z0-9!@#$%^&*(_).,:';"@\- ]{2,719}$/
};

module.exports = new v_lidator(v_title_definition);

