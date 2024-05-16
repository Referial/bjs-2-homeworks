function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let avg = arr.reduce((accumulator, currentValue) =>
    (accumulator + currentValue), initialValue = 0);

  avg = Number((avg / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sumElements = arr.reduce((accumulator, currentValue) =>
    (accumulator + currentValue), 0)
  return sumElements;
}

function differenceMaxMinWorker(...arr) {
  let max = 0;
  let min = 0;
  let difference = 0;

  if (arr.length > 0) {
    max = Math.max(...arr);
    min = Math.min(...arr);

    difference = max - min;
  }

  return difference;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let difference = 0;

  if (arr.length > 0) {
    for (let x = 0; x < arr.length; x++) {
      let numberArray = arr[x];

      if (numberArray % 2 === 0) {
        sumEvenElement += numberArray;
      } else {
        sumOddElement += numberArray;
      }
    }
    difference = sumEvenElement - sumOddElement;
  }

  return difference
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let private = 0;

  if (arr.length > 0) {
    for (let x = 0; x < arr.length; x++) {
      let numberArray = arr[x];

      if (numberArray % 2 === 0) {
        sumEvenElement += numberArray;
        countEvenElement++;
      }
    }
    private = sumEvenElement / countEvenElement;
  }

  return private;
}

function makeWork(arrOfArr, func) {
  return Math.max(...arrOfArr.map(arr => func(...arr)));
}