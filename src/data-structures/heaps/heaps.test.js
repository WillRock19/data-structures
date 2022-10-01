import { maximumHeap } from "./heaps";

describe("MaximumHeap", () => {
  describe("heapIsEmpty", () => {
    test("should return true if heap is empty", () => {
      const heap = new maximumHeap();
      expect(heap.heapIsEmpty()).toBeTruthy();
    });

    test("should return false if heap is not empty", () => {
      const heap = new maximumHeap();
      heap.addNode(10);

      expect(heap.heapIsEmpty()).toBeFalsy();
    });
  });

  describe("heapAsArray", () => {
    let heap;

    beforeEach(() => {
      heap = new maximumHeap();
    });

    test("should return empty if heap is empty", () => {
      expect(heap.heapAsArray()).toEqual([]);
    });

    test("should return the array with all elements added to the heap", () => {
      heap.addNode(99);
      heap.addNode(50);
      heap.addNode(22);

      expect(heap.heapAsArray()).toEqual([99, 50, 22]);
    });
  });

  describe("addNode", () => {
    let heap;

    beforeEach(() => {
      heap = new maximumHeap();
    });

    test("should add first value to heap", () => {
      heap.addNode(10);
      expect(heap.heapAsArray()).toEqual([10]);
    });

    test("should add multiple values to heap correctly", () => {
      heap.addNode(100);
      heap.addNode(90);
      heap.addNode(80);
      heap.addNode(70);
      heap.addNode(60);
      heap.addNode(50);

      expect(heap.heapAsArray()).toEqual([100, 90, 80, 70, 60, 50]);
    });

    test("should reorder list and put second value as root if it is higher than the root", () => {
      heap.addNode(100);
      heap.addNode(101);

      expect(heap.heapAsArray()).toEqual([101, 100]);
    });

    test("should reorder list everytime a higher value is added, so all values can follow the directive of a maximum heap", () => {
      heap.addNode(100);
      heap.addNode(150);
      heap.addNode(200);
      heap.addNode(300);

      expect(heap.heapAsArray()).toEqual([300, 200, 150, 100]);
    });
  });

  describe("valueOfLastLeaf", () => {
    test("should return undefined from root if heap is empty", () => {
      const heap = new maximumHeap();
      expect(heap.valueOfLastLeaf()).toBeUndefined();
    });

    test("should return value if heap has only the root element", () => {
      const heap = new maximumHeap();
      const value = 19;

      heap.addNode(value);
      expect(heap.valueOfLastLeaf()).toBe(value);
    });

    test("should return value if heap has multiple elements", () => {
      const heap = new maximumHeap();

      heap.addNode(19);
      heap.addNode(5);

      expect(heap.valueOfLastLeaf()).toBe(5);
    });
  });

  describe("deleteRootNode", () => {
    let heap;

    beforeEach(() => {
      heap = new maximumHeap();
      heap.addNode(100);
    });

    test("should thrown exception when trying to delete element from empty heap", () => {
      const heapThatThrows = new maximumHeap();

      expect(() => {
        heapThatThrows.deleteRootNode();
      }).toThrowError("Cannot delete value from empty heap!");
    });

    test("should delete root node if heap has a single element", () => {
      heap.deleteRootNode();
      expect(heap.heapAsArray()).toEqual([]);
    });

    test("should delete root node if heap has two elements and make leaf a root", () => {
      heap.addNode(90);

      heap.deleteRootNode();
      expect(heap.heapAsArray()).toEqual([90]);
    });

    test("should delete root node if heap has three elements and resort the the heap", () => {
      heap.addNode(90);
      heap.addNode(60);

      heap.deleteRootNode();
      expect(heap.heapAsArray()).toEqual([90, 60]);
    });

    test("should delete node and sort it all to apply invariant if heap has multiple levels", () => {
      heap.addNode(90);
      heap.addNode(80);
      heap.addNode(70);
      heap.addNode(60);
      heap.addNode(50);
      heap.addNode(40);

      heap.deleteRootNode();
      expect(heap.heapAsArray()).toEqual([90, 70, 80, 40, 60, 50]);
    });
  });

  describe("deleteAllNodes", () => {
    let heap;

    beforeEach(() => {
      heap = new maximumHeap();
      heap.addNode(100);
    });

    test("should delete all values if heap has only root node", () => {
      heap.deleteAllNodes();
      expect(heap.heapAsArray()).toEqual([]);
    });

    test("should should delete all values if heap has two levels", () => {
      heap.addNode(90);
      heap.addNode(80);

      heap.deleteAllNodes();
      expect(heap.heapAsArray()).toEqual([]);
    });

    test("should should delete all values if heap has multiple levels", () => {
      heap.addNode(90);
      heap.addNode(80);
      heap.addNode(70);
      heap.addNode(60);
      heap.addNode(50);
      heap.addNode(40);
      heap.addNode(30);
      heap.addNode(20);
      heap.addNode(10);

      heap.deleteAllNodes();
      expect(heap.heapAsArray()).toEqual([]);
    });
  });

  describe("valueExistsInHeap", () => {
    let heap;

    beforeEach(() => {
      heap = new maximumHeap();
      heap.addNode(100);
    });

    test("should return true if value exists in root heap", () => {
      expect(heap.valueExistsInHeap(100)).toBeTruthy();
    });

    test("should return true if value exists in heap with multiple values", () => {
      heap.addNode(90);
      heap.addNode(80);
      heap.addNode(70);
      heap.addNode(60);
      heap.addNode(50);
      heap.addNode(40);
      heap.addNode(30);
      heap.addNode(20);
      heap.addNode(10);

      expect(heap.valueExistsInHeap(10)).toBeTruthy();
    });

    test("should return false if value do not exist in heap", () => {
      expect(heap.valueExistsInHeap(10)).toBeFalsy();
    });
  });
});
