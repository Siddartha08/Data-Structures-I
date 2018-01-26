/* eslint-disable no-unused-vars */
/* eslint-disable */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }
  // Adds the given key, value pair to the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // If no bucket has been created for that index, instantiate a new bucket and add the key, value pair to that new bucket
  // If the key already exists in the bucket, the newer value should overwrite the older value associated with that key
  insert(key2, value) {
  let key = key2.toString();
  if (!Array.isArray(this.storage[0])) {
    this.storage = [];
  }
  if (this.storage.entries().length < 1) {
    this.storage[0] = [];
  } else if (getIndexBelowMax(key, this.limit) !== key) {
    this.storage.set(getIndexBelowMax(key, this.limit), value)
  }
  
  const hash = getIndexBelowMax(key, this.limit);
  this.storage.set(hash, value);
  return this.storage;
  }
 
  //us the hashing function to return a position to place inside
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
  let ke = key.toString();
  
  }
  
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
  let keySetter = key.toString();
  
  }
}

module.exports = HashTable;
