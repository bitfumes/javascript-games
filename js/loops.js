let planets = [
  { name: "Mercury", isLife: false },
  { name: "Venus", isLife: false },
  { name: "Earth", isLife: true },
  { name: "Mars", isLife: true },
  { name: "Jupiter", isLife: false },
  { name: "Saturn", isLife: false },
  { name: "Uranus", isLife: false },
  { name: "Naptune", isLife: false },
  { name: "Pluto" },
];

// loop means repeating a code for certain times

// for (let i = 0; i < planets.length; i++) {
//   if (planets[i]["isLife"] == undefined) {
//     console.log("No information about life");
//     continue;
//   }

//   if (planets[i]["isLife"]) {
//     console.log("Life is here ", planets[i]["name"]);
//     continue;
//   }

//   if (!planets[i]["isLife"]) {
//     console.log("No life", planets[i]["name"]);
//     continue;
//   }
// }

for (let j = 0; j < 1000; j++) {
  console.log("looooooop");
  if (j == 555) {
    break;
  }
}
