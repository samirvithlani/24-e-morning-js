var no1 = 10;
console.log("value of no1 outside of block ",no1)

{
    console.log("value of no1 inside of block ",no1)
    var no2 = 20;
    console.log("value of no2 inside of block ",no2)
}

console.log("value of no2 outside of block ",no2)

var no2 = 30; //redeclaration of variable
var no2 = 40; //redeclaration of variable
no2 =50; //reassigning the value
console.log("value of no2 outside of block ",no2)
