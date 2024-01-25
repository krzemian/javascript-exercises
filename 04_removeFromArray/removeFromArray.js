const removeFromArray = function(array, ...valuesToRemove) {
    return array.filter((el) => valuesToRemove.indexOf(el) == -1);
};

// Do not edit below this line
module.exports = removeFromArray;
