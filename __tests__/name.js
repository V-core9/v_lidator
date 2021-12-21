const v_rifier = require('..');
const data = require("../_test-data/name.list");

data.forEach(item => {
  test('NAME  ?? [ ' + item.input + ' ]', async () => {
    expect(await v_rifier.name(item.input)).toEqual(item.expect);
  });
});



