import Slider from './slider/slider';
import styles from '../assets/styles.css';

// wait page load
document.addEventListener("DOMContentLoaded", function(event) {
  let slider = new Slider();
  slider.init();
});
