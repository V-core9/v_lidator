const v_lidator = require("./v_lidator");

const v_email_definition =  {
  length: {
    min: 2,
    max: 256,
  },
  default: "",
  format: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
};

module.exports = new v_lidator(v_email_definition);

