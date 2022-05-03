const coreTypes = {

  integer: require('./is_integer'),

  number: require('./is_number'),

  string: require('./is_string'),

  bool: require('./is_bool'),

  array: require('./is_array'),

  object: require('./is_object'),

  null: require('./is_null'),

  undefined: require('./is_undefined'),

  function: require('./is_function'),

  email: require('./is_email'),

  name: require('./is_name'),

  username: require('./is_username'),

  password: require('./is_password'),

};

module.exports = coreTypes;
