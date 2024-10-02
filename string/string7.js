var email ="  jay@gmail.com   "
console.log("email = ",email)
console.log(email.length)

email  = email.trim() // it will remove space from left and right side of string
//email = email.trimStart() // it will remove space from left side of string
//email = email.trimEnd() // it will remove space from right side of string
console.log("email = ",email)
console.log(email.length)




//var flag = email.includes("@") //true
var flag = email.includes(".",12) //true
console.log(flag);



email = email.replace("a","A") //it will replace first occurance of a with A
console.log(email);

