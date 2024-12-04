//monday, tuesday, wednesday
//morning afternoon
var weather  =[[10,25],[12,33],[13,23]]

//var newWeather=[17.5,22.5,18]

var newWeather = weather.map((w)=>{
    return (w[0]+w[1])/2
})
console.log(newWeather)

var users = [["ram","sharma"],["mohan","sohan"],["rohan","mohan"]]

var newUsers = users.map((u)=>{
    return u[0] + " " + u[1]
})
console.log(newUsers)