const repeatString = function(text, number) {
    let textAnswer = "";
    if (number < 0){
        return "ERROR";
    }
    for (let index = 0; index < number; index++) {
        textAnswer += text;
    }
    return textAnswer;
};

// Do not edit below this line
module.exports = repeatString;
