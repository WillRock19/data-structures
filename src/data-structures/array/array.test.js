import { MyArrayAsClass, myArrayAsFunction } from "./array";

describe("MyArrayAsClass", () => {
  describe("push", () => {
    let newArrayClass;

    beforeEach(() => {
      newArrayClass = new MyArrayAsClass(2);
      newArrayClass.push("First element");
      newArrayClass.push("Second element");
    });

    test("should add elements if under the limit", () => {
      expect(newArrayClass[0]).toBe("First element");
      expect(newArrayClass[1]).toBe("Second element");
    });

    test("should throw an exception in adds more elements than specified on constructor", () => {
      expect(() => {
        newArrayClass.push("Teste");
      }).toThrow("Cannot push element! Array already full");
    });
  });

  describe("length", () => {
    let newArrayClass;

    beforeEach(() => {
      newArrayClass = new MyArrayAsClass(2);
      newArrayClass.push("First element");
      newArrayClass.push("Second element");
    });

    test("should return the number of elements", () => {
      expect(newArrayClass.length).toBe(2);
    });
  });
});

describe("MyArrayAsFunction", () => {
  let myArray = myArrayAsFunction("First element", "Second element");

  test("should add fn parameters as values whose keys are the argument position", () => {
    expect(myArray[0]).toBe("First element");
    expect(myArray[1]).toBe("Second element");
  });

  test("should return array length", () => {
    expect(myArray.length).toBe(2);
  });
});
