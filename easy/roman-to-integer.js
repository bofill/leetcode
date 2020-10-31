/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const romanToInt = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    var num = 0;
    for (i = 0; i < s.length - 1; i++) {
        if (romanToInt[s[i]] >= romanToInt[s[i + 1]]) {
            num += romanToInt[s[i]];
        } else {
            num -= romanToInt[s[i]];
        }
    }
    num += romanToInt[s[s.length - 1]];
    return num;
};

romanToInt("LXXXIV");