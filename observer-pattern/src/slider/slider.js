import Subject from '../observer/subject.interface';

export default class Slider extends Subject {
  constructor({selector}) {
    super();

    this.sliderRef = document.querySelector(selector);

    // notify observers (each time you drag the slider)
    this.sliderRef.oninput = () => {
      // notify all observers about the change
      this.notify({distance: this.sliderRef.value});
    }
  }

  getRef() {
    return this.sliderRef;
  }
}
