"use strict";
(self["webpackChunktip_calculator_app_main"] = self["webpackChunktip_calculator_app_main"] || []).push([["display_controller"],{

/***/ "./src/calculator_logic.js":
/*!*********************************!*\
  !*** ./src/calculator_logic.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateTipAmountPerPerson": () => (/* binding */ calculateTipAmountPerPerson),
/* harmony export */   "calculateTotal": () => (/* binding */ calculateTotal)
/* harmony export */ });
function calculateTipAmountPerPerson(bill, percentage, peopleNumber) {
  return (bill * percentage) / 100 / peopleNumber;
}

function calculateTotal(bill, peopleNumber, tipAmountPerPerson) {
  return bill / peopleNumber + tipAmountPerPerson;
}




/***/ }),

/***/ "./src/display_controller.js":
/*!***********************************!*\
  !*** ./src/display_controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ controlDisplay)
/* harmony export */ });
/* harmony import */ var _calculator_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculator_logic */ "./src/calculator_logic.js");
/* eslint-disable no-param-reassign */


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
  const tipAmountPerPerson = (0,_calculator_logic__WEBPACK_IMPORTED_MODULE_0__.calculateTipAmountPerPerson)(
    bill,
    percentage.split('%').join(''),
    peopleNumber
  );
  const total = (0,_calculator_logic__WEBPACK_IMPORTED_MODULE_0__.calculateTotal)(bill, peopleNumber, tipAmountPerPerson);
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

