import IShape from '../shapes/IShape';

export default class Square extends IShape {
  constructor({selector, color}) {
    super({selector, color});
  }

  // called by the subject
  update(payload) {
    this.width = parseInt(payload.distance);
    this.clear();
    this.draw();
  }

  // draw a square
  draw() {
    this.context.beginPath();
    this.context.strokeStyle = this.color;
    this.context.rect(130, 50, this.width, this.width);
    this.context.stroke();
  }
}
