var numSquares = 6;
var colors = generateColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateColors(numSquares);
    pickedColor = pickColor();
    for(var i=0; i<squares.length;i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }else{
            squares[i].style.display="none";    
        }
    }
});


hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateColors(numSquares);
    pickedColor = pickColor();
    for(var i=0; i<squares.length;i++){
        squares[i].style.background = colors[i];
        squares[i].style.display="block";
    }
});

resetButton.addEventListener("click", function(){
    
    colors = generateColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.background = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    for(var i=0; i<squares.length;i++){
        squares[i].style.background = colors[i];
    }
    
});


for(var i=0; i<squares.length;i++){
    
    squares[i].style.background = colors[i];
    
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.background;
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play again?";
            h1.style.background = clickedColor;
            changeColors(clickedColor);
        }else{
            this.style.background = "#232323";
            messageDisplay.textContent = "Try again!";
        }
    });

}

function changeColors(color){
    for(var i=0; i<squares.length;i++){
        squares[i].style.background = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateColors(quantity){
    var generatedColors =[];
    for(var i = 0; i< quantity; i++){
        generatedColors.push(generateColor());
    }
    return generatedColors;
}

function generateColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb("+r+", "+g+", "+b+")";
}