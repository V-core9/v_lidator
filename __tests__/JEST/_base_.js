const v_rifier = require('../data/v_rifier');

const core_types = require('../../src/core_types');

test("types builtin", async () => {
  expect((await v_rifier.listTypes()).length).toBe(13);
  expect(await v_rifier.listTypes()).toStrictEqual(Object.keys(core_types));
});



test("adding BAD things to it", async () => {
  expect(await v_rifier.register("undefined", (val) => false)).toBe(false);
  expect(await v_rifier.register("testBadVal", 11)).toBe(false);
  expect((await v_rifier.listTypes()).length).toBe(13);
});


test("OK - removing things to it", async () => {
  expect(await v_rifier.unregister("undefined")).toBe(true);
  expect(await v_rifier.unregister("bool")).toBe(true);
  expect(await v_rifier.unregister("number")).toBe(true);
  expect(await v_rifier.unregister("integer")).toBe(true);
  expect(await v_rifier.unregister("string")).toBe(true);
  expect((await v_rifier.listTypes()).length).toBe(8);
});


test("NO - removing things to it", async () => {
  expect(await v_rifier.unregister("register")).toBe(false);
  expect(await v_rifier.unregister("unregister")).toBe(false);
  expect((await v_rifier.listTypes()).length).toBe(8);
});

test("Adding Good Things To Check", async () => {
  expect(await v_rifier.register("undefined", (val) => (typeof val === "undefined"))).toBe(true);
  expect(await v_rifier.register("specificValue", (val) => (val > 0 && val < 2000))).toBe(true);
  expect((await v_rifier.listTypes()).length).toBe(10);
});


test("using things from it", async () => {

  expect(await v_rifier.isUndefined()).toBe(true);
  expect(await v_rifier('undefined')).toBe(true);
  expect(await v_rifier.isUndefined(11)).toBe(false);
  expect(await v_rifier('undefined', 11)).toBe(false);



  expect(await v_rifier.isSpecificValue(250)).toBe(true);
  expect(await v_rifier('specificValue', 250)).toBe(true);

  expect(await v_rifier.isSpecificValue(-11)).toBe(false);
  expect(await v_rifier('specificValue', -11)).toBe(false);

  expect(await v_rifier('BADspecificValue', -11)).toBe(false);
});
