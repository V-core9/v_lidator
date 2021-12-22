const v_rifier = require('..');
const static_data = require("../_test-data/number.list");

static_data.forEach(item => {
  test('NUMBER  ?? [ ' + item.input + ' ]\n', async () => {
    expect(await v_rifier.number(item.input)).toEqual(item.expect);
  });
});


// Dynamic Part
var faker = require('faker');
const test_count = 100;

var iItems = [];
for (var i = 0; i < test_count; i++) {
  iItems.push(faker.datatype.number());
}

for (var i = 0; i < test_count; i++) {
  iItems.push(faker.datatype.float());
}

iItems.forEach(item => {
  test('Faker NUMBER: ' + item, async () => {
    expect(await v_rifier.number(item)).toEqual(true);
  });
});

