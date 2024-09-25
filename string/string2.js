var str1 = "abc"
var str2="";

// str2 = str1;
// console.log(str2); // abc

for(let i=0;i<str1.length;i++){

    //"" = "" +a ="a"
    //"a" = "a" +b = "ab"
    //"ab" = "ab" +c = "abc"
    str2 = str2 + str1[i];
}
console.log(str2); //abc