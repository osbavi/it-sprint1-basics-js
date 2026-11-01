import * as Mathy from "../common/Mathy";
import * as IndexImport from "../common";
import { sqrt as mySqrt, square as mySquare } from "../common/Mathy";
import _ from "lodash";
import { add } from "../common/Mathy";
import lodash from "lodash";

test("can import Mathy", () => {
  expect(Mathy.sqrt).toBeDefined();
  expect(Mathy.square).toBeDefined();
  expect(Mathy.diag).toBeDefined();
});

test("06_modules-1: can specify what to import, to only retain pieces of the import", () => {
  expect(mySqrt).toBeDefined();
  expect(mySquare).toBeDefined();
  expect(mySqrt).toBe(Mathy.sqrt);
  expect(mySquare).toBe(Mathy.square);
});

test("06_modules-2: can import from my node_modules", () => {
  expect(_).toBeDefined();
});

test("06_modules-3: can import Mathy", () => {
  expect(Mathy.add(1, 2)).toBe(3);
});

test("06_modules-4: can specify what to import, to only retain pieces of the import", () => {
  expect(add(1, 2)).toBe(3);
});

test("06_modules-5: can import from my node_modules", () => {
  expect(lodash.isEmpty([])).toBe(true);
});

//////// EXTRA CREDIT ////////
test.skip("Index import", () => {
  //I have noticed that using index.js is pretty common pattern
  //If someone has been confused about that maybe this helps
  expect(IndexImport.variable1).toBe(/* ENTER YOUR GUESS HERE */);
  expect(IndexImport.variable2).toBe(/* ENTER YOUR GUESS HERE */);
  expect(IndexImport.variable3).toBe(/* ENTER YOUR GUESS HERE */);
  expect(IndexImport.variable4).toBe(/* ENTER YOUR GUESS HERE */);
});
