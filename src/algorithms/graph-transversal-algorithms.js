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
*/

const breathFirst = (startingNode) => {
  if (startingNode === null) {
    return;
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

export { breathFirst };
