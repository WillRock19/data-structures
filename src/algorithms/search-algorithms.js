/* 
I. LINEAR SEARCH

    I.1. How it works: we compare each element of the list with the element we want to find and return 
                       true if they are alike. With this kind of search, the worst case will always be 
                       the total size of the list we are searching.

    I.2. Time Complexity

        WORST-CASE     BEST-CASE        AVERAGE-CASE    SPACE USED
           O(n)           O(1)              O(n)           O(1)      

II. BINARY SEARCH

    II.1. How it works: binary search should ONLY BE USED WHEN THE INPUT IS SORTED. Here, we'll first
                        get the middle element of the list, then we'll compare it with the element we
                        are searching. Then, we'll divide the whole list into two and compare the searched
                        element with the middle one. If the searched is higher then the middle one, we'll
                        look for the searched element in the first part of our list. If it's lower, we'll
                        look into the second part. We keep doing this recursivelly until we find can find
                        our element. 
                        
        Example: imagine we want to find 3, and that N is the last-element index from our list, which will
                 start as 9.

                                List:                                   What do we do?
                        [1,2,3,4,5,6,7,8,9,10]             middle = 9 / 2 = 4,5 => index 4 (number 5)
                        
                        [1,2,3,4] [6,7,8,9,10]             4 is lower than 5, so we get the first list

                              [1,2,3,4]                    middle = 3 / 2 = 1,5 => index 1 (number 2)

                             [1,2] [3,4]                   4 is higher than 2, so we get the second list
                             
                                [3,4]                      middle = 1 / 2 = 0,5 => index 0 (number 3)

                               [3] [4]                     3 is lower than 4, so we get the second list

                                 [4]                       single element. Is equal to 4. We return true.

   II.2. Time Complexity
   
           WORST-CASE     BEST-CASE        AVERAGE-CASE    SPACE USED
            O(log(n))       O(1)             O(log(n))        O(1)      
*/

const linearSearch = (collection, elementToFind) => {
  for (let index = 0; index <= collection.length; index++) {
    if (collection[index] === elementToFind) {
      return true;
    }
  }
  return false;
};

const binarySearch = (sortedCollection, elementToFind) => {
  let firstIndex = 0;
  let lastIndex = sortedCollection.length;

  while (firstIndex !== lastIndex) {
    let middleIndex = Math.floor(sortedCollection.length / 2);

    if(sortedCollection[middleIndex] === elementToFind) {
        return true;
    }
    else if (sortedCollection[middleIndex] > elementToFind) {
      lastIndex = middleIndex - 1;
    }
    else {
      firstIndex = middleIndex + 1;
    }

    const newLength = lastIndex - firstIndex;
    middleIndex = Math.floor(newLength / 2);
  }
  return sortedCollection[firstIndex] === elementToFind;
};

const recursiveHelper = (sortedCollection, elementToFind, firstIndex, lastIndex) => {
  if (firstIndex >= lastIndex) {
    return false;
  }

  const sumOfIndexes = firstIndex + lastIndex;
  const middleIndex = Math.floor(sumOfIndexes / 2);

  if(sortedCollection[middleIndex] === elementToFind){
    return true;
  }
  else if(sortedCollection[middleIndex] > elementToFind){
    lastIndex = middleIndex - 1;
  }
  else {
    firstIndex = middleIndex + 1;
  }

  return recursiveHelper(sortedCollection, elementToFind, firstIndex, lastIndex);
}

const binarySearchRecursive = (sortedCollection, elementToFind) => {
  let firstIndex = 0;
  let lastIndex = sortedCollection.length - 1;

  return recursiveHelper(sortedCollection, elementToFind, firstIndex, lastIndex);
};

export { linearSearch, binarySearch, binarySearchRecursive };
