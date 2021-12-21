const v_rifier  = require('../');
const { test_data_list } = require("../_test-data/test_data_list");





test_data_list.forEach(item => {
  test('PASSWORD  ?? [ ' + item.input.password + ' ]\n', async () => {
    expect(await v_rifier.password.validate(item.input.password, item.input.password_confirm)).toEqual((item.output.password === true) ? true : item.output.password(item.input.password, item.input.password_confirm));
  });
});



