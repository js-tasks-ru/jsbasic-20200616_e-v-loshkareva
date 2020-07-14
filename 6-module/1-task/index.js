/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: '',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */


export default class UserTable {
  constructor(rows) {
    this.rowNum = rows;
  //  get elem() {
      let clickEvent = new MouseEvent('click', { bubbles: true });

      let tbl = document.createElement("table");
      let thead = document.createElement("thead");
      let tblBody = document.createElement("tbody");
      thead.innerHTML = "<tr><th>Имя</th><th>Возраст</th><th>Зарплата</th><th>Город</th><th></th></tr>";
      tbl.appendChild(thead);
      for (let i = 0; i < this.rowNum.length; i++) {
        let row1 = document.createElement("tr");
        let idStr = row1.id;
        //console.log(idStr);
        let button = document.createElement("button");
        button.onclick =  () => {
          row1.remove();
          //var element = document.getElementById("top");
  //while (row1.firstChild) {
  //  row1.removeChild(row1.firstChild);
  //}
  //row1.remove();
  //tblBody.removeChild(row1);
  //row1 = null;
  //console.log(row1);
  //console.log(tbl.querySelector('tbody tr'));
  }
  //row1.remove(); row1 = null;};
      //  button.onclick = function() {

          //let removeRow= document.getElementById('idStr');
          //removeRow.parentNode.removeChild(removeRow);
              //  };

        row1.innerHTML = `<td>${this.rowNum[i].name}</td><td>${this.rowNum[i].age}</td><td>${this.rowNum[i].salary}</td><td>${this.rowNum[i].city}</td>`;
        let td = document.createElement("td");
        button.innerHTML = "X";
        td.appendChild(button);
        row1.appendChild(td);
        tblBody.appendChild(row1);
      }
      tbl.appendChild(tblBody);

      //return 123;
      //  this.table.appendChild('111');
      //  console.log(this.rowNum);

    //  return tbl;
   this.elem = tbl;

  }


  ////function(this) {
  //   for (let i = 0; i < this.rowNum; i++) {
  //     this.table.appendChild('');
  // }
  //     return this;
  // }

  //return this.table;


}
