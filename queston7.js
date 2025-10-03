// frist add the all the string of word in the map then slice all by one by one then  then  count the  ferq from the frist perfix if the perfix word = no. of word in the arr then  thst prefix is common

function longestCommonPrefix(strs) {
    if (!strs.length) return "";

    let prefixMap = new Map();
    let totalWords = strs.length;

    for (let word of strs) {
        let prefix = "";
        for (let ch of word) {
            prefix += ch;
            prefixMap.set(prefix, (prefixMap.get(prefix) || 0) + 1);
        }
    }

    let longestPrefix = "";
    for (let [prefix, count] of prefixMap.entries()) {
        if (count === totalWords && prefix.length > longestPrefix.length) {
            longestPrefix = prefix;
        }
    }

    return longestPrefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));   


//other one

function longestCommonPrefix(strs) {
    if (!strs.length) return "";

    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== char) {
                return strs[0].substring(0, i);
            }
        }
    }
    return strs[0];
}

console.log(longestCommonPrefix(["flower","flow","flight"])); 

console.log(longestCommonPrefix(["dog","racecar","car"]));    

