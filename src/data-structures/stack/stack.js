import { MyLinkedList } from "../linked-list/linked-list";

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
    this.#internalList.removeLast();
  }

  size = () => this.#internalList.size;

  empty = () => this.#internalList.size === 0;
}

export { StackWithList };
