let myVerifier = require('../..')()

const static_data = require('../data/name.list')

static_data.forEach((item) => {
  test('NAME  ?? [ ' + item.input + ' ]', async () => {
    expect(await myVerifier.isName(item.input)).toEqual(item.expect)
  })
})

// Dynamic Part
var faker = require('faker')
const { test_count } = require('../data/_SETTINGS')

var fItems = []
for (var i = 0; i < test_count; i++) {
  fItems.push(faker.name.firstName())
}

fItems.forEach((item) => {
  test('Faker Name : ' + item, async () => {
    expect(await myVerifier.isName(item)).toEqual(true)
  })
})
