function showSalary(users, age) {
  let result = users.filter(user => user.age <= age)
  result = result.map(user => user.name + ', ' + user.balance)
  return result.join('\n');
}
