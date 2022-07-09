/*
I. DEFINITION

Non-linear data-structure that helps us to represent the relationship between two objects (or nodes).

Different from a tree, on graphs we can start from any node (instead of only from the root), and we
can see the relation between the nodes by the edges that conect then. For example, we could have the
graph:

            A --- B
            | \   | \
            |  \  |  E
            |   \ | /
            C --- D

Trere are some different properties of graphs:

I.1. DIRECTION

You know where we use direction graphs? Facebook! The connection between friends and the relation
create between different profiles is created by graphs. On Instagram, once we follow someone we don't
know if they follow us back. Because of this, we can see their status (we are following then), but that
doesn't mean they can see ours - so, we have a directed connection from us to them. Once they start
following us, the connection becomes undirected, and they can see our status as we can see theirs.


    -> Undirected graph: We have a conectinuos between two nodes in both ways. The graph above is an
    example of this, where A conects to B as B conects to A (I can go from one to other and from
    other to one);

    -> Directed graph: We have a connection between nodes that works only in one direction. 

            A <---> B
            ^       ^ \
            |       |  E
            |       | /
            C ----> D

        OBS: I coulnd't represent the connection between B->E or D<->E (because there's not a 
             character for this on my keyboard), but imagine they do exist on the graph above.

I.2. WEIGHT OF EDGES

Wight can be use to give more information about how the nodes in a graph are connected. Somethimes you
want to represent the connection between nodes but don't want to give any information to weight those
connections because all of them are equal (maybe when representing a information about certain sites, 
employees, etc.).

But there are times you may want to give different weights for those connections. For instance, YouTube
does this to know which content push to it's users. Netflix does it too to suggest movies for their user
base. If you're watching a horror movie, for instance, the connection between you and horror movies might
be a 10, while the connection between you and romantic movies might get a 6. So other horror movies will
be suggested more often. Other example is to whom push some add, based on the connections of the people
that actually clicked on it (a higher weight) in comparisson to those who didn't (a lower weight).

    -> Unweighted graph: all edges (connections between nodes) of the graph has the exact same
    weight (importance) on the graph as a whole.

    -> Weighted graph: there are different edges with different weights. This could represent, for
    instance, the movies (example above), or the fastest way between point A and point D. Each edge 
    represent the time it takes from one to other, and we can use it to find the optimal travel route.

                5
            A <---> B
            |       ^ \ 4
          2 |     1 |  E
           \|/      | / 4
            C ----> D
                1

    In the example above you can see that A<->B takes 5, but if I take A->C then C->D then D->B, it
    would take 2 + 1 + 1 = 4. It's faster.

I.3. CYCLIC

    -> Cyclic Graph: We start from a node and somehow can go back to it following the edges.

        A
        | \
        |  \
        |   \
        B----C

    -> Acyclic Graph: We do not have a cyclic loop.

        A
        | 
        | 
        | 
        B----C


II. HOW TO REPRESENT GRAPHS AND CONNECTIONS

We could use different methods to represent graphs:

II.1. MATRIX

When we have a relation beteen two nodes, we add 1 to the position in the matrix and when we don't we 
add the value 0. Imagine, for instance, we have Node 10 (row) and 19 (column), that exists in the matrix
"teste". We could represent the relation as teste[10][19] = 1. If we loose this connection, we could make
teste[10][19] = 0. It's not very popular and it's hard to implement. 

When we have a weighted graph, the value we add where connections exist is not 1, but the weight that
we have in that connection. So, imagine that we have Node 10 (row) and 19 (column) that weight 50, but
also have  Node 9 (row) and 10 (column) that weights 20. Then we would have teste[10][19] = 50 and
teste[9][10] = 20.

II.2. ADJACENCY LIST

It's more popupar, usually used for interview questions and discussions. Here, each node is represented
as a data structure (could be a class) with a "value" and a "AdList". The value is the node value, as 
you probably imagined, and the AdList is a list of the nodes this one is connected to. The list could be
a simple array or even a hashTable. So, if I jump to any node I would know every node that badboy is 
connected to. Imagine that we have a node 0 that's connected to a node 1 and a node 2, then we could have
something as:

{
    value: 0,
    adList: [1, 2]
}

On a weighted graph, we'd store a tuple in the AdList, and in there we could add the node we are connected 
and the weight of the relation. So, if we have a node 0 that's connected to a node 1 and 2, each with a 
different weight, we could have:

{
    value: 0,
    adList: [{1, 50}, {2, 20}]
} 

II.3. EDGE LIST

Not that comun and usually not used. We create a list with every edge (connections) between the nodes of
our graph. 

        3 - 4
        |   |
        1 - 2
         \ /
          0

Could be represented as:

List index     Value
0:              0 1
1:              0 2
2:              1 2
3:              1 4
        ...

If the graph is weighted, we add a column with weights to where we store the edges. For instance,
the graph:

List index     Value    Weight
0:              0 1       55
1:              0 2       46
2:              1 2       67
3:              1 4        1
        ...

*/