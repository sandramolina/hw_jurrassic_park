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
  let newArray = this.dinos.filter((dino) => dino.species === species);
  return newArray;
};

Park.prototype.totalVisitorsPerDay = function () {
  let totalVisitorsPerDay = 0;
  for (let dino of this.dinos) {
    totalVisitorsPerDay += dino.guestsAttractedPerDay;
  }
  return totalVisitorsPerDay;
};

Park.prototype.totalVisitorsPerYear = function (dailyVisitors) {
  let totalVisitorsPerYear = dailyVisitors * 365;
  return totalVisitorsPerYear;
};

Park.prototype.calcYearlyRev = function (yearlyVisitors) {
  let totalYearlyRev = yearlyVisitors * this.ticketPrice;
  return totalYearlyRev;
};

Park.prototype.deleteBySpecies = function (species) {
  let newArray = this.dinos.filter((dino) => dino.species !== species);
  this.dinos = newArray;
};

Park.prototype.dietTypeCounter = function () {
  const dinoDietType = { Omnivorous: 0, Herbivorous: 0, Carnivorous: 0 };
  for (let dino of this.dinos) {
    switch (dino.diet) {
      case "Omnivorous":
        dinoDietType.Omnivorous += 1;
        break;
      case "Herbivorous":
        dinoDietType.Herbivorous += 1;
        break;
      case "Carnivorous":
        dinoDietType.Carnivorous += 1;
        break;
    }
  }
  return dinoDietType;
};

module.exports = Park;
