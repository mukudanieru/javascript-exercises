const reverseString = function(text) {
    let newString = "";
    
    let splittedText = text.split("");

    for (let i = splittedText.length - 1; i >= 0; i--) {
        newString += splittedText[i];
    }

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
