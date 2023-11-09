const reverseString = function(word) {
    let wordArray = word.split('');
    wordArray.reverse();
    return wordArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
