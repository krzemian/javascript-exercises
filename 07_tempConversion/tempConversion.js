const convertToCelsius = function(tempF) {
  return Math.round(((tempF - 32)/1.8)*10)/10;
};

const convertToFahrenheit = function(tempC) {
  return Math.round((1.8 * tempC + 32)*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
