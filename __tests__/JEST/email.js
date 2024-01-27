let myVerifier = require('../..')()

const static_data = require('../data/email.list')

static_data.forEach((item) => {
  test('EMAIL  ?? [ ' + item.input + ' ]', async () => {
    expect(await myVerifier.isEmail(item.input)).toEqual(item.expect === true ? true : false)
  })
})

// Dynamic Part
var faker = require('faker')
const { test_count } = require('../data/_SETTINGS')

var fItems = []
for (var i = 0; i < test_count; i++) {
  fItems.push(faker.internet.email())
}

fItems.forEach((item) => {
  test('Faker Mail : ' + item, async () => {
    expect(await myVerifier.isEmail(item)).toEqual(true)
  })
})
