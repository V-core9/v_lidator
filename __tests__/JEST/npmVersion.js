const v_rifier = require('../..');
let myVerifier = null;
(async () => {
  myVerifier = await v_rifier();
})();


const undefinedVariable = undefined;

const static_data = [

  {
    input: undefinedVariable,
    expect: false,
  },

  {
    input: undefined,
    expect: false,
  },

  {
    input: 111,
    expect: false,
  },

  {
    input: null,
    expect: false,
  },

  {
    input: "",
    expect: false,
  },

  {
    input: false,
    expect: false,
  },

  {
    input: true,
    expect: false,
  },

  {
    input: 0,
    expect: false,
  },


  {
    input: "Fa",
    expect: false,
  },

  {
    input: "X123",
    expect: false,
  },

  {
    input: "123456789",
    expect: false,
  },

  {
    input: "FF00ca",
    expect: false,
  },


  {
    input: "ABC",
    expect: false,
  },


  {
    input: "11.1.1",
    expect: true,
  },


  {
    input: "22.0.5147",
    expect: true,
  },


  {
    input: "0.0.0",
    expect: true,
  },


  {
    input: "-22.0.5147",
    expect: false,
  },


  {
    input: "22.0.51-",
    expect: false,
  },
  


  {
    input: "22.0+5147",
    expect: false,
  },

];

static_data.forEach(item => {
  test('isNpmVersion  ?? [ ' + item.input + ' ]\n', async () => {
    expect(await myVerifier.isNpmVersion(item.input)).toEqual(item.expect);
  });
});
