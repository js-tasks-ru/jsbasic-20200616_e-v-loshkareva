/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 Функция highlight для каждой строки tr таблицы должна сделать следующее:

 Проставить класс available/unavailable в зависимости от значения атрибута data-available у ячейки Status.
 Если её значение true – класс available, если её значение false – класс unavailable.
 Проставить атрибут hidden, если атрибута data-available нет вообще.
 Проставить класс male/female в зависимости от содержимого ячейки Gender.
 Если её значение m – класс male, Если её значение f – класс female.
 Добавить inline-стиль style="text-decoration: line-through", если значение ячейки Age меньше 18.

 */
function highlight(table) {
  console.log(table.tBodies[0].rows);
  for (var i = 0; i < table.tBodies[0].rows.length; i++) {
    //console.log(table.tBodies[0].rows[i].cells[3].hasAttribute('data-available'));
    let hasAttribute = table.tBodies[0].rows[i].cells[3].hasAttribute('data-available');
    if (hasAttribute == true) {
      //console.log(table.tBodies[0].rows[i].cells[3].getAttribute('data-available'));
      if (table.tBodies[0].rows[i].cells[3].getAttribute('data-available') == "true") {

        table.tBodies[0].rows[i].classList.add('available');
      } else {
        table.tBodies[0].rows[i].classList.add('unavailable');
      }
    } else {

      table.tBodies[0].rows[i].setAttribute('hidden', true);
    }
    let gender = table.tBodies[0].rows[i].cells[2].innerHTML;
    //console.log(table.tBodies[0].rows[i].cells[3].getAttribute('data-available'));
    if (gender == "m") {
      table.tBodies[0].rows[i].classList.add('male');
    } else {
      table.tBodies[0].rows[i].classList.add('female');

    }
    let age = table.tBodies[0].rows[i].cells[1].innerHTML;
    if (age < 18) {
      table.tBodies[0].rows[i].style.textDecoration = "line-through";
    }
  }

}
