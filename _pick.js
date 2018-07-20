var _ = require('underscore');
var testObj = {
    name: 'Albert',
    age: 90,
    profession: 'Physicist'
};
//returns a copy of the object filtered to just the values of the keys provided
console.log(_.pick(testObj, 'name', 'age'));
console.log(_.pick(testObj, function(val, key, object) {
    return _.isNumber(val); // age: 90
}));