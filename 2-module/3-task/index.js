let calculator = {
  number1 : 0,
  number2 : 0,
}
calculator.read= function(a,b)
{
   this.number1=a;
   this.number2=b;

}
calculator.sum= function()
{
  let sum=this.number1+this.number2;
  return sum;
}
calculator.mul=function()
{
  let mul=this.number1*this.number2;
  return mul;
}

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
