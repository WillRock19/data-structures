import { MyLinkedList } from "./linked-list";

describe("MyLinkedList", () => {
  describe("Constructor", () => {
    test("should set size to 0", () => {
      let myList = new MyLinkedList();
      expect(myList.size).toBe(0);
    });

    test("should set head to null", () => {
      let myList = new MyLinkedList();
      expect(myList.head).toBeNull();
    });

    test("should set tail to null", () => {
      let myList = new MyLinkedList();
      expect(myList.head).toBeNull();
    });
  });

  describe("Add fn", () => {
    describe("when adding a first element to the list", () => {
      let myList;

      beforeEach(() => {
        myList = new MyLinkedList();
        myList.add("Test");
      });

      test("should set head and tail to that element", () => {
        expect(myList.head.currentValue).toEqual("Test");
        expect(myList.tail.currentValue).toEqual("Test");
      });

      test("should set head and tail nexElement to null", () => {
        expect(myList.head.nextElement).toBeNull();
        expect(myList.tail.nextElement).toBeNull();
      });

      test("should increse the size value", () => {
        expect(myList.size).toBe(1);
      });
    });

    describe("when adding a second element to a list that already has elements", () => {
      let myList;

      beforeEach(() => {
        myList = new MyLinkedList();
        myList.add("First");
        myList.add("Second");
      });

      test("should set head to first element", () => {
        expect(myList.head.currentValue).toEqual("First");
      });

      test("should set head's nextElement to tail", () => {
        expect(myList.head.nextElement).toBe(myList.tail);
      });

      test("should set tail to the second element", () => {
        expect(myList.tail.currentValue).toEqual("Second");
      });

      test("should set tail's nextElement to null", () => {
        expect(myList.tail.nextElement).toBeNull();
      });

      test("should increse the size value", () => {
        expect(myList.size).toBe(2);
      });
    });

    describe("when adding more than two element to a list", () => {
      let myList;

      beforeEach(() => {
        myList = new MyLinkedList();
        myList.add("First");
        myList.add("Second");
        myList.add("Third");
      });

      test("should set head to first element", () => {
        expect(myList.head.currentValue).toEqual("First");
      });

      test("should set head's nextElement to the intermediate element between head and tail", () => {
        expect(myList.head.nextElement).not.toBe(myList.tail);
        expect(myList.head.nextElement.currentValue).toEqual("Second");
      });

      test("should set head's next-next element to be the the tail", () => {
        expect(myList.head.nextElement.nextElement).toBe(myList.tail);
      });

      test("should set tail to the be the third element", () => {
        expect(myList.tail.currentValue).toEqual("Third");
      });

      test("should set tail's nextElement to null", () => {
        expect(myList.tail.nextElement).toBeNull();
      });

      test("should increse the size value", () => {
        expect(myList.size).toBe(3);
      });
    });
  });

  describe("Append fn", () => {
    let myList;

    beforeEach(() => {
      myList = new MyLinkedList();
      myList.add("First");
    });

    test("should add new element to the tail of the list", () => {
        myList.append("Last");
        expect(myList.tail.currentValue).toEqual("Last");
    });

    test("should not change the head of the list", () => {
        myList.append("Last");
        expect(myList.head.currentValue).toEqual("First");
    });

    test("should keep previous tail as head if this is the second element to be add on list", () => {
        myList.append("Last");
        expect(myList.head.currentValue).toEqual("First");
    });

    test("should not make the previous tail a simple node if list has more than two elements", () => {
        myList.add("Second");
        myList.append("Last");

        expect(myList.head.nextElement.currentValue).toEqual("Second");
        expect(myList.head.nextElement.nextElement.currentValue).toEqual("Last");
      });

    test("should increse the size value", () => {
        myList.append("Last");
        expect(myList.size).toBe(2);
    });
  });

  describe("Prepend fn", () => {
    let myList;

    beforeEach(() => {
      myList = new MyLinkedList();
      myList.add("First");
    });

    test("should add new element to the head of the list", () => {
      myList.prepend("Zero");
      expect(myList.head.currentValue).toEqual("Zero");
    });

    test("should make the previous head the nextElement from the new head", () => {
      myList.prepend("Zero");
      expect(myList.head.nextElement).toEqual({
        currentValue: "First",
        nextElement: null,
      });
    });

    test("should keep the previous head the tail if we are preppending the second element from the list", () => {
      myList.prepend("Zero");
      expect(myList.tail).toEqual({ currentValue: "First", nextElement: null });
    });

    test("should not make the previous head a tail if the list has more than two elements", () => {
      myList.add("Second");
      myList.prepend("Zero");
      expect(myList.tail).toEqual({
        currentValue: "Second",
        nextElement: null,
      });
    });

    test("should increse the size value", () => {
        myList.prepend("Zero");
        expect(myList.size).toBe(2);
    });
  });
});
