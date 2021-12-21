const v_rifier  = require('../');
const { test_data_list } = require("../_test-data/test_data_list");


test_data_list.forEach(item => {
  test('USERNAME  ?? [ ' + item.input.username + ' ]', async () => {
    expect(await v_rifier.username(item.input.username)).toEqual((item.output.username === true) ? true : item.output.username);
  });
});



