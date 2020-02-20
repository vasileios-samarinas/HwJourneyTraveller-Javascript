const Traveller = function(journeys) {
  this.journeys = journeys;
};

// enumerator is map

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
});
};
// or / the syntax of callback is the => each thing
// const results= this.journeys.(map) =>  {
// return journey.startLocation}
// return results
Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) =>{
    return journey.endLocation;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
});
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total,journey) => {
    return total += journey.distance;
  },0);
};

// make an array on true/false conditions

Traveller.prototype.getUniqueModesOfTransport = function () {
const transports = this.journeys.map((journey) => {
  return journey.transport;
})
  return transports.filter((transport,index) =>{
    return transports.indexOf(transport) === index;
  })
};

module.exports = Traveller;
