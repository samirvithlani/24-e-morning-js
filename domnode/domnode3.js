const root = document.getElementById('root');

const createBox = ()=>{

    
    root.innerHTML = ""; //clear the root element
    //<div style="height: 100px; width: 100px; background-color: aquamarine;"></div>
    const boxCount = document.getElementById("boxCount").value;
    const bombPosition = Math.floor(Math.random()*boxCount)+1;
    console.log("radom..",bombPosition);
    for(let i=1;i<=boxCount;i++){
    
        const box = document.createElement('div'); //<div></div>
        box.style.height = "50px"
        box.style.width = "50px"
        box.style.backgroundColor = "red"
        box.style.margin = "5px"
        box.style.display = "inline-block"
        box.style.textAlign = "center"
        box.innerHTML = "<h3>"+i+"</h3>";

        box.addEventListener("click",()=>{
            box.style.backgroundColor = "green"
            if(bombPosition ==i){
                box.innerHTML = "<h3>💣</h3>";
                alert("Game Over");
                //root.innerHTML = "";
                setTimeout(()=>{
                    root.innerHTML = "";
                },1000)
            }
        })

        root.appendChild(box);

    }
}