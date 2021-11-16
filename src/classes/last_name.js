const v__text = require("../base/v__text");
const _definition = require("../definitions/last_name");

class v_last_name extends v__text {
  constructor(val) {
    super(val);

    this.options = _definition;
  }
}

const last_name = new v_last_name();

module.exports = last_name;
