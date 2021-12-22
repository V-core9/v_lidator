const v_rifier = require('../');
const static_data = require("../_test-data/username.list");

static_data.forEach(item => {
  test('USERNAME  ?? [ ' + item.input + ' ]', async () => {
    expect(await v_rifier.username(item.input)).toEqual(item.expect);
  });
});
