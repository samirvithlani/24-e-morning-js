// for(let i=0;i<marks.length;i++){

// }

var marks = [20,22,21,24,20,20]


// marks.forEach(function(m){
//     console.log(m)
// })

// marks.forEach((m)=>{
//     console.log(m)
// })



var newMarks = marks.map((m)=>{
    return m+1
})
console.log(newMarks)

var sales = [100,120,230,450,700,800,1000]
//newsales = with 10% discount