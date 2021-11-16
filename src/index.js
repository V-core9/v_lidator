class baseDefinition {
  constructor (value) {
    this._value = value;
  }

  get () {
    return this._value;
  }

  set (val){
    if (typeof val=== 'undefined') return false;
    this._value = val;
    return true;
  }
}

module.exports = baseDefinition;
