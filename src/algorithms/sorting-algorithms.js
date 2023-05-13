/*
For visual help: https://visualgo.net/en/sorting

I. BUBBLE SORT

    I.0. More here: https://www.programiz.com/dsa/bubble-sort

    I.1. How it works: we run throught an array N times and each time we compare each element i with the
                       element i + 1. If the value of i is higher than i + 1, we swap them. At the end of
                       each cycle, we'll have the highest elements being positioned one by one at the end 
                       of the array. 
                       
                       Example: 

                       Original array: [-2, 45, 0, 11, -9]

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

    II.0. More here: https://www.programiz.com/dsa/selection-sort

    II.1. How it works: Here we iterate throught the list from the beginning to end selecting the 
                        element "i" (where i is the iteration). After selecting i, we'll add it to a
                        variable called "smallestElement" and presume that it is, in fact, the smallest
                        element of the array. 
                        
                        Then, we'll iterate through the array and compare smallestElement with then. If
                        we found any element that is smaller than the "smallestElement", we'll put that
                        element's value in our variable. Finally,at the end of each iteration, we swap
                        the smallest element with the element in the position "i" of our array. After 
                        every iteration is done, the smallest elements will be at the beginning of the 
                        list.

                        So, as you can see, it's a for inside another for.

                        Original array: [20, 12, 10, 15, 2]
                        Sorted array:   [2, 10, 12, 15, 20]

                ITERATION 0                                                 ITERATION 1

        Index    Comparing           Smallest   Array                   |    Index    Comparing             Smallest  Array  
        i = 0    20 and 12              12      [20, 12, 10, 15, 2]     |    i = 1    12 and 10                10     [2, 12, 10, 15, 20]        
        i = 1    12 and 10              10      [20, 12, 10, 15, 2]     |    i = 2    10 and 15                10     [2, 12, 10, 15, 20]
        i = 2    10 and 15              10      [20, 12, 10, 15, 2]     |    i = 3    10 and 20                10     [2, 12, 10, 15, 20]
        i = 3    10 and  2               2      [20, 12, 10, 15, 2]     |    i = 4    end of the array (swap)  10     [2, 10, 12, 15, 20]
        i = 4    end of array (swap)     2      [2, 12, 10, 15, 20]     |

        ---------------------------------------------------------------------------------------------------------------

                ITERATION 2                                                 ITERATION 3

        Index    Comparing       Smallest   Array                   |    Index    Comparing       Smallest  Array  
        i = 2    12 and 15          12      [2, 10, 12, 15, 20]     |    i = 3    15 and 20          15     [2, 10, 12, 15, 20]         
        i = 3    12 and 20          12      [2, 10, 12, 15, 20]     |    i = 4    end of array       15     [2, 10, 12, 15, 20] 
        i = 4    end of array       12      [2, 10, 12, 15, 20]     |    

        ---------------------------------------------------------------------------------------------------------------

                ITERATION 4 

        Index    Comparing       Smallest   Array                   | 
        i = 4    end of array       20      [2, 10, 12, 15, 20]     |    


    II.2. Time Complexity

              WORST-CASE     BEST-CASE        AVERAGE-CASE    SPACE USED
                O(n^2)        O(n^2)             O(n^2)          O(1)   
                
III. INSERTION SORT

    III.0. More here: https://www.programiz.com/dsa/insertion-sort

    III.1. How does it work: we work as if we have two lists inside our array. At each iteration, we'll get the 
                             first A elements from the beginning of the list ([0], then [0, 1], then [0, 1, 2]...) 
                             and threat them as if they belong to a sorted list. Then, we'll get the first B elements 
                             from the list, where B is the begins at "index of A + 1" and ends in the last element
                             of the array, and threat them as if they belong to a unsorted list. Then, we apply some
                             comparisons. 
                             
                             I'll talk step by step so we can visualize how this works. We'll have a collection, 
                             COLL, that needs to be sorted. On iteration 1, we'll get the first element of COLL, 
                             (COLL[0]), and threat it as if it belongs to a sorted collection. Then we get the 
                             next index (where 0 + 1), called it key, and threat it as if it's the first element 
                             from an unsorted collection.

                             1. ITERATION 1:

                             COLL = [9, 5, 1, 4, 3];
                             key of the first iteration = 5;

                             Now, we compare the first element of the collection (that we assume is a sorted col.)
                             with the key. If key is smaller, we swap then:

                             COLL = [5, 9, 1, 4, 3];

                             2. ITERATION 2:

                             Now, we start the second iteration. We get the element COLL[2] and compare it with
                             COLL[1] and COLL[0]. This way, we'll always be comparing one element with a sorted
                             collection, and then adding it in the position it must go. If we see in our previous
                             example:

                              COLL = [5, 9, 1, 4, 3];
                              Key of the second iteration = 1;

                             As we know, 1 is smaller than 9. Then we swap it with 9. Now we compare 1 with 5. It's
                             smaller, so we swap it with 5. Ate the end, we get our 1 in the beginning of the list:

                              COLL = [1, 5, 9, 1, 4, 3];

                             SUMMARY:

                             Imagine that our iteration number is i, where i >= 1. Then, on the first iteration,
                             COLL[i] is the first element from the unsorted collection (let's called it Y), and 
                             COLL[i - 1] is the last element of the sorted collection (let's call it X). Ok, let's
                             move on.  
                             
                             We now check if Y < X. If so, we place X on the position that Y takes on the unsorted
                             list and compare our Y with the element that comes before X (X - 1). On the first iteration, 
                             there's none. Because of this, we can just place Y before X. Now, we consider both of these 
                             elements sorted, so our "sorted collection" will now have two elements, with index 0 and 1.
                             
                             On the second iteration (i = 2), we'll have the unsorted collection starting from index >= 2 
                             and the sorted collection from 0 to i - 1. As you can see, the unsorted collection will always 
                             start from index i until the last element of our collection. 

                             On iteration 2, we basically do the same as the 1: we get the first element from the
                             unsorted collection, Y (COLL[2]), and compare it to the last element of the sorted collection,
                             X (COLL[1]). If Y < X we swap X and Y positions. Then, we take the value that comes before Y new
                             position (in this case, CALL[0]), and compare it with the Y. If Y < CALL[0], we swap then. If
                             not, we stop the comparisons and move to the next iteration (because we assume the list is now
                             sorted). 
                             
                             We keep doing this, increasing the "sorted" part of our collection, until all of our elements are 
                             sorted.

                             Example:

                                Original array: [29, 10, 14, 37, 14]
                                Sorted array:   [10, 14, 14, 29, 37]

        Steps                                       Consider as...
                                                Sorted      Unsorted     
        Start iteration 1 (i = 1).
        Consider i - 1 as the sorted coll       [29]        [10, 14, 37, 14]
        Check if coll[i] < coll[i -1] ?         [29]        [10, 14, 37, 14]
        10 is, indeed, lower than 29
        Place coll[i -1] in index = 1           [__]        [29, 14, 37, 14]
        Check if coll[i - 2] exist
        It doesn't. Just add coll[i] at i = 0   [10]        [29, 14, 37, 14]

        Start iteration 2 (i = 2)
        Consider i - 1 as the sorted coll       [10, 29]        [14, 37, 14]
        Check if coll[i] < coll[i -1] ?         [10, 29]        [14, 37, 14]
        14 is, indeed, lower than 29            [10, 29]        [14, 37, 14]
        Place coll[i -1] in i = 2               [10, __]        [29, 37, 14]
        Check if coll[i - 2] exist
        It exists
        Check if coll[i] < coll[i -2] ?         [10, __]        [29, 37, 14]
        14 is higher than 10                    [10, __]        [29, 37, 14]
        Add coll[i] at position i - 1           [10, 14]        [29, 37, 14]
        
        Start iteration 3 (i = 3)
        Consider i-1 as the sorted coll     [10, 14, 29]            [37, 14]
        Check if coll[i] < coll[i -1] ?     [10, 14, 29]            [37, 14]
        37 is higher than 29                [10, 14, 29]            [37, 14]
        Add coll[i] at position i           [10, 14, 29]            [37, 14]


        Start iteration 4 (i = 4)
        Consider i-1 as the sorted coll     [10, 14, 29, 37]            [14]
        Check if coll[i] < coll[i -1] ?     [10, 14, 29, 37]            [14]
        14 is lower than 37                 [10, 14, 29, 37]            [14]
        Place coll[i -1] in index = 4       [10, 14, 29, __]            [37]
        Check if coll[i - 2] exist          [10, 14, 29, __]            [37]
        Check if coll[i] < coll[i -2] ?
        14 is lower than 29                 [10, 14, 29, __]            [37]
        Place coll[i -2] in index = i - 1   [10, 14, __, 29]            [37]
        Check if coll[i - 3] exist          [10, 14, 29, __]            [37]
                                    ...

    III.2. Time Complexity

              WORST-CASE     BEST-CASE        AVERAGE-CASE    SPACE USED
                O(n^2)         O(n)              O(n^2)          O(1)   

        In the Best case, we never enter the while loop. Imagine we have an already ordered list. On each
        iteration, we'll check an element i (where i = iteration, which is > 0) with all i - 1 elements
        before it. On every iteration, COLL[i] will never be lower than COLL[i-1]. Because of this, COLL[i]
        will always remain on position i, and we never use the inside while. With that in mind, we just
        iterate the collection ONCE, and the complexity is N (size of collection).

IV. QUICKSORT

    IV.0. More here: https://www.programiz.com/dsa/quick-sort

    IV.1. How does it work: We use three pointers, one of them called "pivot". The pivot will be a random
                            element that we'll select, but it's usually the first or the last element of
                            the array (you'll find many different examples online that uses one or the
                            other). After this, we'll select the:
                            
                              -> "Left pointer"  - it could be the first element of the array (in case the 
                                                   pivot is the last element), or the first element after 
                                                   the pivot. 

                              -> "Right pointer" - it could be the last element of the array (in case the 
                                                   pivot is the first element), or the element right before
                                                   the pivot (if it's the last).

                            Example:  [4, 6, 1, 5, 3, 7, 2]

                                Pivot = 4
                                L.P.  = 6
                                R.P.  = 2

                          After this, we'll get all the elements smaller than our pivot to the left of it,
                          and all elements higher than our pivot to the right of it. To do this, we must
                          iterate throught our array making some checks and updating the Left and Right
                          pointers.

                          For each iterations, we check:

                              1. Left > Pivot AND Right < Pivot:

                                Swap the value pointed by the Left with the value pointed by the Right;

                              2. If Left <= Pivot:

                                Increase the value of Left (move it forward);

                              3. If Right >= Pivot

                                Decrease the value of Right (move it backwards);

                        We do this until the Right Pointer index is smaller than the Left Pointer index,
                        which would mean that one pointer has crossed the other. When this happens, we 
                        swap the value in our Pivot with the value contained in the Right Pointer position. At the
                        end of the process, we'll guarantee that every value at Left from the previous is 
                        smaller and every value at right is bigger than it.

                        With our array, we'd have:

                          Coll = [4, 6, 1, 5, 3, 7, 2]
                          Pivot = 4

                          -> First iteration:
                            [4, 6, 1, 5, 3, 7, 2]

                            L.P. = Coll[1]
                            R.P. = Coll[6]
                            
                            1. Swap 6 and 2;
                            2. Coll[1] <= Pivot (increase index of L.P. to 2)
                            3. Coll[6] >= Pivot (decrease index of R.P. to 5)

                          -> Second iteration:
                            [4, 2, 1, 5, 3, 7, 6]

                            L.P. = Coll[2]
                            R.P. = Coll[5]

                            1. Don't swap any values;
                            2. Coll[2] <= Pivot (increase index of L.P. to 3)
                            3. Coll[5] >= Pivot (decrease index of R.P. to 4)

                          -> Third iteration:
                            [4, 2, 1, 5, 3, 7, 6]

                            L.P. = Coll[3]
                            R.P. = Coll[4]

                            1. Swap 5 and 3;
                            2. Coll[3] <= Pivot (increase index of L.P. to 4)
                            3. Coll[4] >= Pivot (decrease index of R.P. to 3)

                          -> Fourth iteration:
                            [4, 2, 1, 3, 5, 7, 6]

                            L.P. = Coll[4]
                            R.P. = Coll[3]

                            1. Don't swap any values;
                            2. Don't increase L.P. index;
                            3. Don't increase R.P. index;
                            4. R.P. index <= L.P. index:
                                Swap Pivot with R.P. index's value.

                          At the end of the fourth iteration, we'd have: 

                                    [3, 2, 1, 4, 5, 7, 6]

                        Then, we'd divide the list into two small lists, [3,2,1] and [5,7,6], and apply 
                        the same logic again to each of the small lists. With this, we'll guarantee the
                        sub-lists will be all sorted... and then we just need to merge it all together
                        in a single list.


    IV.2. Time Complexity   
    
              WORST-CASE         BEST-CASE         AVERAGE-CASE     SPACE USED
                O(n^2)         O(n * log(n))       O(n * log(n))       O(1)   

        The way this algorithm work, on the best case we'll get log(n) iterations, and for each iteration
        we'll compare all the elements, so n. Because of this, we'll have a total complexity of n * log(n)
        as the best case. 

        The worst case is somewhat interesting. The worst case could be a situation where we receive an
        already sorted array, like [1,2,3,4,5,6,7]. In this situation, we are still going to iterate the
        and make comparisons, but after each iteration I, we are still going to have N - I iterations to
        go. We' wi'll never be able to divide our list into smaller chunks since our pivot will follow the
        progression I + 1 (we'll never swap it with the R.P, as we did on the example from the previous
        section). Because of this, we are going to have N iterations, and for each iteration we are going 
        to make N comparisons. 
        
        Because of this, thw worst case is N(N) => N^2  


V. MERGE SORT

    V.0. More here: https://www.programiz.com/dsa/merge-sort

    V.1. How does it work: This is an algorithm of the type "divide and conquer". The idea here is split 
                           the array in half until the last possible level (when there's only one element 
                           in each of the sub-arrays). The level = log n on base 2, which means that for
                           and array with 8 elements, log 8 on base 2 = 3 (we have three levels at max.) 
                           
                           When we reach the last possible level, we go back up, comparing the sub-arrays
                           one with the other and creating new sub-arrays that are now sorted. We keep
                           going up until we reach the level 0, where we'll have a new, sorted, array. 
    
                           Example:  [4, 5, 6, 1, 3, 7, 2]

                           1. Split: [4, 5, 6, 1]  [3, 7, 2]
                           2. Split: [4, 5] [6, 1]  [3, 7]  [2]
                           3. Split: [4] [5] [6] [1]  [3] [7]  [2]

                           4. Merge/Sort: [4, 5] [1, 6]  [3, 7]  [2]
                           5. Merge/Sort: [1, 4, 5, 6]  [2, 3, 7]
                           6. Merge/Sort: [1, 2, 3, 4, 5, 6, 7]

    V.2. Time Complexity

              WORST-CASE       BEST-CASE        AVERAGE-CASE    SPACE USED
             O(n * log(n))   O(n * log(n))     O(n * log(n))       O(n)   

        First we have log(n) splits (decomposition) of the array, until we reach the point each array has
        only a single element. So if we have 8 elements, this will take 3 steps; if we have 16, 4 steps, and
        32 elements will have 5 steps. After this, we must compare each element, so we make N comparisons with
        our arrays. 
        
        Because of this, we have O(log(n)) decompositions and O(n) comparisons for each of the decompositions,
        reaching the O(n * log(n)) complexity. For the best case and average case, we keep performing the exact 
        same steps, so we keep executing in the same complexity (imagine if the list is already sorted... we'd
        still have to decompose log(n) times and then make n comparations just to return the array, since we do
        not make a prior check to see if it's already sorted).
        
        Since we can do this work with recursion but need to create a new array in the end. the space complexity
        would be O(n).*/

