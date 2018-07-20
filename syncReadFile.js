var fs = require('fs');
    var timeStamp = new Date().toString();
    var contents;
    fs.writeFileSync('date.txt', timeStamp);
    contents = fs.readFileSync('date.txt');
    console.log('checking the contents');
    console.assert(contents == timeStamp);
    console.log('I am the last line of the script');