function camelize(str) {
  let result = str.split('-');
  result = result.map((item, index) => {
    if (index === 0) {
      return item;
    }
    return item[0].toUpperCase() + item.slice(1);
  })
  return result.join('');
}
