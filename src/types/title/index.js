const v_base_text = require("../../v_base/_text");

class v_title extends v_base_text {
  constructor(val) {
    super(val);

    this.options = {
      length: {
        min: 0,
        max: 320,
      },
      default: "",
      format: /[]/
    };

  }
}

const title = new v_title();

module.exports = title;
