import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

const splashScreen = document.querySelector('.splash-container');

splashScreen.addEventListener('click',()=>{
  
    splashScreen.style.opacity = 0;
    setTimeout(()=>{
    splashScreen.classList.add('hidden');
  },2000)
})