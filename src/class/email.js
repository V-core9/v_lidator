const base = require("./base");

class email extends base {
  constructor(value) {
    super(value);

    this.valid = (email) => {
      return (String(email).split('..').length === 1 && String(email).split('@').length === 2 && isNaN(String(email).split('@')[0]) && this.options.format.test(String(email)));
    };
  }

}

module.exports = email;
