const v__text = require("../base/v__text");
const _definition = require("../definitions/email");

class v_email extends v__text {
  constructor(val) {
    super(val);

    this.options = _definition;
    
    this.accepts = (value) => {
      return this.options.format.test(value);
    };
  }
}

const email = new v_email();

module.exports = email;
