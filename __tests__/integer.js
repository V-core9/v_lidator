const v_rifier = require('..');
const static_data = require("../_test-data/integer.list");

static_data.forEach(item => {
  test('INTEGER  ?? [ ' + item.input + ' ]\n', async () => {
    expect(await v_rifier.integer(item.input)).toEqual(false);
  });
});


// Dynamic Part
var faker = require('faker');
const test_count = 100;

var iItems = [];
for (var i = 0; i < test_count; i++) {
  iItems.push(faker.datatype.number());
}
iItems.forEach(item => {
  test('Faker INTEGER[num] : ' + item, async () => {
    expect(await v_rifier.integer(item)).toEqual(true);
  });
});


var fItems = [];
for (var i = 0; i < test_count; i++) {
  var item  = faker.datatype.float();
  if (item - Math.trunc(item) !== 0 ) fItems.push(item);
}
fItems.forEach(item => {
  test('Faker INTEGER[float] : ' + item, async () => {
    expect(await v_rifier.integer(item)).toEqual(false);
  });
});
