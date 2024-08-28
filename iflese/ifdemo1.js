var no =100;
if(no>0){
    console.log("Positive Number");
}
else{
    console.log("Negative Number");
}

//check no is even or odd
//check bigger no from 2 no
//check no is divisible by 5 or not

//ladder if else

//if one condition get false and other condition need to check ... else if

//user monthl salary and calculate tax
//if p.a salary >500000 tax 10%
//if p.a salary >1000000 tax 15%
//if p.a salary >2000000 tax 20%
var salary = 50000;
var yearSalary = salary*12;
var tax=0;
console.log("yearly salary...",yearSalary);

if(yearSalary>=2000000){
    console.log("Tax is 20%");
    tax = yearSalary*20/100;
}
else if(yearSalary>=1000000){
    console.log("Tax is 15%");
    tax = yearSalary*15/100;
}
else if(yearSalary>=500000){
    console.log("Tax is 10%");
    tax = yearSalary*10/100;
}
else{
    console.log("No Tax");
}
console.log("Tax is...",tax);

var netsalary = yearSalary-tax;
console.log("Net Salary is...",netsalary);
