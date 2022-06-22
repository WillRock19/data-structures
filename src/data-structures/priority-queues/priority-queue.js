/*
I. PRIORITY QUEUES (PQ)

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

Heaps can be represented as arrays. So we could have a heap...

                               80
                            /      \
                           69       73  
                         /   \    /   \
                        56   45  51   52

... that could be represented as the following array:
      ________________________________
    | 80 | 69 | 73 | 56 | 45 | 51 | 52 | 
      --------------------------------

But, how can you find each element on an array structure? Simple, my dear Padawan! 

Since the heap is a BINARY SEARCH TREE we know each node can have at maximum two children. With that
in mind, if an element has index i its children would be "2*i + 1" for the lef child and "2*i + 2" 
for the right one.

Want an example? Okay. We have the root node, 80, which index = 0. What are its children's indexes?

    Parent i      => 0
    Left child i  => 2*0 + 1 = 1
    Right child i => 2*0 + 2 = 2 

Now, we have node 69, which i = 1. What are its children's indexes?

    Parent i      => 1
    Left child i  => 2*1 + 1 = 3
    Right child i => 2*1 + 2 = 4 

So, as we can see in the graph representation, the values of array[3] = 56 and array[4] = 45.
Awesome, right?

What if I want to find the parent of a left child/right child? In our example, if I want to find
the parent of 56 (index 3) and 45 (index 4). Well, supossing I don't know which one is the left or
the right node:

    parent-node-index = node-index / 2 - 1

Then we just ceilling (round up) the result. We'd have:

    parent-index = 3 / 2  - 1 =  1,5 - 1 = 0,5. We could round up and have parent-index = 1.
    parent-index = 4 / 2  - 1 =  2,0 - 1 = 1,0.   

So the parent index is 1!

III. HEAP COMPLEXITY

            Best Case    Worst  Case
Insert         O(1)       O(log(n))
Delete         O(1)       O(log(n))

Insert in best case is just O(1). Technically this case happens when you can just insert it in an
empty place aas a leaf and the heap still valid. But if the value being added is bigger/lower than 
all the leaf's parents (and the HEAP is the type where this cannot happen), we start to swapping the
leaf value with all the parents, one by one, until the tree is ordered in a way that it becomes a
valid heap. This will take log(n).

On the best scenario, delete is also O(1) - for instance, if I'm removing a leaf. I just need to
find the leaf and delete it. But when we work with BINARY HEAP, we are ONLY ALLOWED TO DELETE THE
ROOT ELEMENT. So we change it with the last element and then reshuffle the HEAP so it still valid.
Then, we delete the leaf.


IV. COMPLEXITY PQ WITH BINARY HEAP

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


V. WHERE IT'S USED?

    -> Dijkstra's shortest path algorithm;

    -> Anytime you need to dynamically fetch the "next best" or "next worst" element;
    
    -> Huffman coding (which is often used for lossless data compression);

    -> Best First Search (BFS) algorithms;
    
    -> Used by Minimum Spanning Tree (MST) algorithms;
    
    
    https://www.delftstack.com/pt/howto/javascript/javascript-hashmap/
    
    */

