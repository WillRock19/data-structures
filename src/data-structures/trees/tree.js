/*


Each element added to a tree is going to be a tree NODE, and it will be conect to each other. Trees
always follows an hierarchy of elements where er have parents and childs. In a tree we always follow
a direction from top to bottom.

I. COMMON TERMINOLOGIES

There are some concepts that are importatent when we talk about rees, like:

    Node            Child           Edge           Subtrees
    Root            Leaf node       Levels
    Parent          Sibling         Path

Let's understand it:

    -> Root: It's the top most node on a tree, the first one;

    -> Parent: It's an element that comes above other in a tree;

    -> Child: It's the element that comes bellow another in a tree. One child cannot have 2 parents;

                                3
                               / \
                              4   5  

        In the example above, 3 is the parent and 4 and five are the child (from 3's perspective).

   -> Level: Each node is in a specific value. In the example we used before, "3" is on level 0 while
             "4" and "5" are on level 1. As we add new nodes to the tree, the level will increase.
             
   -> Edges: are the conection between two nodes (example: 3-4 or 3-5). Each edge has a direction,
             which is the direction we can visit each node. Usually each element has a edge comming
             to it, minus the root. Because of this, you could easily calculate the number of edges
             of a tree: 

                                        Edges = Number of Nodes - 1

   -> Siblings: are elements that are child from a particular same element.

   -> Leaf Node: any node that does not have any child nodes

   -> Path: It's the path created by the connections between diferent nodes. You could say that the
            sum of multiple edges form a path. 

                              3
                            /   \
                           4      5  
                         /   \   / \
                        6     7 8   9
            
            In the example above, you have a path from "3" to "6" tht have two edges (3->4 and 4->6),
            both with a single direction. Nodes "6", "7", "8" and "9" are all leaf nodes.


   -> Subtrees: Are trees that can be refer inside another tree. In  the example above, 4-6-7 and 5-8-9
                could be subtrees.
                
II. DEPTH

Depth is the length traveled from root node until a particular node. 


III. HEIGHT

The height of any node is the number of edges from that node to the deepest leaf.

                                3
                            /      \
                           4        5  
                         /   \    /   \
                        6     7  8     9
                                     /
                                   10

    Examples:

    Node 3 => Depth =  0
              Height = 3

    Node 4 => Depth =  1                       Node 5 => Depth =  1
              Height = 1                                 Height = 2

    
    Node 6 => Depth =  2                       Node 9 => Depth =  2
              Height = 0                                 Height = 1 */