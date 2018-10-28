import styles from '../assets/styles.css';

import Slider from './slider/slider';
import OutputSliderValue from './slider/outputSliderValue';
import { Square, Circle, Triangle } from './shapes/';

// wait page load
document.addEventListener("DOMContentLoaded", function(event) {
  // an observer
  let square = new Square({selector: '#square_canvas', color: '#0FED34'});
  // an observer
  let circle = new Circle({selector: '#circle_canvas', color: 'gold'});
  // an observer
  let triangle = new Triangle({selector: '#triangle_canvas', color: 'purple'});

  // an observer for displaying the value of the slider
  let outputSliderValue = new OutputSliderValue({selector: '#output'});

  // the subject
  let slider = new Slider({selector: '#slider'});

  // subscribe to updates in the subject
  slider.attach(circle);
  slider.attach(square);
  slider.attach(triangle);
  slider.attach(outputSliderValue);
  slider.notify({distance: 35});
});
