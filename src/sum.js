// Implement the sum function here

function sum(a, b) {
    if (isNaN(a) || isNaN(b)){
        throw ('Parameter must be a number');
    }
    return a + b;
}
module.exports = sum;

