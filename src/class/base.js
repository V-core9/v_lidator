
class base {
  constructor(value) {

    this.type = () => {
      return this.constructor.name;
    };

    this.get = () => {
      return this._value;
    };

    this.options = require(`../definitions/${this.type()}`);
    
    this.valid = (value) => {
      return (this.options.format.test(value) && ((typeof this.options.length === "undefined") ? true : ((this.options.length.min <= value.toString().length) && (value.toString().length <= this.options.length.max))));
    };

    this.accepts = (value) => {
      if (typeof value === 'undefined') return false;
      return (this.valid(value));
    };

    this.set = (value = undefined) => {
      if (this.accepts(value)) {
        this._value = value;
        this._updated_timestamp = Date.now();
        return true;
      } else {
        return false;
      }

    };

    this.set(value);
  }
}

module.exports = base;
