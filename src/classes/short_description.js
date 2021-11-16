const v__text = require("../base/v__text");
const _definition = require("../definitions/short_description");

class v_short_description extends v__text {
  constructor(val) {
    super(val);

    this.options = _definition;

  }
}

const short_description = new v_short_description();

module.exports = short_description;
