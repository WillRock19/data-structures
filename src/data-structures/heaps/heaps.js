/*
I. DEFINITION

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

II. HEAP COMPLEXITY

            Best Case    Worst  Case
search         O(1)         O(n)
Insert         O(1)       O(log(n))
Delete         O(1)       O(log(n))
Delete all      -        O(n log(n))

You should never use HEAPS if search is a operation you need to prepare yourself to. Since
HEAPS always follows a same directive (highest/lowest elements above it's children), and that
directive does not help us to search a value, since it can be anywhere, the search operation,
on worst case, usually takes O(n), like a linked-list. It can be O(1) only if you want the
highest or lowest of all values, which will always be on the root - for any other case, it's
not good at all.

Insert in best case is just O(1). Technically this case happens when you can just insert it in an
empty place aas a leaf and the heap still valid. But if the value being added is bigger/lower than 
all the leaf's parents (and the HEAP is the type where this cannot happen), we start to swapping the
leaf value with all the parents, one by one, until the tree is ordered in a way that it becomes a
valid heap. This will take log(n).

On the best scenario, delete is also O(1) - for instance, if I'm removing a leaf. I just need to
find the leaf and delete it. But when we work with BINARY HEAP, we are ONLY ALLOWED TO DELETE THE
ROOT ELEMENT. So we change it with the last element and then reshuffle the HEAP so it still valid.
Then, we delete the leaf.

III. HEAP SORT

Heap sort is a way to sort a heap structure. Basically, we use the DELETE_ALL functionality and some
of the heap's properties. How, you may ask? First, remember that we always have to remove the ROOT
element on a heap. So we start swapping the root with the last leaf to the right of our HEAP. Then,
we remove it.

            80                        52                         52
         /      \                  /      \                   /      \
       69       73      =>       69       73       =>       69       73
     /   \    /    \           /   \    /    \            /   \    /     
    56   45  51     52        56   45  51     80         56   45  51


Then, we add the removed element to a list: [80]

Now, I compare the root with it's two childs. I get the highest of the two (in case of a heap where 
the root is the highest between all elements) and swap with the new 'last leaf'. After the swap, I 
delete the leaf. Then, I add the deleted element to my "ordered list". Finally, I can restart the 
whole process of "checking the root with it's child; selecting the highest of the children and swap
the root with it if necessary; swap the root new with the last leaf; delete the last leaf; start 
over". 

Interation 1:

            52                        73                         51                      51
         /      \                  /      \                   /      \                /      \
       69       73      =>       69       52       =>       69       52    =>       69       52
     /   \    /                /   \    /                 /   \    /              /   \        
    56   45  51               56   45  51                56   45  73             56   45

    List: [80, 73]


Interation 2:

            51                   69                    69                     52                     52                  
         /      \             /      \              /      \               /      \               /                         
       69       52   =>     51       52    =>     56       52   =>       56       69    =>      56                     
     /   \                /   \                 /   \                  /   \                  /   \                 
    56   45              56   45               51   45                51   45                51   45               


    List: [80, 73, 69]

Interation N: 

    List: [80, 73, 69, 56, 51, 45] => we have all elements of our heap ordered.

With that in mind, we can see that the HEAP SORT takes "n * log(n)".*/

class maximumHeap {
  #heap;
  #emptyPositionIndex;

  constructor() {
    this.#heap = [];
    this.#emptyPositionIndex = 0;
  }

