var no =123;
//1 + 2 + 3 = 6
var rem = 0;
var sum = 0;
//12>0
//1>0
//0>0 false
while(no>0){

rem = no % 10; //123 % 10 =3  12 % 10 = 2  1 % 10 = 1
sum = sum + rem; //0 + 3 = 3 // 3 + 2 = 5  // 5 + 1 = 6
no = Math.floor(no / 10); //123 / 10 = 12 // 12 / 10 = 1 // 1 / 10 = 0


}
console.log("sum of digits : "+sum);