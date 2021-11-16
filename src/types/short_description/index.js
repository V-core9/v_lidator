
const v__text = require("../../base/v__text");
const short_description_definition = {
  length: {
    min: 0,
    max: 720,
  },
  default: "",
  format: /[]/
};

class v_short_description extends v__text {
  constructor(val) {
    super(val);

    this.options = short_description_definition;

  }
}

const short_description = new v_short_description();

module.exports = short_description;
