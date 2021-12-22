const v_rifier = require('..');
const static_data = require("../_test-data/name.list");


// Dynamic Part
var faker = require('faker');
const test_count = 100000;

var fItems = [];
for (var i = 0; i < test_count; i++) {
  fItems.push(faker.lorem.paragraphs());
}

fItems.forEach(item => {
  test('Faker Text : ' + item, async () => {
    expect(await v_rifier.text(item)).toEqual(true);
  });
});
