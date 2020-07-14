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
  //  get elem()
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
      }
        row1.innerHTML = `<td>${this.rowNum[i].name}</td><td>${this.rowNum[i].age}</td><td>${this.rowNum[i].salary}</td><td>${this.rowNum[i].city}</td>`;
        let td = document.createElement("td");
        button.innerHTML = "X";
        td.appendChild(button);
        row1.appendChild(td);
        tblBody.appendChild(row1);
      }
      tbl.appendChild(tblBody);


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
