/**
 * Author:    Lee Coronilia
 * Created:   5.2.2022
 * Licensse: Public Domain
 **/

// new array
 Numbers = [1, 2, 3, 4];
 console.log("Numbers:", Numbers);

// function
 function Square(x) {
    var results = x * x;
    return results;
}

// test function
console.log("Square of 5:", Square(5));
console.log("Square of 2:", Square(2));


var result = Numbers.map(Square);
// should return (1, 4, 9, 16)
console.log("Square of Numbers array:", result);

var result = Numbers.map(function(x){
    var results = x + x;
    return results;
})
// should return (2, 4, 6, 8)
console.log("Addition of Numbers array:", result);
