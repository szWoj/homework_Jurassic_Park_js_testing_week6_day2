const Park = function(name, ticketPrice, dinosaurs){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs;
}

Park.prototype.addADinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur);
};

Park.prototype.removeADinosaur = function(dinosaur){
    this.dinosaurs.shift(dinosaur);
};

Park.prototype.attractsTheMostVisitors = function(){
let dinosaurMost;
for (let dinosaur of this.dinosaurs){
    dinosaurMost = dinosaur;
    if(dinosaur.guestsAttractedPerDay > dinosaurMost.guestsAttractedPerDay){
        dinosaurMost = dinosaur;
    }
}
return dinosaurMost
};

Park.prototype.findAllSpecies = function(desiredSpecies){
    let total = [];
    for (let dinosaur of this.dinosaurs){
        if(dinosaur.species === desiredSpecies){
            total.push(dinosaur);
        }
    }
    return total;
};


Park.prototype.totalNumberVisitorsPerDay = function(){
    let total = 0;
    for (let dinosaur of this.dinosaurs){
        total += dinosaur.guestsAttractedPerDay;
    } return total;
};


Park.prototype.totalNumberVisitorsPerYer = function(){
    let total = 0;
    for (let dinosaur of this.dinosaurs){
        total += 365 * dinosaur.guestsAttractedPerDay
    }
    return total;
}

Park.prototype.totalRevenueForOneYear = function(){
    let total = 0;
    for (let dinosaur of this.dinosaurs){
        total += 365 * dinosaur.guestsAttractedPerDay
    }
    total = this.ticketPrice * total
    return total; 
}
module.exports = Park;