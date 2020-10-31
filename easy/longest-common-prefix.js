// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";
    // let prefix = "";
    let firstStr = strs[0];
    for (let i = 0; i < firstStr.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (firstStr[i] !== strs[j][i]) {
                return firstStr.substr(0, i);
            }
        }
    }
    return firstStr;
};

console.log(longestCommonPrefix(["dog", "racecar", "car"]));