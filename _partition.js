var _ = require('underscore');
function isOdd(n) {
    return n % 2 == 0;
}
console.log(_.partition([0,1,2,3,4,5], isOdd));