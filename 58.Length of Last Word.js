/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
     let lastWordLength = 0;
     let beforeFirstNonEmptyCharacter = true;
    
    if (s.length === 0){
        return lastWordLength;
    }
    for (let i = s.length - 1; i >= 0; i--){
        if (s.charAt(i) !== ' ') {
            lastWordLength++;
            beforeFirstNonEmptyCharacter = false;
        } else {
            if (!beforeFirstNonEmptyCharacter){break;}
        }
    }
    return lastWordLength;
};