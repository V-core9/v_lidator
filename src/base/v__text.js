const $_ = require("./$_");

class v__text extends $_ {
  constructor(value) {
    super(value);

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
        this._updated_timestamp = Date.now();
        return true;
      }
      return false;
    };
  }
}

module.exports = v__text;
