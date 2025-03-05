const root = document.getElementById('root');
const myButton = document.createElement('button'); //<button>
myButton.innerHTML = 'Click me';
myButton.addEventListener("click",()=>{
    alert('Hello World');
})


root.appendChild(myButton);


var users = [
    {
        id:1,
        name:"john",
        salary:1000
    },
    {
        id:2,
        name:"doe",
        salary:2000
    },
    {
        id:3,
        name:"smith",
        salary:3000
    }
]

const olTag = document.createElement('ol');
for(let i=0;i<users.length;i++){

    const liTag = document.createElement('li');
    liTag.innerHTML = users[i].name;

    const myButton = document.createElement('button'); //<button>
    myButton.innerHTML = users[i].name
    myButton.addEventListener("click",()=>{
        alert(users[i].salary);
    })


    liTag.appendChild(myButton);


    olTag.appendChild(liTag);
    


}
root.appendChild(olTag);









