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

describe("Construct Binary tree from pre-order traversal", () => {
/*
      Definition: construct Binary Search Tree from a preorder transversal

        - input  = [8,5,1,7,10,12]
        - output = [8,5,10,1,7,Null,12] 
*/
});

describe("Detect Capital", () => {
/*
      Definition: Given a word, you need to judge wether the usage of capitals in it is right or not.
                  We define the usage of capitals in a word to be right when one of the following 
                  cases holds:

                  * All letters in this word are capitals, like "HELLO";
                  * All letters in this word are not capitals, like "game";
                  * Only the first letter in this word is capital, like "Word";
                  * Otherwise, we define that this word doesn't use capitals in a right way;
*/
});

describe("Reverse strings", () => {
/*
      Definition: Write a function that reverses a string (The input string elements are given as
                  array of characters).

                  * Do not alllocate extra space for another array. You must do this by modifying
                    the input array in-place with O(1) extra memory;

                  * All the elements are printable ascii characters (symbols, numbers and alphabets)
                  
          - input  = ['s', 'h', 'u', 'b', 'h', 'a', 'h']
          - output = ['m', 'a', 'h', 'b', 'u', 'h', 's']
*/
});

describe("Logest palyndromic substring", () => {
/*
      Definition: Given a string mystr, find the longest palindromic substring to mystr
      
          - input:  "babad"
          - output: "bab"

          - input:  "ytracecarxy"
          - output: "racecar"
*/
});