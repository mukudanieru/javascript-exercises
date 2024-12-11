const leapYears = function(year) {
    return (year % 100 != 0 || year % 400 === 0) && year % 4 === 0;
};

console.log(leapYears(1984));
console.log(leapYears(2004));
console.log(leapYears(1800));
console.log(leapYears(1900));
console.log(leapYears(1600));
console.log(leapYears(2000));

// Do not edit below this line
module.exports = leapYears;
