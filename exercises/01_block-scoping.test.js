const noop = () => {};
test("01_scope-1: can be used in place of `var`", () => {
  let bandName = "Queen";
  let isBestBand = true;
  expect(bandName).toBe("Queen");
  expect(isBestBand).toBe(true);
});

test("01_scope-2: can modify the value of a `let` variable even in the next block statement", () => {
  let releaseName = "ES6";
  {
    releaseName = "ES2015";
  }
  expect(releaseName).toBe("ES2015");
});

test("01_scope-3: cannot modify the value of a `const` variable", () => {
  function getReleaseName() {
    let releaseName = "ES6";
    releaseName = "ES2015";
    return releaseName;
  }
  expect(getReleaseName).not.toThrow();
});

test("01_scope-4: is trapped inside of an `if` statement", () => {
  if (true) {
    let b = 1;
  }
  expect(() => noop(b)).toThrow("b is not defined");
});

test("01_scope-5: can't redeclare using the same name", () => {
  function doLoop() {
    for (let i = 0; i < 10; i++) {}
    return i;
  }

  expect(doLoop).toThrow("i is not defined");
});

test("01_scope-6: means that we can start using block statements", () => {
  {
    const d = 2;
  }
  expect(() => noop("d", d)).toThrow("d is not defined");
});

//////// EXTRA CREDIT ////////

test("01_scope-7: means that we can declare constant with the same name in block statement", () => {
  const d = 5;
  {
    const d = 10;
    expect(d).toBe(10);
  }
  expect(d).toBe(5);
});

/* eslint no-constant-condition:0 */
