import {
  bubbleSort,
  selectionSort,
  insertionSort,
  quickSort,
  mergeSort,
  countingSort,
} from "./sorting-algorithms";

describe("bubbleSort", () => {
  test("Should order array on best case", () => {
    const sortedArray = [14, 20, 25, 31, 44, 55];
    expect(bubbleSort(sortedArray)).toEqual([14, 20, 25, 31, 44, 55]);
  });

  test("Should order array on average case", () => {
    const semiSortedArray = [14, 25, 31, 20, 55, 44];
    expect(bubbleSort(semiSortedArray)).toEqual([14, 20, 25, 31, 44, 55]);
  });

  test("Should order array on worst case", () => {
    const sortedBackwardsArray = [55, 44, 31, 25, 20, 14];
    expect(bubbleSort(sortedBackwardsArray)).toEqual([14, 20, 25, 31, 44, 55]);
  });
});

describe("selectionSort", () => {
  test("Should order array on best case", () => {
    const sortedArray = [14, 20, 25, 31, 44, 55];
    expect(selectionSort(sortedArray)).toEqual([14, 20, 25, 31, 44, 55]);
  });

  test("Should order array on average case", () => {
    const semiSortedArray = [14, 25, 31, 20, 55, 44];
    expect(selectionSort(semiSortedArray)).toEqual([14, 20, 25, 31, 44, 55]);
  });

  test("Should order array on worst case", () => {
    const sortedBackwardsArray = [20, 12, 10, 15, 2];
    expect(selectionSort(sortedBackwardsArray)).toEqual([2, 10, 12, 15, 20]);
  });
});

describe("insertionSort", () => {
  test("Should order array on best case", () => {
    const sortedArray = [14, 20, 25, 31, 44, 55];
    expect(insertionSort(sortedArray)).toEqual([14, 20, 25, 31, 44, 55]);
  });

  test("Should order array on average case", () => {
    const semiSortedArray = [14, 25, 31, 20, 55, 44];
    expect(insertionSort(semiSortedArray)).toEqual([14, 20, 25, 31, 44, 55]);
  });

  test("Should order array on worst case", () => {
    const sortedBackwardsArray = [55, 44, 31, 25, 20, 14];
    expect(insertionSort(sortedBackwardsArray)).toEqual([
      14, 20, 25, 31, 44, 55,
    ]);
  });
});

describe("quickSort", () => {
  test("Should order array on average case", () => {
    const semiSortedArray = [14, 25, 31, 20, 55, 44];
    expect(quickSort(semiSortedArray)).toEqual([14, 20, 25, 31, 44, 55]);
  });

  test("Should order array on worst case", () => {
    const sortedArray = [14, 20, 25, 31, 44, 55];
    expect(quickSort(sortedArray)).toEqual([14, 20, 25, 31, 44, 55]);
  });
});

describe("mergeSort", () => {
  test("Should order array on best case", () => {
    const sortedArray = [14, 20, 25, 31, 44, 55];
    expect(mergeSort(sortedArray)).toEqual([14, 20, 25, 31, 44, 55]);
  });

  test("Should order array on average case", () => {
    const semiSortedArray = [14, 25, 31, 20, 55, 44];
    expect(mergeSort(semiSortedArray)).toEqual([14, 20, 25, 31, 44, 55]);
  });

  test("Should order array on worst case", () => {
    const sortedBackwardsArray = [55, 44, 31, 25, 20, 14];
    expect(mergeSort(sortedBackwardsArray)).toEqual([14, 20, 25, 31, 44, 55]);
  });
});

describe("countingSort", () => {
  test("Should return the received data if array has a single value", () => {
    const originalArray = [1];
    expect(countingSort(originalArray)).toEqual(originalArray);
  });

  test("Should throw an error if array has a negative number", () => {
    const originalArray = [-1, -50, 10];

    expect(() => {
      countingSort(originalArray);
    }).toThrow(
      "This countingSort implementation was not made to deal with negative numbers!"
    );
  });

  test("Should sort array", () => {
    const originalArray = [2, 1, 1, 0, 2, 5, 4, 0, 2, 8, 7, 7, 9, 2, 0, 1, 9];
    const expectedArray = [0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 4, 5, 7, 7, 8, 9, 9];
    expect(countingSort(originalArray)).toEqual(expectedArray);
  });
});
