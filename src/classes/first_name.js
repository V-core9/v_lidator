const v__text = require("../base/v__text");
const _definition = require("../definitions/first_name");

class v_first_name extends v__text {
  constructor(val) {
    super(val);

    this.options = _definition;

  }
}

const first_name = new v_first_name();

module.exports = first_name;
