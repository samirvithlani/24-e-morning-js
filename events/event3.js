const getData =()=>{
    const txt = document.getElementById("txt")//<input>
    //console.log(txt.value)
    
    const nameOutput = document.getElementById("nameOutput")
    const nameError = document.getElementById("nameError")//<span>
    if(txt.value.length<6){
        nameError.innerHTML = "name length should be greater 6"
        nameError.style.color="red"
    }
    else{
        nameOutput.innerHTML = txt.value
        nameError.innerHTML=""

    }
}