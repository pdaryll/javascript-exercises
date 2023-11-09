const removeFromArray = function() {

    let array = arguments[0];
    let numbers = [];

    for (let i = 1; i < arguments.length; i++) {
        numbers.push(arguments[i]);
    }

    for (let i = 0; i < numbers.length; i++) {
        
        let index = array.indexOf(numbers[i]);
        if (index >= 0){
            array.splice(index, 1);
        }
    }
    return array;  
};

// Do not edit below this line
module.exports = removeFromArray;
