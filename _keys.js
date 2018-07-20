var _ = require('underscore');
var testObj = {
    name: 'Steve',
    age: 90,
    profession: 'Physicist'
};
console.log(_.keys(testObj));  // ['name', 'age', 'profession']