class IDrawable {
  draw() {}
}

//DrawPoin
class Point extends IDrawable {
  constructor(x, y, color = "#FF0000") {
    super();
    this.x = x;
    this.y = y;
    this.color = color;

    console.log("Point ;)");
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, 3, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
  }
}

/*
draw in canvas 
 */
class Line extends IDrawable {
  constructor(p1, p2, color = "#FF0000") {
    super();
    this.p1 = p1;
    this.p2 = p2;
    this.color = color;

    console.log("Line");
  }

  /*
     drawing staright line
     */
  draw(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.moveTo(this.p1.x, this.p1.y);
    ctx.lineTo(this.p2.x, this.p2.y);
    ctx.closePath();
    ctx.stroke();
  }
}

/*
drawing polygon
 */
class Polygon extends IDrawable {
  constructor(Pointy, color = "#FF0000") {
    super();
    this.Pointy = Pointy;
  }

  /*
      method draw 
     */
  draw(ctx) {
    for (let i = 0; i < this.Pointy.length; i++) {
      const Point = this.Pointy[i];

      Point.draw(ctx);

      // rysuje Line między dwoma Pointami
      if (i > 0) {
        const Line = new Line(this.Pointy[i], this.Pointy[i - 1], "blue");

        Line.draw(ctx);
      }

      // rysuje kończący Line
      if (i == this.Pointy.length - 1) {
        const Line = new Line(this.Pointy[0], this.Pointy[i], "blue");

        Line.draw(ctx);
      }
    }
  }

  /*
      
      this method returns all lines in Polygon
      ZWRACA WSZYSTKIE ODCINKI WIELOKĄTA!!!!!!!!!!!!!
     */
  getLines() {
    let lines = [];
    for (let i = 1; i < this.Pointy.length; i++) {
      lines.push(new Line(this.Pointy[i], this.Pointy[i - 1], "blue"));

      if (i == this.Pointy.length - 1) {
        lines.push(new Line(this.Pointy[0], this.Pointy[i], "blue"));
      }
    }

    return lines;
  }

  /*
    returns all points in polygon
   */
  getPoints() {
    return [...this.Pointy];
  }
}

class StarightLine extends IDrawable {
  constructor(p1, kat, color = "#FF0000") {
    super();
    this.p1 = p1;
    this.kat = kat; //to kąt/angle ?
    this.color = color;

    console.log("StarightLine");
  }
  draw(ctx) {
    ctx.beginPath();
    let r = 3000; //size of staright line
    ctx.strokeStyle = this.color;
    ctx.moveTo(this.p1.x, this.p1.y);
    ctx.lineTo(
      this.p1.x + r * Math.cos((Math.PI * this.kat) / 180),
      this.p1.y + r * Math.sin((Math.PI * this.kat) / 180)
    );
    ctx.moveTo(this.p1.x, this.p1.y);
    ctx.lineTo(
      this.p1.x + r * Math.cos((Math.PI * (this.kat + 180)) / 180),
      this.p1.y + r * Math.sin((Math.PI * (this.kat + 180)) / 180)
    );
    ctx.closePath();
    ctx.stroke();
  }
}

window.lib = {
  Point,
  Line,

  StarightLine,
  Polygon,
};
