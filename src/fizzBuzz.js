var eleveNumber = 33;
var runNumber = 3;
var totalRun = eleveNumber*runNumber;
var number = 0;

// function fizzBuzz() {
//     for (var i = 0; i <= totalRun; i++) {
// return number++;
//     }
// }

//fizzBuzz();


function fizzBuzz(){
    //for( var i = 0 ; i <= totalRun ; i++ ){
        if ( number % 3 === 0  && number % 5 !== 0 ){
            //return ('Fizz');

            throw ('Fizz');
        }
        if ( number % 5 === 0 && number % 3 !== 0 ){
            //console.log('Buzz');
            //return ('Buzz');
            throw ('Buzz');
        }
        if (number % 3 === 0 && number % 5 === 0){
            //console.log('FizzBuz');
            //return ('FizzBuzz');
            throw ('FizzBuzz');
        }
         else {
        //console.log(number);
            //return number;
            throw (number);
        }
        //number++;
    //}
}

module.exports =  fizzBuzz;