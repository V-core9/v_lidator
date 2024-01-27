const sampleVerifier = require('..')({ builtIns: false })

;(async () => {
  // Use it
  console.log(sampleVerifier.listTypes()) //> []

  // Create a custom type
  console.log(sampleVerifier.register('customType', async (value) => !isNaN(value) && value > 0)) //> true

  console.log(sampleVerifier.listTypes()) //> [ 'customtype' ]

  // One way...
  console.log(await sampleVerifier('customType', 123)) //> true
  console.log(await sampleVerifier('customType', -123)) //> false

  // Or other way...
  console.log(await sampleVerifier.isCustomType(123)) //> true
  console.log(await sampleVerifier.isCustomType(-123)) //> false

  // Or Unregister It (if you want)
  console.log(sampleVerifier.unregister('customType')) //> true

  console.log(sampleVerifier.listTypes()) //> []
})()
