import {BinaryTree} from '../data-structures/trees/binary-tree';
import { inOrder, preOrder } from './tree-transversal-algorithms';

describe('TreeTransversalAlgorithms in BinaryTree', () => {
    const tree = new BinaryTree();

    beforeAll(() => {
        tree.add(7);
        tree.add(1);
        tree.add(9);
        tree.add(0);
        tree.add(3);
        tree.add(8);
        tree.add(10);
        tree.add(2);
        tree.add(5);
        tree.add(4);
        tree.add(6);

        /*OBS: the Tree format will be:

                                7           
                            /       \
                           1         9      
                         /   \     /   \
                        0     3   8     10  
                            /   \
                          2       5
                                /   \
                              4       6
        */
    });

    describe('preOrder', () => {
        test('Should iterate in the same order the nodes were added into the tree', () => {
            expect(preOrder(tree)).toEqual([7,1,9,0,3,8,10,2,5,4,6]);
        });
    });
    
    describe('inOrder', () => {
        test('Should iterate getting first the left leaf, the root, and then the right leaf in each level', () => {
            expect(inOrder(tree)).toEqual([0,1,2,3,4,5,6,7,8,9,10]);
        });
    });

    describe('postOrder', () => {
        test('Should iterate getting first the leafs then the roots of each level of the tree', () => {
            expect(preOrder(tree)).toEqual([7,1,9,0,3,8,10,2,5,4,6]);
        });
    });
})