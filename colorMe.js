var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
// var easyBtn	= document.querySelector("#easyBtn");
// var hardBtn	= document.querySelector("#hardBtn");

colorDisplay.textContent = pickedColor;

var question = prompt("Start Game Y/N ?");

if(question === "Y" || question === "y"){
	init();
}
else{
	alert("Thankyou");
	window.close();
}

function init(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
		 modeButtons[0].classList.remove("selected");
		 modeButtons[1].classList.remove("selected");
		 this.classList.add("selected");
		 if(this.textContent === "Easy"){
		 	numSquares = 3;
		 }
		 else{
		 	numSquares = 6;
		 }

		 reset();	
		});
	}

		for(var i = 0; i<squares.length; i++){
		//adding initial colors to squares
		// squares[i].style.backgroundColor = colors[i];

		//add event listeners to square
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!!!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again??"
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!!!";
			}


		});
	}
	reset();
}

function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random colors
	pickedColor = pickColor();
	messageDisplay.textContent = "";

	//Change color display to match picked color
	colorDisplay.textContent = pickedColor;

	for( var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}

	//reset H1 band back
	h1.style.backgroundColor = "steelblue";

	resetButton.textContent = "New Colors!";


}

// easyBtn.addEventListener("click",function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	h1.style.backgroundColor = "steelblue";
// 	messageDisplay.textContent = " ";
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}
// 		else{
// 			squares[i].style.display= "none";
// 		}
// 	}

// });

// hardBtn.addEventListener("click",function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	h1.style.backgroundColor = "steelblue";
// 	messageDisplay.textContent = " ";
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++){
		
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display= "block";
// 	}

// });

resetButton.addEventListener("click",function(){
	reset();
	// //generate all new colors
	// colors = generateRandomColors(numSquares);
	// //pick a new random colors
	// pickedColor = pickColor();
	// messageDisplay.textContent = " ";

	// //Change color display to match picked color
	// colorDisplay.textContent = pickedColor;

	// for( var i = 0; i < squares.length; i++){
	// 	squares[i].style.backgroundColor = colors[i];
	// }

	// //reset H1 band back
	// h1.style.backgroundColor = "steelblue";

	// resetButton.textContent = "New Colors!";

});



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
