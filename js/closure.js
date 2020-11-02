let number = 0;

setInterval(() => {
  number++;
  console.log(number);
}, 1000);

function counter() {
  let privateValue = 0;

  function increment() {
    privateValue++;
  }

  function decrement() {
    privateValue--;
  }

  function value() {
    return privateValue;
  }

  return {
    increment,
    decrement,
    value,
  };
}

const myCounter = counter();

myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.increment();
console.log(myCounter.value());
myCounter.decrement();
console.log(myCounter.value());

// function increment() {
//   let counter = 0;
//   function set() {
//     counter++;
//     return counter;
//   }
//   return set;
// }

// const increase = increment();
// console.log(increase());
// console.log(increase());
// console.log(increase());
// console.log(increase());
// console.log(increase());
