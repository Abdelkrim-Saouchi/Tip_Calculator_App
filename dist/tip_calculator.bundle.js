"use strict";
(self["webpackChunktip_calculator_app_main"] = self["webpackChunktip_calculator_app_main"] || []).push([["tip_calculator"],{

/***/ "./src/tip_calculator.js":
/*!*******************************!*\
  !*** ./src/tip_calculator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTipCalculator)
/* harmony export */ });
/* harmony import */ var _images_icon_dollar_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/icon-dollar.svg */ "./src/images/icon-dollar.svg");
/* harmony import */ var _images_icon_person_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/icon-person.svg */ "./src/images/icon-person.svg");



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

function createTipCalculator() {
  const calculator = document.createElement('div');
  calculator.id = 'calculator';
  const calcPanel = document.createElement('div');
  calcPanel.id = 'calc-panel';
  const resultPanel = document.createElement('div');
  resultPanel.id = 'result-panel';

  const bill = createSubTitle('Bill');
  const billInput = createTextInput('bill-input-wrapper', '0');
  const dollar = new Image();
  dollar.src = _images_icon_dollar_svg__WEBPACK_IMPORTED_MODULE_0__;
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
  personImg.src = _images_icon_person_svg__WEBPACK_IMPORTED_MODULE_1__;
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


/***/ }),

/***/ "./src/images/icon-dollar.svg":
/*!************************************!*\
  !*** ./src/images/icon-dollar.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f9be3534a9295a65957.svg";

/***/ }),

