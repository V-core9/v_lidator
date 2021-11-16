const v__text = require("../base/v__text");
const _definition = require("../definitions/title");

class v_title extends v__text {
  constructor(val) {
    super(val);

    this.options = _definition;

  }
}

const title = new v_title();

module.exports = title;
