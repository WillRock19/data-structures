import { twoSums } from "./interview-functions";

describe("Two sum", () => {
  /*
        Description: Given an array of integers "nums" and an integer "target", return the index
                     position of the two numbers such that they add up to target.

                     - Each input would have exactly one solution, and you may use the same element
                       twice;
                    
                     - You can return the answerf in any order;
  */

  test("Should return correctly for a simple input", () => {
    const numbers = [2, 7, 11, 15];
    const target = 9;

    expect(twoSums(numbers, target)).toEqual([0, 1]);
  });

  test("Should return correctly for a second, simple, input", () => {
    const numbers = [2, 7, 11, 15];
    const target = 18;

    expect(twoSums(numbers, target)).toEqual([1, 2]);
  });

  test("Should return correctly a third, simple, input", () => {
    const numbers = [2, 7, 11, 15];
    const target = 26;

    expect(twoSums(numbers, target)).toEqual([2, 3]);
  });
});

describe("Min Stack", () => {
  /*
      Definition: Design a stack that supports push, pop, top and retrieving the minimum element
                  in constant time.

                    - Push(x): push element X into the stack;
                    - pop(): removes the element on top of the stack;
                    - top(): get the top element (don't remove it, only returns);
                    - getMin(): retrieves the minimum element in the stack;
  */
});


describe("Construct Binary tree from pre-order and in-order traversal", () => {
  /*
      Definition: Given a preorder and inorder traversal of a tree, construct the binary tree. You
                  may assume that duplicates do not exist in the tree.

                    - preorder = [1,2,4,8,9,5,10,11,3,6,7]
                    - inorder  = [8,4,9,2,10,5,11,1,6,3,7]
  */
});

describe("Invert a Binary tree", () => {

});

