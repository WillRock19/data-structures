import { BinaryTree, Node } from "./binary-tree";

describe("BinaryTree", () => {
  describe("constructor", () => {
    test("Should create tree without root if it is not passed as parameter", () => {
      const binaryTree = new BinaryTree();
      expect(binaryTree.rootNode).toBeNull();
    });

    test("Should add non-node parameter as a root node element", () => {
      const binaryTree = new BinaryTree(5);
      expect(binaryTree.rootNode).toEqual(new Node(5));
    });

    test("Should noode parameter as a root element", () => {
      const nodeToAdd = new Node(5);

      const binaryTree = new BinaryTree(nodeToAdd);
      expect(binaryTree.rootNode).toEqual(nodeToAdd);
    });
  });

  describe("add", () => {
    let binaryTree;

    beforeAll(() => {
      binaryTree = new BinaryTree(0);
    });

    test("Should add second element as the leftChild of the root", () => {
      const valueToTest = 1;
      const expectedNode = new Node(valueToTest);

      binaryTree.add(valueToTest);
      expect(binaryTree.rootNode.leftChild).toEqual(expectedNode);
    });

    test("Should add a third element as the rightChild of the root", () => {
      const valueToTest = 2;
      const expectedNode = new Node(valueToTest);

      binaryTree.add(1);
      binaryTree.add(valueToTest);

      expect(binaryTree.rootNode.rightChild).toEqual(expectedNode);
    });

    test("Should add a fourth element as the leftChild of the leftChild of the root", () => {
      const valueToTest = 3;
      const expectedNode = new Node(valueToTest);

      binaryTree.add(1);
      binaryTree.add(2);
      binaryTree.add(valueToTest);

      expect(binaryTree.rootNode.leftChild.leftChild).toEqual(expectedNode);
    });

    test("Should add a fifth element as the rightChild of the leftChild of the root", () => {
      const valueToTest = 4;
      const expectedNode = new Node(valueToTest);

      binaryTree.add(1);
      binaryTree.add(2);
      binaryTree.add(3);
      binaryTree.add(valueToTest);

      expect(binaryTree.rootNode.leftChild.rightChild).toEqual(expectedNode);
    });
  });
});
