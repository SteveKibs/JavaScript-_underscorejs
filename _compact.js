var _ = require('underscore');
console.log(_.compact([0,1,false,true,2,'',3,[],null])); //[1,2,3,[]]