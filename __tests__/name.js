const v_rifier = require('..');
const static_data = require("../_test-data/name.list");

static_data.forEach(item => {
  test('NAME  ?? [ ' + item.input + ' ]', async () => {
    expect(await v_rifier.name(item.input)).toEqual(item.expect);
  });
});


// Dynamic Part
var faker = require('faker');
const test_count = 500000;

var fItems = [];
for (var i = 0; i < test_count; i++) {
  fItems.push(faker.name.firstName());
}

fItems.forEach(item => {
  test('Faker Name : ' + item, async () => {
    expect(await v_rifier.name(item)).toEqual(true);
  });
});
