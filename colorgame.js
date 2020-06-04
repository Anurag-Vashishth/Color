var numsquare=6;
var colors=[];
var square= document.querySelectorAll(".square");
var colorpick;
var colorDisplay= document.querySelector("#display");
var trying=document.querySelector("#try");
var h1=document.querySelector("h1");
var resetbtn=document.querySelector("#reset");
var modebtn=document.querySelectorAll(".mode");

init();

function init(){
	
setupmode();
	colorsquare();
	reset();
}

function setupmode(){

for(var i=0; i<modebtn.length; i++){
modebtn[i].addEventListener("click", function(){
modebtn[0].classList.remove("selected");
modebtn[1].classList.remove("selected");
this.classList.add("selected");

this.textContent==="Easy" ? numsquare=3: numsquare=6;
reset();
})
}
}


// easybtn.addEventListener("click",function(){

// hardbtn.classList.remove("selected");
// easybtn.classList.add("selected");
// numsquare=3;
// colors=generateRandomcolor(numsquare);
// colorpick=pickco();
// colorDisplay.textContent=colorpick;
// for(var i=0; i<square.length; i++){
// if(colors[i]){	
// square[i].style.backgroundColor=colors[i];
// }
// else{
// square[i].style.display="none";
// }
// }
// });


// hardbtn.addEventListener("click",function(){

// 	easybtn.classList.remove("selected");
// 	hardbtn.classList.add("selected");
// 	numsquare=6;
// 	colors=generateRandomcolor(numsquare);
// 	colorpick=pickco();
// 	colorDisplay.textContent=colorpick;
// 	for(var i=0; i<square.length;i++){
	
// 	square[i].style.backgroundColor=colors[i];
// 	square[i].style.display="block";
// 	}

// });

function reset(){
resetbtn.textContent="New Colors";	
colors=generateRandomcolor(numsquare);
colorpick=pickco();
trying.textContent=" ";
colorDisplay.textContent=colorpick;
for(var i=0; i<square.length; i++){
if(colors[i]){
square[i].style.display="block";
square[i].style.background=colors[i];
}
else{
square[i].style.display="none";
}
}
h1.style.background = "steelblue";
}



resetbtn.addEventListener("click", function(){
reset();
})


function colorsquare(){

for(var i=0; i<square.length; i++){

square[i].style.backgroundColor=colors[i];


square[i].addEventListener("click",function(){

var clickcolor=this.style.backgroundColor;

if(clickcolor==colorpick){
	changeColor(colorpick);
	trying.textContent="Correct!!!";
	h1.style.backgroundColor=clickcolor;
	resetbtn.textContent="Play Again ?";

}

else{
	this.style.backgroundColor= "#232323";
	trying.textContent="Oops Try Again";
}

})
}
}



function changeColor(color){

for(var i=0; i<square.length; i++){

square[i].style.backgroundColor=color;

}

}

function pickco(){

var num=Math.floor(Math.random()*colors.length)

return colors[num];
}



function generateRandomcolor(num){

var arr=[];

for(var i=0; i<num; i++){

arr.push(randomcolor());

}
return arr;
}


function randomcolor(){

var r = Math.floor(Math.random()*256);

var g = Math.floor(Math.random()*256);

var b = Math.floor(Math.random()*256);

return "rgb(" + r + ", " + g + ", " + b + ")";

}
