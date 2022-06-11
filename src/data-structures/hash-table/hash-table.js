/*
Sources: https://medium.com/swlh/things-every-engineer-should-know-hashmaps-b354088206b5
         https://www.educative.io/blog/data-strucutres-hash-table-javascript
         https://www.interviewcake.com/concept/python/hash-map
         https://medium.com/zero-equals-false/how-hashmap-works-a-missing-piece-of-hood-29dd28c4c01e

	      Average	  Worst Case
space	    O(n)	    O(n)
insert	  O(1)	    O(n)
lookup	  O(1)	    O(n)
delete	  O(1)	    O(n)


I. DEFINITION

A hash table (often called a hash map) is a data structure that maps keys to values. Hash tables 
combine lookup, insert, and delete operations in an efficient way. The key is sent to a hash function 
that performs arithmetic operations on it. The result (called the hash value or hash) is an index of 
the key-value pair.

Worst case is when COLLISIONS happens.

The performance of a hash table depends on three fundamental factors:

    -> hash function;
    -> size of the hash table;
    -> collision handling method;

STRENGTHS:

    -> Fast lookups: Lookups take O(1) time on average.
    -> Flexible keys: Most data types can be used for keys, as long as they're hashable.

WEAKNESSES:

    -> Slow worst-case lookups: Lookups take O(n) time in the worst case.

    -> Unordered: Keys aren't stored in a special order. If you're looking for the smallest key, the 
                  largest key, or all the keys in a range, you'll need to look through every key to 
                  find it.

    -> Single-directional lookups: While you can look up the value for a given key in O(1) time, looking 
                                   up the keys for a given value requires looping through the whole 
                                   dataset, which takes O(n) time.

    -> Not cache-friendly: Many hash table implementations use linked lists, which don't put data next 
                           to each other in memory.


II. HASH TABLES vs TREES

Trees are more useful when an application needs to order data in a specific sequence. Hash tables are 
the smarter choice for randomly sorted data due to its key-value pair organization.

Hash tables can perform in constant time, while trees usually work in O(logn). In the worst-case scenario, 
the performance of hash tables can be as low as O(n). An AVL tree, however, would maintain O(logn)in the 
worst case.

An efficient hash table requires a hash function to distribute keys. A tree is simpler, since it accesses 
extra space only when needed and does not require a hash function.


III. COMMON USES

    -> Database indexing;
    -> Cache;
    -> Unique data representation;
    -> Lookup in an unsorted array;
    -> Lookup in sorted array using binary search;


IV. HASH FUNCTION

It is a method or function that takes an item’s key as an input, assigns a specific index to that key 
and returns the index whenever the key is looked up. This operation usually returns the same hash for 
a given key. A good hash function should be efficient to compute and uniformly distribute keys.

                _______________
    KEY ---->  | hash function | -----> INDEX
               |_______________|

    * Arithmetic Modular: In this approach, we take the modular of the key with the list/array size: 
                          index=key MOD tableSize. So, the index will always stay between 0 and 
                          tableSize - 1.

    * Truncation: Here, we select a part of the key as the index rather than the whole key. We can use 
                        a mod function for this operation, although it does not need to be based on the 
                        array size.

    * Folding: This approach involves dividing the key into small chunks and applying a different 
               arithmetic strategy at each chunk.
               
V. MORE

Depending on the programming language, hashtables are already used as a build-in type. Like:

  -> Python & C#: Dictionary                  -> JavaScript: Objects

  -> Java: Maps                               -> Ruby: Hashes*/

class SimpleHashTable {
  constructor() {
    this.values = {};
    this.length = 0;
  }

  #hasValueForKeyAndHash = (key, hash) => {
    return (
      this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)
    );
  };

  calculateHash = (key) => {
    return key.toString().length % this.length;
  };

  add = (key, value) => {
    const hash = this.calculateHash(key);

    if (!this.values.hasOwnProperty(hash)) {
      this.values[hash] = {};
    }

    if (!this.values[hash].hasOwnProperty(value)) {
      this.length++;
    }

    this.values[hash][key] = value;
  };

  search = (key) => {
    const hash = this.calculateHash(key);
    if (this.#hasValueForKeyAndHash(key, hash)) {
      return this.values[hash][key];
    }

    return null;
  };

  delete = (key) => {
    const hash = this.calculateHash(key);
    if (this.#hasValueForKeyAndHash(key, hash)) {
      this.values[hash][key] = {};
      return true;
    }
    return false;
  };
}

class HashEntry {
  constructor(key, data) {
    this.key = key;
    this.data = data;
    this.next = null;
  }
}

class HashTableWithBucketChaining {
  #availableSlots;
  #currentSize;

  constructor() {
    this.#availableSlots = 10;
    this.#currentSize = 0;
    this.buckets = new Array(this.availableSlots).fill(null);
  }

  #simpleHashFunction(key) {
    return key % this.#availableSlots;
  }

  currentSize() {
    return this.#currentSize;
  }

  isEmpty() {
    return this.#currentSize === 0;
  }

  push(key, value){

  }

  delete(key){
    
  }
}

export { SimpleHashTable, HashTableWithBucketChaining };
