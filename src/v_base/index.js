
class v_base {
  constructor(value) {

    this.type = () => {
      return this.constructor.name;
    };

    this.get = () => {
      return this._value;
    };

    this.accepts = (value) => {
      return true;
    };

    this.set = (value = undefined) => {
      if (value !== undefined && this.accepts(value)) {
        this._value = value;
        this._updated_timestamp = Date.now();
        return true;
      } else {
        return false;
      }
    };

    this.set( value );
  }
}

module.exports = v_base;
