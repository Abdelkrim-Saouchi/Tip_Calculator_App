import './style.css';
import createTipCalculator from './tip-calculator';

function createMainPage() {
  const body = document.querySelector('body');
  const title = document.createElement('h1');
  title.innerHTML = '<span>SPLI</span>TTER';
  const tipCalculator = createTipCalculator();
  body.appendChild(title);
  body.appendChild(tipCalculator);
  return body;
}

createMainPage();
