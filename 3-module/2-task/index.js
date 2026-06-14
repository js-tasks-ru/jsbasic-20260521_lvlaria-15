let arr = [5, 3, 8, 1];
function filterRange(arr, a, b) {
  let filtered = arr.filter(item => item >= a && item <= b);

  return filtered;
}