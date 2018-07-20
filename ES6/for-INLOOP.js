var funcs = [];

obj = {
    a: 'art',
    b: 'bat',
    c: 'cat'
}

for (let key in obj) {
    funcs.push(function() {
         console.log(key);
     });

}

funcs.forEach( function(func) {
    // statements
    func();
});