const testVerifier = require('../../..')({ builtIns: false });


test('custom limiter  ?? [ -2000 <> 2000 ]\n', async () => {

  expect(testVerifier.register('pageContent', async (value) => (typeof value === 'string' && value.length > 0 && value.length <= 256000))).toBe(true);


  expect(await testVerifier.isPageContent(1000)).toBe(false);
  expect(await testVerifier.isPageContent(-1000)).toBe(false);

  expect(await testVerifier.isPageContent(213000)).toBe(false);
  expect(await testVerifier.isPageContent(-1231000)).toBe(false);


  expect(await testVerifier.isPageContent("sAsS")).toBe(true);

  expect(await testVerifier('pageContent', 1000)).toBe(false);
  expect(await testVerifier('pageContent', -1000)).toBe(false);

  expect(await testVerifier('pageContent', 213000)).toBe(false);
  expect(await testVerifier('pageContent', -1231000)).toBe(false);


  expect(await testVerifier('pageContent', "sAsS asdonain saoisdb oasinp dasnp dnpsap donap s")).toBe(true);

});
