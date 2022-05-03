const Dinosaur = require("../models/dinosaur.js");

const dino1 = new Dinosaur("Garudimimus", "Omnivorous", 150);
const dino2 = new Dinosaur("Garudimimus", "Herbivorous", 350);
const dino3 = new Dinosaur("Argentinosaurus", "Herbivorous", 50);
const dino4 = new Dinosaur("Tyrannosaurus", "Carnivorous", 1000);
let dinos_list = [dino1, dino2, dino3, dino4];

let newList = [dino1, dino2, dino3, dino4];
// function test(species) {
//   for (let dino of dinos_list) {
//     if (dino.species === species) {
//       newList.splice();
//     }
//   }
//   return newList;
// }
//console.log("dinos1", dinos_list);
console.log("new list 1", newList);
// function test(species) {
//   for (let i = 0; i < dinos_list.length - 1; i++) {
//     if (dinos_list[i].species === species) {
//       newList.splice(i, 1);
//     }
//   }
//   return newList;
// }

function test(species) {
  let newArray = dinos_list.filter((dino) => dino.species !== species);
  newList = newArray;
}

test("Argentinosaurus");
console.log("new list 2", newList);
//console.log("dinos2", dinos_list);
