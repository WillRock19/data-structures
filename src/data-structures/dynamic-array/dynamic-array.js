/* The dynamic array has these properties:

Source: https://www.interviewcake.com/concept/java/dynamic-array

	    Average Case    Worst Case
space	    O(n)            O(n)
lookup	  O(1)            O(1)
append	  O(1)            O(n)
insert	  O(n)            O(n)
delete	  O(n)            O(n)

A dynamic array is an array with a big improvement: automatic resizing.

One limitation of arrays is that they're fixed size, meaning you need to specify the number of elements 
your array will hold ahead of time. A dynamic array expands as you add more elements.

OBS: Since JScript can't receive multiple constructors (to make an overload), we'll implement this
     assuming that the user may not pass the 'number of elements' the DynamicArray should start with.

     The user can only pass the elements to be added in the array and our DynamicArray will define the 
     length and other properties as necessary.

STRENGHTS:

    -> Fast lookups: Just like arrays, retrieving the element at a given index takes O(1) time.
    -> Variable size: You can add as many items as you want, and the dynamic array will expand to hold them.
    -> Cache-friendly: Just like arrays, dynamic arrays place items right next to each other in memory, making
       efficient use of caches.

WEAKNESSES:

    -> Slow worst-case appends: Usually, adding a new element at the end of the dynamic array takes 
       O(1) time. But if the dynamic array doesn't have any room for the new item, it'll need to 
       expand, which takes O(n) time.

    -> Costly inserts and deletes: Just like arrays, elements are stored adjacent to each other. 
       So adding or removing an item in the middle of the array requires "scooting over" other elements,
       which takes O(n) time.*/

class MyDynamicArray {
  #perceivedArrayLength;
  #actualArrayLength;
  #internalArray;

  constructor() {
    this.#perceivedArrayLength = arguments.length;
    this.#actualArrayLength = arguments.length * 2;
    this.#internalArray = new Array(this.#actualArrayLength);

    for (let index = 0; index < arguments.length; index++) {
      this.#internalArray[index] = arguments[index];
    }
  }

  #newArraySize = () => {
    return this.#actualArrayLength * 2;
  }

  #resizeInternalArray = () => {
    let newArray = new Array(this.#newArraySize());

    for (let index = 0; index < this.#internalArray.length; index++) {
      newArray[index] = this.#internalArray[index];
    }

    this.#internalArray = newArray;
    this.#actualArrayLength = this.#internalArray.length;

    newArray = null;
  };

  #internalArrayNotFull = () => {
    return this.#perceivedArrayLength < this.#actualArrayLength;
  };

  size = () => {
    return this.#perceivedArrayLength;
  };

  push = (element) => {
    if (this.#internalArrayNotFull()) {
      this.#internalArray[this.#perceivedArrayLength] = element;
      this.#perceivedArrayLength++;
    } else {
      this.#resizeInternalArray();
      this.push(element);
    }
  };

  remove = (element) => {
    for(let index = 0; index < this.#perceivedArrayLength; index++){
      if(this.#internalArray[index] === element) {
        this.removeAt(index);
        return true;
      }
    }
    return false;
  }

  removeAt = (indexToExclude) => {
    if (indexToExclude >= this.#perceivedArrayLength || indexToExclude < 0) {
      throw new Error(
        `Index out of bounds! The index ${indexToExclude} does not exist inside the array!`
      );
    }

    let newArray = new Array(this.#actualArrayLength);
    let newArrayIndex = 0;

    this.#internalArray.forEach((element, currentIndex) => {
      if(currentIndex !== indexToExclude){
        newArray[newArrayIndex] = element;
        newArrayIndex++;
      }
    });

    this.#perceivedArrayLength--;
    this.#internalArray = newArray;
  }

  indexOf = (element) => {
    for(let index = 0; index < this.#perceivedArrayLength; index++){
      if(this.#internalArray[index] === element) {
        return index;
      }
    }
    return -1;
  }

  contains = (element) => {
    return this.indexOf(element) !== -1;
  }

  values = () => {
    return this.#internalArray.slice(0, this.#perceivedArrayLength);
  };

  isEmpty = () => {
    return this.#perceivedArrayLength === 0;
  };

  clearContent = () => {
    this.#internalArray = new Array(0);
    this.#perceivedArrayLength = 0;
  };

  elementAt = (index) => {
    if (index >= this.#perceivedArrayLength || index < 0) {
      throw new Error(
        `Index out of bounds! The index ${index} does not exist inside the array!`
      );
    }

    return this.#internalArray[index];
  };
}

export { MyDynamicArray };
