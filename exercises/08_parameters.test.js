test("08_parameters-1: can be triggered when the incoming argument is undefined", () => {
  const getName = (name = "Mercury") => name;
  expect(getName("Aaron")).toBe("Aaron");
  expect(getName(undefined)).toBe("Mercury");
  expect(getName(null)).toBe(null);
  expect(getName()).toBe("Mercury");
});

test("08_parameters-2: aren't included in arguments", () => {
  const getName = function (name = "Mercury") {
    return arguments.length;
  };

  expect(getName("Aaron")).toBe(1);
  expect(getName(null)).toBe(1);
  expect(getName()).toBe(0);
});

test("08_parameters-3: can trigger a function call", () => {
  let triggerCount = 0;

  const getName = (name = getDefault()) => name;

  const getDefault = () => {
    triggerCount++;
    return "Mercury";
  };

  expect(triggerCount).toBe(0);
  expect(getName("Aaron")).toBe("Aaron");
  expect(getName()).toBe("Mercury");
  expect(getName(undefined)).toBe("Mercury");
  expect(triggerCount).toBe(2);
});

test("08_parameters-4: catch non-specified params", () => {
  const resty = (first, second, ...others) => others;

  expect(resty().length).toBe(0);
  expect(resty(1).length).toBe(0);
  expect(resty(1, 2).length).toBe(0);
  expect(resty(1, 2, 3).length).toBe(1);
  expect(resty(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10).length).toBe(
    8,
  );
});

test("08_parameters-5: has a different length than `arguments`", () => {
  const resty = function (first, second, ...others) {
    return others.length === arguments.length;
  };

  expect(resty()).toBe(true);
  expect(resty(1)).toBe(false);
  expect(resty(1, 2)).toBe(false);
  expect(resty(1, 2, 3)).toBe(false);
  expect(resty(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10)).toBe(false);
});

test("08_parameters-6: is an actual array, unlike arguments", () => {
  const resty = (...args) => args;

  const argy = function () {
    return arguments;
  };

  const args = argy(1, 2, 3);
  const rests = resty(1, 2, 3);

  expect(Object.getPrototypeOf(args) === Object.getPrototypeOf(rests)).toBe(false);
  expect(args.splice).toBe(undefined);
  expect(Object.getPrototypeOf(rests)).toBe(Array.prototype);
  expect(rests.splice).toBeDefined();
  expect(rests.splice).toBe(Array.prototype.splice);
});

test("08_parameters-7: it can default all arguments, optionally", () => {
  // Modifica la signatura del mètode `myFunction` per permetre que
  // tots els arguments siguin opcionals

  const myFunction = ({ name, age, favoriteBand } = {}) => {
    expect(name).toBeDefined();
    expect(age).toBeDefined();
    expect(favoriteBand).toBeDefined();
  };

  myFunction({ name: "Axel", age: 37, favoriteBand: "Taylor Swift" });
  myFunction({ name: "Axel", age: 37 });
  myFunction({ name: "Axel" });
  myFunction({});
  myFunction();
});

/*
eslint
  no-unused-vars:0
  prefer-rest-params:0
*/
