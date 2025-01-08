const getData = ()=>{

    //const txt = document.getElementsByName("txt")[0]
    const txt = document.getElementsByName("txt") //<h1,h2>
    for(let i=0;i<txt.length;i++){
        txt[i].innerHTML = txt[i].innerHTML.toUpperCase()
    }



}

const changeColor = ()=>{

    const box = document.getElementsByClassName("box")
    for(let i=0;i<box.length;i++){
        box[i].style.backgroundColor = "red"
    }
} 