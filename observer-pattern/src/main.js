import FormHandler from './slider/slider';
import styles from '../assets/styles.css';

// wait page load
document.addEventListener("DOMContentLoaded", function(event) {
  let formHandler = new FormHandler();
  formHandler.init();
});
