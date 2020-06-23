/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
 function factorial(n) {
    let t=1;
    let f=1;
    while (t<=n){
      f=t*f;
      t++;
  }
  return f;
 }
