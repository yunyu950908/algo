const assert = require('assert');

const { LinkedList } = require('./linked_list');

describe('LinkedList test', () => {
  pushTest();
  shiftTest();
  findTest();
  insertTest();
  removeTest();
});

const initialize = {
  tail: { element: 'third node', next: null },
  head: {
    element: null,
    next: {
      element: 'first node',
      next: {
        element: 'second node',
        next: {
          element: 'third node',
          next: null,
        },
      },
    },
  },
  size: 3,
};

function cp(jsonObj) {
  return JSON.parse(JSON.stringify(jsonObj));
}

function pushTest() {
  it('push test', () => {
    const actual = new LinkedList();
    actual.push('first node');
    actual.push('second node');
    actual.push('third node');

    assert.deepEqual(actual, initialize);
  });
}

function shiftTest() {
  it('shift test', () => {
    const expected = {
      tail: { element: 'third node', next: null },
      head: {
        element: null,
        next: {
          element: 'second node',
          next: { element: 'third node', next: null },
        },
      },
      size: 2,
    };

    const actual = new LinkedList(cp(initialize));
    actual.shift();

    assert.deepEqual(actual, expected);
  });
}

function findTest() {
  it('find test', () => {
    const actual = (new LinkedList(initialize)).find('second node');

    const expected = { element: 'second node', next: { element: 'third node', next: null } };

    assert.deepEqual(actual, expected);
  });
}

function insertTest() {
  it('insert test', () => {
    const actual = new LinkedList(cp(initialize));
    actual.insert('insert node', 'second node');
    const expected = {
      tail: { element: 'third node', next: null },
      head: {
        element: null, next: {
          element: 'first node', next: {
            element: 'second node', next: {
              element: 'insert node', next: {
                element: 'third node', next: null,
              },
            },
          },
        },
      },
      size: 4,
    };

    assert.deepEqual(actual, expected);
  });
}

function removeTest() {
  it('remove test', () => {
    const actual = new LinkedList(cp(initialize));
    actual.remove('second node');
    const expected = {
      tail: { element: 'third node', next: null },
      head: {
        element: null, next: {
          element: 'first node', next: {
            element: 'third node', next: null,
          },
        },
      },
      size: 2,
    };

    assert.deepEqual(actual, expected);
  });
}