  #indexOfNodeLeftSon = (currentNodeIndex) => {
    return 2 * currentNodeIndex + 1;
  };

  #indexOfNodeRightSon = (currentNodeIndex) => {
    return 2 * currentNodeIndex + 2;
  };

  #lastLeafIndex = () => {
    if (this.heapIsEmpty()) {
      return this.#emptyPositionIndex;
    }

    return this.#emptyPositionIndex - 1;
  };

  #swapValueFromIndexes = (firstIndex, secondIndex) => {
    const firstValue = this.#heap[firstIndex];
    const secondValue = this.#heap[secondIndex];

    if(firstValue && secondValue)
    {
      this.#heap[firstIndex] = this.#heap[secondIndex];
      this.#heap[secondIndex] = firstValue;
    }
  }

  #swapRootWithValueFromIndex = (index) => {
    this.#swapValueFromIndexes(0, index);
  };

  #removeLastLeaf = () => {
    this.#heap.pop();
  };

  #indexOfParentNode = (currentNodeIndex) => {
    const decimalIndex = currentNodeIndex / 2 - 1;
    return Math.ceil(decimalIndex);
  };

  #indexOfBiggestChildrenFromParent = (parentIndex) => {
    const leftChildIndex = this.#indexOfNodeLeftSon(parentIndex);
    const rightChildIndex = this.#indexOfNodeRightSon(parentIndex);

    const nodeLeftChild = this.#heap[leftChildIndex];
    const nodeRightChild = this.#heap[rightChildIndex];

    if (nodeLeftChild && nodeRightChild) {
      return nodeLeftChild > nodeRightChild ? leftChildIndex : rightChildIndex;
    }

    if (nodeLeftChild) return leftChildIndex;
    return rightChildIndex;
  }

  #sortHeapFromBottomToTop = (currentNodeIndex) => {
    if (currentNodeIndex === 0) return;

    const parentNodeIndex = this.#indexOfParentNode(currentNodeIndex);
    const parentNodeValue = this.#heap[parentNodeIndex];
    const currentNodeValue = this.#heap[currentNodeIndex];

    if (currentNodeValue > parentNodeValue) {
      this.#heap[parentNodeIndex] = currentNodeValue;
      this.#heap[currentNodeIndex] = parentNodeValue;
    }

    return this.#sortHeapFromBottomToTop(parentNodeIndex);
  };

  #sortHeapFromTopToBottom = (currentNodeIndex) => {
    if (!this.#heap[currentNodeIndex]) return;
  
    const biggerChildIndex = this.#indexOfBiggestChildrenFromParent(currentNodeIndex);
    
    this.#swapValueFromIndexes(currentNodeIndex, biggerChildIndex);
    return this.#sortHeapFromTopToBottom(biggerChildIndex);
  };

  heapIsEmpty = () => {
    return this.#heap.length === 0;
  };

  heapAsArray = () => {
    return this.#heap;
  };

  addNode = (value) => {
    if (this.heapIsEmpty()) {
      this.#heap[0] = value;
    } else {
      this.#heap[this.#emptyPositionIndex] = value;
      this.#sortHeapFromBottomToTop(this.#emptyPositionIndex);
    }
    this.#emptyPositionIndex++;
  };

  deleteRootNode = () => {
    if (this.heapIsEmpty()) {
      throw Error("Cannot delete value from empty heap!");
    }

    if (this.#heap.length === 1) {
      this.#heap = [];
      return;
    }

    this.#swapRootWithValueFromIndex(this.#lastLeafIndex());
    this.#removeLastLeaf();
    this.#sortHeapFromTopToBottom(0);
  };

  deleteAllNodes = () => {
    while(!this.heapIsEmpty()){
      this.deleteRootNode();
    }
  };

  valueOfLastLeaf = () => {
    return this.#heap[this.#lastLeafIndex()];
  };

  /* Here I could use the .filter() function from JScript, but since this is a educational code base, 
     I'll just use a simple loop to make sure everyone that reads it understands whats happening. */
  valueExistsInHeap = (valueToSearch) => {
    let indexToCheck = 0;
    let valueFound = false;

    while(!valueFound && indexToCheck < this.#heap.length)
    {
      valueFound = this.#heap[indexToCheck] === valueToSearch; 
      indexToCheck++;
    }
    return valueFound;
  };
}

export { maximumHeap };
