function clearInput(event) {
  // eslint-disable-next-line no-param-reassign
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

  billInput.addEventListener('click', clearInput);
  peopleNumberInput.addEventListener('click', clearInput);
  customInput.addEventListener('click', clearInput);

  billInput.addEventListener('input', () => {
    displayInvalidMsg(billInput, '* Must be Number');
  });
  peopleNumberInput.addEventListener('input', () => {
    console.log(isZero(peopleNumberInput.value));
    if (isZero(peopleNumberInput.value)) {
      console.log('zero');
      displayInvalidMsg(peopleNumberInput, '* Must not be Zero');
    } else {
      displayInvalidMsg(peopleNumberInput, '* Must be Number');
    }
  });
  customInput.addEventListener('input', () => {
    displayInvalidPercentage(customInput, '* Invalid Percentage');
  });
}
