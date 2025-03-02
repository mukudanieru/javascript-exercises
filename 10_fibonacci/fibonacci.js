const fibonacci = function (num) {
    if (typeof num === "string") {
        num = Number(num);
    }

    if (num < 0) {
        return "OOPS";
    }

    if (num === 0) {
        return 0;
    }

    if (num === 1 || num === 2) {
        return 1;
    }

    let s = 0;
    let n = 1;

    let result;

    for (let i = 2; i <= num; i++) {
        result = s + n;
        s = n;
        n = result;
    }

    return result;
};

console.log(fibonacci("0"));

// Do not edit below this line
module.exports = fibonacci;
