import {MyArrayAsClass, myArrayAsFunction} from './array';

describe('MyArrayAsClass', () => {
    let newArrayClass; 

    beforeEach(() => {
        newArrayClass = new MyArrayAsClass('First element', 'Second element');
    });

    test('should add constructor parameters as values whose keys are the argument position', () => {
        expect(newArrayClass[0]).toBe('First element');
        expect(newArrayClass[1]).toBe('Second element');
    });

    test('should return the number of elements', () => {
        expect(newArrayClass.length).toBe(2);
    });
});

describe('MyArrayAsFunction', () => {
    let myArray = myArrayAsFunction('First element', 'Second element');

    test('should add fn parameters as values whose keys are the argument position', () => {
        expect(myArray[0]).toBe('First element');
        expect(myArray[1]).toBe('Second element');
    });

    test('should return array length', () => {
        expect(myArray.length).toBe(2);
    });
});