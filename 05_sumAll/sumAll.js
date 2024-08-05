
function sumAll (x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        return "ERROR"
    } 
    
    if (x < 0 || y < 0) {
        return "ERROR";
    }
    
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
        return "ERROR";
    } 

    let sum = 0;
    let min = Math.min(x, y);
    let max = Math.max(x, y);

    while (min <= max){
    sum += min;
    min++;
    }
    return sum;

}

module.exports = sumAll;

/*
unction sumAll (num1, num2){
    for (let i = num1; i === num2; i++);

        return sumAll;
}

// Do not edit below this line



/*
let num1 = 0
let num2 = 0

You have two integers: num1 and num2
num1 will be added with 1 until it's equal to num2
sum all integers between num1 until num2 

function sumAll (num1, num2){
    for (let i = num1; i === num2; i++)
}

   
*/