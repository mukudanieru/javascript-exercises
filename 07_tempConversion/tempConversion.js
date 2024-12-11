const convertToCelsius = function(fahreinheit) {
  let celsius = (5 * (fahreinheit - 32)) / 9;
  return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  let fahreinheit = (celsius * 9 / 5) + 32;
  return parseFloat(fahreinheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
