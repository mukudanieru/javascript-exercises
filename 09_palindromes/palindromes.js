const palindromes = function (str) {
    const cleanedStr = str
        .toLowerCase()
        .replace(/[.,!?:;'"(){}\[\]<>-\s]/g, "");

    const reversedString = cleanedStr.split("").reverse().join("");

    return cleanedStr === reversedString;
};

console.log(palindromes("race Car!"));

// Do not edit below this line
module.exports = palindromes;
