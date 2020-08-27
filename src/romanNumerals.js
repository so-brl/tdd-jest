/**
 * Convert number to  Roman numerals
 * @param number
 * @returns {string}
 */
function romanConvertNumber(number) {
    if (isNaN(number))
        throw ('Parameter must be a number');
    var romanData = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1},
        roman = '', i;
    for (i in romanData) {
        while (number >= romanData[i]) {
            roman += i;
            number -= romanData[i];
        }
    }
    return roman;
}

console.log(romanConvertNumber(156));

module.exports = romanConvertNumber;