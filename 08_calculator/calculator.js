const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (listOfNumber) {
    return listOfNumber.reduce((sum, number) => {
        return sum + number;
    }, 0);
};

const multiply = function (listOfNumber) {
    return listOfNumber.reduce((product, number) => {
        return product * number;
    }, 1);
};

const power = function (a, b) {
    return Math.pow(a, b);
};

const factorial = function (a) {
    let product = 1;

    for (let i = a; i > 0; i--) {
        product *= i;
    }

    return product;
};

console.log(factorial(10));

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
