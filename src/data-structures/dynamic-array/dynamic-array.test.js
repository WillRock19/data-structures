import { MyDynamicArray } from "./dynamic-array";

describe("MyDynamicArray", () => {
  test("should create an empty array", () => {
    let dynamicArray = new MyDynamicArray();
    expect(dynamicArray.values()).toEqual([]);
  });

  test("should create an array with the values passed", () => {
    let dynamicArray = new MyDynamicArray("first", "second");
    expect(dynamicArray.values()).toEqual(["first", "second"]);
  });

  test.each`
    parameters              | expectedLength
    ${["a"]}                | ${1}
    ${["a", "b"]}           | ${2}
    ${["a", "b", "c"]}      | ${3}
    ${["a", "b", "c", "d"]} | ${4}
  `(
    "should return the expected length to the array",
    ({ parameters, expectedLength }) => {
      let dynamicArray = new MyDynamicArray(...parameters);
      expect(dynamicArray.length()).toEqual(expectedLength);
    }
  );

  describe("push fn", () => {
    test("should add one new element to the array", () => {
      let dynamicArray = new MyDynamicArray("first");
      dynamicArray.push("other");
      expect(dynamicArray.values()).toEqual(["first", "other"]);
    });

    test('should keep adding even after "perceivedArrayLenght" has been reached', () => {
      let dynamicArray = new MyDynamicArray("first");

      dynamicArray.push("other");
      dynamicArray.push("another");
      dynamicArray.push("...and another");
      dynamicArray.push("...and another 2x");
      dynamicArray.push("...and another 3x");
      dynamicArray.push("...");

      expect(dynamicArray.values()).toEqual([
        "first",
        "other",
        "another",
        "...and another",
        "...and another 2x",
        "...and another 3x",
        "...",
      ]);
    });
  });

  describe("isEmpty fn", () => {
    test("should return true if array is empty", () => {
      let dynamicArray = new MyDynamicArray();
      expect(dynamicArray.isEmpty()).toBeTruthy();
    });

    test("should return false if array has at least one value", () => {
      let dynamicArray = new MyDynamicArray(1);
      expect(dynamicArray.isEmpty()).toBeFalsy();
    });
  });

  describe("clearContent fn", () => {
    let dynamicArray;

    beforeEach(() => {
      dynamicArray = new MyDynamicArray(
        "one",
        "two",
        "freedys comming for you..."
      );
    });

    test("should clear all content on the array", () => {
      dynamicArray.clearContent();
      expect(dynamicArray.values()).toEqual([]);
    });

    test("should update the length() result", () => {
      dynamicArray.clearContent();
      expect(dynamicArray.length()).toBe(0);
    });
  });

  describe("elementAt fn", () => {
    test.each`
      index
      ${1}
      ${2}
      ${5}
      ${-1}
    `("should throw exception if element is out of bounds", ({ index }) => {
      let dynamicArray = new MyDynamicArray("Test");
      expect(() => {
        dynamicArray.elementAt(index);
      }).toThrow(
        `Index out of bounds! The index ${index} does not exist inside the array!`
      );
    });

    test("should return element when index is valid", () => {
      let dynamicArray = new MyDynamicArray("Test");
      expect(dynamicArray.elementAt(0)).toEqual("Test");
    });
  });
});
