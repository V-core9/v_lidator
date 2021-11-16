
const v__text = require("../../base/v__text");

const last_name_definition = {
  length: {
    min: 0,
    max: 32,
  },
  default: "",
  format: /[_`!@#$%^&*()+=\[\]{};':"\\|,<>\/?~]/
};

class v_last_name extends v__text {
  constructor(val) {
    super(val);

    this.options = last_name_definition;
  }
}

const last_name = new v_last_name();

module.exports = last_name;
