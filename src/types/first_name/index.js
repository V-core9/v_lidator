const v__text = require("../../base/v__text");

const first_name_definition = {
  length: {
    min: 0,
    max: 32,
  },
  default: "",
  format: /[_`!@#$%^&*()+=\[\]{};':"\\|,<>\/?~]/
};

class v_first_name extends v__text {
  constructor(val) {
    super(val);

    this.options = first_name_definition;

  }
}

const first_name = new v_first_name();

module.exports = first_name;
