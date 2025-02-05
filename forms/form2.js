const submitHandler = (event)=>{
    event.preventDefault()
    //console.log("form subbmited...")
    const name = document.getElementById("name")
    const nameError = document.getElementById("nameError")
    const namevalue = document.getElementById("nameValue")
    //console.log(name.value)
    if(name.value.trim().length<=0){
        nameError.innerHTML = "Name is Required*"
    }
    else{
        nameError.innerHTML = ""
        namevalue.innerHTML = "Name = "+name.value

    }

    const age = document.getElementById("age")
    const ageError = document.getElementById("ageError")
    const ageValue = document.getElementById("ageValue")

    if(age.value.trim().length<=0){
        ageError.innerHTML = "Age is Required"
        
    }
    else{
        ageError.innerHTML= ""
        if(age.value>=18 && age.value<=60){
            ageValue.innerHTML = "Age = "+age.value
        }
        else{
            ageError.innerHTML = "Age is not valid it must be bw 18 to 60"
        }
        
    }
}