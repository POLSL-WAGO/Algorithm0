/*
	Kuśmierz Wojciech
	Rojek Marcin
	Wiśniewski Mateusz
*/

function createImageOnCanvas(imageId) {
  document.getElementById("imgCanvas").style.display = "block";
  document.getElementById("images").style.overflowY = "hidden";
  var canvas = document.getElementById("imgCanvas");
  var context = canvas.getContext("2d");
  var img = new Image(300, 300);
  img.src = document.getElementById(imageId).src;
  context.drawImage(img, 0, 0);
}

function draw(e) {
  var canvas = document.getElementById("imgCanvas");
  var context = canvas.getContext("2d");
  posx = e.clientX;
  posy = e.clientY;
  context.fillStyle = "#000000";
  context.fillRect(posx, posy, 4, 4);
}
///////////////////////////////////////////////////

var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "rgba(1,1,1,1)";
ctx.fillRect(0, 0, canvas.getAttribute("height"), canvas.getAttribute("width"));

//report the mouse position on click
canvas.addEventListener(
  "click",
  function(evt) {
    var mousePos = getMousePos(canvas, evt);
    alert(mousePos.x + "," + mousePos.y);
  },
  false
);

//Get Mouse Position
function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}
