//with arguments | param without return type

function add(a,b){
    console.log("value of a ",a)
    console.log("value of b ",b)

    let c = a + b;
    console.log("ans = ",c)
    
}

add(100,200)
//add() //error
//add(100)

function checkAge(age){

    if(age>=18){
        console.log("user is eligible...")
    }

    else{
        console.log("user is not eligible...")
    }
}

var x = 19;
checkAge(x);


function noOfdigit(no){

    let count =0;
    while(no>0){

        no = Math.floor(no/10);
        count++

    }

    console.log("no of digits are",count)


}

noOfdigit(123)
noOfdigit(89789789)