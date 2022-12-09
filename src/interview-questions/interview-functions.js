import {Node} from '../data-structures/trees/binary-tree'

/*
TWO SUMS
  First of, we can create a solution that is not the best, but it will work to solve the problem.

  I've did it with the code bellow:

      const twoSums = (numbers, target) => {
        for (let index = 0; index < numbers.length; index++) {
          for (let index2 = index + 1; index2 < numbers.length; index2++) {
            const sumOfNumbers = numbers[index] + numbers[index2];
            if (sumOfNumbers === target) return [index, index2];
          }
        }
      };
  
  It does work (all tests are passing), but it's a solution O(n^2). We need to avoid this kind of
  solution, make something that has a better time complexity.
  
  To solve this, we can use a second approach: let's use a dictionary to store the subtraction of
  target - the i element in the numbers array. When we do this, we know which number is necessary
  to sum with i to give us the target. Then we can search each element of the array until we find 
  it.
  
  The complexity to access the dictionary is O(1) and for iterate through the numbers array is O(n),
  so we reduced from O(n^2).*/

const twoSums = (numbers, target) => {
  const numbersFound = {};

  for (let index = 0; index <= numbers.length; index++) {
    const number = numbers[index];
    const difference = target - number;

    if (numbersFound[difference] === undefined) {
      numbersFound[number] = index;
    } else {
      const numberStored = numbersFound[target - number];
      return [numberStored, index];
    }
  }
};

/*
MIN STACK
  Min stack is a stack which will receive elements and always return the lowest of then. Usually a
  stack always return the last element that was pushed in there first, ignoring if the element is
  the min or not. 
  
  So, to do this we'll have to implement the stack a little different from what we're used to. To
  do this we'll use two different structures inside our minStack class: a stack, were we add our
  elements, and a list with all the minimun values that we have inside our stack (because if I 
  push 3, 2 and 0, the minimum value will first be 3, then 2, then 0, and if I remove 0 it goes 
  back to be 2, and so on).
  
  So, for instance, we'd have:
  
    stack    = [4, 7, 9, 1]
    minStack = [4, 1]
  
  When performing pop, we check if the element exists in the minStack and, if so, we remove it 
  from there too. That's how you can do this.
*/

class minStack{}

/*
MAX STACK
  The max stack is similar to the minStack, with some differences. Everytime we push something
  we have to check if the maxStack is empty or not and check if the last element in there is
  lower than the one we are adding (basically, the opposite we do with minStack). When removing
  itens from the stack, we have to remove from the maxStack too.

  So, for instance:

    stack    = [7, 9, 5, 1]
    minStack = [7, 8]
*/

class maxStack{}

/*
REVERSE SINGLE LINKED LIST
  With a double linked list, we can just jump to the tail and then go back until the head. With
  single linked lists this wouldn't work, so we have to do it in other way. The first thing you
  might think is to use a list to put each elements from the linked list, and then iterate it
  backwards.

  The problem is that this would increase the complexity AND the space.

  Another way to deal with this is creating three variables which will be updated inside a loop
  that we'll use to iterate through all nodes in the list. The variables would be:

    preecedingNode;
    currentNode;
    succedingNode;

  The idea here will be to iterate through the linked list creating new connections between the
  nodes, were each connection will now be pointing backwards, which will create a new, reversed,
  linked list.

  So, when we start we have something like:

    preceedingNode = null;
    currentNode = this.head;
    succedingNode = null;
  
  Then, we start our loop. The stop condition should be currentNode == null (which is the end of
  the linked list). Then, inside the loop, we go to this.head.next() and update each of the three
  variables:

    succeddingNode = this.head.next();
    current.setNext(preceedingNode);
    preceedingNode = currentNode;
    currentNode = successorNode;

  How is this gonna work, you ask? Well, imagine we have the following linked list:
     ___      ___      ___      ____
    | 1 | -> | 2 | -> | 5 | -> | 10 | -> null
     ---      ---      ---      ----

     head = 1;

  Now, our function receives the head. When we start the loop, our variables are basically:
  
        preceedingNode = null;
        currentNode  = the head, meaning 1; 
        current.next = the head.next(), meaning 2;
        succeddingNode = null;
  
  After the first iteration the list will be:
             ___      ___      ___      ____
    null <- | 1 | <- | 2 | || | 5 | -> | 10 | -> null
             ---      ---      ---      ----

        preceedingNode = 1;
        preceedingNode.next = null;
        currentNode  = 2; 
        current.next = 1;
        succeddingNode = 2;

  In the second iteration:

      After the first iteration the list will be:
             ___      ___      ___      ____
    null <- | 1 | <- | 2 | <- | 5 | || | 10 | -> null
             ---      ---      ---      ----
  
        preceedingNode = 2;
        preceedingNode.next = 1;
        currentNode  = 5; 
        current.next = 2;
        succeddingNode = 5;
         
  And so on and forth. Since we are always setting the currentNode.next to the preceedingNode, we
  basically are making each connection backwards as we move further into the linked list. The while
  will be done when currentNode is null (the value connected to the last node), and then you'll only
  need to return the preceedingNode.
  
  The complexity for this algorithm is O(n), and the space complexity is constant, since we'll only
  use these three variables each time.*/

const reverseLinkedList = (linkedListHead) => {
    let preceedingNode = null;
    let currentNode = linkedListHead;
    let successorNode = null;
  
    while(currentNode != null)
    {
      successorNode = currentNode.next();
      currentNode.setNext(preceedingNode);
      preceedingNode = currentNode;
      currentNode = successorNode;
    }

    return preceedingNode;
}

