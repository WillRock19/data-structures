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

      test("should return the popped element", () => {
        const element = stack.pop();
        expect(element).toBe(1);
      });

      test("should return null and keep size equal to zero if pop when list is empty", () => {
        const emptyStack = new StackWithList();
        const element = emptyStack.pop();

        expect(element).toBeNull();
      });
    });

    describe("When stack has multiple elements", () => {
      let stack;

      beforeEach(() => {
        stack = new StackWithList();
        stack.push(1);
        stack.push(2);
        stack.push(3);
      });

      test("should remove last added element on stack", () => {
        stack.pop();
        expect(stack.size()).toBe(2);
      });

      test("should keep first element added on stack", () => {
        stack.pop();
        stack.pop();
        expect(stack.size()).toBe(1);
      });
    });
  });

  describe("peek", () => {
    test("should thrown an exception if the stack is empty", () => {
      const stack = new StackWithList();

      expect(() => {
        stack.peek();
      }).toThrowError();
    });

    test("should return first element if the stack has a single element", () => {
      const stack = new StackWithList(1);
      const element = stack.peek();

      expect(element).toBe(1);
    });

    test("should remove element from stack after peeked", () => {
      const stack = new StackWithList(1);
      stack.peek();

      expect(stack.size()).toBe(0);
    });

    test("should return the last element pushed on the stack (element at top of stack)", () => {
      const stack = new StackWithList(1);
      stack.push(2);
      stack.push(3);

      expect(stack.peek()).toBe(3);
    });
  })
});
