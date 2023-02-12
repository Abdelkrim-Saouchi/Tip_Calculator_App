import dollarIcon from './images/icon-dollar.svg';
import personIcon from './images/icon-person.svg';

function createSubTitle(text) {
  const subTitle = document.createElement('h3');
  subTitle.textContent = text;
  subTitle.classList.add('subtitle');
  return subTitle;
}

function createTextInput(id, value) {
  const inputWrapper = document.createElement('div');
  inputWrapper.id = id;
  const input = document.createElement('input');
  input.type = 'text';
  input.value = value;
  inputWrapper.appendChild(input);
  return inputWrapper;
}

function createBtn(clas, text) {
  const btn = document.createElement('button');
  btn.classList.add(clas);
  btn.textContent = text;
  return btn;
}

function createResultComponent(id, text, rslt) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('result-wrapper');
  const subTitle = document.createElement('h3');

  subTitle.textContent = text;
  const span = document.createElement('span');
  span.textContent = '/ person';

  const result = document.createElement('P');
  result.textContent = `$${rslt}`;
  result.id = id;

  subTitle.appendChild(span);
  wrapper.append(subTitle, result);

  return wrapper;
}

export default function createTipCalculator() {
  const calculator = document.createElement('div');
  calculator.id = 'calculator';
  const calcPanel = document.createElement('div');
  calcPanel.id = 'calc-panel';
  const resultPanel = document.createElement('div');
  resultPanel.id = 'result-panel';

  const bill = createSubTitle('Bill');
  const billInput = createTextInput('bill-input-wrapper', '0');
  const dollar = new Image();
  dollar.src = dollarIcon;
  dollar.id = 'dollar';
  billInput.appendChild(dollar);

  const selectTipPercentage = createSubTitle('Select Tip %');
  const fivePercent = createBtn('tip-btn', '5%');
  const tenPercent = createBtn('tip-btn', '10%');
  const fifteenPercent = createBtn('tip-btn', '15%');
  const twentyFivePercent = createBtn('tip-btn', '25%');
  const fiftyPercent = createBtn('tip-btn', '50%');
  const custom = createTextInput('custom', 'Custom');

  const percentages = document.createElement('div');
  percentages.id = 'percentages-div';
  percentages.append(
    fivePercent,
    tenPercent,
    fifteenPercent,
    twentyFivePercent,
    fiftyPercent,
    custom
  );

  const nOfPSubtitle = createSubTitle('Number of People');
  const numberOfPeople = createTextInput('people-number-wrapper', '0');
  const personImg = new Image();
  personImg.src = personIcon;
  personImg.id = 'person-icon';
  numberOfPeople.appendChild(personImg);

  calcPanel.append(
    bill,
    billInput,
    selectTipPercentage,
    percentages,
    nOfPSubtitle,
    numberOfPeople
  );

  const tipAmount = createResultComponent('tip-amount', 'Tip Amount', '0.00');
  const total = createResultComponent('total', 'Total', '0.00');
  const restBtn = createBtn('reset', 'RESET');

  resultPanel.append(tipAmount, total, restBtn);

  calculator.append(calcPanel, resultPanel);

  return calculator;
}