/***/ "./src/images/icon-person.svg":
/*!************************************!*\
  !*** ./src/images/icon-person.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "65bfd20465dd1d2cb58c.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/tip_calculator.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlwX2NhbGN1bGF0b3IuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNBOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsS0FBSztBQUNoQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvREFBVTtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixvREFBVTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aXAtY2FsY3VsYXRvci1hcHAtbWFpbi8uL3NyYy90aXBfY2FsY3VsYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZG9sbGFySWNvbiBmcm9tICcuL2ltYWdlcy9pY29uLWRvbGxhci5zdmcnO1xuaW1wb3J0IHBlcnNvbkljb24gZnJvbSAnLi9pbWFnZXMvaWNvbi1wZXJzb24uc3ZnJztcblxuZnVuY3Rpb24gY3JlYXRlU3ViVGl0bGUodGV4dCkge1xuICBjb25zdCBzdWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIHN1YlRpdGxlLnRleHRDb250ZW50ID0gdGV4dDtcbiAgc3ViVGl0bGUuY2xhc3NMaXN0LmFkZCgnc3VidGl0bGUnKTtcbiAgcmV0dXJuIHN1YlRpdGxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0SW5wdXQoaWQsIHZhbHVlKSB7XG4gIGNvbnN0IGlucHV0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbnB1dFdyYXBwZXIuaWQgPSBpZDtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC50eXBlID0gJ3RleHQnO1xuICBpbnB1dC52YWx1ZSA9IHZhbHVlO1xuICBpbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICByZXR1cm4gaW5wdXRXcmFwcGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCdG4oY2xhcywgdGV4dCkge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoY2xhcyk7XG4gIGJ0bi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHJldHVybiBidG47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlc3VsdENvbXBvbmVudChpZCwgdGV4dCwgcnNsdCkge1xuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgncmVzdWx0LXdyYXBwZXInKTtcbiAgY29uc3Qgc3ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuXG4gIHN1YlRpdGxlLnRleHRDb250ZW50ID0gdGV4dDtcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9ICcvIHBlcnNvbic7XG5cbiAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnUCcpO1xuICByZXN1bHQudGV4dENvbnRlbnQgPSBgJCR7cnNsdH1gO1xuICByZXN1bHQuaWQgPSBpZDtcblxuICBzdWJUaXRsZS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgd3JhcHBlci5hcHBlbmQoc3ViVGl0bGUsIHJlc3VsdCk7XG5cbiAgcmV0dXJuIHdyYXBwZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRpcENhbGN1bGF0b3IoKSB7XG4gIGNvbnN0IGNhbGN1bGF0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FsY3VsYXRvci5pZCA9ICdjYWxjdWxhdG9yJztcbiAgY29uc3QgY2FsY1BhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhbGNQYW5lbC5pZCA9ICdjYWxjLXBhbmVsJztcbiAgY29uc3QgcmVzdWx0UGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcmVzdWx0UGFuZWwuaWQgPSAncmVzdWx0LXBhbmVsJztcblxuICBjb25zdCBiaWxsID0gY3JlYXRlU3ViVGl0bGUoJ0JpbGwnKTtcbiAgY29uc3QgYmlsbElucHV0ID0gY3JlYXRlVGV4dElucHV0KCdiaWxsLWlucHV0LXdyYXBwZXInLCAnMCcpO1xuICBjb25zdCBkb2xsYXIgPSBuZXcgSW1hZ2UoKTtcbiAgZG9sbGFyLnNyYyA9IGRvbGxhckljb247XG4gIGRvbGxhci5pZCA9ICdkb2xsYXInO1xuICBiaWxsSW5wdXQuYXBwZW5kQ2hpbGQoZG9sbGFyKTtcblxuICBjb25zdCBzZWxlY3RUaXBQZXJjZW50YWdlID0gY3JlYXRlU3ViVGl0bGUoJ1NlbGVjdCBUaXAgJScpO1xuICBjb25zdCBmaXZlUGVyY2VudCA9IGNyZWF0ZUJ0bigndGlwLWJ0bicsICc1JScpO1xuICBjb25zdCB0ZW5QZXJjZW50ID0gY3JlYXRlQnRuKCd0aXAtYnRuJywgJzEwJScpO1xuICBjb25zdCBmaWZ0ZWVuUGVyY2VudCA9IGNyZWF0ZUJ0bigndGlwLWJ0bicsICcxNSUnKTtcbiAgY29uc3QgdHdlbnR5Rml2ZVBlcmNlbnQgPSBjcmVhdGVCdG4oJ3RpcC1idG4nLCAnMjUlJyk7XG4gIGNvbnN0IGZpZnR5UGVyY2VudCA9IGNyZWF0ZUJ0bigndGlwLWJ0bicsICc1MCUnKTtcbiAgY29uc3QgY3VzdG9tID0gY3JlYXRlVGV4dElucHV0KCdjdXN0b20nLCAnQ3VzdG9tJyk7XG5cbiAgY29uc3QgcGVyY2VudGFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcGVyY2VudGFnZXMuaWQgPSAncGVyY2VudGFnZXMtZGl2JztcbiAgcGVyY2VudGFnZXMuYXBwZW5kKFxuICAgIGZpdmVQZXJjZW50LFxuICAgIHRlblBlcmNlbnQsXG4gICAgZmlmdGVlblBlcmNlbnQsXG4gICAgdHdlbnR5Rml2ZVBlcmNlbnQsXG4gICAgZmlmdHlQZXJjZW50LFxuICAgIGN1c3RvbVxuICApO1xuXG4gIGNvbnN0IG5PZlBTdWJ0aXRsZSA9IGNyZWF0ZVN1YlRpdGxlKCdOdW1iZXIgb2YgUGVvcGxlJyk7XG4gIGNvbnN0IG51bWJlck9mUGVvcGxlID0gY3JlYXRlVGV4dElucHV0KCdwZW9wbGUtbnVtYmVyLXdyYXBwZXInLCAnMCcpO1xuICBjb25zdCBwZXJzb25JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgcGVyc29uSW1nLnNyYyA9IHBlcnNvbkljb247XG4gIHBlcnNvbkltZy5pZCA9ICdwZXJzb24taWNvbic7XG4gIG51bWJlck9mUGVvcGxlLmFwcGVuZENoaWxkKHBlcnNvbkltZyk7XG5cbiAgY2FsY1BhbmVsLmFwcGVuZChcbiAgICBiaWxsLFxuICAgIGJpbGxJbnB1dCxcbiAgICBzZWxlY3RUaXBQZXJjZW50YWdlLFxuICAgIHBlcmNlbnRhZ2VzLFxuICAgIG5PZlBTdWJ0aXRsZSxcbiAgICBudW1iZXJPZlBlb3BsZVxuICApO1xuXG4gIGNvbnN0IHRpcEFtb3VudCA9IGNyZWF0ZVJlc3VsdENvbXBvbmVudCgndGlwLWFtb3VudCcsICdUaXAgQW1vdW50JywgJzAuMDAnKTtcbiAgY29uc3QgdG90YWwgPSBjcmVhdGVSZXN1bHRDb21wb25lbnQoJ3RvdGFsJywgJ1RvdGFsJywgJzAuMDAnKTtcbiAgY29uc3QgcmVzdEJ0biA9IGNyZWF0ZUJ0bigncmVzZXQnLCAnUkVTRVQnKTtcblxuICByZXN1bHRQYW5lbC5hcHBlbmQodGlwQW1vdW50LCB0b3RhbCwgcmVzdEJ0bik7XG5cbiAgY2FsY3VsYXRvci5hcHBlbmQoY2FsY1BhbmVsLCByZXN1bHRQYW5lbCk7XG5cbiAgcmV0dXJuIGNhbGN1bGF0b3I7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=