const assert = require("assert");
const Park = require("../models/park.js");
const Dinosaur = require("../models/dinosaur.js");

describe("Park", function () {
  let park;
  let dinos_list = [];
  beforeEach(function () {
    dino1 = new Dinosaur("Garudimimus", "Omnivorous", 150);
    dino2 = new Dinosaur("Agilisaurus", "Herbivorous", 350);
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

  it("should be able to add a dinosaur to its collection");

  it("should be able to remove a dinosaur from its collection");

  it("should be able to find the dinosaur that attracts the most visitors");

  it("should be able to find all dinosaurs of a particular species");

  it("should be able to calculate the total number of visitors per day");

  it("should be able to calculate the total number of visitors per year");

  it("should be able to calculate total revenue for one year");
});
