import { StackWithList } from "./stack";

describe("StackWithList", () => {
  describe("Constructor", () => {
    test("should generate empty stack if no item is passed", () => {
      const myStack = new StackWithList();
      expect(myStack.size()).toBe(0);
    });

    test("should generate stack with received item", () => {
      const myStack = new StackWithList("First element");
      expect(myStack.size()).toBe(1);
    });
  });

  describe("empty", () => {
    test("should return true if list is empty", () => {
      const myStack = new StackWithList();
      expect(myStack.empty()).toBeTruthy();
    });

    test("should return false if list has at least one element", () => {
      const myStack = new StackWithList("First element");
      expect(myStack.empty()).toBeFalsy();
    });
  });

  describe("push", () => {
    let stack;

    beforeEach(() => {
      stack = new StackWithList();
    });

    test("should add single element to stack", () => {
      stack.push({ name: "First Element" });
      expect(stack.size()).toBe(1);
    });

    test("should increase stack size as elements are added", () => {
      stack.push("First element");
      stack.push({ name: "Second element" });
      stack.push(3);
      stack.push(4);
      expect(stack.size()).toBe(4);
    });
  });

  describe("pop", () => {
    test("should throw exception if list is empty", () => {
      const stack = new StackWithList();

      expect(() => {
        stack.pop();
      }).toThrowError();
    });

    describe("When stack has single element", () => {
      let stack;

      beforeEach(() => {
        stack = new StackWithList(1);
      });

      test("should empty stack after pop", () => {
        stack.pop();
        expect(stack.empty()).toBeTruthy();
      });

      test("should reduze stack size to zero", () => {
        stack.pop();
        expect(stack.size()).toBe(0);
      });
    });

    describe("When stack has multiple elements", () => {
      let stack;

      beforeEach(() => {
        stack.push(1);
        stack.push(2);
        stack.push(3);
      });

      test("should remove last added element on stack", () => {
        expect(false).toBeTruthy();
      });

      test("should keep first element added on stack", () => {
        expect(false).toBeTruthy();
      });

      test("should reduce stack size as elements are popped", () => {
        expect(false).toBeTruthy();
      });
    });
  });
});
