///mutable...

var marks = [21,22,18,24,24]
console.log(marks)
for(let i=0;i<marks.length;i++){
    console.log(marks[i])
}
// console.log(marks[0])
// console.log(marks[1])
// console.log(marks[2])
// console.log(marks[3])
// console.log(marks[4])
//console.log(marks[5])

//sum of all elements
//print reverse array...

var sum =0;

for(let i=0;i<marks.length;i++){

    //0 = 0 + 21
    //21 = 21 + 22
    //43 = 43 + 18
    //61 = 61 + 24
    //85 = 85 + 24
    //109 = 109
    sum = sum + marks[i]

}
console.log("Sum of all elements is : "+sum)
//5
for(let i = marks.length-1;i>=0;i--){
    console.log(marks[i])
}
