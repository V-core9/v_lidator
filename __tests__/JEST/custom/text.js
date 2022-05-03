const v_rifier = require('../../data/v_rifier');


test('custom limiter  ?? [ -2000 <> 2000 ]\n', async () => {

  expect(await v_rifier.register('pageContent', async (value) => (typeof value === 'string' && value.length > 0 && value.length <= 256000))).toBe(true);


  expect(await v_rifier.isPageContent(1000)).toBe(false);
  expect(await v_rifier.isPageContent(-1000)).toBe(false);

  expect(await v_rifier.isPageContent(213000)).toBe(false);
  expect(await v_rifier.isPageContent(-1231000)).toBe(false);


  expect(await v_rifier.isPageContent("sAsS")).toBe(true);

  expect(await v_rifier('pageContent', 1000)).toBe(false);
  expect(await v_rifier('pageContent', -1000)).toBe(false);

  expect(await v_rifier('pageContent', 213000)).toBe(false);
  expect(await v_rifier('pageContent', -1231000)).toBe(false);


  expect(await v_rifier('pageContent', "sAsS asdonain saoisdb oasinp dasnp dnpsap donap s")).toBe(true);

});
