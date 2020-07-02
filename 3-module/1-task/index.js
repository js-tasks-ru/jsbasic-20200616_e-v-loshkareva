/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  let resultArr = [];
  for (let i in users) {
    resultArr[i] = users[i].name;
  }
  return resultArr;
}
