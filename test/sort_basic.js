const assert = require('assert');

function swap(a, b, array) {
  if (a === b) return;
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
  return null;
}

function createArray(num, range) {
  return Array.from(new Array(num), () => Math.random() * range >>> 0);
}

function testSortFunc(sortFn, arr) {
  for (let i = 0; i < 100; i += 1) {
    const newArray = arr || createArray(100, 100);
    const copyArray = newArray.slice(0);
    const sortedArray = sortFn(newArray);
    const chromeSort = copyArray.sort((a, b) => a - b);
    assert.deepStrictEqual(sortedArray, chromeSort);
  }
}

module.exports = {
  swap,
  createArray,
  testSortFunc,
};