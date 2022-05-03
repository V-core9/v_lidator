const v_rifier  = require('../data/v_rifier');
const static_data = require("../data/integer.list");

static_data.forEach(item => {
  test('INTEGER  ?? [ ' + item.input + ' ]\n', async () => {
    expect(await v_rifier.isInteger(item.input)).toEqual(item.expect);
  });
});
