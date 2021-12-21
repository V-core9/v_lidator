const v_rifier  = require('../');
const data = require("../_test-data/email.list");


data.forEach(item => {
  test('EMAIL  ?? [ ' + item.input + ' ]', async () => {
    expect(await v_rifier.email(item.input)).toEqual((item.expect === true) ? true : item.expect(item.input));
  });
});



