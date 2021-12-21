const v_rifier  = require('../');
const { test_data_list } = require("../_test-data/test_data_list");


test_data_list.forEach(item => {
  test('EMAIL  ?? [ ' + item.input.email + ' ]', async () => {
    expect(await v_rifier.email(item.input.email)).toEqual((item.output.email === true) ? true : item.output.email(item.input.email));
  });
});



