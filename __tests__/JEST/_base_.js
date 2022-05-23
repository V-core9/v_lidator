const v_rifier = require('../..');

let myVerifier = null;
let myEmptyVerifier = null;

(async () => {
  myVerifier = await v_rifier();
  myEmptyVerifier = await v_rifier({ builtIns: false });
})();



const core_types = require('../../src/core_types');

test("types builtin", async () => {
  expect((await myEmptyVerifier.listTypes()).length).toBe(0);
  expect((await myVerifier.listTypes()).length).toBe(17);
  expect(await myVerifier.listTypes()).toStrictEqual(Object.keys(core_types));
});



test("adding BAD things to it", async () => {
  expect(await myVerifier.register("undefined", (val) => false)).toBe(false);
  expect(await myVerifier.register("testBadVal", 11)).toBe(false);
  expect((await myVerifier.listTypes()).length).toBe(17);
});


test("OK - removing things to it", async () => {
  expect(await myVerifier.unregister("undefined")).toBe(true);
  expect(await myVerifier.unregister("bool")).toBe(true);
  expect(await myVerifier.unregister("number")).toBe(true);
  expect(await myVerifier.unregister("integer")).toBe(true);
  expect(await myVerifier.unregister("string")).toBe(true);
  expect((await myVerifier.listTypes()).length).toBe(12);
});


test("NO - removing things to it", async () => {
  expect(await myVerifier.unregister("register")).toBe(false);
  expect(await myVerifier.unregister("unregister")).toBe(false);
  expect((await myVerifier.listTypes()).length).toBe(12);
});

test("Adding Good Things To Check", async () => {
  expect(await myVerifier.register("undefined", (val) => (typeof val === "undefined"))).toBe(true);
  expect(await myVerifier.register("specificValue", (val) => (val > 0 && val < 2000))).toBe(true);
  expect((await myVerifier.listTypes()).length).toBe(14);
});


test("using things from it", async () => {

  expect(await myVerifier.isUndefined()).toBe(true);
  expect(await myVerifier('undefined')).toBe(true);
  expect(await myVerifier.isUndefined(11)).toBe(false);
  expect(await myVerifier('undefined', 11)).toBe(false);



  expect(await myVerifier.isSpecificValue(250)).toBe(true);
  expect(await myVerifier('specificValue', 250)).toBe(true);

  expect(await myVerifier.isSpecificValue(-11)).toBe(false);
  expect(await myVerifier('specificValue', -11)).toBe(false);

  expect(await myVerifier('BADspecificValue', -11)).toBe(false);
});
