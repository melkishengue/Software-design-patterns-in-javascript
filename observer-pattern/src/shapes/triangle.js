import IShape from '../shapes/IShape';

export default class Triangle extends IShape {
  constructor({selector, color}) {
    super({selector, color});
  }

  // called by the subject
  update(payload) {
    this.side = parseInt(payload.distance);
    this.clear();
    this.draw();
  }

  // draw a triangle
  draw() {
    this.height = 95;
    let slide = 90;
    this.context.beginPath();
    this.context.moveTo(this.height + slide, this.height);
    this.context.lineTo(30 + slide, this.height);
    this.context.lineTo(30 + slide, this.height - this.side);
    this.context.fillStyle = this.color;
    this.context.fill();
  }
}
