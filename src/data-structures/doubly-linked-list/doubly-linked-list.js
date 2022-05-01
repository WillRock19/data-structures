/* The doubly-linked list has these properties:

Source: https://www.interviewcake.com/concept/java/linked-list and https://youtu.be/RBSGKlAvoiM?t=2909

	          Worst Case
space	         O(n)
prepend          O(1)
append           O(1)
lookup	         O(n)
insert	         O(n)
search           O(n)
delete at tail	 O(1)
delete at head	 O(1)
delete at middle O(n)

It works like the list, but each element has also a point to it's predecesor. Since each pointer uses
a specific amount of memory (in a 32 bits machine, 4 bytes for pointer), the doubly-link list has twice
amount of pointers, so it uses 2X memory than a simple linked list.

                     _______  ->   _______  ->  _______  ->  _______
            NULL <- |___1___| <-  |___2___| <- |___3___| <- |___10___| -> NULL
                        
                    WHERE: 1  => HEAD
                           10 => TAIL

STRENGHTS:

    -> Same as Single Linked List

    -> Easier to delete from tail (I don't need to iterate throught all the elements to find the one
       previous to the tail).

WEAKNESSES:

    -> Uses more memory than Single List. */

class MyDoublyLinkedList {
  constructor() {}
}

export { MyDoublyLinkedList };
