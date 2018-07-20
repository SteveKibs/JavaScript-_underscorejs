function stub(foo = "Default value") {
    return foo;
}

console.log(stub());  // default value

console.log(stub("Hello"));  // hello