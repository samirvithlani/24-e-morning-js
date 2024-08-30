var haveTicket = true;
var isAdult = true;
var isSecurityCheckDone = true;

if(isSecurityCheckDone){
    console.log("Security check done welcome to mall...");
    if(haveTicket && isAdult){
        console.log("You van watch movie...");
    }
    else{
        console.log("You can not watch movie...");
    }
}
else{
    console.log("Security check pending...");
    
}