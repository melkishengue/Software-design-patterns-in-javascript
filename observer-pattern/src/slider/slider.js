import Subject from '../observer/subject.interface';

export default class Slider extends Subject {
  constructor({selector}) {
    super();

    this.sliderRef = document.querySelector(selector);
    this.outputRef = document.querySelector("#output");

    // notify observers (each time you drag the slider)
    this.sliderRef.oninput = () => {
      // notify all observers about the change
      this.notify({distance: this.sliderRef.value});
      this.outputRef.innerHTML = this.sliderRef.value;
    }

    this.outputRef.innerHTML = this.sliderRef.value;
  }
}
