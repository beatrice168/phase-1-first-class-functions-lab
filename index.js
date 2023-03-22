// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  function   returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]; 
  function createFareMultiplier(integer) {
    return function(fare) {
      return fare * integer;
    };
  }
  
  // example usage
  const quadrupleFare = createFareMultiplier(5);
  const fareForRide = 25;
  const totalFare = quadrupleFare(fareForRide); // 125

  function fareDoubler(fare) {
    return fare * 2;
  } 
  function fareTripler(fare){
    return fare * 3;
  }
  function selectDifferentDrivers(drivers, driverFunction) {
    if (driverFunction === returnFirstTwoDrivers) {
      return driverFunction(drivers.slice(0, 2));
    } else if (driverFunction === returnLastTwoDrivers) {
      return driverFunction(drivers.slice(-2));
    }
  }
