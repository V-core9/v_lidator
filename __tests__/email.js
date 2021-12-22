const v_rifier  = require('../');
const static_data = require("../_test-data/email.list");

static_data.forEach(item => {
  test('EMAIL  ?? [ ' + item.input + ' ]', async () => {
    expect(await v_rifier.email(item.input)).toEqual((item.expect === true) ? true : item.expect(item.input));
  });
});


// Dynamic Part
var faker = require('faker');
const test_count = 100000;

var fItems = [];
for (var i = 0; i < test_count; i++) {
  fItems.push(faker.internet.email());
}

fItems.forEach(item => {
  test('Faker Mail : ' + item, async () => {
    expect(await v_rifier.email(item)).toEqual(true);
  });
});
