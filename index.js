// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require('./iss');
// const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});

module.exports = { printPassTimes };
//old calls

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
  
//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP("50.93.97.50", (error, coords) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned Coords:' , coords);
// });

// fetchISSFlyOverTimes(50.7362, -113.9695, (error, coords) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned Fly Over Times!!:' , coords);
// });


