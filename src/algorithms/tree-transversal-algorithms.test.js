import { BinaryTree, Node } from "../data-structures/trees/binary-tree";
import { inOrder, preOrder, postOrder } from "./tree-transversal-algorithms";

function createUnbalancedTreeWithNumbers() {
  /* 
    The Tree format will be:

                                7           
                            /       \
                           1         9      
                         /   \     /   \
                        0     3   8     10  
                            /   \
                          2       5
                                /   \
                              4       6
    */

  const node0 = new Node(0);
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);
  const node5 = new Node(5);
  const node6 = new Node(6);
  const node7 = new Node(7);
  const node8 = new Node(8);
  const node9 = new Node(9);
  const node10 = new Node(10);

  node5.leftChild = node4;
  node5.rightChild = node6;
  node3.rightChild = node5;
  node3.leftChild = node2;
  node1.rightChild = node3;
  node1.leftChild = node0;
  node9.leftChild = node8;
  node9.rightChild = node10;
  node7.leftChild = node1;
  node7.rightChild = node9;

  return new BinaryTree(node7);
}

function createBalancedTreeWithLetters() {
  /*
    The tree format will be:
    
                                A           
                            /       \
                           B         C      
                         /   \     /   
                        D     E   F     
    */

  const lettersTree = new BinaryTree("A");
  lettersTree.add("B");
  lettersTree.add("C");
  lettersTree.add("D");
  lettersTree.add("E");
  lettersTree.add("F");

  return lettersTree;
}

describe("TreeTransversalAlgorithms in BinaryTree", () => {
  const unbalancedTree = createUnbalancedTreeWithNumbers();
  const balancedTree = createBalancedTreeWithLetters();

  describe("preOrder", () => {
    test("Should iterate the unbalanced tree following the pattern root->left-leaf->right-leaf in each tree level", () => {
      expect(preOrder(unbalancedTree)).toEqual([
        7, 1, 0, 3, 2, 5, 4, 6, 9, 8, 10,
      ]);
    });

    test("Should iterate the balanced tree following the pattern root->left-leaf->right-leaf in each tree level", () => {
      expect(preOrder(balancedTree)).toEqual(["A", "B", "D", "E", "C", "F"]);
    });
  });

  describe("inOrder", () => {
    test("Should iterate the unbalanced tree getting first the left leaf, then the root, and then the right leaf in each level", () => {
      expect(inOrder(unbalancedTree)).toEqual([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      ]);
    });

    test("Should iterate the balanced tree getting first the left leaf, then the root, and then the right leaf in each level", () => {
      expect(inOrder(balancedTree)).toEqual(["D", "B", "E", "A", "F", "C"]);
    });
  });

  describe("postOrder", () => {
    test("Should iterate the unbalanced tree getting first the leafs (left, then right) and then the roots of each level of the tree", () => {
      expect(postOrder(unbalancedTree)).toEqual([
        0, 2, 4, 6, 5, 3, 1, 8, 10, 9, 7,
      ]);
    });

    test("Should iterate the balanced tree following the pattern left->right->root in each tree level", () => {
      expect(postOrder(balancedTree)).toEqual(["D", "E", "B", "F", "C", "A"]);
    });
  });
});
