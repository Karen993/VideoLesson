function myFunction(){
    console.log('function was called')
}

let myString = 'string1';
let otherString = `otherString`

module.exports.myFunction = myFunction;
module.exports.myString = myString;
module.exports.otherString = otherString;