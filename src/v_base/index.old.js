class v_base {
  constructor(value) {
    this._value = value;

    this.type=()=> {
      return this.constructor.name;
    };

    this.get=()=> {
      return this._value;
    };

    this.set=(val)=>{
      if (typeof val === 'undefined') return false;
      this._value = val;
      return true;
    };
  }
}

module.exports = v_base;
