var _ = require('underscore');
console.log(_.range(1, 11));
console.log(_.range(0, -10, -1));
console.log(_.range(3).map(function() { return 'a'}));