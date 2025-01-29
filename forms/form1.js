const submitHandler  = (event)=>{

    event.preventDefault() // action -->stop..
    //console.log("form subbmited..")

    
    const nameOutput = document.getElementById("nameOutput")
    const ageOutput = document.getElementById("ageOutput")
    const countryOutput = document.getElementById("countryOutput")
    const genderOutput = document.getElementById("genderOutput")

    const name = document.getElementById("name") //<input>
    //console.log(name.value)
    nameOutput.innerHTML = "Name = "+name.value

    const age = document.getElementById("age")
    //console.log(age.value);
    ageOutput.innerHTML = "age ="+age.value

    const country = document.getElementById("country")
    //console.log(country.value);
    countryOutput.innerHTML = `country = ${country.value}`
    

    const gender = document.getElementsByName("gender") //input> , <input
    //gender is an array
    for(let i=0;i<gender.length;i++){

        if(gender[i].checked){
      //      console.log(gender[i].value)
            genderOutput.innerHTML = `Gender  = ${gender[i].value}`
        }
    }
    

    const color = document.getElementById("color")
    console.log(color.value);

    const outputdiv = document.getElementById("output") //<div>
    //outputdiv.style.color = "red"
    outputdiv.style.color = color.value
    







}