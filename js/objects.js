// let planets = [
//   { name: "Mercury", isLife: false },
//   { name: "Venus", isLife: false },
//   { name: "Earth", isLife: true },
//   { name: "Mars", isLife: true },
//   { name: "Jupiter", isLife: false },
//   { name: "Saturn", isLife: false },
//   { name: "Uranus", isLife: false },
//   { name: "Naptune", isLife: false },
// ];
// console.log(Array.isArray(planets[2]));
//  Object has key:value
const PEN = {
  color: "blue",
  brand: "Parker",
  is_permanent: true,
  price: { value: 2, currency: "USD" },
  name: function () {
    return this.color + " " + this.brand;
  },
};

console.log(PEN.name());

// let pokemon = "Raichu";
// const list = {
//   pokemon: pokemon,
//   set: () => {
//     pokemon = "Pikachu";
//   },
//   get: () => this.pokemon,
// };
// // Quiz by sarthaksavvy
// list.set();
// console.log(list.get());
