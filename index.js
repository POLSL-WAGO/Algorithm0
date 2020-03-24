const selectElement = document.querySelector(".custom-select");

selectElement.addEventListener("change", event => {
  const result = document.querySelector(".result");
  result.textContent = `${event.target.value}`;
  console.log(result.textContent);
  drawFigure(result.textContent);
});

function drawFigure(x) {
  if (x == "koło") {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(150, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
  }
  if (x == "kwadrat") {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#FF0000";
    ctx.strokeRect(100, 30, 80, 80);
  }
  if (x == "prostokąt") {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#FF0000";
    ctx.strokeRect(100, 50, 150, 75);
  }
  if (x == "trujkąt") {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(150, 20);
    ctx.lineTo(50, 100);
    ctx.lineTo(250, 100);
    ctx.closePath();

    // the outline
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#666666";
    ctx.stroke();
  }
}
