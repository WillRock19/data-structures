import { breathFirst, depthFirst } from "./graph-transversal-algorithms";
import { NodeWithAdjacentList } from "../data-structures/graph/graph";

function createSimpleGraphForTest() {
  /* 
      The graph format will be:
  
                         A
                      /  |  \
                     B   C   D  
                   /  \     /
                  E    F   G      */

  const nodeA = new NodeWithAdjacentList("A");
  const nodeB = new NodeWithAdjacentList("B");
  const nodeC = new NodeWithAdjacentList("C");
  const nodeD = new NodeWithAdjacentList("D");
  const nodeE = new NodeWithAdjacentList("E");
  const nodeF = new NodeWithAdjacentList("F");
  const nodeG = new NodeWithAdjacentList("G");

  nodeB.append(nodeE);
  nodeB.append(nodeF);
  nodeD.append(nodeG);
  nodeA.append(nodeB);
  nodeA.append(nodeC);
  nodeA.append(nodeD);

  return nodeA;
}

describe("BreathFirst", () => {
  describe("When using nodes with adjacenList", () => {
    let initialNode;

    beforeEach(() => {
      initialNode = createSimpleGraphForTest();
    });

    test("Should return null if initialNode is null", () => {
      const visitedNodes = breathFirst(null);
      expect(visitedNodes).toBeNull();
    });

    test("Should return the visited nodes in expected order", () => {
      const visitedNodes = breathFirst(initialNode);
      expect(visitedNodes).toEqual(["A", "B", "C", "D", "E", "F", "G"]);
    });
  });
});

describe("DepthFirst", () => {
  describe("When using nodes with adjacenList", () => {
    test("Should return null if initialNode is null", () => {
      const visitedNodes = depthFirst(null);
      expect(visitedNodes).toBeNull();
    });

    test("Should return the visited nodes in expected order", () => {
      const initialNode = createSimpleGraphForTest();
      const visitedNodes = depthFirst(initialNode);

      expect(visitedNodes).toEqual(["A", "B", "E", "F", "C", "D", "G"]);
    });
  });
});