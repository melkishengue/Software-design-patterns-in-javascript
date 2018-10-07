import Observer from '../observer/observer.interface';

export default class Triangle extends Observer {
  constructor() {
    super();
    this.color = 'purple';
    this.canvas = document.getElementById('triangle_canvas');
    this.context = this.canvas.getContext("2d");
  }

  // called by the subject
  update(payload) {
    this.side = parseInt(payload.distance);
    this.clear();
    this.draw();
  }

  // clear the canvas
  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
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
