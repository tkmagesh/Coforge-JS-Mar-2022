
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

function isPrime(n){
    if (n <= 3){
        return true
    }
    for (var i=2; i <= (n/2); i++){
        if (n % i == 0){
            return false
        }
    }
    return true
}

function genPrimes(count){
    var primeNos = []
    var no = 1
    while(true){
        if (count <= 0){
            break
        }
        if (isPrime(no)){
            primeNos.push(no)
            count -= 1
        }
        no += 1
    }
    return primeNos
}


/* Day-2 */
//varidadic function
function sum(){
    var result = 0;
    for(var i=0; i < arguments.length; i++){
        var no = arguments[i];
        if (!isNaN(no)){
            result += parseInt(no)
        }
    }
    return result
}


//higher order functions
//function statement
/*
    function fn(){
        console.log('fn invoked');
    }
*/
//function expression
//functions can be assigned as value to a variable
var fn = function(){
    console.log('fn invoked');
}

//Functions as arguments
function add(x,y){
    var result =  x + y;
    console.log("add result = ", result)
}

function subtract(x,y){
    var result =  x - y;
    console.log("subtract result = ", result)
}

//expected output
/* 
invocation started
add result = 300
invocation completed

invocation started
subtract result = -100
invocation completed 
*/


/* 
function logAdd(x,y){
    console.log('invocation started')
    add(x,y)
    console.log('invocation completed')
}

function logSubtract(x,y){
    console.log('invocation started')
    subtract(x,y)
    console.log('invocation completed')
}  
*/

function logFn(x,y, operation){
    if (typeof(operation) !== 'function'){
        throw new Error('operation has to be a function')
    }
    console.log('invocation started')
    operation(x,y)
    console.log('invocation completed')
}

//logFn(100,200, add)
//logFn(100,200, subtract)


var nos = [1,2,3,4,5,6,7,8,9,10];

function filterEvenNos(nos){
    var result = []
    for (var i=0; i < nos.length; i++){
        var no = nos[i];
        if (no % 2 === 0){
            result.push(no)
        }
    }
    return result
}

function filterOddNos(nos){
    var result = []
    for (var i=0; i < nos.length; i++){
        var no = nos[i];
        if (no % 2 !== 0){
            result.push(no)
        }
    }
    return result
}

function filterNos(nos, predicate){
    var result = []
    for (var i=0; i < nos.length; i++){
        var no = nos[i];
        if (predicate(no)){
            result.push(no)
        }
    }
    return result
}

function isEven(no){
    return no % 2 === 0
}

function isOdd(no){
    return no % 2 !== 0
}

var evenNos = filterNos(nos, isEven)
var oddNos = filterNos(nos, isOdd)


function isMultipleOf3(no){
    return no % 3 === 0;
}

function isMultipleOf5(no){
    return no % 5 === 0;
}

function isMultipleOf3Or5(no){
    return isMultipleOf3(no) || isMultipleOf5(no)
}

var multiplesOf3Or5 = filterNos(nos, isMultipleOf3Or5)

/* Functions as return values */

function getFn(){
    return function(){
        console.log('fn invoked');
    }
}

var fn = getFn()
fn()

//Use cases
function add(x,y){
    var result =  x + y;
    console.log("add result = ", result)
}

function subtract(x,y){
    var result =  x - y;
    console.log("subtract result = ", result)
}

/* 
function logFn(x,y, operation){
    console.log('invocation started')
    operation(x,y)
    console.log('invocation completed')
}

add(100,200)
subtract(100,200)

logFn(100,200, add)
logFn(100,200, subtract) 
*/

function logFn(operation){
    return function(x,y){
        console.log('invocation started')
        operation(x,y)
        console.log('invocation completed')
    }
}

var logAdd = logFn(add)
var logSubtract = logFn(subtract)

logAdd(100,200)
logSubtract(100,200)

//create a function 'increment'


/* 
function getIncrement(){
    var counter = 0;
    function increment(){
        counter++
        return counter;
    }
    return increment;
}
var increment = getIncrement() 
*/

var increment  = (function(){
    var counter = 0;
    function increment(){
        counter++
        return counter;
    }
    return increment;
})()

increment() //=> 1
increment() //=> 2
increment() //=> 3

//this context
//methods => attributes of an object whose value is a function
/* 
    IT DOES NOT MATTER WHERE THE FUNCTION IS OR WHO OWNS THE FUNCTION
    what matters is HOW THE FUNCTION IS INVOKED!!
*/
/* 
    1. When a function is invoked as a method of an object 'obj'
        this => obj

    2. When a function is invoked as a 'function'
        this => global scope (window)

    3. Immediately Invoked Function Expression (IIFE)

    4. Using the 'new' keyword (constructor function)
        this => new object
        this => returned by default
    
*/

//Constructor functions (Convention is that the constructor function names must start with a uppercase)
function Employee(id, name, salary){
    //this => new object
    this.id = id;
    this.name = name;
    this.salary = salary;
    //this => returned by default
}

var e1 = new Employee(100, 'Magesh', 10000)
var e2 = new Employee(200, 'Suresh', 20000)

//Create a product class using which you can create product objects with id, name, cost, units & category

//Array Methods
/* 
    - sort
    - filter
    - reduce
    - forEach
    - map
*/  

var nos = [3,1,4,2,5,7,9,6,8]

//filter
var evenNos = nos.filter(function(no){
    return no % 2 === 0;
});

var oddNos = nos.filter(function(no){
    return no % 2 !== 0;
});

//forEach
for (var i = 0; i < nos.length; i++){
    console.log(nos[i])
}
nos.forEach(function(no){
    console.log(no);
})

//map (transformation)
var newResult = nos.map(function(no){
    return no * 10;
})

//reduce (reduction - convert a list of values into one result)
nos.reduce(function(x,y){
    var result = x + y;
    console.log('x = ', x, 'y = ', y, 'result = ', result)
    return result;
}, 0)

nos.reduce(function(x,y){
   if (y % 2 === 0) {
        x.even = x.even + 1;
   } else {
       x.odd = x.odd + 1;
   }
   return x;
}, {even : 0, odd : 0})

nos.reduce(function(x,y){
   if (y % 2 === 0) {
        x.even.push(y);
   } else {
       x.odd.push(y);
   }
   return x;
}, {even : [], odd : []})









