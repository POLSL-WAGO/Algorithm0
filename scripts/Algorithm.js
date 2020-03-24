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
