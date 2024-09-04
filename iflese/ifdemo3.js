var age =11
var agegap =0;

if(age>=18){
    console.log("You are eligible to vote")
}
else{
    console.log("You are not eligible to vote")
    agegap = 18 - age;
    console.log("You can vote in " + agegap + " years")
}
