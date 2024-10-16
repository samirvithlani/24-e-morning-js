var users = ["ram","shyam","hari","sita"];
//push --> add element at the end of the array
console.log(users)
var x = users.push("gita")
console.log("x..",x)
console.log(users)

//pop

var removedElm  = users.pop()
console.log("Removed element is : ",removedElm)
console.log(users)



var data = [100,1000,2345,6767]
console.log(data)
data.unshift(999)
console.log(data)

var removedElm = data.shift()
console.log("Removed element is : ",removedElm)
console.log(data)


///shift == pop
///unshift == push

///shift will remove the first element of the array
///unshift will add the element at the first position of the array

//push will add the element at the end of the array
//pop will remove the element from the end of the array