/*
CONSTRUCT BINARY TREE FROM PRE-ORDER AND IN-ORDER TRANSVERSALS
  The pre-order follows the pattern "Root -> Left -> Right" and in-order follows the pattern
  "Left -> Root -> Right". With that in mind, you can navigate the pre-order transversal, get the
  root. Then you find that element in the in-order transversal Every element to the left of it are
  elements that goes in the left of the tree, and every element in the right are the ones that goes
  to the right in thee tree.

  Knowing that, you can navigate through each of the elements in the pre-order transversal and start
  to re-create the tree. An example:

          - preorder = [1,2,4,8,9,5,10,11,3,6,7]
          - inorder  = [8,4,9,2,10,5,11,1,6,3,7]

    Loop 1:

      Root: 1
      Elements to the left: 8,4,9,2,10,5,11
      Elements to the right: 6,3,7

    Loop 2:

      Root: 2
      Elements to the left: 8,4,9
      Elements to the right: 10,5,11,1,6,3,7
      
    Loop 3:

      Root: 4
      Elements to the left: 8
      Elements to the right: 9,2,10,5,11,1,6,3,7

    Loop 4:

      Root: 8
      Elements to the left:  null
      Elements to the right: 4,9,2,10,5,11,1,6,3,7


    Tree until this point:

                  1
                /   \
              2
            /
          4
        /
      8

    Note there's nothing more to the left of 8.

    Loop 5:

      Root: 9
      Elements to the left: 8,4
      Elements to the right: 2,10,5,11,1,6,3,7

    Since the 8 and 4 are already done, we know this part of the tree is over. We have:

                  1
                /   \
              2
            /
          4
         / \
        8   9

    Then we go on until every element has been checked.*/

const constructTree = (preOrder, inOrder) => {
  if(inOrder.length === 0){
    return;
  }

  if(preOrder.length === 1){
    return new Node(preOrder[0]);
  }

  const elementPreOrder = preOrder.shift();
  const indexInOrder = inOrder.indexOf(elementPreOrder);
  const treeNode = new Node(inOrder[indexInOrder]);

  treeNode.leftChild = constructTree(preOrder, inOrder.slice(0, indexInOrder));
  treeNode.rightChild = constructTree(preOrder, inOrder.slice(indexInOrder + 1));

  return treeNode;
}

/*
  The constructTree is a good solution, but there are some problems in the approach. First of, we
  are popping the first element of the preOrder array, which takes O(n) because basically we have
  to create a new array and resize it everytime the first element is removed. The second part is
  when we slice the inOrder array, because in JScript slicing is O(n), where n is the end - start
  indexes.
  
    -> More here: https://stackoverflow.com/questions/22614237/javascript-runtime-complexity-of-array-functions

  So, in the end, our constructTree takes O(n^2) to execute.

  We need to do better.
  
  First of, instead of run through the inOrder array, you ould add it's elements into a map, which
  would make the access to each content during the while a constant O(1).With this change, you 
  wouldn't need to slice the array every time. The second problem is the "popping the last element"
  part. To solve this, you could invert the order of the preOrder array. With that, it will cost
  you to reverse the elements, but then you could remove the last element of the array, instead of
  the first... which is now O(1). 

  We'll also use pointers to point to the left and right elements from inOrder array. With that, we
  can understand if we already check every possible elements to the left and the right of the current
  root - in other words: this should be our stop condition.
  */

const betterConstructTreeHelper = (preOrder, inOrder, leftPointer, rightPointer, indexesByValue) => {
  if(leftPointer >= rightPointer){
    return;
  }
  
  const currentNumber = preOrder.pop();
  const rootNode = new Node(currentNumber);
  const inOrderIndex = indexesByValue[currentNumber];

  rootNode.leftChild = betterConstructTreeHelper(preOrder, inOrder, leftPointer, inOrderIndex, indexesByValue);
  rootNode.leftChild = betterConstructTreeHelper(preOrder, inOrder, inOrderIndex+1, rightPointer, indexesByValue);

  return rootNode;
}

const betterConstructTree = (preOrder, inOrder) => {
  const memoryObject = {};

  inOrder.forEach((index, value) => {
    memoryObject[value] = index;
  });

  const rootNode = betterConstructTreeHelper(preOrder.reverse(), inOrder, 0, inOrder.length(), memoryObject);
}

/*
INVERT BINARY TREE
  To do this, we usually work with recursion. Each node of each level of the tree becomes the root
  during the recursion, and each of it's children becomes the left and right child. In other words:
  we create a loop recursion, goes through each of the three's level working with it's elements as
  subtrees.
  
  When we talk about "intert a  Binary tree", we are basically saying we want to make it's elements
  as "every element from the right will become an element from the left". In other words:

              1
            /   \
          2       3
        /  \    /  \
       4    5  6    7

  Will become:

              1
            /   \
          3       2
        /  \    /  \
       7    6  5    4
*/

const invertTree = (rootNode) => {
  if(rootNode == null){
    return;
  }

  const temporary = rootNode.leftChild;
  rootNode.leftChild = rootNode.rightChild;
  rootNode.rightChild = temporary;

  invertTree(rootNode.leftChild);
  invertTree(rootNode.rightChild);

  return rootNode;
}

export { twoSums, minStack, maxStack, reverseLinkedList };
