test("10_class-1: has a constructor for initialization", () => {
  class Animal {
    constructor(name) {
      this.name = name;
    }
  }

  const animal = new Animal();
  const dog = new Animal("Dog");

  expect(animal.name).toBeUndefined();
  expect(dog.name).toBe("Dog");
});

test("10_class-2: constructor can have default param values", () => {
  class Animal {
    constructor(name = "Honey Badger") {
      this.name = name;
    }
  }

  const animal = new Animal();
  const dog = new Animal("Dog");

  expect(animal.name).toBe("Honey Badger");
  expect(dog.name).toBe("Dog");
});

test("10_class-3: can have instance methods", () => {
  class Animal {
    constructor(name = "Honey Badger") {
      this.name = name;
    }

    sayName() {
      return `My name is: ${this.name}`;
    }
  }

  const animal = new Animal();

  expect(animal.sayName).toBeDefined();
  expect(Animal.sayName).toBeUndefined();
  expect(animal.sayName()).toBe("My name is: Honey Badger");
});

test("10_class-4: can have static methods", () => {
  class Animal {
    constructor(name) {
      this.name = name;
    }
    static create(name) {
      return new Animal(name);
    }
  }

  const animal = new Animal();
  const dog = Animal.create("Dog");

  expect(animal.create).toBeUndefined();
  expect(Animal.create).toBeDefined();

  expect(dog instanceof Animal).toBe(true);
  expect(dog.name).toBe("Dog");
});

test("10_class-5: can extend another class", () => {
  class Animal {
    constructor(name) {
      this.name = name;
    }
  }

  class Dog extends Animal {
    sayName() {
      return `My name is: ${this.name}`;
    }
  }

  const dog = new Dog("Fido");

  expect(dog instanceof Dog).toBe(true);
  expect(dog instanceof Animal).toBe(true);

  expect(Animal.prototype.sayName).toBeUndefined();
  expect(Dog.prototype.sayName).toBeDefined();

  expect(dog.sayName()).toBe("My name is: Fido");
});

test("10_class-6: can use property setters and getters", () => {
  class Animal {
    #name;
    constructor() {
      this.#name = "";
    }

    get name() {
      return this.#name;
    }

    set name(value) {
      this.#name = `${value} type of animal`;
    }
  }

  const animal = new Animal();
  animal.name = "Dog";
  expect(animal.name).toBe("Dog type of animal");
  animal.name = "Cat";
  expect(animal.name).toBe("Cat type of animal");
});
