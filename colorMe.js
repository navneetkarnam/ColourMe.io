var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

colorDisplay.textContent = pickedColor;


resetButton.addEventListener("click",function(){
	//generate all new colors
	colors = generateRandomColors(6);
	//pick a new random colors
	pickedColor = pickColor();

	//Change color display to match picked color
	colorDisplay.textContent = pickedColor;

	for( var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}

	//reset H1 band back
	h1.style.backgroundColor = "#232323";

	resetButton.textContent = "New Colors!";

});

for(var i = 0; i<squares.length; i++){
	//adding initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add event listeners to square
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!!!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again!"
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!!!";
		}


	});
}

function changeColors(color){
	//loop through all the squares
	for ( var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function generateRandomColors(num){
	//make an array
	var arr = [];

	//add num random colors to an array
	for (var i = 0; i < num; i++){
		arr.push(randomColor());
		//get random color and push into array

	}

	//return
	return arr;
}

function randomColor(){
	//pick a red from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0 to 255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0 to 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}
