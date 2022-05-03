const v_rifier  = require('../data/v_rifier');
const static_data = require("../data/password.list");

static_data.forEach(item => {
  test('PASSWORD  ?? [ ' + item.input + ' ]\n', async () => {
    expect(await v_rifier.isPassword(item.input, item.confirm)).toEqual((item.expect === true) ? true : false);
  });
});


// Dynamic Part
var faker = require('faker');
const { test_count } = require('../data/_SETTINGS');

var fItems = [];
for (var i = 0; i < test_count; i++) {
  fItems.push(faker.internet.password());
}

fItems.forEach(item => {
  test('Faker Password : ' + item, async () => {
    expect(await v_rifier.isPassword(item, item)).toEqual(true);
  });
});
