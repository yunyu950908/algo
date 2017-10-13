function newArr(num) {
  const arr = new Array(num).fill(0).map(e => {
    return e = Math.floor(Math.random() * 100)
  })
  return arr;
}

// ============================================

let arr = newArr(10);

console.log(arr) // 打印随机初始数组

// ==================几个排序算法==========================

/* BUB */

function BUB() {
  let temp;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
    console.log(arr)
  }
  return arr
}

// BUB(arr)

/**
 * SEL
 */

function SEL(arr) {
  let len = arr.length;
  let minIndex;
  let temp
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = 1 + i; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
    console.log(arr)
  }
  return arr;
}

// SEL(arr)

/**
 * INS
 */

function INS(arr) {
  let len = arr.length;
  let index, current;
  for (let i = 1; i < len; i++) {
    index = i;
    current = arr[i];
    while (index >= 1 && current < arr[index - 1]) {
      arr[index] = arr[index - 1];
      arr[index - 1] = current;
      index--;
    }
    console.log(arr)
  }
  return arr;
}

// INS(arr)


/**
 * MER
 */

function MER(arr) {
  let len = arr.length;
  if (len < 2) return arr

  let middle = Math.floor(len / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return merge(MER(left), MER(right))

  function merge(left, right) {
    let ret = [];
    while (left.length > 0 && right.length > 0) {
      if (left[0] <= right[0]) {
        ret.push(left.shift())
      } else {
        ret.push(right.shift())
      }
    }

    while (left.length > 0) {
      ret.push(left.shift())
    }

    while (right.length > 0) {
      ret.push(right.shift())
    }
    console.log(ret)
    return ret;
  }

}

// MER(arr)

/**
 * QUI
 */

function QUI(arr) {
  let len = arr.length;

  if (len < 2) return arr;

  let left = [];
  let right = [];

  let pivot = arr[0];

  for (let i = 1; i < len; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return QUI(left).concat(pivot, QUI(right))
}

// console.log(QUI(arr))

/**
 * R-QUI
 */

function RQUI(arr) {
  let len = arr.length;

  if (len < 2) return arr;

  let left = [];
  let right = [];

  let pivotIndex = Math.floor(Math.random() * len);
  let pivot = arr.splice(pivotIndex, 1);

  for (let i = 0; i < len - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return RQUI(left).concat(pivot, RQUI(right))
}

// console.log(RQUI(arr))


/**
 * COU
 */

function COU(arr) {
  let len = arr.length;
  let maxCount = Math.max.apply(Math, arr)
  let newArr = new Array(maxCount)

  for (let i = 0; i < len; i++) {
    newArr[arr[i]] = []
  }

  for (let i = 0; i < len; i++) {
    newArr[arr[i]].push(arr[i])
  }

  function flatten(arr) {
    return arr.reduce(function (initArr, curArr) {
      return initArr.concat(Array.isArray(curArr) ? flatten(curArr) : curArr)
    }, [])
  }

  console.log(flatten(newArr))
  return flatten(newArr)
}

// COU(arr)

/**
 * RADIX
 */



















