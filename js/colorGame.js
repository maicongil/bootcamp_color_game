var colors = generateColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length;i++){
    squares[i].style.background = colors[i];

    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.background;
        if(clickedColor === pickedColor){
            message.textContent = "Correct!";
            h1.style.background = clickedColor;
            changeColors(clickedColor);
        }else{
            this.style.background = "#232323";
            message.textContent = "Try again!";
        }
    })
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