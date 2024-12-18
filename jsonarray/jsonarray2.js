var products = [
    {
        id:1,
        name:"iphone",
        price:1200,
        colors:["purple","red","blue"]
    },
    {
        id:2,
        name:"Lenove Laptop",
        price:1000,
        colors:["black","silver"]
    },
    {
        id:3,
        name:"Tv",
        price:600,
        colors:["black"]
    }
]

//{id:1,name:uppercase,price 10%,colors:["uppercase"]}


var newProducts = products.map((product)=>{

    return{
        id:product.id,
        name:product.name.toUpperCase(),
        price:product.price*0.9,
        colors:product.colors.map((color)=>{
            return color.toUpperCase()
        })
    }

})
console.log(newProducts)





