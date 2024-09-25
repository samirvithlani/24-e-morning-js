var country = "America";
//Assci value, unicode value
//A =-> 65
//B =-> 66
//a =-> 97
//b =-> 98
//z =-> 122
//space =-> 32

var x = country.charAt(0)
console.log(x); //A

var y = country.charCodeAt(0) //A =-> 65
console.log(y); //65


var z = country.charCodeAt(country.charAt(0))
console.log(z); 

for(let i=0;i<country.length;i++){

    //[0] -A -->65
    //[1] -m -->109
    //[2] -e -->101
    //[3] -r -->114
    //[4] -i -->105
    console.log(country.charCodeAt(i));
}
