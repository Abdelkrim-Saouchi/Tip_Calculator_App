import './style.css';
import createTipCalculator from './tip-calculator';
import logoIcon from './images/logo.svg';

function createMainPage() {
  const body = document.querySelector('body');
  //   const title = document.createElement('h1');
  //   title.innerHTML = '<span>SPLI</span>TTER';
  const container = document.createElement('div');
  container.classList.add('container');
  const logo = new Image();
  logo.src = logoIcon;
  logo.id = 'logo';

  const tipCalculator = createTipCalculator();
  container.appendChild(logo);
  container.appendChild(tipCalculator);
  body.appendChild(container);
  return body;
}

createMainPage();
