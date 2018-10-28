import { DOMElementNotFoundException, MethodNotOverridenException } from '../error/';
import Observer from '../observer/observer.interface';

export default class IShape extends Observer {
  constructor({selector, color}) {
    super();
    this.color = color;
    this.selector = selector;
    this.canvasRef = document.querySelector(this.selector);

    if (!this.canvasRef) throw new DOMElementNotFoundException();
    this.context = this.canvasRef.getContext("2d");
  }

  // clear the canvas
  clear() {
    this.context.clearRect(0, 0, this.canvasRef.width, this.canvasRef.height);
  }

  // to be redefined by concrete implementation
  draw() {
    throw new MethodNotOverridenException();
  }
}
