var sales = [100,120,123,119,102,234]
var filSales =[];

for(let i=0;i<sales.length;i++){

    //100 t
    //120 t
    //123 f
    if(sales[i]%2==0){
        filSales.push(sales[i])
    }

}
console.log(filSales)

//s == sales[i]
var filSales2 = sales.filter((s)=>{
    return s %2 == 0; //only predicate statement
})
console.log(filSales2)

var cities = ["ahmedabad","aurangabad","pune","firozabad","alhabad","mumbai"]

var filCities =[]

for(let i=0;i<cities.length;i++){

    if(cities[i].endsWith("abad")){
        filCities.push(cities[i])
    }
}

console.log(filCities)

var filcities2 = cities.filter((c)=>{
    return c.endsWith("abad")
})
console.log(filCities)


var emails = ["ram@gmail.com","ankit@gmail","parthgmail.com","kunal@gmail.com"]












