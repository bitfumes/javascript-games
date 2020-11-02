function counter() {
  this.privateValue = 0;

  const increment = () => {
    this.privateValue++;
  };

  function decrement() {
    this.privateValue--;
  }

  const value = () => {
    return this.privateValue;
  };

  return {
    increment,
    decrement,
    value,
  };
}

const myCounter = counter();
myCounter.increment();
myCounter.increment();
console.log(myCounter.value());

// const person = {
//   age: 10,
//   eligibleForVote: function () {
//     console.log(this);
//     return this.age;
//   },
// };

// console.log(person.eligibleForVote());

// const addOne = a => a + 1;
// console.log(addOne(4));

// const sayHii = () => {
//   return "Hello and Hii from arrow function";
// };

// function sayHii() {
//   return "hello and hii";
// }
