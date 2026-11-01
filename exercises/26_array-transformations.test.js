test("26_arrays-1: Map - create an array with the square of each number", () => {
  const numbers = [1, 2, 3, 4];

  const squares = numbers.map((num) => num * num);

  expect(squares).toEqual([1, 4, 9, 16]);
});

test("26_arrays-2: Filter - create an array with only even numbers", () => {
  const numbers = [1, 2, 3, 4];

  // Utilitza `filter()` per crear una nova array només amb els números parells.
  const evenNumbers =
    /* INTRODUEIX EL TEU CODI AQUÍ */

    expect(evenNumbers).toEqual([2, 4]);
});

test("26_arrays-3: Find - find the first number greater than 10", () => {
  const numbers = [1, 10, 8, 11];

  // Utilitza `find()` per trobar el primer número més gran que 10.
  const result =
    /* INTRODUEIX EL TEU CODI AQUÍ */

    expect(result).toBe(11);
});

test("26_arrays-4: Reduce - calculate the total sum of numbers", () => {
  const numbers = [13, 7, 8, 21];

  // Utilitza `reduce()` per calcular la suma total dels números de l’array.
  const sum =
    /* INTRODUEIX EL TEU CODI AQUÍ */

    expect(sum).toBe(49);
});

test("26_arrays-5: Filter, multiply and sum array values", () => {
  const numbers = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

  // Crea una única expressió utilitzant `filter()`, `map()` i `reduce()` que:
  // - filtri els números majors o iguals a 10
  // - multipliqui cada número per 2
  // - sumi tots els resultats

  const result =
    /* INTRODUEIX EL TEU CODI AQUÍ */

    expect(result).toBe(130); // // (10*2 + 15*2 + 17*2 + 11*2 + 12*2)
});

test("26_arrays-6: Every and Some - check if elements are greater than 10", () => {
  const numbers = [11, 12, 13, 14];

  // Utilitza every per comprovar si TOTS els elements són > 10
  const allGreaterThan10 = null; // INTRODUEIX EL TEU CODI AQUÍ

  // Utilitza some per comprovar si ALGUN element és > 10
  const someGreaterThan10 = null; // INTRODUEIX EL TEU CODI AQUÍ

  expect(allGreaterThan10).toBe(true);
  expect(someGreaterThan10).toBe(true);
});

test("26_arrays-7: Every and Some - case where not all are greater than 10", () => {
  const numbers = [8, 11, 12, 9];

  // Utilitza every per comprovar si TOTS els elements són > 10
  const allGreaterThan10 = null; // INTRODUEIX EL TEU CODI AQUÍ

  // Utilitza some per comprovar si ALGUN element és > 10
  const someGreaterThan10 = null; // INTRODUEIX EL TEU CODI AQUÍ

  expect(allGreaterThan10).toBe(false);
  expect(someGreaterThan10).toBe(true);
});
