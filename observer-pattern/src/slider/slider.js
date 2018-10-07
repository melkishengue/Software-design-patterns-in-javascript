import Square from '../shapes/square';
import Circle from '../shapes/circle';
import Triangle from '../shapes/triangle';
import Subject from '../observer/subject.interface';

export default class Slider extends Subject {
  constructor() {
    super();
    this.slider = document.getElementById("slider");
    this.output = document.getElementById("output");
  }

  init() {
    // an observer
    let square = new Square();
    // an observer
    let circle = new Circle();
    // an observer
    let triangle = new Triangle();

    // subscribe to updates in the subject
    this.attach(circle);
    this.attach(square);
    this.attach(triangle);
    this.notify({distance: 35});

    // notify observers (each time you drag the slider)
    let $this = this;
    this.slider.oninput = () => {
      // notify all observers about the change
      this.notify({distance: this.slider.value});
    }

    this.output.innerHTML = this.slider.value;
  }

  notify(payload) {
    this.observers.forEach((observer) => {
      observer.update(payload);
    })
  }

  attach(observer) {
    this.observers.push(observer);
  }

  detach(observer) {
    this.observers.splice(this.observers.indexOf(observer), 1);
  }
}
