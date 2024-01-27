const demoVerifier = require('..')()

;(async () => {
  // Create a custom type
  console.log(demoVerifier.register('customType', async (value) => (await demoVerifier('number', value)) && value > 0)) //> true

  // Or other way...
  console.log(await demoVerifier.isCustomType(123)) //> true
  console.log(await demoVerifier.isCustomType(-123)) //> false

  console.log(await demoVerifier.isCustomType('-123')) //> false
})()
