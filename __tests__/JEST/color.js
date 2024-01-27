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
    input: true,
    expect: false
  },

  {
    input: 0,
    expect: false
  },

  {
    input: 'Fa',
    expect: false
  },

  {
    input: 'X123',
    expect: false
  },

  {
    input: '123456789',
    expect: false
  },

  {
    input: 'FF00ca',
    expect: false
  },

  {
    input: 'ABC',
    expect: false
  },

  {
    input: 72875,
    expect: false
  },

  {
    input: 8080,
    expect: false
  },

  {
    input: 8000,
    expect: false
  },

  {
    input: 443,
    expect: false
  },

  {
    input: 9000,
    expect: false
  },

  {
    input: 6060,
    expect: false
  },

  {
    input: '#FF00ca',
    expect: true
  },
  {
    input: '#F00ca',
    expect: false
  },
  {
    input: '#FF00ca05',
    expect: true
  },
  {
    input: '#000',
    expect: true
  },
  {
    input: '#f0c5',
    expect: true
  },
  {
    input: '33,55,88',
    expect: true
  },
  {
    input: '255,255,11',
    expect: true
  },
  {
    input: '255,255,255,0.58',
    expect: true
  },
  {
    input: '255,255,255,8',
    expect: false
  },
  {
    input: '255,255,255,1.01',
    expect: false
  },
  {
    input: '0,0,0,-.56',
    expect: false
  }
]

static_data.forEach((item) => {
  test('Specific .isColor  ?? [ ' + item.input + ' ]\n', async () => {
    expect(await myVerifier.isColor(item.input)).toEqual(item.expect)
  })
})

static_data.forEach((item) => {
  test('"color"  ?? [ ' + item.input + ' ]\n', async () => {
    expect(await myVerifier('color', item.input)).toEqual(item.expect)
  })
})
