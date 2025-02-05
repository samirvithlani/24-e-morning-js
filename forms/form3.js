const submitHandler =(event)=>{

    event.preventDefault()
    const gender = document.getElementsByName("gender") //array <input><input>
    const genderError = document.getElementById("genderError")
    var flag = false

    for(let i=0;i<gender.length;i++){

        if(gender[i].checked){
            console.log(gender[i].value)
            flag = true;
        }
    }

    if(flag==false){
        genderError.innerHTML="Gener is required*"
    }
    else{
        genderError.innerHTML=""
    }



}