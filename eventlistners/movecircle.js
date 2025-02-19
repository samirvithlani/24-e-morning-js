const circle = document.getElementById("circle")
let isDragging = false
let offsetX,offsetY;

circle.addEventListener("mousedown",(event)=>{

    isDragging = true
    offsetX = event.clientX -circle.offsetLeft
    console.log(offsetX)
    offsetY = event.clientY - circle.offsetTop
    console.log(offsetY)
    circle.style.cursor = "grabbing"
})
circle.addEventListener("mousemove",(event)=>{

    let x = event.clientX - offsetX;
    let y = event.clientY - offsetY
    circle.style.left =`${x}px`
    circle.style.top = `${y}px`
})
circle.addEventListener("mouseup",()=>{
    isDragging = false
    circle.style.cursor = "grab"
})