const v__text = require("../../base/v__text");

const title_definition = {
  length: {
    min: 0,
    max: 320,
  },
  default: "",
  format: /[]/
};

class v_title extends v__text {
  constructor(val) {
    super(val);

    this.options = title_definition;

  }
}

const title = new v_title();

module.exports = title;
