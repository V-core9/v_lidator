const v__text = require("../../base/v__text");

class v_email extends v__text {
  constructor(val) {
    super(val);

    this.options = {
      format :  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ,
    };

    this.accepts = (value) => {
      return this.options.format.test(value);
    };
  }
}

const email = new v_email();

module.exports = email;
