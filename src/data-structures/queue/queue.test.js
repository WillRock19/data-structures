import { QueueWithList } from "./queue";

describe("QueueWithList", () => {
  describe("constructor", () => {
    test("should initialize list", () => {
      const queue = new QueueWithList();
      expect(queue.size()).toBe(0);
    });
  });

  describe("isEmpty fn", () => {
    test("should return true if queue is empty", () => {
      const queue = new QueueWithList();
      expect(queue.isEmpty()).toBeTruthy();
    });

    test("should return false if queue has one element", () => {
      const queue = new QueueWithList(1);
      expect(queue.isEmpty()).toBeFalsy();
    });
  });

  describe("poll fn", () => {
    describe("when queue is empty", () => {
      test("should throw an exception", () => {
        const queue = new QueueWithList();
        expect(() => queue.poll()).toThrowError();
      });
    });

    describe("when queue has single element", () => {
      let queue;

      beforeEach(() => {
        queue = new QueueWithList("First");
      });

      test("should return element from queue", () => {
        const element = queue.poll();
        expect(element).toBe("First");
      });

      test("should remove element from queue", () => {
        queue.poll();
        expect(queue.size()).toBe(0);
      });
    });

    describe("when queue has multiple element", () => {
        let queue;

        beforeEach(() => {
          queue = new QueueWithList("First");
          queue.offer("Second");
          queue.offer("Third");
        });
  
        test("should return the first element from queue", () => {
          const element = queue.poll();
          expect(element).toBe("First");
        });
  
        test("should return all first elements until list is empty", () => {
          const first = queue.poll();
          const second = queue.poll();
          const third = queue.poll();

          expect(first).toBe("First");
          expect(second).toBe("Second");
          expect(third).toBe("Third");
        });
    });
  });

  describe("offer fn", () => {    
    test("should add elements to queue", () => {
        const queue = new QueueWithList();

        queue.offer(10);
        queue.offer(20);
        queue.offer(33);
        queue.offer(45);
        expect(queue.size()).toBe(4);
    });
  });
});
