import { Node } from "../data-structures/trees/binary-tree";
import { StackWithArray } from "../data-structures/stack/stack";

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

class minStack {}

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

class maxStack {}

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

  while (currentNode != null) {
    successorNode = currentNode.next();
    currentNode.setNext(preceedingNode);
    preceedingNode = currentNode;
    currentNode = successorNode;
  }

  return preceedingNode;
};

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
  if (inOrder.length === 0) {
    return;
  }

  if (preOrder.length === 1) {
    return new Node(preOrder[0]);
  }

  const elementPreOrder = preOrder.shift();
  const indexInOrder = inOrder.indexOf(elementPreOrder);
  const treeNode = new Node(inOrder[indexInOrder]);

  treeNode.leftChild = constructTree(preOrder, inOrder.slice(0, indexInOrder));
  treeNode.rightChild = constructTree(
    preOrder,
    inOrder.slice(indexInOrder + 1)
  );

  return treeNode;
};

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

const betterConstructTreeHelper = (
  preOrder,
  inOrder,
  leftPointer,
  rightPointer,
  indexesByValue
) => {
  if (leftPointer >= rightPointer) {
    return;
  }

  const currentNumber = preOrder.pop();
  const rootNode = new Node(currentNumber);
  const inOrderIndex = indexesByValue[currentNumber];

  rootNode.leftChild = betterConstructTreeHelper(
    preOrder,
    inOrder,
    leftPointer,
    inOrderIndex,
    indexesByValue
  );
  rootNode.leftChild = betterConstructTreeHelper(
    preOrder,
    inOrder,
    inOrderIndex + 1,
    rightPointer,
    indexesByValue
  );

  return rootNode;
};

const betterConstructTree = (preOrder, inOrder) => {
  const memoryObject = {};

  inOrder.forEach((index, value) => {
    memoryObject[value] = index;
  });

  const rootNode = betterConstructTreeHelper(
    preOrder.reverse(),
    inOrder,
    0,
    inOrder.length(),
    memoryObject
  );
};

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
  if (rootNode == null) {
    return;
  }

  const temporary = rootNode.leftChild;
  rootNode.leftChild = rootNode.rightChild;
  rootNode.rightChild = temporary;

  invertTree(rootNode.leftChild);
  invertTree(rootNode.rightChild);

  return rootNode;
};

/*
CREATE BINARY TREE FROM PRE-ORDER TRAVERSAL
  Since it's a binary tree, we know the element in the left of a node has a value lower than the 
  node, and the element to the right has a higher value. Because of this, we have a way to build
  our binary tree.

  For instance: we could implement a solution that iterates through the pre-order array, get each
  number, then iterate the binary tree checking where that number should go, and then add it to the
  correct point. 
  
  It's easy, it's good. But it takes too long. The time complexity would be O(n^2), because we have
  to iterate every element in the binary three for every element in the pre-order array, so O(n) and
  O(n), repectively.  Why we have to compare N times in the three? Imagine our input array is the
  following:

    [9, 8, 7, 6]

  Then, when we add each element, we have to compare to each level. (9 is root, then 8 to the left,
  then 7 to the left of 8, then 6 to the left of 7, etc). If I add more elements to the input, like
  5, 4, 3, 2, 1, I have to keep going to the left of each node, so, in the end, I would have traveled
  through all N elements as N levels in the Binary tree.

  So, we can think in a second solution.

  Well, we know that preOrder[0] is the root, and that the first element which is higher than that
  element will go to the right of it. With that in mind, we could break the pre-order transversal
  into groups:

    input = [5,3,1,4,8,6,9]

    It would become two groups:

      root = 5
      left = [3,1,4]
      right = [8,6,9]

    Now, we can start to add the nodes, and for each level the first element in the array will be
    the leftChild, the first element higher that array[0] will indicate the start of the rightChilds.
    
    It works, and it takes only O(n^2). Why? Because for each node being added we have to search for
    the node greater than that (so, two loops, one inside the other, nˆ2).

  A third solution could be a little different.

  This would use a stack. We could create a stack, and everytime we add a node we'd add it to the
  stack too. Then, everytime we check a element in preOrder to create the node, we check if the
  element being added is lower than the last element in the stack. If it is, we add the new element 
  as leftChild node. If it doesn't, we pop the last element from the stack and compare with the new
  last element. 
  
  If we get to the point where the number being added is higher than the element popped, but lower 
  to the new last element from the stack, we add our number as righChild node of the element that
  was popped.

  Example:

    preOrder = [5,3,1,4,8,6,9]
    stack    = [5,3,1]
    
              5
            /
          3
        /
      1

    Now we have to add 4. Then we do:

      4 < 1? No. Pop 1 from stack

      4 < 3? No. Pop 3 from stack.

      4 < 5? Yes. Add 4 as rightChild from node 3 and add 4 to the stack

    And we'd have:

              5
            /
          3
        /   \
      1      4

    Finally, when we get to 8 we'll remove every element from the stack. When the stack is empty,
    we add the element to the right of the node in our pointer (in this case, 8 would become the
    rightChild of 5).

    This solution works as O(n) as time compexity. Since we are not doing any slicing, we do not
    have more space than we already start with.  
*/

