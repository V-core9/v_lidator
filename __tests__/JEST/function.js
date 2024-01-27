let myVerifier = require('../..')()

const undefinedVariable = undefined

const static_data = [
  {
    input: undefinedVariable,
    expect: false
  },

  {
    input: undefined,
    expect: false
  },

  {
    input: 111,
    expect: false
  },

  {
    input: null,
    expect: false
  },

  {
    input: '',
    expect: false
  },

  {
    input: false,
    expect: false
  },

  {
    input: 0,
    expect: false
  },

  {
    input: async () => console.log('yea'),
    expect: true
  },

  {
    input: function () {
      console.log('yea')
    },
    expect: true
  }
]

static_data.forEach((item) => {
  test('isFunction  ?? [ ' + item.input + ' ]\n', async () => {
    expect(await myVerifier.isFunction(item.input)).toEqual(item.expect)
  })
})
