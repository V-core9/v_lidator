
v_lidator = {
  email: require('./classes/v_email'),
  name: require('./classes/v_name'),
  text: require('./classes/v_text'),
  title: require('./classes/v_title'),

  value() {
    return { email: this.email.get(), name: this.name.get(), text: this.text.get(), title: this.title.get() };
  }
};

module.exports = v_lidator;
