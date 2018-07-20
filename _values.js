var _ = require('underscore');
function Scientist() {
    this.name = 'Albert';
}
Scientist.prototype.married =true;
aScientist = new Scientist();
console.log(_.values(aScientist)); // 'Albert'