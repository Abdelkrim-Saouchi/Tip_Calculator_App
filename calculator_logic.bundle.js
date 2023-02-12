"use strict";
(self["webpackChunktip_calculator_app_main"] = self["webpackChunktip_calculator_app_main"] || []).push([["calculator_logic"],{

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




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/calculator_logic.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvcl9sb2dpYy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUV1RCIsInNvdXJjZXMiOlsid2VicGFjazovL3RpcC1jYWxjdWxhdG9yLWFwcC1tYWluLy4vc3JjL2NhbGN1bGF0b3JfbG9naWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY2FsY3VsYXRlVGlwQW1vdW50UGVyUGVyc29uKGJpbGwsIHBlcmNlbnRhZ2UsIHBlb3BsZU51bWJlcikge1xuICByZXR1cm4gKGJpbGwgKiBwZXJjZW50YWdlKSAvIDEwMCAvIHBlb3BsZU51bWJlcjtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlVG90YWwoYmlsbCwgcGVvcGxlTnVtYmVyLCB0aXBBbW91bnRQZXJQZXJzb24pIHtcbiAgcmV0dXJuIGJpbGwgLyBwZW9wbGVOdW1iZXIgKyB0aXBBbW91bnRQZXJQZXJzb247XG59XG5cbmV4cG9ydCB7IGNhbGN1bGF0ZVRpcEFtb3VudFBlclBlcnNvbiwgY2FsY3VsYXRlVG90YWwgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==