/* eslint-disable no-param-reassign */
import {
  calculateTipAmountPerPerson,
  calculateTotal,
} from './calculator_logic';

function reset(billInput, customInput, peopleNumber, tipAmount, totalPara) {
  billInput.value = '0';
  customInput.value = 'Custom';
  peopleNumber.value = '0';
  tipAmount.textContent = '$0.00';
  totalPara.textContent = '$0.00';
}

function clearInput(event) {
  event.target.value = '';
}

function isNumber(input) {
  return !Number.isNaN(Number(input));
}

function isZero(input) {
  return Number(input) === 0;
}

function isValidPercentage(input) {
  return isNumber(input.split('%').join(''));
}

function calculate(bill, percentage, peopleNumber, tipAmount, totalPara) {
  const tipAmountPerPerson = calculateTipAmountPerPerson(
    bill,
    percentage.split('%').join(''),
    peopleNumber
  );
  const total = calculateTotal(bill, peopleNumber, tipAmountPerPerson);
  tipAmount.textContent = `$${tipAmountPerPerson.toFixed(2)}`;
  totalPara.textContent = `$${total.toFixed(2)}`;
}

function areInputsValid(billInput, peopleNumberInput) {
  if (
    isNumber(billInput.value) &&
    isNumber(peopleNumberInput.value) &&
    !isZero(peopleNumberInput.value)
  ) {
    return true;
  }
  return false;
}

function displayInvalidMsg(inputElement, msg) {
  let span = inputElement.parentElement.querySelector('span');
  if (!span) {
    span = document.createElement('span');
    inputElement.parentElement.appendChild(span);
  }

  span.textContent = msg;
  if (isNumber(inputElement.value) && !isZero(inputElement.value)) {
    span.classList.add('hidden');
    span.classList.remove('error-msg');
    inputElement.classList.remove('invalid-border');
  } else {
    span.classList.add('error-msg');
    inputElement.classList.add('invalid-border');
    span.classList.remove('hidden');
  }
}

function displayInvalidPercentage(inputElement, msg) {
  let span = inputElement.parentElement.parentElement.querySelector('span');
  if (!span) {
    span = document.createElement('span');
    inputElement.parentElement.parentElement.appendChild(span);
  }
  span.textContent = msg;
  if (isValidPercentage(inputElement.value)) {
    span.classList.add('hidden');
    inputElement.classList.remove('invalid-border');
    span.classList.remove('invalid-percentage');
  } else {
    span.classList.add('invalid-percentage');
    inputElement.classList.add('invalid-border');
    span.classList.remove('hidden');
  }
}

export default function renderPage() {
  const billInput = document.querySelector('#bill-input-wrapper input');
  const peopleNumberInput = document.querySelector(
    '#people-number-wrapper input'
  );
  const customInput = document.querySelector('#custom input');
  const tipAmount = document.querySelector('.result-wrapper #tip-amount');
  const totalPara = document.querySelector('.result-wrapper #total');
  const percentageBtns = Array.from(document.querySelectorAll('.tip-btn'));
  const resetBtn = document.querySelector('.reset');

  billInput.addEventListener('click', clearInput);
  peopleNumberInput.addEventListener('click', clearInput);
  customInput.addEventListener('click', clearInput);

  billInput.addEventListener('input', () => {
    displayInvalidMsg(billInput, '* Must be Number');
  });

  peopleNumberInput.addEventListener('input', () => {
    if (isZero(peopleNumberInput.value)) {
      displayInvalidMsg(peopleNumberInput, '* Must not be Zero');
    } else {
      displayInvalidMsg(peopleNumberInput, '* Must be Number');
    }
  });

  customInput.addEventListener('input', () => {
    displayInvalidPercentage(customInput, '* Invalid Percentage');
    if (isValidPercentage(customInput.value)) {
      calculate(
        billInput.value,
        customInput.value,
        peopleNumberInput.value,
        tipAmount,
        totalPara
      );
    }
  });

  percentageBtns.forEach((percentageBtn) => {
    percentageBtn.addEventListener('click', (e) => {
      if (areInputsValid(billInput, peopleNumberInput)) {
        calculate(
          billInput.value,
          e.target.textContent,
          peopleNumberInput.value,
          tipAmount,
          totalPara
        );
      }
    });
  });

  resetBtn.addEventListener('click', () => {
    reset(billInput, customInput, peopleNumberInput, tipAmount, totalPara);
  });
}
