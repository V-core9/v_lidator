let myVerifier = require('../..')()

const static_data = require('../data/number.list')

static_data.forEach((item) => {
  test('NUMBER  ?? [ ' + item.input + ' ]\n', async () => {
    expect(await myVerifier.isNumber(item.input)).toEqual(item.expect)
  })
})

var faker = require('faker')
const { test_count } = require('../data/_SETTINGS')

var iItems = []
for (var i = 0; i < test_count; i++) {
  iItems.push(faker.datatype.number())
}

for (var i = 0; i < test_count; i++) {
  iItems.push(faker.datatype.float())
}

iItems.forEach((item) => {
  test('Faker NUMBER: ' + item, async () => {
    expect(await myVerifier.isNumber(item)).toEqual(true)
  })
})
