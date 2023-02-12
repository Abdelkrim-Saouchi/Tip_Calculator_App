import './style.css';
import createTipCalculator from './tip_calculator';
import logoIcon from './images/logo.svg';
import controlDisplay from './display_controller';

function createMainPage() {
  const body = document.querySelector('body');
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
controlDisplay();
