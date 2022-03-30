const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  
  beforeEach(function () {
    
    dinosaur1 = new Dinosaur("Triceratops", "herbivore", 40);
    dinosaur2 = new Dinosaur("Allosaurus", "omnivore", 60);
    dinosaur3 = new Dinosaur("Diplodocus", "carnivore", 80)
    dinosaurs = [dinosaur1, dinosaur2, dinosaur3]
    park = new Park("Meadows", 40, [dinosaur1, dinosaur2]);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, "Meadows");
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 40);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepEqual(actual, [dinosaur1, dinosaur2]);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addADinosaur(dinosaur3);
    const actual = park.dinosaurs;
    assert.deepEqual(actual, [dinosaur1, dinosaur2, dinosaur3]);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeADinosaur(dinosaur1);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur2]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = park.attractsTheMostVisitors();
    assert.deepEqual(actual, dinosaur2)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    const actual = park.findAllSpecies("Triceratops");
    assert.deepStrictEqual(actual, [dinosaur1])
  });

  it('should be able to calculate the total number of visitors per day', function(){
    const actual = park.totalNumberVisitorsPerDay();
    assert.deepEqual(actual, 100);

  });

  it('should be able to calculate the total number of visitors per year', function(){
    const actual = park.totalNumberVisitorsPerYer();
    assert.deepEqual(actual, 36500);
  });

  it('should be able to calculate total revenue for one year', function(){
    const actual = park.totalRevenueForOneYear();
    assert.deepEqual(actual, 1460000)
  });
  
});
