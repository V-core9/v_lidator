const v_rifier = require('../');
const static_data = require("../_test-data/username.list");

static_data.forEach(item => {
  test('USERNAME  ?? [ ' + item.input + ' ]', async () => {
    expect(await v_rifier.username(item.input)).toEqual(item.expect);
  });
});

// Dynamic Part
var faker = require('faker');
const test_count = 1000000;

var fItems = [];
for (var i = 0; i < test_count; i++) {
  fItems.push(faker.internet.userName());
}

fItems.forEach(item => {
  test('Faker Username : ' + item, async () => {
    expect(await v_rifier.username(item)).toEqual(true);
  });
});
