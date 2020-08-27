var eleveNumber = 33;
var runNumber = 3;
var totalRun = eleveNumber * runNumber;
var number = 0;
var arrayResultFizzBuzz;




function fizzBuzz(totalRun, number) {
    var result = [];
    for (number ; number <= totalRun ; number++) {
        if (number % 3 === 0 && number % 5 !== 0 || number.toString().includes(3)) {
            console.log('Fizz');
            result.push("Fizz");
        }
        else if (number % 5 === 0 && number % 3 !== 0 || number.toString().includes(5)) {
            console.log('Buzz');
            result.push("Buzz");
        }
       else if (number % 3 === 0 && number % 5 === 0) {
            console.log('FizzBuzz');
            result.push("FizzBuzz");
        } else {
            console.log(number);
            result.push(number);
        }
    }
    arrayResultFizzBuzz = result;
}

function fizzBuzzResult(index){
    return arrayResultFizzBuzz[index];
}


fizzBuzz(totalRun, number);
console.log('*****************************');
console.log(fizzBuzzResult(3));


module.exports = fizzBuzzResult;