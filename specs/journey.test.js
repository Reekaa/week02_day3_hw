const Journey = require('../journey.js');

describe('Journey', () => {

  let journey1;

  beforeEach(() => {
    journey1 = new Journey('linlithgow', 'stirling', 'train', 30);
  });

  test('should have a start location', () => {
    expect(journey1.startLocation).toBe('linlithgow');
  });

  test('should have a end location', () => {
    expect(journey1.endLocation).toBe('stirling');
  });

  test('should have a mode of transport', () => {
    expect(journey1.transport).toBe('train');
  });

  test('should have a distance', () => {
    expect(journey1.distance).toBe(30);
  });

});
