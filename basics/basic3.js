let no1 = 10;
console.log("value of no1 outside of block ",no1)

{
    console.log("value of no1 inside of block ",no1)   
    let no2 = 20;
    console.log("value of no2 inside of block ",no2)
}

//console.log("value of no2 outside of block ",no2)

let x =100;
console.log("value of x outside of block ",x)
//let x =200; //redeclaration of variable
console.log("value of x outside of block ",x)



//let p = 200;//redeclaration of variable
//var p = 100;


{
    //block 2
//    var p1 =20
    let p1 =20

}
{
    //block 3
  //  ++p1;
    p1++;
}
console.log("value of p1 outside of block ",p1)

