// Code your solution in this file!
// Function to return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

// Function to return the last two drivers
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

// Array of functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Function that returns a multiplier function
const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};

// Function that doubles fares
const fareDoubler = createFareMultiplier(2);

// Function that triples fares
const fareTripler = createFareMultiplier(3);

// Function to select different drivers
const selectDifferentDrivers = function(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
};

// Exporting the functions if needed (for testing)
module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
};

