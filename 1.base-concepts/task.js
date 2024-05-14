"use strict"
function solveEquation(a, b, c) {
  let arr = [];

  let discriminant = Math.pow(b, 2) - (4 * a * c);

  if (discriminant === 0) {
    let x = (-b) / (2 * a);
    arr.push(x);
  } if (discriminant > 0) {
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(x1, x2);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = percent / 100 / 12;
  let s = amount - contribution;
  let monthlyPayment = s * (p + (p / (Math.pow((1 + p), countMonths) - 1)))

  let totalAmount = monthlyPayment * countMonths;

  return Number(totalAmount.toFixed(2));
}