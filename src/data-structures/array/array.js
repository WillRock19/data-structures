/* The array has these properties:

Source: https://www.interviewcake.com/concept/java/array

	    Worst Case
space	O(n)
lookup	O(1)
append	O(1)
insert	O(n)
delete	O(n)

This is a representation of how an array could be seen (as an object with numbers as properties). 
It does not contain all arrays caracteristics (it's not created with a pre-defined number of elements), but its good 
enought for our pourposes here.

STRENGHTS:

    -> Fast lookups:  Retrieving the element at a given index takes  O(1) time, regardless of the length of the array.
    -> Fast appends. Adding a new element at the end of the array takes O(1) time, if the array has space.

WEAKNESSES:

    -> Fixed size: You need to specify how many elements you're going to store in your array ahead of time. (Unless you're using a fancy dynamic array.)
    -> Costly inserts and deletes: You have to "scoot over" the other elements to fill in or close gaps, which takes worst-case O(n) time.*/

class MyArrayAsClass {
  constructor() {
    this.length = 0;

    for (let key in arguments) {
      this[key] = arguments[key];
      this.length += 1;
    }
  }

  count = () => this.length;
}

function myArrayAsFunction() {
  let arr = Object.create(Array.prototype);
  arr.length = 0;

  for (let key in arguments) {
    arr[key] = arguments[key];
    arr.length += 1;
  }

  return arr;
}

export { MyArrayAsClass, myArrayAsFunction };
