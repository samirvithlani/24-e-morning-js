var employee ={

        name:"Anil",
        age:23,
        gender:"male",
        isActive:true,
        education:{
            degree:"MCA",
            school:"KVS",
            college:"NIT"
        },
        lastCompany:{
            name:"TCS",
            location:"Pune",
            salary:50000
        },
        currentCompany:{
            name:"Infosys",
            location:"Pune",
            salary:60000
        }


}
console.log(employee)
console.log(employee.name +" is working now in  "+ employee.currentCompany.name)
console.log(employee.name +"'s last salary was "+ employee.lastCompany.salary)