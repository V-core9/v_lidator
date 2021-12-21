const v_rifier = require('../');
const data = require("../_test-data/username.list");

data.forEach(item => {
  test('USERNAME  ?? [ ' + item.input + ' ]', async () => {
    expect(await v_rifier.username(item.input)).toEqual(item.expect);
  });
});



