// this is the object we'll be mucking around with and proxying
const getCharacter = () => {
  return {
    _id: "9RKDLS02580GHCXNZLA0",
    password: "isolemnlysweariamuptonogood",
    name: { first: "Ron", last: "Weasly" },
    classes: [
      { name: "Divination", teacher: "Sybill Trelawney" },
      { name: "Defence Against the Dark Arts", teacher: "Dolores Umbridge" },
    ],
    greet(greeting = "Hi") {
      const { first, last } = this.name;
      return `${greeting}! My name is ${first} ${last} and my ID is ${this._id} and my password is ${this.password}!`;
    },
    getTeachers() {
      return this.classes.map(({ teacher }) => teacher);
    },
  };
};

test("22_proxies-1: can wrap an existing object", () => {
  const character = getCharacter();

  const proxy = new Proxy(character, {});

  expect(proxy).not.toBe(character); // referencialment diferent
  expect(proxy).toEqual(character); // profundament igual
});

test("22_proxies-2: handler can intercept gets, sets, and deletes", () => {
  const character = getCharacter();

  const handler = {
    get(target, prop) {
      // Soporte para paths profundos separados por puntos ("classes.1.teacher")
      if (typeof prop === "string" && prop.includes(".")) {
        return prop.split(".").reduce((obj, key) => obj?.[key], target);
      }
      return target[prop];
    },
    set(target, prop, value) {
      if (typeof prop === "string" && prop.includes(".")) {
        const parts = prop.split(".");
        const lastKey = parts.pop();
        const nestedTarget = parts.reduce((obj, key) => obj[key], target);
        nestedTarget[lastKey] = value;
      } else {
        target[prop] = value;
      }
      return true;
    },
    deleteProperty(target, prop) {
      // Protegemos la propiedad '_id' impidiendo su eliminación
      if (prop === "_id") {
        return true;
      }
      delete target[prop];
      return true;
    },
  };

  const proxy = new Proxy(character, handler);

  // Interactua amb el proxy
  proxy["classes.1.teacher"] = "Severus Snape"; // assignació profunda
  proxy.awesome = 10; // assignació superficial
  delete proxy._id; // elimina una propietat "protegida"

  // Fes algunes comprovacions
  expect(proxy["classes.1.teacher"]).toBe("Severus Snape"); // obtenció profunda
  expect(proxy.awesome).toBe(10); // obtenció superficial
  expect(proxy._id).toEqual("9RKDLS02580GHCXNZLA0"); // propietat no eliminada

  // Neteja
  delete proxy.awesome; // elimina una propietat no protegida
  expect(proxy.awesome).toBe(undefined); // propietat eliminada correctament
});

//////// EXTRA CREDIT ////////

test("22_proxies-3: can intercept function calls", () => {
  const character = getCharacter();

  const handler = {
    apply(target, thisArg, argumentsList) {
      const result = target.apply(thisArg, argumentsList);
      if (typeof result === "string") {
        // Sanitizamos el string removiendo los datos sensibles del character original
        return result.replace(thisArg.password, "").replace(thisArg._id, "");
      }
      return result;
    },
  };
  // Tingues en compte que `apply` només funciona per a proxies en funcions!
  character.greet = new Proxy(character.greet, handler);
  character.getTeachers = new Proxy(character.getTeachers, handler);
  const result = character.greet("Hey there");
  // Comprova que el resultat no conté informació sensible
  expect(result).not.toContain(character.password);
  expect(result).not.toContain(character._id);
  expect(character.getTeachers()).toEqual(["Sybill Trelawney", "Dolores Umbridge"]);
});

test("22_proxies-4: can be used to do some fancy stuff with arrays", () => {
  const characters = [
    "Harry Potter",
    "Ron Weasly",
    "Hermione Granger",
    "Nevel Longbottom",
    "Lavender Brown",
    "Scabbers",
    "Pigwidgeon",
  ];

  const handler = {
    get(target, prop) {
      let index = Number(prop);
      if (!isNaN(index) && index < 0) {
        index = target.length + index;
      }
      return target[index];
    },
  };
  const proxy = new Proxy(characters, handler);
  // Comprova que el proxy permet accedir a elements de l'array amb índexs positius i negatius
  expect(proxy[0]).toBe("Harry Potter");
  expect(proxy[-1]).toBe("Pigwidgeon");
  expect(proxy[-4]).toBe("Nevel Longbottom");
});
