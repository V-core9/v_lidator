const v_rifier  = require('../');
const static_data = require("../_test-data/password.list");

static_data.forEach(item => {
  test('PASSWORD  ?? [ ' + item.input + ' ]\n', async () => {
    expect(await v_rifier.password(item.input, item.confirm)).toEqual((item.expect === true) ? true : item.expect(item.input, item.confirm));
  });
});


// Dynamic Part
var faker = require('faker');
const test_count = 100000;

var fItems = [];
for (var i = 0; i < test_count; i++) {
  fItems.push(faker.internet.password());
}

fItems.forEach(item => {
  test('Faker Password : ' + item, async () => {
    expect(await v_rifier.password(item, item)).toEqual(true);
  });
});
