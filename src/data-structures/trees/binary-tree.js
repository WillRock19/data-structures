import { QueueWithList } from "../queue/queue";

/*

I. DEFINITION

The BinaryTree is a particular case of a tree. It has a specific particularity: each node, AT 
MAXIMUM, can have TWO childs in the tree. If it has more than two childs, it's not a Binary tree 
anymore. There are different types of binary trees and different stages for ach one.

If we'd try to represent the Binary tree as a structure of Nodes, it would be something like this:


                                                                  _____________
                                      --------------------------| 4 |   3   | 5 |--------------------------
                                     |                            -------------                            |
                                     |                                                                     |
                                _____________                                                         _____________
                    ----------| 6 |   4   | 7 |----------                                 ----------| 8 |   5   | 9 |----------
                   |            -------------            |                               |            -------------            |
                   |                                     |                               |                                     |
                   |                                     |                               |                                     |
            ___________________                ___________________                 ___________________               ___________________
          | None |   6   | None |            | None |   7   | None |             | None |   8   | None |           | None |   9   | None |
           --------------------               --------------------                --------------------              --------------------


II. TYPES

There are different types of Binary trees, each one with some particularity:

    1. Full Binary Tree: It's a Binary tree where each node has either zero child or two childs (we
                         cannot have a element with only one child).

    2. Complete Binary tree: all levels are completelly filled with nodes, except the last one, and
                             in the last level all nodes are as left as it's possible. Examples:

     0              0               0                0                        0                  0                    0       
   /   \          /   \          /     \           /    \                  /     \            /    \               /     \    
  1     2   or   1     2   or   1       2   or    1      2    but NOT     1       2     or   1      2    or       1       2   
                /              / \               / \    /                / \        \       /      / \           / \    /     
               3              3   4             3   4  5                3   4        5     3      4   5         3   4  5      
                                                                                                              /  \            
                                                                                                             6    7           

    3. Perfect Binary tree: all the internal nodes have two children and all of the leaf nodes are
                            in the same depth or same leve. Example:


     0              0                     0           0
   /   \          /    \                /           /   \
  1     2   or   1      2    but NOT   1      or   1     2
                / \    / \                        /     / 
               3   4  5   6                      3     4   


    4. Balanced Binary tree: the height of the left and right sub-trees of every node may differ by 
                             at most 1. Example:

                          CORRECT                      |                        INCORRECT                      
                                                       |                                                       
           0               0                  0        |          0              0                      0      
        /    \           /   \             /     \     |       /               /   \                 /     \   
       1      2         1     2           1       2    |      1               1     2               1       2  
        \              / \     \         / \     /     |     /  \     or           / \     or      / \     /   
         4            4   5     6       4   5   6      |    2    3                3   4           4   5   6    
                                         \             |   /                         /  \                /     
                                          7            |  4                         5    6              7      
                              
                                          
    5. Degenerate Binary Tree: every parent node has only one child node. It basically falls in the 
                               same form as a linked-list.


                          CORRECT                 |                        INCORRECT
                                                  |
           0               0               0      |      0                      0
            \               \             /       |    /   \                  / 
              1              1           1        |   1     2                1  
               \     or    /            /         |          \     or       / \ 
                2         2            2          |           5            2   3
                 \          \         /           |            \               
                  3          3       3            |             6            

*/

function isNullOrUndefined(value) {
  return value === null || value === undefined;
}

class Node {
  value;
  rightChild;
  leftChild;

  constructor(value) {
    this.leftChild = null;
    this.rightChild = null;
    this.value = value;
  }

  noLeftChild = () => {
    return this.leftChild === null;
  };

  noRightChild = () => {
    return this.rightChild === null;
  };
}

class BinaryTree {
  #rootNode;

  constructor(rootValue) {
    this.#rootNode = this.#prepareNodeToBeAdded(rootValue);
  }

  #prepareNodeToBeAdded = (valueToAdd) => {
    if (isNullOrUndefined(valueToAdd)) {
      return null;
    }

    return valueToAdd instanceof Node ? valueToAdd : new Node(valueToAdd);
  };

  #addNodeWithBreathFirstSearch = (nodeToAdd) => {
    if (!this.#rootNode) {
      this.#rootNode = nodeToAdd;
      return;
    }

    const helperQueue = new QueueWithList(this.#rootNode);
    let currentNode = null;

    while (!helperQueue.isEmpty()) {
      currentNode = helperQueue.peek();

      if (currentNode.noLeftChild() || currentNode.noRightChild()) break;

      if (currentNode.leftChild) helperQueue.offer(currentNode.leftChild);

      if (currentNode.rightChild) helperQueue.offer(currentNode.rightChild);
    }

    if (currentNode.noLeftChild()) {
      currentNode.leftChild = nodeToAdd;
    } else if (currentNode.noRightChild()) {
      currentNode.rightChild = nodeToAdd;
    }
  };

  add = (newValue) => {
    const newNode = this.#prepareNodeToBeAdded(newValue);
    this.#addNodeWithBreathFirstSearch(newNode);
  };

  rootNode = () => {
    return this.#rootNode;
  };

  preOrderSearch = (valueToSearch) => {};

  inOrderSearch = (valueToSearch) => {};

  postOrderSearch = (valueToSearch) => {};
}

export { Node, BinaryTree };
