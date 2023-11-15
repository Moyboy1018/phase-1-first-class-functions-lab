//Code your solution in this file!
const returnFirstTwoDrivers = (arrayOfDrivers) => {
    return [arrayOfDrivers[0], arrayOfDrivers[1]];
}

const returnLastTwoDrivers = (arrayOfDrivers) => {
    const arrLen = arrayOfDrivers.length;
    return [arrayOfDrivers[arrLen - 2], arrayOfDrivers[arrLen - 1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (rides) => {
    return (fare) => fare * rides;
}

const fareDoubler = (fare) => {
    return createFareMultiplier(2)(fare);
}

const fareTripler = (fare) => {
    return createFareMultiplier(3)(fare);
}

const selectDifferentDrivers = (scubersDrivers, driversSelectorFn) => {
    return driversSelectorFn(scubersDrivers);
}