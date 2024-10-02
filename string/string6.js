var data = "amit";

// console.log(data.charCodeAt(0)) //97

// console.log(String.fromCharCode(97))


//console.log(String.fromCharCode(data.charCodeAt(0)))


data = data.toUpperCase()
console.log(data); //AMIT

data  = data.toLowerCase()
console.log(data); //amit



var upperstr ="";

for(let i=0;i<data.length;i++){

    // "" =  "" + A
    //"A" = "A" + M
    //"AM" = "AM" + I
    //"AMI" = "AMI" + T
    if(data.charCodeAt(i)>=97 && data.charCodeAt(i)<=122){
        upperstr = upperstr + String.fromCharCode(data.charCodeAt(i)-32) //65
    }
    else{
        upperstr = upperstr + String.fromCharCode(data.charCodeAt(i)) //65
    }


}

console.log(upperstr); //AMIT
