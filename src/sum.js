/**
 * Calculate a sum
 * @param a
 * @param b
 * @returns {*}
 */
function sum(a, b) {
    if (isNaN(a) || isNaN(b)){
        throw ('Parameter must be a number');
    }
    return a + b;
}
module.exports = sum;

