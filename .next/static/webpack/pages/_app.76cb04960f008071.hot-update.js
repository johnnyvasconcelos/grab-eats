"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[12].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[12].use[2]!./styles/globals.css":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[12].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[12].use[2]!./styles/globals.css ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n:root {\\r\\n  --color-1: #ffb100;\\r\\n  --color-2: #0cbc70;\\r\\n  --color-3: #d52b1e;\\r\\n  --color-4: #059858;\\r\\n  --light: #f4f4f5;\\r\\n  --light-gray: #dce5e9;\\r\\n  --dark: #323232;\\r\\n  --dark-gray: #7e8392;\\r\\n  --section-padding: 60px;\\r\\n}\\r\\n@font-face {\\r\\n  font-family: \\\"Poppins\\\";\\r\\n  src: url(\\\"/fonts/Poppins-Bold.ttf\\\") format(\\\"truetype\\\");\\r\\n  font-weight: bold;\\r\\n  font-style: normal;\\r\\n}\\r\\n@font-face {\\r\\n  font-family: \\\"Poppins\\\";\\r\\n  src: url(\\\"/fonts/Poppins-SemiBold.ttf\\\") format(\\\"truetype\\\");\\r\\n  font-weight: 600;\\r\\n  font-style: normal;\\r\\n}\\r\\n@font-face {\\r\\n  font-family: \\\"Poppins\\\";\\r\\n  src: url(\\\"/fonts/Poppins-Medium.ttf\\\") format(\\\"truetype\\\");\\r\\n  font-weight: 500;\\r\\n  font-style: normal;\\r\\n}\\r\\n@font-face {\\r\\n  font-family: \\\"Poppins\\\";\\r\\n  src: url(\\\"/fonts/Poppins-Regular.ttf\\\") format(\\\"truetype\\\");\\r\\n  font-weight: normal;\\r\\n  font-style: normal;\\r\\n}\\r\\n@font-face {\\r\\n  font-family: \\\"Poppins\\\";\\r\\n  src: url(\\\"/fonts/Poppins-Light.ttf\\\") format(\\\"truetype\\\");\\r\\n  font-weight: 300;\\r\\n  font-style: normal;\\r\\n}\\r\\nbody {\\r\\n  background-color: var(--light);\\r\\n  font-family: \\\"Poppins\\\", sans-serif;\\r\\n  color: var(--dark);\\r\\n}\\r\\n.container {\\r\\n  max-width: 1200px;\\r\\n  margin: 0 auto;\\r\\n  padding: 0 5px;\\r\\n  width: 90%;\\r\\n}\\r\\n.flex {\\r\\n  display: flex;\\r\\n  justify-content: between;\\r\\n  align-items: center;\\r\\n}\\r\\n.column {\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n}\\r\\n.btn {\\r\\n  border-radius: 40px;\\r\\n  padding: 15px;\\r\\n  white-space: nowrap;\\r\\n}\\r\\n/* index */\\r\\n.choose .choose__header {\\r\\n  padding: var(--section-padding) 0;\\r\\n}\\r\\n.choose .choose__header .choose__header--title {\\r\\n  font-size: 14px;\\r\\n  margin-top: 8px;\\r\\n  text-transform: capitalize;\\r\\n  font-weight: 600;\\r\\n}\\r\\n.choose .choose__header .choose__header--logo {\\r\\n  width: 60px;\\r\\n}\\r\\n.choose .choose__body {\\r\\n  margin-top: 30px;\\r\\n  text-align: center;\\r\\n}\\r\\n.choose .choose__body .choose__title {\\r\\n  font-size: 18px;\\r\\n  font-weight: 600;\\r\\n}\\r\\n.choose .choose__body .choose__description {\\r\\n  color: var(--dark-gray);\\r\\n  font-size: 12px;\\r\\n  margin-top: 15px;\\r\\n}\\r\\n.choose .choose__body .choose__options {\\r\\n  justify-content: space-between;\\r\\n  margin-top: 40px;\\r\\n}\\r\\n.choose .choose__body .choose__options .choose__item {\\r\\n  border: 1px solid var(--light-gray);\\r\\n  width: 49%;\\r\\n  padding: 30px 5px 5px 5px;\\r\\n  border-radius: 15px;\\r\\n  gap: 20px;\\r\\n}\\r\\n.choose .choose__body .choose__options .choose__item img {\\r\\n  width: 60px;\\r\\n}\\r\\n.choose .choose__body .choose__options .choose__item .choose__item--button {\\r\\n  background: var(--light-gray);\\r\\n  font-size: 12px;\\r\\n  font-weight: 500;\\r\\n  padding: 10px 15px;\\r\\n  margin-top: 10px;\\r\\n  width: 100%;\\r\\n}\\r\\n@media (min-width: 395px) {\\r\\n  .choose .choose__body .choose__options .choose__item {\\r\\n    width: 48%;\\r\\n    padding: 30px 10px 10px 10px;\\r\\n  }\\r\\n  .choose .choose__body .choose__options .choose__item .choose__item--button {\\r\\n    font-size: 14px;\\r\\n  }\\r\\n}\\r\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,qBAAqB;EACrB,eAAe;EACf,oBAAoB;EACpB,uBAAuB;AACzB;AACA;EACE,sBAAsB;EACtB,sDAAsD;EACtD,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,sBAAsB;EACtB,0DAA0D;EAC1D,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,sBAAsB;EACtB,wDAAwD;EACxD,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,sBAAsB;EACtB,yDAAyD;EACzD,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,sBAAsB;EACtB,uDAAuD;EACvD,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,8BAA8B;EAC9B,kCAAkC;EAClC,kBAAkB;AACpB;AACA;EACE,iBAAiB;EACjB,cAAc;EACd,cAAc;EACd,UAAU;AACZ;AACA;EACE,aAAa;EACb,wBAAwB;EACxB,mBAAmB;AACrB;AACA;EACE,sBAAsB;EACtB,uBAAuB;AACzB;AACA;EACE,mBAAmB;EACnB,aAAa;EACb,mBAAmB;AACrB;AACA,UAAU;AACV;EACE,iCAAiC;AACnC;AACA;EACE,eAAe;EACf,eAAe;EACf,0BAA0B;EAC1B,gBAAgB;AAClB;AACA;EACE,WAAW;AACb;AACA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,uBAAuB;EACvB,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,8BAA8B;EAC9B,gBAAgB;AAClB;AACA;EACE,mCAAmC;EACnC,UAAU;EACV,yBAAyB;EACzB,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,WAAW;AACb;AACA;EACE,6BAA6B;EAC7B,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;AACb;AACA;EACE;IACE,UAAU;IACV,4BAA4B;EAC9B;EACA;IACE,eAAe;EACjB;AACF\",\"sourcesContent\":[\"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n:root {\\r\\n  --color-1: #ffb100;\\r\\n  --color-2: #0cbc70;\\r\\n  --color-3: #d52b1e;\\r\\n  --color-4: #059858;\\r\\n  --light: #f4f4f5;\\r\\n  --light-gray: #dce5e9;\\r\\n  --dark: #323232;\\r\\n  --dark-gray: #7e8392;\\r\\n  --section-padding: 60px;\\r\\n}\\r\\n@font-face {\\r\\n  font-family: \\\"Poppins\\\";\\r\\n  src: url(\\\"/fonts/Poppins-Bold.ttf\\\") format(\\\"truetype\\\");\\r\\n  font-weight: bold;\\r\\n  font-style: normal;\\r\\n}\\r\\n@font-face {\\r\\n  font-family: \\\"Poppins\\\";\\r\\n  src: url(\\\"/fonts/Poppins-SemiBold.ttf\\\") format(\\\"truetype\\\");\\r\\n  font-weight: 600;\\r\\n  font-style: normal;\\r\\n}\\r\\n@font-face {\\r\\n  font-family: \\\"Poppins\\\";\\r\\n  src: url(\\\"/fonts/Poppins-Medium.ttf\\\") format(\\\"truetype\\\");\\r\\n  font-weight: 500;\\r\\n  font-style: normal;\\r\\n}\\r\\n@font-face {\\r\\n  font-family: \\\"Poppins\\\";\\r\\n  src: url(\\\"/fonts/Poppins-Regular.ttf\\\") format(\\\"truetype\\\");\\r\\n  font-weight: normal;\\r\\n  font-style: normal;\\r\\n}\\r\\n@font-face {\\r\\n  font-family: \\\"Poppins\\\";\\r\\n  src: url(\\\"/fonts/Poppins-Light.ttf\\\") format(\\\"truetype\\\");\\r\\n  font-weight: 300;\\r\\n  font-style: normal;\\r\\n}\\r\\nbody {\\r\\n  background-color: var(--light);\\r\\n  font-family: \\\"Poppins\\\", sans-serif;\\r\\n  color: var(--dark);\\r\\n}\\r\\n.container {\\r\\n  max-width: 1200px;\\r\\n  margin: 0 auto;\\r\\n  padding: 0 5px;\\r\\n  width: 90%;\\r\\n}\\r\\n.flex {\\r\\n  display: flex;\\r\\n  justify-content: between;\\r\\n  align-items: center;\\r\\n}\\r\\n.column {\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n}\\r\\n.btn {\\r\\n  border-radius: 40px;\\r\\n  padding: 15px;\\r\\n  white-space: nowrap;\\r\\n}\\r\\n/* index */\\r\\n.choose .choose__header {\\r\\n  padding: var(--section-padding) 0;\\r\\n}\\r\\n.choose .choose__header .choose__header--title {\\r\\n  font-size: 14px;\\r\\n  margin-top: 8px;\\r\\n  text-transform: capitalize;\\r\\n  font-weight: 600;\\r\\n}\\r\\n.choose .choose__header .choose__header--logo {\\r\\n  width: 60px;\\r\\n}\\r\\n.choose .choose__body {\\r\\n  margin-top: 30px;\\r\\n  text-align: center;\\r\\n}\\r\\n.choose .choose__body .choose__title {\\r\\n  font-size: 18px;\\r\\n  font-weight: 600;\\r\\n}\\r\\n.choose .choose__body .choose__description {\\r\\n  color: var(--dark-gray);\\r\\n  font-size: 12px;\\r\\n  margin-top: 15px;\\r\\n}\\r\\n.choose .choose__body .choose__options {\\r\\n  justify-content: space-between;\\r\\n  margin-top: 40px;\\r\\n}\\r\\n.choose .choose__body .choose__options .choose__item {\\r\\n  border: 1px solid var(--light-gray);\\r\\n  width: 49%;\\r\\n  padding: 30px 5px 5px 5px;\\r\\n  border-radius: 15px;\\r\\n  gap: 20px;\\r\\n}\\r\\n.choose .choose__body .choose__options .choose__item img {\\r\\n  width: 60px;\\r\\n}\\r\\n.choose .choose__body .choose__options .choose__item .choose__item--button {\\r\\n  background: var(--light-gray);\\r\\n  font-size: 12px;\\r\\n  font-weight: 500;\\r\\n  padding: 10px 15px;\\r\\n  margin-top: 10px;\\r\\n  width: 100%;\\r\\n}\\r\\n@media (min-width: 395px) {\\r\\n  .choose .choose__body .choose__options .choose__item {\\r\\n    width: 48%;\\r\\n    padding: 30px 10px 10px 10px;\\r\\n  }\\r\\n  .choose .choose__body .choose__options .choose__item .choose__item--button {\\r\\n    font-size: 14px;\\r\\n  }\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS5vbmVPZlsxMl0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLm9uZU9mWzEyXS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLDZDQUE2QyxnQkFBZ0IsaUJBQWlCLDZCQUE2QixLQUFLLFdBQVcseUJBQXlCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHVCQUF1Qiw0QkFBNEIsc0JBQXNCLDJCQUEyQiw4QkFBOEIsS0FBSyxnQkFBZ0IsK0JBQStCLGlFQUFpRSx3QkFBd0IseUJBQXlCLEtBQUssZ0JBQWdCLCtCQUErQixxRUFBcUUsdUJBQXVCLHlCQUF5QixLQUFLLGdCQUFnQiwrQkFBK0IsbUVBQW1FLHVCQUF1Qix5QkFBeUIsS0FBSyxnQkFBZ0IsK0JBQStCLG9FQUFvRSwwQkFBMEIseUJBQXlCLEtBQUssZ0JBQWdCLCtCQUErQixrRUFBa0UsdUJBQXVCLHlCQUF5QixLQUFLLFVBQVUscUNBQXFDLDJDQUEyQyx5QkFBeUIsS0FBSyxnQkFBZ0Isd0JBQXdCLHFCQUFxQixxQkFBcUIsaUJBQWlCLEtBQUssV0FBVyxvQkFBb0IsK0JBQStCLDBCQUEwQixLQUFLLGFBQWEsNkJBQTZCLDhCQUE4QixLQUFLLFVBQVUsMEJBQTBCLG9CQUFvQiwwQkFBMEIsS0FBSyw0Q0FBNEMsd0NBQXdDLEtBQUssb0RBQW9ELHNCQUFzQixzQkFBc0IsaUNBQWlDLHVCQUF1QixLQUFLLG1EQUFtRCxrQkFBa0IsS0FBSywyQkFBMkIsdUJBQXVCLHlCQUF5QixLQUFLLDBDQUEwQyxz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XFRyYWJhbGhvXFxncmFiLWVhdHNcXHN0eWxlc1xcZ2xvYmFscy5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbjpyb290IHtcXHJcXG4gIC0tY29sb3ItMTogI2ZmYjEwMDtcXHJcXG4gIC0tY29sb3ItMjogIzBjYmM3MDtcXHJcXG4gIC0tY29sb3ItMzogI2Q1MmIxZTtcXHJcXG4gIC0tY29sb3ItNDogIzA1OTg1ODtcXHJcXG4gIC0tbGlnaHQ6ICNmNGY0ZjU7XFxyXFxuICAtLWxpZ2h0LWdyYXk6ICNkY2U1ZTk7XFxyXFxuICAtLWRhcms6ICMzMjMyMzI7XFxyXFxuICAtLWRhcmstZ3JheTogIzdlODM5MjtcXHJcXG4gIC0tc2VjdGlvbi1wYWRkaW5nOiA2MHB4O1xcclxcbn1cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCI7XFxyXFxuICBzcmM6IHVybChcXFwiL2ZvbnRzL1BvcHBpbnMtQm9sZC50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiO1xcclxcbiAgc3JjOiB1cmwoXFxcIi9mb250cy9Qb3BwaW5zLVNlbWlCb2xkLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIjtcXHJcXG4gIHNyYzogdXJsKFxcXCIvZm9udHMvUG9wcGlucy1NZWRpdW0udHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiO1xcclxcbiAgc3JjOiB1cmwoXFxcIi9mb250cy9Qb3BwaW5zLVJlZ3VsYXIudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiO1xcclxcbiAgc3JjOiB1cmwoXFxcIi9mb250cy9Qb3BwaW5zLUxpZ2h0LnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1kYXJrKTtcXHJcXG59XFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgcGFkZGluZzogMCA1cHg7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbn1cXHJcXG4uZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBiZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNvbHVtbiB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5idG4ge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbn1cXHJcXG4vKiBpbmRleCAqL1xcclxcbi5jaG9vc2UgLmNob29zZV9faGVhZGVyIHtcXHJcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZykgMDtcXHJcXG59XFxyXFxuLmNob29zZSAuY2hvb3NlX19oZWFkZXIgLmNob29zZV9faGVhZGVyLS10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBtYXJnaW4tdG9wOiA4cHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcbi5jaG9vc2UgLmNob29zZV9faGVhZGVyIC5jaG9vc2VfX2hlYWRlci0tbG9nbyB7XFxyXFxuICB3aWR0aDogNjBweDtcXHJcXG59XFxyXFxuLmNob29zZSAuY2hvb3NlX19ib2R5IHtcXHJcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5jaG9vc2UgLmNob29zZV9fYm9keSAuY2hvb3NlX190aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG4uY2hvb3NlIC5jaG9vc2VfX2JvZHkgLmNob29zZV9fZGVzY3JpcHRpb24ge1xcclxcbiAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbn1cXHJcXG4uY2hvb3NlIC5jaG9vc2VfX2JvZHkgLmNob29zZV9fb3B0aW9ucyB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbn1cXHJcXG4uY2hvb3NlIC5jaG9vc2VfX2JvZHkgLmNob29zZV9fb3B0aW9ucyAuY2hvb3NlX19pdGVtIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWdyYXkpO1xcclxcbiAgd2lkdGg6IDQ5JTtcXHJcXG4gIHBhZGRpbmc6IDMwcHggNXB4IDVweCA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG4uY2hvb3NlIC5jaG9vc2VfX2JvZHkgLmNob29zZV9fb3B0aW9ucyAuY2hvb3NlX19pdGVtIGltZyB7XFxyXFxuICB3aWR0aDogNjBweDtcXHJcXG59XFxyXFxuLmNob29zZSAuY2hvb3NlX19ib2R5IC5jaG9vc2VfX29wdGlvbnMgLmNob29zZV9faXRlbSAuY2hvb3NlX19pdGVtLS1idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtZ3JheSk7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMzk1cHgpIHtcXHJcXG4gIC5jaG9vc2UgLmNob29zZV9fYm9keSAuY2hvb3NlX19vcHRpb25zIC5jaG9vc2VfX2l0ZW0ge1xcclxcbiAgICB3aWR0aDogNDglO1xcclxcbiAgICBwYWRkaW5nOiAzMHB4IDEwcHggMTBweCAxMHB4O1xcclxcbiAgfVxcclxcbiAgLmNob29zZSAuY2hvb3NlX19ib2R5IC5jaG9vc2VfX29wdGlvbnMgLmNob29zZV9faXRlbSAuY2hvb3NlX19pdGVtLS1idXR0b24ge1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvZ2xvYmFscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixzREFBc0Q7RUFDdEQsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLDBEQUEwRDtFQUMxRCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsd0RBQXdEO0VBQ3hELGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qix5REFBeUQ7RUFDekQsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVEQUF1RDtFQUN2RCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsa0NBQWtDO0VBQ2xDLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxjQUFjO0VBQ2QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQSxVQUFVO0FBQ1Y7RUFDRSxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUNBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuOnJvb3Qge1xcclxcbiAgLS1jb2xvci0xOiAjZmZiMTAwO1xcclxcbiAgLS1jb2xvci0yOiAjMGNiYzcwO1xcclxcbiAgLS1jb2xvci0zOiAjZDUyYjFlO1xcclxcbiAgLS1jb2xvci00OiAjMDU5ODU4O1xcclxcbiAgLS1saWdodDogI2Y0ZjRmNTtcXHJcXG4gIC0tbGlnaHQtZ3JheTogI2RjZTVlOTtcXHJcXG4gIC0tZGFyazogIzMyMzIzMjtcXHJcXG4gIC0tZGFyay1ncmF5OiAjN2U4MzkyO1xcclxcbiAgLS1zZWN0aW9uLXBhZGRpbmc6IDYwcHg7XFxyXFxufVxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIjtcXHJcXG4gIHNyYzogdXJsKFxcXCIvZm9udHMvUG9wcGlucy1Cb2xkLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCI7XFxyXFxuICBzcmM6IHVybChcXFwiL2ZvbnRzL1BvcHBpbnMtU2VtaUJvbGQudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiO1xcclxcbiAgc3JjOiB1cmwoXFxcIi9mb250cy9Qb3BwaW5zLU1lZGl1bS50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCI7XFxyXFxuICBzcmM6IHVybChcXFwiL2ZvbnRzL1BvcHBpbnMtUmVndWxhci50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCI7XFxyXFxuICBzcmM6IHVybChcXFwiL2ZvbnRzL1BvcHBpbnMtTGlnaHQudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgY29sb3I6IHZhcigtLWRhcmspO1xcclxcbn1cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBwYWRkaW5nOiAwIDVweDtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxufVxcclxcbi5mbGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uY29sdW1uIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmJ0biB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxufVxcclxcbi8qIGluZGV4ICovXFxyXFxuLmNob29zZSAuY2hvb3NlX19oZWFkZXIge1xcclxcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKSAwO1xcclxcbn1cXHJcXG4uY2hvb3NlIC5jaG9vc2VfX2hlYWRlciAuY2hvb3NlX19oZWFkZXItLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIG1hcmdpbi10b3A6IDhweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuLmNob29zZSAuY2hvb3NlX19oZWFkZXIgLmNob29zZV9faGVhZGVyLS1sb2dvIHtcXHJcXG4gIHdpZHRoOiA2MHB4O1xcclxcbn1cXHJcXG4uY2hvb3NlIC5jaG9vc2VfX2JvZHkge1xcclxcbiAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNob29zZSAuY2hvb3NlX19ib2R5IC5jaG9vc2VfX3RpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcbi5jaG9vc2UgLmNob29zZV9fYm9keSAuY2hvb3NlX19kZXNjcmlwdGlvbiB7XFxyXFxuICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxufVxcclxcbi5jaG9vc2UgLmNob29zZV9fYm9keSAuY2hvb3NlX19vcHRpb25zIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxufVxcclxcbi5jaG9vc2UgLmNob29zZV9fYm9keSAuY2hvb3NlX19vcHRpb25zIC5jaG9vc2VfX2l0ZW0ge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQtZ3JheSk7XFxyXFxuICB3aWR0aDogNDklO1xcclxcbiAgcGFkZGluZzogMzBweCA1cHggNXB4IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcbi5jaG9vc2UgLmNob29zZV9fYm9keSAuY2hvb3NlX19vcHRpb25zIC5jaG9vc2VfX2l0ZW0gaW1nIHtcXHJcXG4gIHdpZHRoOiA2MHB4O1xcclxcbn1cXHJcXG4uY2hvb3NlIC5jaG9vc2VfX2JvZHkgLmNob29zZV9fb3B0aW9ucyAuY2hvb3NlX19pdGVtIC5jaG9vc2VfX2l0ZW0tLWJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1ncmF5KTtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAzOTVweCkge1xcclxcbiAgLmNob29zZSAuY2hvb3NlX19ib2R5IC5jaG9vc2VfX29wdGlvbnMgLmNob29zZV9faXRlbSB7XFxyXFxuICAgIHdpZHRoOiA0OCU7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHggMTBweCAxMHB4IDEwcHg7XFxyXFxuICB9XFxyXFxuICAuY2hvb3NlIC5jaG9vc2VfX2JvZHkgLmNob29zZV9fb3B0aW9ucyAuY2hvb3NlX19pdGVtIC5jaG9vc2VfX2l0ZW0tLWJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[12].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[12].use[2]!./styles/globals.css\n"));

/***/ })

});