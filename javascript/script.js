
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


