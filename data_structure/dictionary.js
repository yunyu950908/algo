/**
 * dictionary 字典是一种以 键-值 对形式存储数据的数据结构
 *
 * 应用
 * 1. 字典
 * 2. 去重
 * 3. 记录频率
 * */
class Dictionary {
  constructor() {
    return {}; // 偷懒
  }
}

/**
 * 去重
 * */
function unique(array) {
  const dict = new Dictionary();
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (!dict[item]) {
      dict[item] = true;
      result.push(item);
    }
  }
  return result;
}

/**
 * 记录频率
 * */
function frequency(array) {
  const dict = new Dictionary();
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    dict[item] ? dict[item]++ : dict[item] = 1;
  }
  return dict;
}
