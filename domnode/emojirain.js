const emojis = ["😂", "🥳", "😎", "🔥", "🤩", "😜", "🎉", "💖"];

function createEmoji(){



    const emoji = document.createElement("div")
    emoji.className = "emoji"
    emoji.innerHTML =emojis[Math.floor(Math.random()*emojis.length)]
    document.body.appendChild(emoji)

    let x = Math.random()*window.innerWidth;
    let speed = Math.random()*7;
    emoji.style.left =`${x}px`


    let fall = setInterval(() => {
        let top = parseInt(emoji.style.top || 0)
        if(top>window.innerWidth){
            emoji.remove()
            clearInterval(fall)
        }else{
            emoji.style.top = `${top+speed}px`
        }

    }, 50);

    

}
function startEmojirain(){

    setInterval(createEmoji,300)
}