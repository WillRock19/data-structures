import { MyLinkedList } from "../linked-list/linked-list";

/* The stack properties:

Source: https://www.interviewcake.com/concept/python/stack?

	      Worst Case
space	     O(n)
search     O(n)
push       O(1) on most cases. With dynamic array, could be O(n) on edge cases (because the array is full, it needs to create a new one, copy everything on it, then add, etc.)
pop        O(1)
peek       O(1)

A stack stores items in a "last-in, first-out" (LIFO) order.

Picture a pile of dirty plates in your sink. As you add more plates, you bury the old ones further down.
When you take a plate off the top to wash it, you're taking the last plate you put in. "Last in, first 
out."

                  _______     
                 |___4___| 
                    
                    \|/
                  _______      
                 |___3___|

                    \|/

                  _______     
                 |___2___|

                    \|/
                  _______ 
                 |___1___|
                    
An item in a linked list is called a node. The first node is called the head. The last node is called 
the tail. A Stack can be used with any other data structures, like a linked list or an array. Here we
are going to create two classes, one using a LinkedList, the other using an Array, just to make this
clear.

Usually, we use arrays to implement a stack, because it's just how arrays work (adding to the end and
removing elements from the end).

STRENGHTS:

    -> Fast operations: All stack operations take O(1) time.

WEAKNESSES:

    -> Removing first: As explained, a stack is a LIFO. In other words: if you want to take the first 
                       element out, you're gonna have to take ALL elements from the stack.

USES:
  * The call stack: is a stack that tracks function calls in a program. When a function returns, which 
                    function do we "pop" back to? The last one that "pushed" a function call.

  * Depth-first search: uses a stack (sometimes the call stack) to keep track of which nodes to visit next.

  * String parsing—stacks: turn out to be useful for several types of string parsing.*/

class StackWithList {
  #internalList;

  constructor(firstElement) {
    this.#internalList = new MyLinkedList();

    if (firstElement) {
      this.push(firstElement);
    }
  }

  push = (itemToAdd) => {
    this.#internalList.add(itemToAdd);
  };

  pop = () => {
    if (this.#internalList.size === 0) return null;

    const element = this.#internalList.tail.currentValue;
    this.#internalList.removeLast();

    return element;
  };

  peek = () => {
    if (this.empty()) {
      throw new Error(
        "You cannot peek any element because the stack is empty!"
      );
    } else {
      const elementAtTopOfStack = this.#internalList.tail.currentValue;
      this.#internalList.removeLast();

      return elementAtTopOfStack;
    }
  };

  size = () => this.#internalList.size;

  empty = () => this.#internalList.size === 0;
}

class StackWithArray {
  #internalArray;

  constructor() {
    this.#internalArray = []; //by default, arrays in JS are dynamic arrays. So we can use this or the one we created.
  }

  #lastElementIndex = () => {
    return this.#internalArray.length - 1;
  };

  push = (itemToAdd) => {
    this.#internalArray.push(itemToAdd);
  };

  pop = () => {
    if (this.empty()) {
      return null;
    }

    const lastElementIndex = this.#lastElementIndex();
    const lastElement = this.#internalArray[lastElementIndex];

    this.#internalArray[lastElementIndex] = null;
    return lastElement;
  };

  peek = () => {
    if (this.empty()) {
      throw new Error(
        "You cannot peek any element because the stack is empty!"
      );
    } else {
      return this.#internalArray[this.#lastElementIndex()];
    }
  };

  size = () => this.#internalArray.length;

  empty = () => this.#internalArray.length === 0;
}

export { StackWithList, StackWithArray };
