/*

	        Average Case    Worst Case
insert	        log(n)         O(n)
search          log(n)         O(n)
delete          log(n)         O(n)

Since the tree is ordered, you'll spend log(n) in the average case because you'll always be searching
half of each subtree number of elements. But if the tree is unbalanced, than we'll depende on the
number of elements, because usually will have to look into almost all of them (and might aswell looking
into all).

Given a root node, ALL childs at left of it (left subtree) are going to be lower than the node, and
all elements at right are going to be higher. Example:

                     19               
                  /      \   
                 9       23
                / \     /  \
               3   11  21  35

When you want to add a new level on a Binary search threem the number of total nodes will be 2 ^ (height + 1) - 1.

We can have two types:

    -> Balanced: the difference between the height of the left subtree and right subtree is not bigger
                 than one. The height usually somewhat depends on log(n).
                 
                     52               
                  /     \          Height of subtree 25: 1  
                 25      57        Height of subtree 57: 1
                / \        \       Difference: 1 - 1 = 0
               9   32      75           

    -> Unbalanced: the difference between the height of the left subtree and right subtree is bigger
                   than one. The height usually somewhat depends on n (number of elements).

                     19               
                  /     \   
                 15      57        Height of subtree 15: 2
                /                  Height of subtree 57: 0
               9                   Difference: 2 - 0 = 2
                \
                 11

So, why in a balanced tree height usually depends on log(n)? Usually, the maximum amount of nodes we 
can have in a specific level of the Binary Search Tree follows the power of two. You can see that, 
where the expoent is the level of the node in the tree, we have:

2 ^ 0 = 1 node  max.
2 ^ 1 = 2 nodes max.
2 ^ 2 = 4 nodes max.
2 ^ 3 = 8 nodes max.

With that in mind, we can understand that the number of nodes in a BST also follows a formula that's
affected by the power of two. We have:

                                            n = 2 ^ (h + 1) - 1

Where:
        n = number of nodes
        h = height of tree

Imagine the following tree:

                     19               
                  /     \   
                 9       23        Height tree: We have the formula: 2 ^ (h + 1) - 1.
               /  \     /  \                    On root, h = 2 (two edges until the deepest node). So 2 ^ (2 + 1) = 8
              3   11  21    35                  Back to the formula, 8 - 1 = 7. So the tree has 7 node total!
      

Now, see: knowing this, we know the formula for the total number of nodes. We can use some mathematical
manipulation on that formula, and we'd have:

                            n = 2 ^ (h + 1) - 1     =>      h = log(n + 1) - 1

So, with some manipulation, we can understand that the height of the tree is log(n + 1) - 1. if we 
remove the constants, as we usually do in algorithmical analysis, we'd see that the height of a tree
is log(n) when tree is balanced (average cases).

I. SEARCHING

We compare each node with the value we are looking and then decide if it's equal or not. If it is, we
return the element. If it's not, we decide if we are going to navigate to the next to the lef (element
searched is lower than current) or the one to the right (element searched is higher than current).

If we have an unbalanced structure, we need to compare with basically all (or almost all) elements, 
without counting on always seearch to the left or the right. This makes the search on unbalance trees
cost n as time complexity.

II. INSERT

When we have to insert, we'll make basically the same as the search, navigating through the tree and
comparing each value until find an empty space to add the new node. It's simple and, as the previous
operation, will cost log(n) for balanced trees and n for unbalanced trees (since we're basically have
to compare every element until reaching the point we can add the new element).

III. DELETE

Delete is more complicated. We can have three cases:

    1. Remove a node without childs;
    2. Remove a node with one child;
    3. Remove a node with two childs;

1.  Remove a node without childs

For delete a leaf node (no child), we only have to navigate until the node before the desired leaf, 
which, as discussed, coasts log(n), and then set it's right or left element to none, wich is a O(1)
operation. 

The structure that we do not refer anymore will then be removed by the garbage collection. This will
cost O(log(n)). On the unbalanced structure, it will cost O(n).


2. Remove a node with one child

I still have to search the element (log(n)), and then we have to update the previous element's next
with the next element from the one we have to delete (just like we'd have to do with a linked-list).

This will take log(n) on average case and n in worst case.


3. Remove a node with two childs;

When we want to delete a node that has two childs, we can use a technique: replace the value of that
not with other and put that node in a position that's easier to delete. We could replace it using one
of two options:

    -> Taking the highest left-tree value bellow the node;

    -> Taking the lowest right-tree value bellow the node;

Example: imagine we want to delete 19. Then we could take the highest lef-tree value, which is a leaf
value, and replace it with the root. Then, we could just remove the leaf, since this is a lot easier
to do. See:

                      REPLACE                   DELETE
            19                        11                       19      
          /    \                    /    \                   /    \    
        9       23      =>        9       23      =>       9       23    
      /  \     /  \             /  \     /  \            /        /  \ 
     3   11   21  35           3   19   21  35          3        21  35

This would cost:

        -> log(n) to find the node we want to delete;
        -> log(n) to find the node to use as replacement;
        -> constant to replace and constant to delete;

Resulting in: log(n) + log(n) + 1 + 1  =>  2log(n) + 2  => removing all constantes => O(log(n))

This would be the average case. The worst case would be O(n).

We have two other types of Binary Search Tree:

    -> AVL Tree: It balance itself everytime we add or delete an element. This will, it will never 
                 be unbalanced. It compares the last three elements and then rebalance them one with 
                 the other.

    -> RED BLACK Tree: each node can be either RED or BLACK. Root nodes and leaves are always BLACK,
                       and if a node is RED, then it's children is BLACK. Finally, all paths from a
                       node to its leaf descendants contains the same number of black nodes.*/