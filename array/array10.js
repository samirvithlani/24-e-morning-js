var nos = [1,2,3,4,5]
// var sum=0;
// for(let i=0;i<nos.length;i++){

//     sum = sum+nos[i]
// }
// console.log(sum)



var total = nos.reduce((sum,no)=>{
    return sum + no
},100)

console.log(total)

//what is diff bw map filter and reduce
//map will retuen same array size.. [10 elm]
//filter will retuen either same size of an array or less size.
//reduce will return only single element