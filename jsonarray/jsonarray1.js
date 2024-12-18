// var student ={
//     id:1,
//     name:"raj",
//     age:23
// }

var students = [
    {
        id:1,
        name:"raj",
        age:23
    },
    {
        id:2,
        name:"parth",
        age:24
    },
    {
        id:3,
        name:"jay",
        age:22
    }
]
//console.log(students)

// for(let i=0;i<students.length;i++){

//     //console.log(students[i])
//     console.log(students[i].id + " "+students[i].name + " "+students[i].age)
// }

// students.forEach((stu)=>{
//     //console.log(stu)
//     console.log(stu.id  + " "+stu.name + " "+stu.age)
// })

//map ===>return arrat forEach void..

var studentsName = students.map((stu)=>{

    return stu.name.toUpperCase()
})
console.log(studentsName)

// {
//     id:id+1000,
//     name:uppercase,
//     age:age+1
// }

var studentNewObj = students.map((stu)=>{

    return{
        id:stu.id+1000,
        name:stu.name.toUpperCase(),
        age:stu.age+1
    }
})

console.log(studentNewObj)