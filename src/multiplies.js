// Implement the sum function here

function multiplies(a, b) {
    if (isNaN(a) || isNaN(b)){
        throw ('Parameter must be a number');
    }
    return a * b;
}
module.exports =  multiplies;

