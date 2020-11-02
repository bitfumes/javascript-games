// let result = 1;
// let number = 10;
// for (let i = 0; i < number; i++) {
//   result = result * (number - i);
// }
// console.log(result);

function factorialOf(number) {
  nextNum = number - 1;
  if (nextNum > 0) {
    return number * factorialOf(nextNum);
  }
  return 1;
}

console.log(factorialOf(10));

// function countdown(num) {
//   console.log(num);
//   if (num != 0) {
//     countdown(num - 1);
//   }
// }

// countdown(4);

// let i = 0;
// const recussive = function () {
//   i++;
//   if (i < 10) {
//     console.log(i);
//     recussive();
//   }
// };

// recussive();
