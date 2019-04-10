const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(function(location){
    return location.startLocation;
});
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(function(location){
    return location.endLocation;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(function(transp){
    return transp.transport === transport;
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(function(miles){
    return miles.distance > minDistance;
  }, 0);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce(function(total, journey){
    return total + journey.distance;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  return this.journeys.map(function(journey){
    return journey.transport;
  })
    .filter((transport, index, array) => {
      return array.indexOf(transport) === index;
    });
};

module.exports = Traveller;
