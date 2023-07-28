import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

const splashScreen = document.querySelector('.splash-container');

splashScreen.addEventListener('click',()=>{
  setTimeout(()=>{
    splashScreen.classList.add('hidden');
  },20)
})