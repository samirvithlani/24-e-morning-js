var marks = [20,22,21,24,20,20]
//if this user score 24 marks in any of the subject then print true...

//some loop->
//m =23
//m =22
var result = marks.some(function(m){
    return m >=24//false//false//false//true
})
console.log(result)//true

var result = marks.every(function(m){
    return m>=20
})
console.log(result)//true


//some --> manual approach
//every --> manual approach


//some...
var result1 = false;

for(let i=0;i<marks.length;i++){

        //23//22//21//24
        if(marks[i]>=24){
            result1 = true;
            break;
        }


}
console.log(result1)//true

//every...
var result2= true;

for(let i=0;i<marks.length;i++){
    if(marks[i]<20){
        result2 = false;
        break;
    }
}
console.log(result2)//true