const bubbleSort = (collection) => {
  for (let iteration = 0; iteration < collection.length; iteration++) {
    for (let index = 0; index < collection.length - 1; index++) {
      const currentElement = collection[index];
      const nextElement = collection[index + 1];

      if (currentElement > nextElement) {
        collection[index] = nextElement;
        collection[index + 1] = currentElement;
      }
    }
  }

  return collection;
};

const selectionSort = (collection) => {
  for (let iteration = 0; iteration < collection.length; iteration++) {
    let currentElement = collection[iteration];
    let minimumElement = currentElement;
    let indexOfMinimumFound = iteration;

    for (
      let indexToCompare = iteration + 1;
      indexToCompare < collection.length;
      indexToCompare++
    ) {
      if (minimumElement > collection[indexToCompare]) {
        minimumElement = collection[indexToCompare];
        indexOfMinimumFound = indexToCompare;
      }
    }
    collection[iteration] = minimumElement;
    collection[indexOfMinimumFound] = currentElement;
  }
  return collection;
};

const insertionSort = (collection) => {
  for (let iteration = 1; iteration < collection.length; iteration++) {
    const elementToCheck = collection[iteration];
    let lastIndexSortedPart = iteration - 1;

    while (
      lastIndexSortedPart >= 0 &&
      elementToCheck < collection[lastIndexSortedPart]
    ) {
      collection[lastIndexSortedPart + 1] = collection[lastIndexSortedPart];
      lastIndexSortedPart = lastIndexSortedPart - 1;
    }

    collection[lastIndexSortedPart + 1] = elementToCheck;
  }

  return collection;
};

