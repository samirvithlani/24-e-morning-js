function test(event){
    console.log(event)
    alert("test funciton called...")
}

function changeColor (){


    const myDiv = document.getElementById("myDiv") //<div></div>
    myDiv.innerHTML = "<h1>Hello<h1>"
    myDiv.style.backgroundColor="pink"
    myDiv.style.height="400px"
    myDiv.style.width="400px"

    
    
}
function changeColor2 (){


    const myDiv = document.getElementById("myDiv") //<div></div>
    myDiv.innerHTML = "<h1>Hello<h1>"
    myDiv.style.backgroundColor="brown"
    myDiv.style.height="200px"
    myDiv.style.width="200px"

    
    
}

const changeLink = ()=>{


    const link = document.getElementById("link") //<a>
    console.log(link)
    link.href = "https://www.netflix.com"
    link.innerHTML="Netflix"
    link.target = "_blank"


}