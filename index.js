const returnFirstTwoDrivers = (drivers) => [drivers[0], drivers[1]]; 

const returnLastTwoDrivers = (drivers) => drivers.slice(-2); 

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]; 

function createFareMultiplier(k) { 
  return function (fare) { 
    return fare * k;
  }
}

const fareDoubler = createFareMultiplier(2); 

const fareTripler = createFareMultiplier(3); 

function selectDifferentDrivers(drivers, selectingDrivers) {
  return selectingDrivers(drivers);
}; 