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

  describe("add fn", () => {
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

  describe("append fn", () => {
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

  describe("prepend fn", () => {
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

  describe("removeFirst fn", () => {

    describe("when list is empty", () => {
      test("should throw an exception", () => {
        let myList = new MyLinkedList();
        expect(myList.removeFirst).toThrow("Cannot remove element from empty Linked List!");
      });
    });

    describe("when list has only one element", () => {
      let myList;

      beforeEach(() => {
        myList = new MyLinkedList();
        myList.add('Single element');
      });
  
      test("should make head point to null", () => {
        myList.removeFirst();
        expect(myList.head).toBeNull();
      });

      test("should make tail point to null", () => {
        myList.removeFirst();
        expect(myList.tail).toBeNull();
      });

      test("should update size value", () => {
        myList.removeFirst();
        expect(myList.size).toBe(0);
      });
    });

    describe("when list has multiple elements", () => {
      let myList;

      beforeEach(() => {
        myList = new MyLinkedList();
        myList.add('First item');
        myList.add('Second item');
        myList.add('Third item');
      });
  
      test("should make head point to second item", () => {
        myList.removeFirst();
        expect(myList.head.currentValue).toEqual("Second item");
      });

      test("should not change element that tail points to", () => {
        myList.removeFirst();
        expect(myList.tail.currentValue).toEqual("Third item");
      });

      test("should not contain first element", () => {
        myList.removeFirst();
        expect(myList.head.currentValue).toEqual("Second item");
        expect(myList.head.nextElement.currentValue).toEqual("Third item");
        expect(myList.head.nextElement.nextElement).toBeNull();
      });
    });
  });

  describe("removeLast fn", () => {
    describe("when list is empty", () => {
      test("should throw an exception", () => {
        let myList = new MyLinkedList();
        expect(myList.removeLast).toThrow("Cannot remove element from empty Linked List!");
      });
    });

    describe("when list has only one element", () => {
      let myList;

      beforeEach(() => {
        myList = new MyLinkedList();
        myList.add('Single element');
      });
  
      test("should make head point to null", () => {
        myList.removeLast();
        expect(myList.head).toBeNull();
      });

      test("should make tail point to null", () => {
        myList.removeLast();
        expect(myList.tail).toBeNull();
      });

      test("should update size value", () => {
        myList.removeLast();
        expect(myList.size).toBe(0);
      });
    });

    describe("when list has multiple elements", () => {
      let myList;

      beforeEach(() => {
        myList = new MyLinkedList();
        myList.add('First item');
        myList.add('Second item');
        myList.add('Third item');
      });
  
      test("should make tail point to second item", () => {
        myList.removeLast();
        expect(myList.tail.currentValue).toEqual("Second item");
      });

      test("should not change element that head points to", () => {
        myList.removeLast();
        expect(myList.head.currentValue).toEqual("First item");
      });

      test("should not contain third element", () => {
        myList.removeLast();
        expect(myList.head.currentValue).toEqual("First item");
        expect(myList.head.nextElement.currentValue).toEqual("Second item");
        expect(myList.head.nextElement.nextElement).toBeNull();
      });
    });
  });

  describe("removeItem fn", () => {
    describe("when list is empty", () => {
      test("should throw an exception", () => {
        let myList = new MyLinkedList();
        expect(myList.removeLast).toThrow("Cannot remove element from empty Linked List!");
      });
    });

    describe("when list has only one element", () => {
      const item = "My element";
      let myList;
      
      beforeEach(() => {
        myList = new MyLinkedList();
        myList.add(item);
      });
  
      test("should make head point to null", () => {
        myList.removeItem(item);
        expect(myList.head).toBeNull();
      });

      test("should make tail point to null", () => {
        myList.removeItem(item);
        expect(myList.tail).toBeNull();
      });

      test("should update size value", () => {
        myList.removeItem(item);
        expect(myList.size).toBe(0);
      });
    });

    describe("when list has multiple elements", () => {
      const firstItem = "First item";
      const secondItem = "Second item";
      const thirdItem = "Third item";     
      let myList;

      beforeEach(() => {
        myList = new MyLinkedList();
        myList.add(firstItem);
        myList.add(secondItem);
        myList.add(thirdItem);
      });
  
      test("should remove third element, adjust tail and size", () => {
        myList.removeItem(thirdItem);
        expect(myList.tail.currentValue).toEqual(secondItem);
        expect(myList.size).toBe(2);
      });

      test("should remove first element, adjust head and size", () => {
        myList.removeItem(firstItem);
        expect(myList.head.currentValue).toEqual(secondItem);
        expect(myList.size).toBe(2);
      });

      describe("when removing an element between head and tail", () => {
        
        beforeEach(() => {
          myList.removeItem(secondItem);
        });

        test("should keep head and tail unchanged", () => {
          expect(myList.head.currentValue).toBe(firstItem);
          expect(myList.tail.currentValue).toBe(thirdItem);
        });

        test("should adjust pointers from remaining elements", () => {
          expect(myList.head.nextElement.currentValue).toBe(thirdItem);
          expect(myList.head.nextElement.nextElement).toBeNull();
        });

        test("should update list size", () => {
          expect(myList.size).toBe(2);
        });
      });
    });
  });
});
