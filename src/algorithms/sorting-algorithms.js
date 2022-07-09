/*
I. BUBBLE SORT

    I.1. How it works: we run throught an array N times and each time we compare each element i with the
                       element i + 1. If the value of i is higher than i + 1, we swap them. At each cycle
                       end, we'll have the highest of them all being positioned one by one at the end of
                       the array. Example: 

                       Original array: [-2, 45, 0, 11, -9]
                       Sorted array:   [-9, -2, 0, 11, 45]

                ITERATION 1                                                 ITERATION 2

        Index    Comparing              Array                   |    Index    Comparing              Array  
        i = 0    -2 and 45              [-2, 45, 0, 11, -9]     |    i = 0    -2 and 0              [-2, 0, 11, -9, 45]        
        i = 1    45 and 0  (then swap)  [-2, 45, 0, 11, -9]     |    i = 1     0 and 11             [-2, 0, 11, -9, 45]
        i = 2    45 and 11 (then swap)  [-2, 0, 45, 11, -9]     |    i = 2    11 and -9 (then swap) [-2, 0, 11, -9, 45]
        i = 3    45 and -9 (then swap)  [-2, 0, 11, 45, -9]     |    i = 3    11 and 45             [-2, 0, -9, 11, 45]
        i = 4    end of the array       [-2, 0, 11, -9, 45]     |    i = 4    end of the array      [-2, 0, -9, 11, 45]

        ---------------------------------------------------------------------------------------------------------------

                ITERATION 3                                                 ITERATION 4

        Index    Comparing              Array                   |    Index    Comparing              Array  
        i = 0    -2 and 0               [-2, 0, -9, 11, 45]     |    i = 0    -2 and -9 (then swap) [-2, -9, 0, 11, 45]        
        i = 1    0 and -9  (then swap)  [-2, 0, -9, 11, 45]     |    i = 1    -9 and  0             [-9, -2, 0, 11, 45]
        i = 2    0 and 11               [-2, -9, 0, 11, 45]     |    i = 2     0 and 11             [-9, -2, 0, 11, 45]
        i = 3    11 and 45              [-2, -9, 0, 11, 45]     |    i = 3    11 and 45             [-9, -2, 0, 11, 45]
        i = 4    end of the array       [-2, -9, 0, 11, 45]     |    i = 4    end of the array      [-9, -2, 0, 11, 45]
  

    I.2. Time complexity

               WORST-CASE     BEST-CASE        AVERAGE-CASE    SPACE USED
                O(n^2)           O(n)             O(n^2)          O(1)      


II. SELECTION SORT

    II.1. How it works: 
*/

const bubbleSort = (collection) => {
    for(let iteration = 0; iteration < collection.length; iteration++)
    {
        for(let index = 0; index < collection.length -1; index++){
            const currentElement = collection[index];
            const nextElement = collection[index + 1];
    
            if(currentElement > nextElement){
                collection[index] = nextElement;
                collection[index+1] = currentElement;
            }
        }
    }

    return collection;
}

const selectionSort = (collection) => {
    
}

export {bubbleSort};