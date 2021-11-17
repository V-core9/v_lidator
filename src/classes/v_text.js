const v_lidator = require("./v_lidator");

const v_text_definition =  {
  length: {
    min: 0,
    max: 99000,
  },
  default: "",
  format: /^[A-Za-z0-9!@#$%^&*(_).,:';"@ ]{2,99000}$/
};

module.exports = new v_lidator(v_text_definition);

