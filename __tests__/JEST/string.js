const v_rifier = require('../..');
let myVerifier = null;
(async () => {
  myVerifier = await v_rifier();
})();

const static_data = require("../data/name.list");


// Dynamic Part
var faker = require('faker');
const { test_count } = require('../data/_SETTINGS');

var fItems = [];
for (var i = 0; i < test_count; i++) {
  fItems.push(faker.lorem.paragraphs());
}

fItems.forEach(item => {
  test('Faker Text : ' + item, async () => {
    expect(await myVerifier.isString(item)).toEqual(true);
  });
});
