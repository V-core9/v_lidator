
class $_ {
  constructor(value) {

    this.type = () => {
      return this.constructor.name;
    };

    this.get = () => {
      return this._value;
    };

    this.accepts = (value) => {
      return (value !== undefined) ? true : false;
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

    this.set( value );
  }
}

module.exports = $_;
