/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let result = [];
  for (let u in users) {
    if (users[u].age <= age) {
      result.push(users[u].name + ", " + users[u].balance);
    }
  }
  result = result.join('\n');
  return result;
};
