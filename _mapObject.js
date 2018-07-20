var _ = require('underscore');
function Scientist() {
    this.name = 'Albert';
    this.age = 90;
}
aScientist = new Scientist();
//this method transforms the value of each property in the object
var lst = _.mapObject(aScientist, function(val,key) {
    if (key === "age") {
        return val + 10;
    }
    else {
        return val;
    }
});
console.log(lst);