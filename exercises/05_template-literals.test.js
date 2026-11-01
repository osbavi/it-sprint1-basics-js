test("05_template-literals-1: should support string interpolation", () => {
  const person = {
    name: "Kent C. Dodds",
    friends: [
      "Brooke Dodds",
      "Matt Zabriskie",
      "Aaron Frost",
      "Dave Geddes",
      "Joe Eames",
      "Ryan Florence",
    ],
  };
  const personsFriends = `${person.name} has ${person.friends.length} friends: ${person.friends.join(", ")}`;

  expect(personsFriends).toBe(
    "Kent C. Dodds has 6 friends: Brooke Dodds, Matt Zabriskie, Aaron Frost, Dave Geddes, Joe Eames, Ryan Florence",
  );
});

test("05_template-literals-2: should support multi-line strings", () => {
  const multiLine = `
    How cool
    is this!?
  `;
  expect(multiLine).toBe("\n    How cool\n    is this!?\n  ");
});

test("05_template-literals-3: should support string escaping", () => {
  expect(`Hi\nthere!`).toBe("Hi\nthere!");
  expect(`This is \`escaped\` backticks`).toBe("This is `escaped` backticks");
});

//////// EXTRA CREDIT ////////

// és probable que no utilitzis sovint l'etiquetatge, però pot ser útil!
test.skip("05_template-literals-4: should call the tagging function", () => {
  const tagIt = (literalString, ...interpolatedParts) => {
    return literalString.reduce((result, str, i) => {
      let value = interpolatedParts[i] !== undefined ? interpolatedParts[i] : "";

      if (value === "World") value = "super-cool " + value;
      if (value === "happy") value = "really " + value;

      return result + str + value;
    }, "");
  };
  const noun = "World";
  const emotion = "happy";
  const result = tagIt`Hello ${noun}! Are you feeling ${emotion} today?`;
  expect(result).toBe("Hello super-cool World! Are you feeling really happy today?");
});
