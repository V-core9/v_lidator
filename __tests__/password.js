const v_rifier  = require('../');
const static_data = require("../_test-data/password.list");

static_data.forEach(item => {
  test('PASSWORD  ?? [ ' + item.input + ' ]\n', async () => {
    expect(await v_rifier.password(item.input, item.confirm)).toEqual((item.expect === true) ? true : item.expect(item.input, item.confirm));
  });
});
