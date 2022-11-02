import { QueueWithList } from "../data-structures/queue/queue";

/*
While we are navigating throught all nodes in the graph, we should check then after they are 
visited. That way we can guarantee we never visit the same node twice, avoiding ending up in
some type of infinite loop.

We can use two algorithms to graph transversal:

    -> Breadth-first Search;
    -> Depth-first Search;

The behaviour will be similar to how they work in trees, so I'll not repeat what I've already
write in the tree-transversal-algorithms.js file.

Since this is going to be the first example of this, we'll use those two algorithms only for graph
nodes with adjacentList. Later, I may implement versions of those algorithms for other types of
nodes (using matrix, maybe?) just to cover every single one in this project.

But, that's something for later implementations.

BREADTH-FIRST SEARCH

  We add the first node to a Queue and then set it as visited. Then we remove it from tje queue, add
  it to the list of visited nodes and get all its adjacent nodes. We add then to the queue, then start
  the process all over again, now looking into each of the nodes that have been added and adding their
  adjacent nodes into the queue. 
  
  The process is finished when every node in the graph has been visited. The visited list will have
  all of the node's values in it. Take the example bellow:

                         A
                      /  |  \
                     B   C   D  
                   /  \     /
                  E    F   G   

  Pre-loop:

    1. Add A to queue;

      Queue = [A]
    
    2. Set A as visited;

  Loop:

    1. Remove first element of queue and add it to the visited list

      Queue = []
      Visited = [A]

    2. Get all adjacent nodes of visited that hasn't been visited, add then to Queue and set then as
       visited
      
      Queue = [B, C, D]
      
    3. Restart loop while queue is not empty

DEPTH-FIRST SEARCH

  We iterate through all elements of a specific branch as deep as possible, then goes to the next branch.

  
                         A
                      /  |  \
                     B   C   D  
                   /  \     /
                  E    F   G      

  In the above graph, first we'd go "A -> B -> E", then we'd go up to B, use it as the new root node
  and go "B -> F" (which could also be interpreted as going "A -> B -> F"), then "A -> C" and so on 
  until every node has been visited. To do this we could use a STACK or a RECURSION method. The latter 
  is more common, so it's the one we're going to use.

  We receive a node, mark it as visited and ad it to the visited list. Then we'll check all of it's
  adjacent nodes and visit the ones that have not been visited, one by one, recursively. */

const breathFirst = (startingNode) => {
  if (startingNode === null) {
    return null;
  }

  const nodesVisited = [];
  const queue = new QueueWithList(startingNode);
  startingNode.setAsVisited();

  while (!queue.isEmpty()) {
    const currentNode = queue.peek();
    nodesVisited.push(currentNode.value());

    currentNode.adjacentList().forEach((node) => {
      if (!node.hasBeenVisited()) {
        queue.offer(node);
        node.setAsVisited();
      }
    });
  }
  return nodesVisited;
};

function internalDepthFirst(startingNode, visitedNodes){
  startingNode.setAsVisited();
  visitedNodes.push(startingNode.value());

  startingNode.adjacentList().forEach(node => {
    if(!node.hasBeenVisited()){
      internalDepthFirst(node, visitedNodes);
    }
  });

  return visitedNodes;
}

const depthFirst = (startingNode) => {
  if(!startingNode){
    return null;
  }


  const visitedNodes = [];
  return internalDepthFirst(startingNode, visitedNodes);
}

export { breathFirst, depthFirst };