const binaryTreeFromPreOrder = (preOrder) => {
  const root = new Node(preOrder[0]);
  const stack = new StackWithArray();
  stack.push(root);

  for (let index = 1; index < preOrder.length; index++) {
    if (preOrder[index] < stack.peek()) {
      const node = new Node(preOrder[index]);
      stack.peek().leftChild = node;
      stack.push(node);
    } else {
      let lastElementFromStack = null;

      while (!stack.empty() && stack.peek().value < preOrder[index]) {
        lastElementFromStack = stack.pop();
      }

      const node = new Node(preOrder[index]);
      lastElementFromStack.rightChild = node;
      stack.push(node);
    }
  }
};

/*
  LONGEST PALINDROMIC SUBSTRING
    A Palindrome is a string that can be read the same if you try to read it from left to right
    and from right to left. Also, by definition, every single letter is considered a palindrome.

    Example:

      input = "xyxracecart"
      Palindromes substrings = ["xyx", "racecar"]

    One approach would be:

      1. Find all possible substrings;
      2. Define which of them are palindromics;
      3. Find the longest;

    The problem: time complexity. It's three loops in a row, so O(nˆ3). We need something better.

    We could go through another route:

      1. Create only the palindromic substrings;
      2. Check which one is longest while creating;

    But, how to find the palindromic substring? Well, we could iterate through each character of
    the string and then find both characters to the left and right. If they are equal, that's a
    possible palindrome. We can do this jumping through each characters in the string until we have
    all answers.

    Example:

      "xyx"     -> when we get to y in the middle, both letters in right and left of it are equal.

      "racecar" -> when we get to the e in the middle, both letters in the right and left are equal.


    That works if our substring is odd. But what if it's even? What if we have:

      input = "xyxraccart"

    In this case, threat each character as the middle of the substring wouldn't work, basically
    because there's no middle where elements to the right and left are the same in the substring
    "raccar", but it is a palindrome nevertheless.

    To solve this, we can use BOTH ways while iterating through the word: first we usa a element
    as the center of the substring, let's call it X, then check that element and the one after it,
    both of then being our new X, and in each of this times we start checking everything to the left
    and to the right of X. If we find out that characters to the left and right of X are equal, we
    have a palindrome substring.

    Example:

      - input = "xyxraccart"

      1. First loop:

        - middle = x;
        - element to left = null
        - element to right = y

        We have a palindrome? Yes: X itself.
        Then check:

          - middle = xy;
          - element to left = null
          - element to right = x

        We have a palindrome? No.

      2. Second loop:

        - middle = y;
        - element to left = x
        - element to right = x

        We have a palindrome? Yes: XYX
        Then check:

          - middle = yx;
          - element to left = x
          - element to right = r

        We have a palindrome? No.

      3. And we go on through every character in the string.

    The complexity here would be O(nˆ2) because of the first loop, where we iterate through each
    character in the string, and a second loop, while we iterate through the caracters in the left
    and right of the selected one.
*/

export { twoSums, minStack, maxStack, reverseLinkedList };
