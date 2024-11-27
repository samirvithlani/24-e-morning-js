//functions keyword..
function add(){
    console.log("Hello")
}

add()
//arrow function
const add1 = ()=>{
    console.log("Hello")
}
add1()


function sum(a,b){
    return a+b
}

const sum1 = (a,b)=>{
    return a+b
}
//single line arrow function
const sum2 = (a,b)=> a+b
//if {} is not used then return is not required

var ans = sum1(10,200)
console.log(ans)



const isEven = (num)=>{
    if(num%2==0){
        return true
    }
    return false
}
var x = isEven(10)
console.log(x)



