


for(let i=1;i<=10;i++){
    console.log(i);
}

for(let i=10;i>=1;i--){
    console.log(i);
}

//sum of 1 to 10

//declare sp and ep --> run loop between sp and ep --> and print only even numbers

var sum=0
for(let i=1;i<=10;i++){
    sum = sum + i;
}
console.log("Sum of 1 to 10 is " + sum);

var sp=1;
var ep=20;
for(let i=sp;i<=ep;i++){
    if(i %2==0){
        console.log(i); 
    }
}


//find factorial of a number  5! = 5*4*3*2*1 = 120

//1 *2 *3 *4 *5 = 120
//5 *4 *3 *2 *1 = 120
var no=5;
var fact =1
for(let i=1;i<=no;i++){
    //1 = 1*1
    //1 = 1*2 = 2
    //2 = 2*3 = 6
    //6 = 6*4 = 24
    //24 = 24*5 = 120
    fact = fact * i;
}
console.log("Factorial of " + no + " is " + fact);


//6. print fibonacci series

//0  1   1   2  3  5  8 13  21

var a =0;
var b =1;

console.log(a);
console.log(b);
for(let i=1;i<=10;i++){
    //c = 0 + 1  = 1
    //c = 1 + 1 = 2
    //c = 1 + 2 = 3
    //c = 2 + 3 = 5
    //c = 3 + 5 = 8
 var c = a + b
 console.log(c);  // 0 1 1 2 3 5 8
 a = b//a =1 //a =1//a =2 //a =3
 b = c//b =1//b =2//b =3//b =5

}
