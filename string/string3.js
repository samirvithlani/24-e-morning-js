//array //index
//[0][1][2][3]
//[a][m][i][t]
var data ="amit is boy" //i  -->index..

//indexoF
var index = -1;

for(let i=0;i<data.length;i++){

    //console.log(data[i]); //a m i t
    //data[0][a] =="i" false
    //data[1][m] =="i" false
    //data[2][i] =="i" true
    //----------------------

    //data[0][a]=="x" false
    //data[1][m]=="x" false
    //data[2][i]=="x" false
    //data[3][t]=="x" false
    if(data[i]=="i"){
        //
        index = i;
        break;
    }

}

console.log("Index of i is ",index); //2




var ind  = data.indexOf("i")
console.log("Index of i is ",ind); //2

var ind = data.lastIndexOf("i")
console.log("Last Index of i is ",ind); //5