/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let fr2 = friends;
  fr2 = fr2.map(item => item.firstName + ' ' + item.lastName);
  let ul = document.createElement("ul");

  for (let i = 0; i < fr2.length; i++) {

    let li = document.createElement("li");
    li.appendChild(document.createTextNode(fr2[i]));
    ul.appendChild(li);
  }
  return ul;
}
