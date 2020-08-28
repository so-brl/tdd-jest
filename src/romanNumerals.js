/**
 * Convert Arabe numerals to  Roman numerals
 * @param romanNumber
 * @returns {string}
 */
function arabeToRoman(arabeNumber) {
    if (isNaN(arabeNumber)) {
        throw ('Parameter must be a number');
    }
    var romanData = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1},
        roman = '', i;
    for (i in romanData) {
        while (arabeNumber >= romanData[i]) {
            roman += i;
            arabeNumber -= romanData[i];
        }
    }
    return roman;
}

/**
 * Convert Roman numerals  to  Arabe numerals
 * @param arabeNumber
 * @returns {string}
 */

function romanToArabe(romanNumber) {
    if (typeof romanNumber!= 'string') {
        throw ('Parameter must be a string');
    }
    romanNumber = romanNumber.toUpperCase();
    var romanDatas = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    var romanNumberArray = romanNumber.split('');
    var length = romanNumberArray.length;
    var newArrayToCalcul = [];
    for (var i = 0; i <= length; i++) {
        if (romanDatas[romanNumberArray[i] + romanNumberArray[i + 1]]) {
            newArrayToCalcul.push(romanDatas[romanNumberArray[i] + romanNumberArray[i + 1]]);
            length = length -1;
            i++;
        } else {
            newArrayToCalcul.push(romanDatas[romanNumberArray[i]]);
        }
    }
    var total = 0;
    for (var i = 0; i < newArrayToCalcul.length; i++) {
        total += newArrayToCalcul[i] << 0;
    }
    return total;
}


arabeToRoman(2459);
romanToArabe('MMCDLIX');
//console.log(arabeToRoman(2459));
//console.log(romanToArabe('MMCDLIX'));

module.exports = {arabeToRoman, romanToArabe};


