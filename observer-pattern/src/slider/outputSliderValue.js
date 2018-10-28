import Observer from '../observer/observer.interface';
import { DOMElementNotFoundException } from '../error/';


export default class OutputSliderValue extends Observer {
  constructor({selector}) {
    super();
    this.selector = selector;
    this.outputRef = document.querySelector(this.selector);
    if(!this.outputRef) throw new DOMElementNotFoundException(this.selector);
  }

  // called by the subject
  update(payload) {
      this.outputRef.innerHTML = payload.distance;
  }
}
