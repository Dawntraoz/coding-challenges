const mergeArrays = (arr1, arr2, direction) => {
  return [...arr1, ...arr2].sort((a, b) => direction==='asc' ? a-b : b-a);
};

module.exports = mergeArrays;

/*(a > b ? 1 : a < b ? -1 : 0)*/ /*(b > a ? 1 : b < a ? -1 : 0))*/
