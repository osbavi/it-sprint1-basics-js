const pickApple = (ripeness) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ripeness === "ripe") {
        resolve("ripe apple");
      } else if (ripeness === "unripe") {
        reject(new Error("unripe apple"));
      } else {
        reject(new Error("out of apples"));
      }
    });
  });
};

test("14_promises-1: should resolve", () => {
  return pickApple("ripe").then(
    (result) => {
      expect(result).toBe("ripe apple");
    },
    (error) => {
      throw new Error("aquest bloc no s'hauria d'executar");
    },
  );
});

test("14_promises-2: should reject", () => {
  return pickApple("unripe").then(
    (result) => {
      throw new Error("aquest bloc no s'hauria d'executar");
    },
    (error) => {
      expect(error.message).toBe("unripe apple");
    },
  );
});

test("14_promises-3: errors can be caught", () => {
  return pickApple()
    .then((result) => {
      throw new Error("aquest bloc no s'hauria d'executar");
    })
    .catch((error) => {
      expect(error.message).toBe("out of apples");
    });
});
