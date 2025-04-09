
var count =0;
var flag = setInterval(() => {
    count++;
    console.log(count)
    if(count==10){
        clearInterval(flag)
    }
}, 1000);