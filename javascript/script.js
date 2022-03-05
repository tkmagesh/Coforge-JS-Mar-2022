
//while loop
var n = 10
while (n <= 10){
    console.log(n);
    n -= 1;
    if (n === 0){
        break
    }
}



function isPrime(no){
    for (var i = 2; i <= (no/2); i++){
        if (no % i === 0){
            return false;
        }
    }
    return true;
}

function oddOrEven(no){
    var remainder = no % 2
    switch (remainder) {
        case 0:
            return "even";
        case 1:
            return "odd";
    }
}

//using break
for (var i=0; i<10; i++){
    console.log(i)
    if (i == 5) {
        break;
    }
}

//using continue
for (var i=0; i<10; i++){   
    if (i %2 == 0) {
        continue;
    }
    console.log(i)
}

//using 'default' with switch case
function operation(oper, x, y){
    switch(oper){
        case '+':
            console.log(x + y);
            break;
        case '-':
            console.log(x - y);
            break;
        case '*':
            console.log(x * y);
            break;
        case '/':
            console.log(x / y);
            break;
        default:
            console.log('invalid operation');
    }
}

//Object
//Object literal / expression
//Object = map / dictionary / hash
//       = collection of key/value pairs

/* 
convention:
    Use the '.' notation to update the values of existing attributes
    Use the '[]' notation to create a new attribute

*/
var product = { id : 100, name : 'Pen', cost : 10 }

for(var attrName in product){
    console.log(attrName, product[attrName]);
}

//checking for the presence of an attribute
product.hasOwnProperty('manufacturer')

//arrays
//(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)

//creating an array
var nos = [  ]
var nos = [ 3,1,4,2,5 ]

//accessing the values
nos[0]
nos[1]

//count of values in the array
nos.length

//adding a new value at the end of the array
nos.push(10)

//removing a value from the end of the array
var value = nos.pop()

//adding a new value at the beginning of the array
nos.unshift(10)

//removing the value from the beginning of the array
var value = nos.shift()

//Create a function genPrimes(n) that returns an array of first n prime numbers

genPrimes(10) => [1,2,3,5,7,11,13,17,19, 23]