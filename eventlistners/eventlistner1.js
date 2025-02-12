const btn = document.getElementById("button"); //<button>
btn.addEventListener("click", () => {
  btn.innerHTML = "clicked";
  btn.disabled = true;
});
btn.addEventListener("mouseenter", () => {
  btn.style.backgroundColor = "grey";
});
btn.addEventListener("mouseleave", () => {
  btn.style.backgroundColor = "white";
});

var colorList = ["red", "green", "yellow", "blue", "grey", "pink"];
const mydiv = document.getElementById("mydiv");
mydiv.addEventListener("mouseenter", () => {
  //random index

  var randomIndex = Math.floor(Math.random() * colorList.length); //3
  mydiv.style.backgroundColor = colorList[randomIndex];

  const rect = mydiv.getBoundingClientRect();
  console.log("X Position:", rect.left);
  console.log("Y Position:", rect.top);

  rect.left = 609.6000366210938 
  rect.top = 29.200000762939453
  //609.6000366210938 
  //29.200000762939453




});
