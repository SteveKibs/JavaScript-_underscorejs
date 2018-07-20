var _ = require('underscore');
function Scientist() {
    this.name = 'Albert';
}
Scientist.prototype.married = true;
aScientist = new Scientist();
console.log(_.keys(aScientist)); // 'name'
console.log(_.allKeys(aScientist)); // 'name', 'married'