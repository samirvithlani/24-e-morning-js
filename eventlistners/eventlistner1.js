const btn = document.getElementById("button") //<button>
btn.addEventListener("click",()=>{
    btn.innerHTML = "clicked"
    btn.disabled = true
})
btn.addEventListener("mouseenter",()=>{
    btn.style.backgroundColor = "grey"
})
btn.addEventListener("mouseleave",()=>{
    btn.style.backgroundColor = "white"
})