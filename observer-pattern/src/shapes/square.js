import Observer from '../observer/observer.interface';

export default class Square extends Observer {
  constructor() {
    super();
    this.color = '#0FED34';
    this.canvas = document.querySelector('#square_canvas');
    this.context = this.canvas.getContext("2d");
  }

  // called by the subject
  update(payload) {
    this.width = parseInt(payload.distance);
    this.clear();
    this.draw();
  }

  // clear the canvas
  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  // draw a square
  draw() {
    this.context.beginPath();
    this.context.strokeStyle = this.color;
    this.context.rect(130, 50, this.width, this.width);
    this.context.stroke();
  }
}
