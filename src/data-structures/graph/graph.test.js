import { NodeWithAdjacentList } from "./graph";

describe("NodeWithAdjacentList", () => {
  describe("When initializing the class", () => {
    let node;

    beforeEach(() => {
      node = new NodeWithAdjacentList(19);
    });

    test("Should initialize value with value received on constructor", () => {
      expect(node.value()).toBe(19);
    });

    test("Should initialize node with visited = false", () => {
      expect(node.hasBeenVisited()).toBeFalsy();
    });

    test("Should initialize adjacentList with an empty array", () => {
      expect(node.adjacentList()).toEqual([]);
    });
  });

  describe("setAsVisited", () => {
    test("Should set visited property as true", () => {
      const node = new NodeWithAdjacentList(19);
      node.setAsVisited();
      expect(node.value()).toBeTruthy();
    });
  });

  describe("append", () => {
    let node;

    beforeEach(() => {
      node = new NodeWithAdjacentList(19);
    });

    test("Should throw exception if value received is not a node", () => {
      expect(() => {
        node.append(24);
      }).toThrow(
        "Element is not of type NodeWithAdjacentList and cannot be appended!"
      );
    });

    test("Should append new node to the adjacentList", () => {
      const newNode = new NodeWithAdjacentList(22);
      node.append(newNode);
      expect(node.adjacentList()).toEqual([newNode]);
    });
  });
});
