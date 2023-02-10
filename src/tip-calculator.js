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

function createResultComponent(text, rslt) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('result-wrapper');
  const subTitle = document.createElement('h3');

  subTitle.textContent = text;
  const span = document.createElement('span');
  span.textContent = '/ person';

  const result = document.createElement('P');
  result.textContent = `$${rslt}`;

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
  const billInput = createTextInput('bill-input-wrapper', '142.55');
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
  const custom = createBtn('tip-btn', 'Custom');
  custom.id = 'custom';

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
  const numberOfPeople = createTextInput('people-number-wrapper', '5');
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

  const tipAmount = createResultComponent('Tip Amount', 4.27);
  const total = createResultComponent('Total', 32.79);
  const restBtn = createBtn('rest', 'RESET');

  resultPanel.append(tipAmount, total, restBtn);

  calculator.append(calcPanel, resultPanel);

  return calculator;
}
