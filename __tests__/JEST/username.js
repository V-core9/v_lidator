let myVerifier = require('../..')()

const static_data = require('../data/username.list')

static_data.forEach((item) => {
  test('USERNAME  ?? [ ' + item.input + ' ]', async () => {
    expect(await myVerifier.isUsername(item.input)).toEqual(item.expect)
  })
})

// Dynamic Part
var faker = require('faker')
const { test_count } = require('../data/_SETTINGS')

var fItems = []
for (var i = 0; i < 25; i++) {
  fItems.push(faker.internet.userName())
}

fItems.forEach((item) => {
  test('Faker Username : ' + item, async () => {
    expect(await myVerifier.isUsername(item)).toEqual(true)
  })
})
