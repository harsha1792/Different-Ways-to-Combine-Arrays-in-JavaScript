var firstArray = [1,2,3,4];
var secondArray = [6,7,8,9];
var notArray = 'random';

// concat()
var combineArray1 = firstArray.concat(secondArray);
console.log(combineArray1); //[1, 2, 3, 4, 6, 7, 8, 9]

var combineArray2 = [].concat(firstArray, secondArray);
console.log(combineArray2);      //[1, 2, 3, 4, 6, 7, 8, 9]


//spread operator
var combineArray3 = [...firstArray, ...secondArray];
console.log(combineArray3);    //[1, 2, 3, 4, 6, 7, 8, 9]

var combineArray4 = [].concat(firstArray, secondArray, notArray);
console.log(combineArray4);        // [1, 2, 3, 4, 6, 7, 8, 9, "random"]

var combineArray5 = [...firstArray, ...secondArray, ...notArray];
console.log(combineArray5);   //[1, 2, 3, 4, 6, 7, 8, 9, "r", "a", "n", "d", "o", "m"]

//push()
var combineArray6 = [];
combineArray6.push(firstArray, secondArray);
console.log(combineArray6);  //[Array(4), Array(4)]

var combineArray7 = [];
combineArray7.push(...firstArray, ...secondArray);
console.log(combineArray7);  //[1, 2, 3, 4, 6, 7, 8, 9]

//looped insertion
for(var i=0;i< secondArray.length; i++) {
    firstArray.push(secondArray[i]);
}
console.log(firstArray);  //[1, 2, 3, 4, 6, 7, 8, 9]