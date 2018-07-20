var fs = require('fs');
var timeStamp = new Date().toString();
fs.writeFile('date.txt', timeStamp, function(err) {
    if (err) {
        throw err;
    }
    fs.readFile('date.txt', function(err, contents) {
        if (err) {
            throw err;
            console.log('checking the contents'); // 2
            console.assert(contents == timeStamp); // 3
        }
    });
});
console.log('I am the last of the script'); //1