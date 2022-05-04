const coreTypes = {
  array: require('./array'),

  bool: require('./bool'),

  email: require('./email'),

  function: require('./function'),

  integer: require('./integer'),

  name: require('./name'),

  null: require('./null'),

  number: require('./number'),

  object: require('./object'),

  password: require('./password'),

  string: require('./string'),

  undefined: require('./undefined'),

  username: require('./username'),

  port: require('./port'),

  npmVersion: require('./npmVersion'),

  hexadecimal: require('./hexadecimal'),

  color: require('./color'),

  /*
  npmName: require('./npmName'),
  float: require('./float'),
  json: require('./json'),
  uuid: require('./uuid'),
  zipCode: require('./zipCode'),
  latitude: require('./latitude'),
  longitude: require('./longitude'),
  country: require('./country'),
  countryCode: require('./countryCode'),
  domainName: require('./domainName'),
  url: require('./url'),
  ip: require('./ip'),
  ipv6: require('./ipv6'),
  macAddress: require('./macAddress'),
  slug: require('./slug'),
  dateTime: require('./dateTime'),
  creditCardNumber: require('./creditCardNumber'),
  creditCardCVV: require('./creditCardCVV'),
  iban: require('./iban'),
  */

};

module.exports = coreTypes;
