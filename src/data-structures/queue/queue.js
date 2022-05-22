import { MyLinkedList } from "../linked-list/linked-list";

/* The stack properties:

Source: https://www.interviewcake.com/concept/python/queue

	      Worst Case
space	     O(n)
enqueue    O(1)
dequeue    O(1)
peek       O(1)

A queue stores items in a "first-in, first-out" (FIFO) order. They can be implemented with lists or
arrays, for instance.

Picture a queue like the line outside a busy restaurant. First come, first served.

                     _______     _______     _______     _______
                    |___1___| - |___2___| - |___3___| - |__100__|

WHERE:

  * Order elements entered: 1, 2, 3, 100
  
  * Order elements get out: 1, 2, 3, 100

STRENGHTS:

    -> Fast operations: All queue operations take O(1) time.

USES:

    -> Breadth-first search: uses a queue to keep track of the nodes to visit next.
    
    -> Printers: use queues to manage jobs—jobs get printed in the order they're submitted.

    -> Web servers: use queues to manage requests—page requests get fulfilled in the order they're received.

    -> Processes: wait in the CPU scheduler's queue for their turn to run.
*/


class QueueWithList {
  #internalList;

  constructor(firstElement) {
    this.#internalList = new MyLinkedList();

    if (firstElement) {
      this.#internalList.add(firstElement);
    }
  }

  poll = () => {
    const firstElement = this.#internalList.peek();
    return firstElement;
  }

  offer = (element) => {
    this.#internalList.add(element);
  }

  size = () => this.#internalList.size;

  isEmpty = () => this.#internalList.size === 0;
}

export { QueueWithList };
