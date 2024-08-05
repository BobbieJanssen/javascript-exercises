const convertToCelsius = function(fahrenheid) {
   const convert = (fahrenheid - 32) / 1.8;
   const celsius = Math.round(convert * 10) / 10
    return celsius
};

const convertToFahrenheit = function(celsius) {
    const convert = celsius * 1.8 + 32;
    const fahrenheid = Math.round(convert * 10) / 10
    return fahrenheid
};



//function convertToCelsius() = (fahrenheid - 32) / 1.8
//function convertToFahrenheit() = celsius*1,8 + 32
// only one decimal allowed= Math.round(num * 10) / 10

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