function quickSortInternal(collection, startIndex, endIndex) {
  if (startIndex >= endIndex) return;

  const pivot = startIndex;
  const pivotValue = collection[pivot];

  let leftIndex = startIndex + 1;
  let rightIndex = endIndex;

  while (leftIndex <= rightIndex) {
    const leftValue = collection[leftIndex];
    const rightValue = collection[rightIndex];

    if (leftValue > pivotValue && rightValue < pivotValue) {
      collection[leftIndex] = rightValue;
      collection[rightIndex] = leftValue;
    }

    if (leftValue <= pivotValue) {
      leftIndex++;
    }

    if (rightValue >= pivotValue) {
      rightIndex--;
    }
  }

  collection[pivot] = collection[rightIndex];
  collection[rightIndex] = pivotValue;

  quickSortInternal(collection, startIndex, rightIndex - 1);
  quickSortInternal(collection, rightIndex + 1, endIndex);
}

const quickSort = (collection) => {
  const startIndex = 0;
  const endIndex = collection.length - 1;

  quickSortInternal(collection, startIndex, endIndex);
  return collection;
};

function mergeArrays(firstColl, secondColl) {
  const sortedArray = [];
  const totalNumberOfElements = firstColl.length + secondColl.length;

  let indexSortedArray = 0;
  let indexPointerFirstColl = 0;
  let indexPointerSecondColl = 0;

  while (indexSortedArray < totalNumberOfElements) {
    const valueToUseFirstColl = firstColl[indexPointerFirstColl];
    const valueToUseSecondColl = secondColl[indexPointerSecondColl];

    if (valueToUseFirstColl < valueToUseSecondColl) {
      sortedArray[indexSortedArray] = valueToUseFirstColl;
      indexPointerFirstColl++;
    } else if (valueToUseSecondColl < valueToUseFirstColl) {
      sortedArray[indexSortedArray] = valueToUseSecondColl;
      indexPointerSecondColl++;
    } else {
      if (valueToUseFirstColl === undefined) {
        sortedArray[indexSortedArray] = valueToUseSecondColl;
        indexPointerSecondColl++;
      }
      if (valueToUseSecondColl === undefined) {
        sortedArray[indexSortedArray] = valueToUseFirstColl;
        indexPointerFirstColl++;
      }
    }
    indexSortedArray++;
  }

  return sortedArray;
}

const mergeSort = (collection) => {
  if (collection.length === 1) return collection;

  const middleElementIndex = Math.ceil(collection.length / 2);

  /*OBS: in a real program you should not use pre-created methods like slice, because they are basically going to
         iterate throught the array, adding a N complexity into the algorithm. Here I'm doing this just for the 
         sake of it. 
         
         I could actually do something similar to what I did in the quickSort algorithm, passing the start and
         end index to an auxiliary function, but I think I can use the slice instead just to make it clear what
         the algorithm is doing.
         
        If I did something like that, the Space could be something near O(1), instead of O(n). */

  const firstHalf = collection.slice(0, middleElementIndex);
  const secondHalf = collection.slice(middleElementIndex, collection.length);

  const leftResult = mergeSort(firstHalf);
  const rightResult = mergeSort(secondHalf);

  return mergeArrays(leftResult, rightResult);
};

export { bubbleSort, selectionSort, insertionSort, quickSort, mergeSort };