function controlDisplay() {
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/display_controller.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheV9jb250cm9sbGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRXVEOzs7Ozs7Ozs7Ozs7Ozs7O0FDUnZEO0FBSTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsOEVBQTJCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlFQUFjO0FBQzlCLDhCQUE4Qiw4QkFBOEI7QUFDNUQsOEJBQThCLGlCQUFpQjtBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGlwLWNhbGN1bGF0b3ItYXBwLW1haW4vLi9zcmMvY2FsY3VsYXRvcl9sb2dpYy5qcyIsIndlYnBhY2s6Ly90aXAtY2FsY3VsYXRvci1hcHAtbWFpbi8uL3NyYy9kaXNwbGF5X2NvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY2FsY3VsYXRlVGlwQW1vdW50UGVyUGVyc29uKGJpbGwsIHBlcmNlbnRhZ2UsIHBlb3BsZU51bWJlcikge1xuICByZXR1cm4gKGJpbGwgKiBwZXJjZW50YWdlKSAvIDEwMCAvIHBlb3BsZU51bWJlcjtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlVG90YWwoYmlsbCwgcGVvcGxlTnVtYmVyLCB0aXBBbW91bnRQZXJQZXJzb24pIHtcbiAgcmV0dXJuIGJpbGwgLyBwZW9wbGVOdW1iZXIgKyB0aXBBbW91bnRQZXJQZXJzb247XG59XG5cbmV4cG9ydCB7IGNhbGN1bGF0ZVRpcEFtb3VudFBlclBlcnNvbiwgY2FsY3VsYXRlVG90YWwgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQge1xuICBjYWxjdWxhdGVUaXBBbW91bnRQZXJQZXJzb24sXG4gIGNhbGN1bGF0ZVRvdGFsLFxufSBmcm9tICcuL2NhbGN1bGF0b3JfbG9naWMnO1xuXG5mdW5jdGlvbiByZXNldChiaWxsSW5wdXQsIGN1c3RvbUlucHV0LCBwZW9wbGVOdW1iZXIsIHRpcEFtb3VudCwgdG90YWxQYXJhKSB7XG4gIGJpbGxJbnB1dC52YWx1ZSA9ICcwJztcbiAgY3VzdG9tSW5wdXQudmFsdWUgPSAnQ3VzdG9tJztcbiAgcGVvcGxlTnVtYmVyLnZhbHVlID0gJzAnO1xuICB0aXBBbW91bnQudGV4dENvbnRlbnQgPSAnJDAuMDAnO1xuICB0b3RhbFBhcmEudGV4dENvbnRlbnQgPSAnJDAuMDAnO1xufVxuXG5mdW5jdGlvbiBjbGVhcklucHV0KGV2ZW50KSB7XG4gIGV2ZW50LnRhcmdldC52YWx1ZSA9ICcnO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcihpbnB1dCkge1xuICByZXR1cm4gIU51bWJlci5pc05hTihOdW1iZXIoaW5wdXQpKTtcbn1cblxuZnVuY3Rpb24gaXNaZXJvKGlucHV0KSB7XG4gIHJldHVybiBOdW1iZXIoaW5wdXQpID09PSAwO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkUGVyY2VudGFnZShpbnB1dCkge1xuICByZXR1cm4gaXNOdW1iZXIoaW5wdXQuc3BsaXQoJyUnKS5qb2luKCcnKSk7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZShiaWxsLCBwZXJjZW50YWdlLCBwZW9wbGVOdW1iZXIsIHRpcEFtb3VudCwgdG90YWxQYXJhKSB7XG4gIGNvbnN0IHRpcEFtb3VudFBlclBlcnNvbiA9IGNhbGN1bGF0ZVRpcEFtb3VudFBlclBlcnNvbihcbiAgICBiaWxsLFxuICAgIHBlcmNlbnRhZ2Uuc3BsaXQoJyUnKS5qb2luKCcnKSxcbiAgICBwZW9wbGVOdW1iZXJcbiAgKTtcbiAgY29uc3QgdG90YWwgPSBjYWxjdWxhdGVUb3RhbChiaWxsLCBwZW9wbGVOdW1iZXIsIHRpcEFtb3VudFBlclBlcnNvbik7XG4gIHRpcEFtb3VudC50ZXh0Q29udGVudCA9IGAkJHt0aXBBbW91bnRQZXJQZXJzb24udG9GaXhlZCgyKX1gO1xuICB0b3RhbFBhcmEudGV4dENvbnRlbnQgPSBgJCR7dG90YWwudG9GaXhlZCgyKX1gO1xufVxuXG5mdW5jdGlvbiBhcmVJbnB1dHNWYWxpZChiaWxsSW5wdXQsIHBlb3BsZU51bWJlcklucHV0KSB7XG4gIGlmIChcbiAgICBpc051bWJlcihiaWxsSW5wdXQudmFsdWUpICYmXG4gICAgaXNOdW1iZXIocGVvcGxlTnVtYmVySW5wdXQudmFsdWUpICYmXG4gICAgIWlzWmVybyhwZW9wbGVOdW1iZXJJbnB1dC52YWx1ZSlcbiAgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5SW52YWxpZE1zZyhpbnB1dEVsZW1lbnQsIG1zZykge1xuICBsZXQgc3BhbiA9IGlucHV0RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcbiAgaWYgKCFzcGFuKSB7XG4gICAgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBpbnB1dEVsZW1lbnQucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgfVxuXG4gIHNwYW4udGV4dENvbnRlbnQgPSBtc2c7XG4gIGlmIChpc051bWJlcihpbnB1dEVsZW1lbnQudmFsdWUpICYmICFpc1plcm8oaW5wdXRFbGVtZW50LnZhbHVlKSkge1xuICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgc3Bhbi5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvci1tc2cnKTtcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZC1ib3JkZXInKTtcbiAgfSBlbHNlIHtcbiAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ2Vycm9yLW1zZycpO1xuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkLWJvcmRlcicpO1xuICAgIHNwYW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheUludmFsaWRQZXJjZW50YWdlKGlucHV0RWxlbWVudCwgbXNnKSB7XG4gIGxldCBzcGFuID0gaW5wdXRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XG4gIGlmICghc3Bhbikge1xuICAgIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgaW5wdXRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgfVxuICBzcGFuLnRleHRDb250ZW50ID0gbXNnO1xuICBpZiAoaXNWYWxpZFBlcmNlbnRhZ2UoaW5wdXRFbGVtZW50LnZhbHVlKSkge1xuICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQtYm9yZGVyJyk7XG4gICAgc3Bhbi5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkLXBlcmNlbnRhZ2UnKTtcbiAgfSBlbHNlIHtcbiAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQtcGVyY2VudGFnZScpO1xuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkLWJvcmRlcicpO1xuICAgIHNwYW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udHJvbERpc3BsYXkoKSB7XG4gIGNvbnN0IGJpbGxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiaWxsLWlucHV0LXdyYXBwZXIgaW5wdXQnKTtcbiAgY29uc3QgcGVvcGxlTnVtYmVySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcjcGVvcGxlLW51bWJlci13cmFwcGVyIGlucHV0J1xuICApO1xuICBjb25zdCBjdXN0b21JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXN0b20gaW5wdXQnKTtcbiAgY29uc3QgdGlwQW1vdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdC13cmFwcGVyICN0aXAtYW1vdW50Jyk7XG4gIGNvbnN0IHRvdGFsUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHQtd3JhcHBlciAjdG90YWwnKTtcbiAgY29uc3QgcGVyY2VudGFnZUJ0bnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aXAtYnRuJykpO1xuICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNldCcpO1xuXG4gIGJpbGxJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFySW5wdXQpO1xuICBwZW9wbGVOdW1iZXJJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFySW5wdXQpO1xuICBjdXN0b21JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFySW5wdXQpO1xuXG4gIGJpbGxJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBkaXNwbGF5SW52YWxpZE1zZyhiaWxsSW5wdXQsICcqIE11c3QgYmUgTnVtYmVyJyk7XG4gIH0pO1xuXG4gIHBlb3BsZU51bWJlcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIGlmIChpc1plcm8ocGVvcGxlTnVtYmVySW5wdXQudmFsdWUpKSB7XG4gICAgICBkaXNwbGF5SW52YWxpZE1zZyhwZW9wbGVOdW1iZXJJbnB1dCwgJyogTXVzdCBub3QgYmUgWmVybycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwbGF5SW52YWxpZE1zZyhwZW9wbGVOdW1iZXJJbnB1dCwgJyogTXVzdCBiZSBOdW1iZXInKTtcbiAgICB9XG4gIH0pO1xuXG4gIGN1c3RvbUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIGRpc3BsYXlJbnZhbGlkUGVyY2VudGFnZShjdXN0b21JbnB1dCwgJyogSW52YWxpZCBQZXJjZW50YWdlJyk7XG4gICAgaWYgKGlzVmFsaWRQZXJjZW50YWdlKGN1c3RvbUlucHV0LnZhbHVlKSkge1xuICAgICAgY2FsY3VsYXRlKFxuICAgICAgICBiaWxsSW5wdXQudmFsdWUsXG4gICAgICAgIGN1c3RvbUlucHV0LnZhbHVlLFxuICAgICAgICBwZW9wbGVOdW1iZXJJbnB1dC52YWx1ZSxcbiAgICAgICAgdGlwQW1vdW50LFxuICAgICAgICB0b3RhbFBhcmFcbiAgICAgICk7XG4gICAgfVxuICB9KTtcblxuICBwZXJjZW50YWdlQnRucy5mb3JFYWNoKChwZXJjZW50YWdlQnRuKSA9PiB7XG4gICAgcGVyY2VudGFnZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBpZiAoYXJlSW5wdXRzVmFsaWQoYmlsbElucHV0LCBwZW9wbGVOdW1iZXJJbnB1dCkpIHtcbiAgICAgICAgY2FsY3VsYXRlKFxuICAgICAgICAgIGJpbGxJbnB1dC52YWx1ZSxcbiAgICAgICAgICBlLnRhcmdldC50ZXh0Q29udGVudCxcbiAgICAgICAgICBwZW9wbGVOdW1iZXJJbnB1dC52YWx1ZSxcbiAgICAgICAgICB0aXBBbW91bnQsXG4gICAgICAgICAgdG90YWxQYXJhXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlc2V0KGJpbGxJbnB1dCwgY3VzdG9tSW5wdXQsIHBlb3BsZU51bWJlcklucHV0LCB0aXBBbW91bnQsIHRvdGFsUGFyYSk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9