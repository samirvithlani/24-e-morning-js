//start end...
//while loop

// let i=1;
// //t//t//t//f
// while(i<=10){
//     console.log(i); //1 //2//10
//     i++; //2 //3//10//11
// }


var no =76590; //no of digits...
//765 / 10 =  76 //1
//76 / 10 = 7 //2
//7 / 10 = 0 //3

//var no = 890;
//890 / 10 = 89 //1
//89 / 10 = 8 //2
//8 / 10 = 0 //3

//var no = 6543;
//6543 / 10 = 654 //1
//654 / 10 = 65 //2
//65 / 10 = 6 //3
//6 / 10 = 0 //4
var count =0;
while(no>0){

        no = Math.floor(no / 10);
        console.log(no);
        count++;
}
console.log("no of digits : "+count);




// var data = 100.90;
// var intdata = parseInt(data);
// console.log(intdata);

// var intdata = Math.floor(100.90);
// console.log(intdata);