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
    let maximumHeap;

    beforeEach(() => {
      maximumHeap = new maximumHeap();
    });

    test("should return empty if heap is empty", () => {
      expect(maximumHeap.heapAsArray()).toEqual([]);
    });

    test("should return the array with all elements added to the heap", () => {
      maximumHeap.addNode(99);
      maximumHeap.addNode(50);
      maximumHeap.addNode(22);

      expect(maximumHeap.heapAsArray()).toEqual([99, 50, 22]);
    });
  });

  describe("addNode", () => {
    let maximumHeap;

    beforeEach(() => {
      maximumHeap = new maximumHeap();
    });

    test("should add first value to heap", () => {
      maximumHeap.addNode(10);
      expect(maximumHeap.heapAsArray()).toEqual([10]);
    });

    test("should add multiple values to heap correctly", () => {
      maximumHeap.addNode(100);
      maximumHeap.addNode(90);
      maximumHeap.addNode(80);
      maximumHeap.addNode(70);
      maximumHeap.addNode(60);
      maximumHeap.addNode(50);

      expect(maximumHeap.heapAsArray()).toEqual([100, 90, 80, 70, 60, 50]);
    });

    test("should reorder list and put second value as root if it is higher than the root", () => {
      maximumHeap.addNode(100);
      maximumHeap.addNode(101);

      expect(maximumHeap.heapAsArray()).toEqual([101, 100]);
    });

    test("should reorder list everytime a higher value is added, so all values can follow the directive of a maximum heap", () => {
      maximumHeap.addNode(100);
      maximumHeap.addNode(150);
      maximumHeap.addNode(200);
      maximumHeap.addNode(300);

      expect(maximumHeap.heapAsArray()).toEqual([300, 200, 150, 100]);
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

  describe('deleteRootNode', () => {
    let maximumHeap;

    beforeEach(() => {
      maximumHeap = new maximumHeap();
      maximumHeap.addNode(100);
    });

    test('should thrown exception when trying to delete element from empty heap', () => {
      const heap = new maximumHeap();

      expect(() => {
        heap.deleteRootNode();
      })
      .toThrowError('Cannot delete value from empty heap!');
    });

    test('should delete root node if heap has a single element', () => {
      maximumHeap.deleteRootNode();
      expect(maximumHeap.heapAsArray()).toEqual([]);
    });

    test('should delete root node if heap has two elements and make leaf a root', () => {
      maximumHeap.addNode(90);

      maximumHeap.deleteRootNode();
      expect(maximumHeap.heapAsArray()).toEqual([90]);
    });

    test('should delete root node if heap has three elements and resort the the heap', () => {
      maximumHeap.addNode(90);
      maximumHeap.addNode(60);

      maximumHeap.deleteRootNode();
      expect(maximumHeap.heapAsArray()).toEqual([90, 60]);
    });

    test('should delete node and sort it all to apply invariant if heap has multiple levels', () => {
      maximumHeap.addNode(90);
      maximumHeap.addNode(80);
      maximumHeap.addNode(70);
      maximumHeap.addNode(60);
      maximumHeap.addNode(50);
      maximumHeap.addNode(40);

      maximumHeap.deleteRootNode();
      expect(maximumHeap.heapAsArray()).toEqual([90, 70, 80, 40, 60, 50]);
    });
  });

  describe('deleteAllNodes', () => {
    let maximumHeap;

    beforeEach(() => {
      maximumHeap = new maximumHeap();
      maximumHeap.addNode(100);
    });

    test('should delete all values if heap has only root node', () => {
      maximumHeap.deleteAllNodes();
      expect(maximumHeap.heapAsArray()).toEqual([]);
    });

    test('should should delete all values if heap has two levels', () => {
      maximumHeap.addNode(90);
      maximumHeap.addNode(80);

      maximumHeap.deleteAllNodes();
      expect(maximumHeap.heapAsArray()).toEqual([]);
    });

    test('should should delete all values if heap has multiple levels', () => {
      maximumHeap.addNode(90);
      maximumHeap.addNode(80);
      maximumHeap.addNode(70);
      maximumHeap.addNode(60);
      maximumHeap.addNode(50);
      maximumHeap.addNode(40);
      maximumHeap.addNode(30);
      maximumHeap.addNode(20);
      maximumHeap.addNode(10);

      maximumHeap.deleteAllNodes();
      expect(maximumHeap.heapAsArray()).toEqual([]);
    });
  });

  describe('valueExistsInHeap', () => {
    let maximumHeap;

    beforeEach(() => {
      maximumHeap = new maximumHeap();
      maximumHeap.addNode(100);
    });

    test('should return true if value exists in root heap', () => {
      expect(maximumHeap.valueExistsInHeap(100)).toBeTruthy();
    });

    test('should return true if value exists in heap with multiple values', () => {
      maximumHeap.addNode(90);
      maximumHeap.addNode(80);
      maximumHeap.addNode(70);
      maximumHeap.addNode(60);
      maximumHeap.addNode(50);
      maximumHeap.addNode(40);
      maximumHeap.addNode(30);
      maximumHeap.addNode(20);
      maximumHeap.addNode(10);

      expect(maximumHeap.valueExistsInHeap(10)).toBeTruthy();
    });


    test('should return false if value do not exist in heap', () => {
      expect(maximumHeap.valueExistsInHeap(10)).toBeFalsy();
    });
  });
});
