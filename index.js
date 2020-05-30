/*
	Kuśmierz Wojciech
	Rojek Marcin
	Wiśniewski Mateusz
*/

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

const selectElement = document.querySelector(".custom-select");
selectElement.addEventListener("change", (event) => {
  const result = document.querySelector(".result");
  result.textContent = `${event.target.value}`;
  //console.log(result.textContent);
  drawFigure(result.textContent);
});

ctx.fillRect(0, 0, canvas.getAttribute("height"), canvas.getAttribute("width"));
var r = new MyRect(100, 30, 80, 80);

const checkFigure = document.querySelector(".result");
//drawing point on mouse click

function area(x1, y1, x2, y2, x3, y3) {
  //funkcja potrzebna dod sprawdzenia czy punkt jest w trójkącie
  return (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2.0;
}

function isInsideTriangle(x1, y1, x2, y2, x3, y3, x, y) {
  //funkcjea potrzebna do sprawdzenia czy pkt jest w trójkącie
  /* Calculate area of triangle ABC */
  const A = area(x1, y1, x2, y2, x3, y3);

  /* Calculate area of triangle PBC */
  const A1 = area(x, y, x2, y2, x3, y3);

  /* Calculate area of triangle PAC */
  const A2 = area(x1, y1, x, y, x3, y3);

  /* Calculate area of triangle PAB */
  const A3 = area(x1, y1, x2, y2, x, y);

  /* Check if sum of A1, A2 and A3 is same as A */
  if (A == A1 + A2 + A3) {
    return console.log("inside", A, A1, A2, A3);
  }else{
    return console.log("outside", A, A1, A2, A3);
  }
}

canvas.addEventListener(
  //console.log(result.textContent);
  "click",
  function (evt) {
    var mousePos = getMousePos(canvas, evt);
    // alert("pozycja myszki X " + mousePos.x + ", Pozycja myszki Y" + mousePos.y);
    document.getElementById("X").innerHTML = mousePos.x;
    document.getElementById("Y").innerHTML = mousePos.y;
    ctx.fillStyle = "#ff2626";
    ctx.beginPath();
    ctx.arc(mousePos.x, mousePos.y, 2, 0, Math.PI * 2, true);
    ctx.fill();

    switch(checkFigure.textContent){
      case 'kwadrat':
        var x = new MyRect(100, 30, 80, 80);
        if (x.contains(mousePos.x, mousePos.y)) {
          //alert("punkt");
          document.getElementById("result").innerHTML = inside;
        } else {
          document.getElementById("result").innerHTML = outside;
        }
        break;
      case 'prostokąt':
        var x = new MyRect(100, 50, 150, 75);
        if (x.contains(mousePos.x, mousePos.y)) {
          //alert("punkt");
          document.getElementById("result").innerHTML = inside;
        } else {
          document.getElementById("result").innerHTML = outside;
        }
        break;
      case 'koło':
        var check = (mousePos.x - 150) * (mousePos.x - 150) + (mousePos.y - 75) * (mousePos.y - 75);
        console.log("check pozycja" + check);
        const r = 50 * 50;
        if (check < r) {
          document.getElementById("result").innerHTML = inside;
        } else {
          document.getElementById("result").innerHTML = outside;
        }
        break;
      case 'trójkąt':
        isInsideTriangle(150, 20, 50, 100, 250, 100, mousePos.x, mousePos.y);
        break;
    }
    /*if (checkFigure.textContent == "kwadrat") {
      if (r.contains(mousePos.x, mousePos.y)) {
        //alert("punkt");
        document.getElementById("result").innerHTML = inside;
      } else {
        document.getElementById("result").innerHTML = outside;
      }
    }
    if (checkFigure.textContent == "prostokąt") {
      r = new MyRect(100, 50, 150, 75);
      if (r.contains(mousePos.x, mousePos.y)) {
        //alert("punkt");
        document.getElementById("result").innerHTML = inside;
      } else {
        document.getElementById("result").innerHTML = outside;
      }
    }
    if (checkFigure.textContent == "trójkąt") {
      // ctx.moveTo(150, 20);
      // ctx.lineTo(50, 100);
      // ctx.lineTo(250, 100);

      isInsideTriangle(150, 20, 50, 100, 250, 100, mousePos.x, mousePos.y);
    }
    if (checkFigure.textContent == "koło") {
      console.log(mousePos.x);
      console.log(mousePos.y);

      var check = (mousePos.x - 150) * (mousePos.x - 150) + (mousePos.y - 75) * (mousePos.y - 75);
      console.log("check pozycja" + check);
      const r = 50 * 50;
      if (check < r) {
        document.getElementById("result").innerHTML = inside;
      } else {
        document.getElementById("result").innerHTML = outside;
      }
    }*/
  },
  false
);

var inside = '<div class="alert alert-primary" role="alert">Punkt jest wewnątrz</div>;';
var outside = '<div class="alert alert-danger" role="alert">Punkt jest na zewnątrz</div >';

//Get Mouse Position
function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  var scaleX = canvas.width / rect.width;
  var scaleY = canvas.height / rect.height;
  return {
    x: (evt.clientX - rect.left) * scaleX,
    y: (evt.clientY - rect.top) * scaleY,
  };
}

// figure options
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

    r.draw(ctx);
    //ctx.strokeRect(100, 30, 80, 80);
  }

  if (x == "prostokąt") {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeRect(100, 50, 150, 75);
  }

  if (x == "trójkąt") {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(150, 20);
    ctx.lineTo(50, 100);
    ctx.lineTo(250, 100);
    ctx.closePath();

    // the outline
    ctx.lineWidth = 1;
    ctx.stroke();
  }
  if (x == "punkt") {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function MyRect(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;

  this.contains = function (x, y) {
    return this.x <= x && x <= this.x + this.width && this.y <= y && y <= this.y + this.height;
  };

  this.draw = function (ctx) {
    ctx.strokeRect(this.x, this.y, this.width, this.height);
  };
}
