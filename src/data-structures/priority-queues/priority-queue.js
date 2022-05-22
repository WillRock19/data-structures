/*
I. PRIORITY QUEUES

Is an abstract data type (ADT) that operates similar to a normal queue except that each element has
a certain priority. The priority of the elements determine the order in which elements are removed
from the Priority Queue.

    => NOTE: they only support comparable data, meaning the data inserted into the priority queue 
             must be able to be ordered in some way either from least to greatest or greatest to 
             least. 

We can use this, for instance, to create a queue where we store different numbers and the numbers are
taken out from the smaller to the bigger. But... how does the PQ keeps track of which one is the smallest
number at a given moment in time? 

For that, they use a HEAP. 

II. HEAPS

A HEAP is a a tree based data structure that satisfies the heap invariant - a type of structure property, 
which says that "if A is a parent of node B then A is ordered with respect to B for all nodes A, B in 
the heap". In other words: the value of the parent will always be bigger/equal or smaller/equal than the
child node, and this characteristic will be repeated for all nodes in the HEAP.

We have two types of HEAPS: max heap and min heap. HEAPS are the canonical underlying Data Structure used
in Priority Queues (but we can use other if we want). 

IMPORTANT: HEAPS are trees and, as such, they do not contain any cycles between nodes.  

III. COMPLEXITY PQ WITH BINARY HEAP

                                    Worst Case
Binary Heap Construction	            O(n)
Polling                                 O(log(n)) -> after removing the element, we might need to restore the HEAP invariant by reshuffleing it
Peeking                                 O(1)
Adding                                  O(log(n)) -> after adding the element, we might need to restore the HEAP invariant by reshuffleing it
Naive removing                          O(n)      -> linear scan to find the item and removing it
Advanced removing (uses hash table)     O(log(n))
Naive contains                          O(n)
Advanced contains (uses hash table)     O(1)

IMPORTANT: using a hash table to the operations above helps to optimize them, but it  takes up linear 
           space and also adds some overhead to the binary heap implementation.


IV. WHERE IT'S USED?

    -> Dijkstra's shortest path algorithm;

    -> Anytime you need to dynamically fetch the "next best" or "next worst" element;
    
    -> Huffman coding (which is often used for lossless data compression);

    -> Best First Search (BFS) algorithms;
    
    -> Used by Minimum Spanning Tree (MST) algorithms;*/

