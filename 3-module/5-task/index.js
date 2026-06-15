function getMinMax(str) {
  let arr = str.split(' ');
  let filteredArr = arr.filter(item => isNaN(Number(item)) === false);
  let numbers = filteredArr.map(number => +number)
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);
  return {
    min: min,
    max: max
  };
}
