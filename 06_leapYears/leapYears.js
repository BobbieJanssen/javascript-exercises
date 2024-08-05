function leapYears (year, divisor) {
    if (divisor === 2) {
        return true;
    }

    if (divisor === 100) {
        return false;
    }

    if (divisor === 100 && 400) {
        return true;
    }
    
    return year % divisor === 0;
}


// Do not edit below this line
module.exports = leapYears;


//const leapYears = function() {};

//leapyear: year / 2 = true; year / 100 = false; (year / 100)/400 = true
// if - &&