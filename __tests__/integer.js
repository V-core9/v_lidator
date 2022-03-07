const { notEmpty } = require('v_is_empty_value');

const v_rifier = require('..');
const static_data = require("../_test-data/integer.list");

static_data.forEach(item => {
  test('INTEGER  ?? [ ' + item.input + ' ]\n', async () => {
    expect(await v_rifier.integer(item.input)).toEqual(item.expect);
  });
});


// Dynamic Part
var faker = require('faker');
const { test_count } = require('../_test-data/_SETTINGS');

var iItems = [];
for (var i = 0; i < test_count; i++) {
  iItems.push(faker.datatype.number());
}
iItems.forEach(item => {
  test('Faker INTEGER[num] : ' + item, async () => {
    var result = await v_rifier.integer(item);    
    if (await notEmpty(item)) {
      expect(result).toEqual(true);
    } else {
      expect(result).toEqual([{"msg": "Missing input.", "type": "error"}]);
    }
  });
});


var fItems = [];
for (var i = 0; i < test_count; i++) {
  // create a float [which might have 0 after the dot making it into an integer]
  var item = faker.datatype.float();
  // Checks if it's really a float or integer in essence [here we are expecting it to fail]
  if (item - Math.trunc(item) !== 0) fItems.push(item);
}
fItems.forEach(item => {
  test('Faker INTEGER[float] : ' + item, async () => {
    var result = await v_rifier.integer(item);
    if (await notEmpty(item)) {
      expect(result).toEqual([{ "confirm": undefined, "input_value": item, "msg": "🙋‍♂️ Integer can only have numbers.", "suggest": "Try removing special characters.", "type": "error" }]);
    } else {
      expect(result).toEqual([{"msg": "Missing input.", "type": "error"}]);
    }
  });
});
