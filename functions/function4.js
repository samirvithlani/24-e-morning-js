function greetings(name){

    return "Hello "+name;
}
var greet = greetings("Raj")
console.log("greet --",greet)

function isValid(age){

    if(age>18){
        return true;
    }
    else{
        return false;
    }

}

var valid = isValid(20)
console.log("valid --",valid)

function finNoOfDigit(no){
    let count = 0;
    while(no>0){
        no = Math.floor(no/10);
        count++;
    }

    return count;
}

var digits = finNoOfDigit(123456)
console.log("digits --",digits)
