import IShape from '../shapes/IShape';

export default class Circle extends IShape {
  constructor({selector, color}) {
    super({selector, color});
  }

  // called by the subject
  update(payload) {
    this.radius = parseInt(payload.distance);
    this.clear();
    this.draw();
  }

  // draw a circle
  draw() {
    this.context.beginPath();
    this.context.strokeStyle = this.color;
    this.context.arc(150, 75, this.radius, 0, 2*Math.PI);
    this.context.stroke();
  }
}
