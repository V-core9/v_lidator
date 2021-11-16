const v_base = require(".");

class v_base_text extends v_base {

  constructor(vIN) {
    super(vIN);


    this.validLength = (value) => {
      const lengthOf = value.toString().length;
      return ((this.options.length.min <= lengthOf) && (lengthOf <= this.options.length.max));
    };

    this.accepts = (value) => {
      return (typeof value !== 'undefined' && !this.options.format.test(value) && this.validLength(value));
    };

    this.set = (value) => {
      if (this.accepts(value)) {
        this._value = value.toString();
        return true;
      }
      return false;
    };
  }
}

module.exports = v_base_text;
