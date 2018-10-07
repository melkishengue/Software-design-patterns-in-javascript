import Observer from '../observer/observer.interface';

export default class Circle extends Observer {
  constructor() {
    super();
    this.color = 'gold';
    this.canvas = document.getElementById('circle_canvas');
    this.context = this.canvas.getContext("2d");
  }

  // called by the subject
  update(payload) {
    this.radius = parseInt(payload.distance);
    this.clear();
    this.draw();
  }

  // clear the canvas
  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  // draw a circle
  draw() {
    this.context.beginPath();
    this.context.strokeStyle = this.color;
    this.context.arc(150, 75, this.radius, 0, 2*Math.PI);
    this.context.stroke();
  }
}
