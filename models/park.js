const Park = function (parkName, ticketPrice, dinos) {
  this.parkName = parkName;
  this.ticketPrice = ticketPrice;
  this.dinos = dinos;
};

Park.prototype.addDino = function (dinoToAdd) {
  this.dinos.push(dinoToAdd);
};

Park.prototype.deleteDino = function (dinoToDelete) {
  let filteredArray = this.dinos.filter((dino) => dino !== dinoToDelete);
  this.dinos = filteredArray;
};

Park.prototype.GetDinoInfluencer = function () {
  this.dinos.sort(function (a, b) {
    return a.guestsAttractedPerDay - b.guestsAttractedPerDay;
  });
  let dinoInfluencer = this.dinos.at(-1);
  return dinoInfluencer;
};

Park.prototype.findSpecies = function (species) {
  let dinoBySpecie = [];
  for (let dino of this.dinos) {
    if (dino.species === species) {
      dinoBySpecie.push(dino);
    }
  }
  return dinoBySpecie;
};

module.exports = Park;
