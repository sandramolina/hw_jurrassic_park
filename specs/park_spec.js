const assert = require("assert");
const Park = require("../models/park.js");
const Dinosaur = require("../models/dinosaur.js");

describe("Park", function () {
  let park;
  let dinos_list = [];
  beforeEach(function () {
    dino1 = new Dinosaur("Garudimimus", "Omnivorous", 150);
    dino2 = new Dinosaur("Garudimimus", "Herbivorous", 350);
    dino3 = new Dinosaur("Argentinosaurus", "Herbivorous", 50);
    dino4 = new Dinosaur("Tyrannosaurus", "Carnivorous", 1000);
    dinos_list = [dino1, dino2, dino3, dino4];
    park = new Park("Jurassic Perks", 500, dinos_list);
  });

  it("should have a name", function () {
    const actual = park.parkName;
    assert.strictEqual(actual, "Jurassic Perks");
  });

  it("should have a ticket price", function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 500);
  });

  it("should have a collection of dinosaurs", function () {
    const actual = park.dinos.length;
    assert.strictEqual(actual, 4);
  });

  it("should be able to add a dinosaur to its collection", function () {
    const dinoToAdd = new Dinosaur("Philoceratops", "Omnivorous", 38);
    park.addDino(dinoToAdd);
    const actual = park.dinos.length;
    assert.strictEqual(actual, 5);
  });

  it("should be able to remove a dinosaur from its collection", function () {
    park.deleteDino(dino4);
    const actual = park.dinos.length;
    assert.strictEqual(actual, 3);
  });

  it("should be able to find the dinosaur that attracts the most visitors", function () {
    const dinoInfluencer = park.GetDinoInfluencer();
    const actual = dinoInfluencer.species;
    assert.strictEqual(actual, "Tyrannosaurus");
  });

  it("should be able to find all dinosaurs of a particular species", function () {
    const filterBySpecie = park.findSpecies("Garudimimus");
    const actual = filterBySpecie.length;
    assert.strictEqual(actual, 2);
  });

  it("should be able to calculate the total number of visitors per day");

  it("should be able to calculate the total number of visitors per year");

  it("should be able to calculate total revenue for one year");
});
