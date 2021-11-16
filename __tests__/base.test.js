const baseDefinition = require('../src/baseDefinition');

var baseDefinitionTest = new baseDefinition(11);


test('baseDefinitionTest', () => {
  expect(baseDefinitionTest.get()).toBe(11);
});
