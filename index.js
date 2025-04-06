// Collection Functions (Arrays or Objects)

function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        callback(values[i]);
      }
    }
    return collection;
  }

  function myMap(collection, callback) {
    const result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i], i));
      }
    } else {
      const keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        result.push(callback(collection[key], key));
      }
    }
    return result;
  }

  function myReduce(collection, callback, acc) {
    let values = Array.isArray(collection) ? [...collection] : Object.values(collection);
    let startIdx = 0;

    if (acc === undefined) {
      acc = values[0];
      startIdx = 1;
    }

    for (let i = startIdx; i < values.length; i++) {
      acc = callback(acc, values[i], collection);
    }

    return acc;
  }

  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) return collection[i];
      }
    } else {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) return values[i];
      }
    }
    return undefined;
  }

  function myFilter(collection, predicate) {
    const result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) result.push(collection[i]);
      }
    } else {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) result.push(values[i]);
      }
    }
    return result;
  }

  function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
  }

  // Array Functions

  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    }
    return array.slice(0, n);
  }

  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    }
    return array.slice(Math.max(array.length - n, 0));
  }

  // BONUS Functions

  function mySortBy(array, callback) {
    return [...array].sort((a, b) => {
      const valA = callback(a);
      const valB = callback(b);
      if (typeof valA === 'string' && typeof valB === 'string') {
        return valA.localeCompare(valB);
      }
      return valA - valB;
    });
  }

  function myFlatten(array, shallow, newArr = []) {
    if (shallow) {
      return newArr.concat(...array);
    }

    for (const element of array) {
      if (Array.isArray(element)) {
        myFlatten(element, false, newArr);
      } else {
        newArr.push(element);
      }
    }

    return newArr;
  }

  // Object Functions

  function myKeys(object) {
    return Object.keys(object);
  }

  function myValues(object) {
    return Object.values(object);
  }

  // Export all functions for testing
  module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    mySortBy,
    myFlatten,
    myKeys,
    myValues
  };