// Inspired by http://evanyou.me

document.addEventListener('touchmove', function (e) {
    e.preventDefault()
})
var canvas = document.getElementById('canvas'),
    body = document.getElementById('content'),
    ctx = canvas.getContext('2d'),
    pixels = window.devicePixelRatio || 1,
    width = window.innerWidth,
    height = window.innerHeight,
    colorOne,
    colorTwo,
    colorThree
canvas.width = width * pixels
canvas.height = height * pixels

function changeBackground() {
  colors();
  ctx.fillStyle = "rgba(" + colorOne + "," + colorTwo + "," + colorThree + ", 0.0625)";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  var currentColor = ctx.fillStyle;
  console.log(currentColor);
}

function colors() {
  colorOne = randomColor(255*1.25);
  colorTwo = randomColor(255*2);
  colorThree = randomColor(255*3);
}

var randomColor = function(multiplier) {
  return Math.floor(Math.random()*multiplier);
};

document.onclick = changeBackground;
document.ontouchstart = changeBackground;
changeBackground();
