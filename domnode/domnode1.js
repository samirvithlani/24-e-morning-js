const root = document.getElementById('root'); //<div>

const h1Tag = document.createElement("h1");
h1Tag.innerHTML = "Hello World!";
root.appendChild(h1Tag);

var users = ["ram","shyam","hari","sita","gita"];
//h2
for(let i=0;i<users.length;i++){

    const nameH2 = document.createElement("h2"); //<h2></h2>
    nameH2.innerHTML = users[i]; //ram
    root.appendChild(nameH2);    

}

var employees = ["amit","sumit","tom","jerry","peter","sam","harbhan"];
const olTag = document.createElement("ol"); //<ol>

for(let i=0;i<employees.length;i++){
    //<li>
    const empLi = document.createElement("li");//<li>?<li>
    empLi.innerHTML = employees[i]; //amit
    olTag.appendChild(empLi);//<ol><li>amit</li></ol>,.////
}
root.appendChild(olTag);
