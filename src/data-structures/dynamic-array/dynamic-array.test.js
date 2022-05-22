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

  describe("size fn", () => {
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
        expect(dynamicArray.size()).toEqual(expectedLength);
      }
    );
  });

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

    test("should update the size() result", () => {
      dynamicArray.clearContent();
      expect(dynamicArray.size()).toBe(0);
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

  describe("removeAt fn", () => {
    describe("when array is empty", () => {
      let myArray;

      beforeEach(() => {
        myArray = new MyDynamicArray();
      });

      test.each([-1, 0, 1])(
        "should throw exception because index is not acceptable",
        (indexToRemove) => {
          expect(() => {
            myArray.removeAt(indexToRemove);
          }).toThrow(
            `Index out of bounds! The index ${indexToRemove} does not exist inside the array!`
          );
        }
      );
    });

    describe("when array has more than 1 item", () => {
      let myArray;

      beforeEach(() => {
        myArray = new MyDynamicArray(1, 2, 3);
      });

      test.each([-1, 5])(
        "should throw exception if index to remove is invalid",
        (indexToRemove) => {
          expect(() => {
            myArray.removeAt(indexToRemove);
          }).toThrow(
            `Index out of bounds! The index ${indexToRemove} does not exist inside the array!`
          );
        }
      );

      test("should remove item at expected position", () => {
        expect(myArray.elementAt(1)).toBe(2);

        myArray.removeAt(1);
        expect(myArray.elementAt(1)).toBe(3);
      });

      test("should update size after removing item", () => {
        expect(myArray.size()).toBe(3);

        myArray.removeAt(1);
        expect(myArray.size()).toBe(2);
      });
    });
  });

  describe("remove fn", () => {
    describe("when element does not exist", () => {
      let myArray;

      beforeEach(() => {
        myArray = new MyDynamicArray(1, 2, 3);
      });

      test("should return false if element exists", () => {
        expect(myArray.remove(4)).toBeFalsy();
      });

      test("should leave array unchanged", () => {
        myArray.remove(4);
        expect(myArray.values()).toEqual([1, 2, 3]);
      });
    });

    describe("when element exists", () => {
      let myArray;

      beforeEach(() => {
        myArray = new MyDynamicArray(1, 2, 3);
      });

      test("should return true if element exists", () => {
        expect(myArray.remove(2)).toBeTruthy();
      });

      test("should remove element if it exists", () => {
        myArray.remove(2);
        expect(myArray.values()).toEqual([1, 3]);
      });
    });
  });

  describe("indexOf fn", () => {
    let myArray;

    beforeEach(() => {
      myArray = new MyDynamicArray(1, 2, 3, 4);
    });

    test.each`
      element | expectedIndex
      ${1}    | ${0}
      ${2}    | ${1}
      ${3}    | ${2}
      ${4}    | ${3}
    `(
      "should return the index of the element if it exists",
      ({ element, expectedIndex }) => {
        expect(myArray.indexOf(element)).toBe(expectedIndex);
      }
    );

    test("should return -1 if element does not exist", () => {
      expect(myArray.indexOf(19)).toBe(-1);
    });
  });

  describe("contains fn", () => {
    let myArray;

    beforeEach(() => {
      myArray = new MyDynamicArray(1, 2, 3, 4);
    });

    test.each([1, 2, 3, 4])(
      "should return true if element exists",
      (element) => {
        expect(myArray.contains(element)).toBeTruthy();
      }
    );

    test("should return false if element does not exist", () => {
      expect(myArray.contains(19)).toBeFalsy();
    });
  });
});
