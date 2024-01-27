let myVerifier = require('../..')({ builtIns: true })

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
    input: true,
    expect: false
  },

  {
    input: 0,
    expect: false
  },

  {
    input: async () => console.log('yea'),
    expect: false
  },

  {
    input: function () {
      console.log('yea')
    },
    expect: false
  },

  {
    input: [],
    expect: true
  },

  {
    input: [1, 2, 3, 4, 5],
    expect: true
  },

  {
    input: [
      {
        a: 1,
        b: 2,
        c: 3
      },
      {
        a: 4
      }
    ],
    expect: true
  }
]

static_data.forEach((item) => {
  test('isArray  ?? [ ' + item.input + ' ]\n', async () => {
    expect(await myVerifier.isArray(item.input)).toEqual(item.expect)
  })
})
