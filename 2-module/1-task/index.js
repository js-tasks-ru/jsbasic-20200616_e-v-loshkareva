/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
 let salary= {
 John: 1000,
 Ann: 1600,
 Pete: 1300,
 month: 'December',
 currency: 'USD',
 isPayed: false
}

function sumSalary(salaries) {
let salariessumm = 0;
for (let key in salaries)
{
if ((typeof salaries[key]) === 'number' && salaries[key] !== NaN)
{
  salariessumm=salariessumm+salaries[key];
}
}
return salariessumm;
}
