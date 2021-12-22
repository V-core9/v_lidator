const v_rifier = require('..');
const static_data = require("../_test-data/name.list");

static_data.forEach(item => {
  test('NAME  ?? [ ' + item.input + ' ]', async () => {
    expect(await v_rifier.name(item.input)).toEqual(item.expect);
  });
});
