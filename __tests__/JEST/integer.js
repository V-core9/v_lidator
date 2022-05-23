const v_rifier = require('../..');

let myVerifier = null;

(async () => {
  myVerifier = await v_rifier();
})();

const static_data = require("../data/integer.list");

static_data.forEach(item => {
  test('INTEGER  ?? [ ' + item.input + ' ]\n', async () => {
    expect(await myVerifier.isInteger(item.input)).toEqual(item.expect);
  });
});
