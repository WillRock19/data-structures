import { QueueWithList } from "../data-structures/queue/queue";

/*
  Usefull links: https://stackoverflow.com/questions/9456937/when-to-use-preorder-postorder-and-inorder-binary-search-tree-traversal-strate

  IMPORTANT: These algorithms can be used in trees that are not binary, nut in class we used then
             only with Binary trees. In this file I'll just add some generic implementation of each 
             one, something that travels through the nodes of a tree, but do not search or do anything
             in particular).

             If you want an example of these algorithms working to search or delete a Binary tree,
             look the Binary tree file. I'll implement something there.

  I. BREATH FIRST SEARCH (BFS)

    Each node of the tree is in a different level. In depth first we travel the tree through each of
    it's levels. So, when I'm traversing the tree, I first look all nodes on level -1, then on level
    -2, then -3 and on and on. The answer always comes in the form of levels.

                                3           -1
                            /       \
                           4         5      -2
                         /   \     /   \
                        6     7   8     9   -3

            SEARCH ORDER: 3, 4, 5, 6, 7, 8, 9

    To implement this algorithm we can't just use recursion. Since we'll be needing to store the 
    child elements from each node, recursion would make things more complicated. Instead, we can 
    use a Queue to store all child's of the nodes beeing visited, and then pop then up and visit
    then aswell.
    
    The complexity of BFS is O(n), and the space complexity is O(n) because we need to use a queue
    to make it all happen and the maximum amount of elements we'll add in the queue is n. You don't
    necessarially have to use the transversal (see the code to understand more), so we don't need
    to count it on the space complexity.
    

II. DEEP FIRST SEARCH (DFS)

    There's actually three ways to use deep first search: pre-order, in-order and post-order. As a 
    study case, imagine you're applying each one with an algorithm that looks each node in the tree 
    and print the value in it following the DFS algorithm.

    The Time Complexity for all of then will be O(n), since we'll have n elements on the tree. The
    Space Complexity will depend if we have a balanced tree or not. 

    	      Average	  Worst Case
    space	    O(d)	    O(n)
    time	    O(n)	    O(n)

    For balanced Binary trees, the space complexity is O(d), where d is the depth of the tree.

    1. Pre-order

    It follows the sequence "root -> left -> right". So, we see the current node (root) and print
    it. Then we go to its left child. If it has one, print its value. It is now our new root, so 
    we go to its left child. It it doesn't have one, we backtrack to the previous root and try to
    go to its right child. If it has one, we print it. Then we backtrack to the root's parent and 
    start the process all over again with it beeing our new root node.


                                A           
                            /       \
                           B         C      
                         /   \     /   
                        D     E   F        

            SEARCH ORDER: A, B, D, E, C, F

    It can be used, for instance, to create a copy of the tree, a replica that put the nodes in the
    array in the exact same order, following the formula to the binary tree positioning (see notes
    about binary tree to understand it better).

    2. In-order

    It follows the sequence "left -> root -> right". So, we go to the leftmost of all node on the
    tree and print it. Then we backtrack to its parent and print the parent. Finally, we go to the
    right node of the parent (which is in the same level of the leftmost) and print it. Then we 
    backtrack again to the parent's parent and start the whole process again until all nodes have
    been visited.

    Basically, first we visit the left leaf, then the root and then the right leaf of a given level.

                                A           
                            /       \
                           B         C      
                         /   \     /   
                        D     E   F        

            SEARCH ORDER: D, B, E, A, F, C

    There's something interesting about the *in-order* approach. If all nodes have a inherited
    sequence between them (let's say, each one is a Integer that's immediatelly greater than the
    one before), the in-order can actually help you to search the tree in the order the specific
    order. 

                                7           
                            /       \
                           1         9      
                         /   \     /   \
                        0     3   8     10  
                            /   \
                          2       5
                                /   \
                              4       6

          SEARCH ORDER: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

    3. Post-order

    It follows the sequence "left -> right -> root". So we visit the leftmost and print it. Then try
    to visit the right child of the leftmost node. If it doesn't exist, we backtrack to the parent 
    node and go to its right child. We print it. Finnaly, we backtrack again and print the value in
    the parent. 
    
    Then start it all again. Basically, first we visit the leaves, and then the root of a given 
    level. You can use a post-order search when you want to delete all the nodes of your tree. It 
    will first delete the leaves on each level, and then it will delete it's root.
    
                                A           
                            /       \
                           B         C      
                         /   \     /   
                        D     E   F        

            SEARCH ORDER: D, E, B, F, C, A


    WHEN TO CHOOSE EACH?

    The traversal strategy the programmer selects depends on the specific needs of the algorithm 
    being designed. The goal is speed, so pick the strategy that brings you the nodes you require 
    the fastest.

    1. If you know you need to explore the roots before inspecting any leaves, you pick pre-order 
    because you will encounter all the roots before all of the leaves.

    2. If you know you need to explore all the leaves before any nodes, you select post-order 
    because you don't waste any time inspecting roots in search for leaves.

    3. If you know that the tree has an inherent sequence in the nodes, and you want to flatten the 
    tree back into its original sequence, than an in-order traversal should be used. The tree would 
    be flattened in the same way it was created. 
    
    A pre-order or post-order traversal might not unwind the tree back into the sequence which was 
    used to create it.
*/

const breathFirst = (rootTreeNode) => {
  if(rootTreeNode === null){
    return;
  }

  const queue = new QueueWithList(rootTreeNode);
  const transversal = [];

  while(!queue.isEmpty())
  {
    const currentElement = queue.peek();
    transversal.push(currentElement);

    if(currentElement.leftChild)
      queue.offer(currentElement.leftChild);

    if(currentElement.rightChild)
      queue.offer(currentElement.rightChild);
  }

  return transversal;
}

function preOrderHelper(treeNode, transversal) {
  if (treeNode === null) {
    return;
  }

  transversal.push(treeNode.value);

  preOrderHelper(treeNode.leftChild, transversal);
  preOrderHelper(treeNode.rightChild, transversal);

  return transversal;
}

const preOrder = (treeNode) => {
  const transversal = [];
  return preOrderHelper(treeNode, transversal);
};

function inOrderHelper(treeNode, transversal) {
  if (treeNode === null) {
    return;
  }

  inOrderHelper(treeNode.leftChild, transversal);
  transversal.push(treeNode.value);
  inOrderHelper(treeNode.rightChild, transversal);

  return transversal;
}

const inOrder = (treeNode) => {
  const transversal = [];
  return inOrderHelper(treeNode, transversal);
};

function postOrderHelper(treeNode, transversal) {
  if (treeNode === null) {
    return;
  }

  postOrderHelper(treeNode.leftChild, transversal);
  postOrderHelper(treeNode.rightChild, transversal);
  transversal.push(treeNode.value);

  return transversal;
}

const postOrder = (treeNode) => {
  const transversal = [];
  return postOrderHelper(treeNode, transversal);
};

export {preOrder, inOrder, postOrder, breathFirst}
