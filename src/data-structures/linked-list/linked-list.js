/* The linked list has these properties:

Source: https://www.interviewcake.com/concept/java/linked-list

	           Worst Case
space	           O(n)
prepend          O(1)
append           O(1)
lookup	         O(n)
insert	         O(n)
search           O(n)
delete at tail	 O(n)
delete at head	 O(1)
delete at middle O(n)

A linked list organizes items sequentially, with each item storing a pointer to the next one. Picture 
a linked list like a chain of paperclips linked together. It's quick to add another paperclip to the 
top or bottom. It's even quick to insert one in the middle—just disconnect the chain at the middle link,
add the new paperclip, then reconnect the other half.

                     _______      _______      _______      _______
                    |___1___| -> |___2___| -> |___3___| -> |___10___| -> NULL
                        
                    WHERE: 1  => HEAD
                           10 => TAIL

An item in a linked list is called a node. The first node is called the head. The last node is called 
the tail.

STRENGHTS:

    -> Fast operations on the ends: Adding elements at either end of a linked list is O(1). Removing 
                                    the first element is also O(1).

    -> Flexible size: There's no need to specify how many elements you're going to store ahead of time.
                      You can keep adding elements as long as there's enough space on the machine.

WEAKNESSES:

    -> Costly lookups:  To access or edit an item in a linked list, you have to take O(i) time to walk 
                        from the head of the list to the ith item.
*/

class MyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  #initializeListWithElement = (elementToAdd) => {
    this.head = elementToAdd;
    this.tail = elementToAdd;
  };

  #addElementToExistingList = (elementToAdd) => {
    this.tail = elementToAdd;

    if (this.head === this.tail) {
      this.head.nextElement = this.tail;
    } else {
      let previousElement = this.head;

      while (previousElement.nextElement) {
        previousElement = previousElement.nextElement;
      }

      previousElement.nextElement = elementToAdd;
    }
  };

  #wrapInItemStructure = (elementValue) => {
    return {
      nextElement: null,
      currentValue: elementValue,
    };
  };

  #increaseSize = () => {
      this.size++;
  }

  #decreaseSize = () => {
    this.size--;
  }

  add = (elementValue) => { 
    if (!this.head) {
      this.#initializeListWithElement(this.#wrapInItemStructure(elementValue));
    } else {
      this.#addElementToExistingList(this.#wrapInItemStructure(elementValue));
    }
    this.#increaseSize();
  };

  append = (element) => {
    let elementToAdd = this.#wrapInItemStructure(element);
    
    this.tail.nextElement = elementToAdd;
    this.tail = elementToAdd;
    this.#increaseSize();
  };

  prepend = (element) => {
    let elementToAdd = this.#wrapInItemStructure(element);
    elementToAdd.nextElement = this.head;

    this.head = elementToAdd;
    this.#increaseSize();
  };

  removeFirst = () => {
    if(this.size === 0){
      throw new Error("Cannot remove element from empty Linked List!");
    }

    if(this.head === this.tail){
      this.tail = null;
    }

    this.head = this.head.nextElement;
    this.#decreaseSize();
  }

  removeLast = () => {
    if(this.size === 0){
      throw new Error("Cannot remove element from empty Linked List!");
    }

    if(this.head === this.tail){
      this.head = null;
      this.tail = null;
    }
    else{
      let currentElement = this.head;

      while(currentElement.nextElement !== this.tail){
        currentElement = currentElement.nextElement;
      }
  
      this.tail = currentElement;
      this.tail.nextElement = null;
      currentElement = null;
    }

    this.#decreaseSize();
  }
}

export { MyLinkedList };
