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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n:root {\\r\\n  --color-1: #ffb100;\\r\\n  --color-2: #0cbc70;\\r\\n  --color-3: #d52b1e;\\r\\n  --color-4: #059858;\\r\\n  --light: #f4f4f5;\\r\\n  --light-gray: #ebf2f5;\\r\\n  --dark: #323232;\\r\\n  --dark-gray: #7e8392;\\r\\n  --section-padding: 60px;\\r\\n}\\r\\nbody {\\r\\n  background-color: var(--light);\\r\\n  color: var(--dark);\\r\\n}\\r\\n.container {\\r\\n  max-width: 1200px;\\r\\n  margin: 0 auto;\\r\\n  padding: 0 5px;\\r\\n  width: 90%;\\r\\n}\\r\\n.flex {\\r\\n  display: flex;\\r\\n  justify-content: between;\\r\\n  align-items: center;\\r\\n}\\r\\n.column {\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n}\\r\\n/* index */\\r\\n.choose .choose__header {\\r\\n  padding: var(--section-padding) 0;\\r\\n}\\r\\n.choose .choose__header .choose__header--title {\\r\\n  font-size: 18px;\\r\\n  margin-top: 20px;\\r\\n  text-transform: capitalize;\\r\\n}\\r\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,qBAAqB;EACrB,eAAe;EACf,oBAAoB;EACpB,uBAAuB;AACzB;AACA;EACE,8BAA8B;EAC9B,kBAAkB;AACpB;AACA;EACE,iBAAiB;EACjB,cAAc;EACd,cAAc;EACd,UAAU;AACZ;AACA;EACE,aAAa;EACb,wBAAwB;EACxB,mBAAmB;AACrB;AACA;EACE,sBAAsB;EACtB,uBAAuB;AACzB;AACA,UAAU;AACV;EACE,iCAAiC;AACnC;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,0BAA0B;AAC5B\",\"sourcesContent\":[\"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n:root {\\r\\n  --color-1: #ffb100;\\r\\n  --color-2: #0cbc70;\\r\\n  --color-3: #d52b1e;\\r\\n  --color-4: #059858;\\r\\n  --light: #f4f4f5;\\r\\n  --light-gray: #ebf2f5;\\r\\n  --dark: #323232;\\r\\n  --dark-gray: #7e8392;\\r\\n  --section-padding: 60px;\\r\\n}\\r\\nbody {\\r\\n  background-color: var(--light);\\r\\n  color: var(--dark);\\r\\n}\\r\\n.container {\\r\\n  max-width: 1200px;\\r\\n  margin: 0 auto;\\r\\n  padding: 0 5px;\\r\\n  width: 90%;\\r\\n}\\r\\n.flex {\\r\\n  display: flex;\\r\\n  justify-content: between;\\r\\n  align-items: center;\\r\\n}\\r\\n.column {\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n}\\r\\n/* index */\\r\\n.choose .choose__header {\\r\\n  padding: var(--section-padding) 0;\\r\\n}\\r\\n.choose .choose__header .choose__header--title {\\r\\n  font-size: 18px;\\r\\n  margin-top: 20px;\\r\\n  text-transform: capitalize;\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS5vbmVPZlsxMl0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLm9uZU9mWzEyXS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLDZDQUE2QyxnQkFBZ0IsaUJBQWlCLDZCQUE2QixLQUFLLFdBQVcseUJBQXlCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHVCQUF1Qiw0QkFBNEIsc0JBQXNCLDJCQUEyQiw4QkFBOEIsS0FBSyxVQUFVLHFDQUFxQyx5QkFBeUIsS0FBSyxnQkFBZ0Isd0JBQXdCLHFCQUFxQixxQkFBcUIsaUJBQWlCLEtBQUssV0FBVyxvQkFBb0IsK0JBQStCLDBCQUEwQixLQUFLLGFBQWEsNkJBQTZCLDhCQUE4QixLQUFLLDRDQUE0Qyx3Q0FBd0MsS0FBSyxvREFBb0Qsc0JBQXNCLHVCQUF1QixpQ0FBaUMsS0FBSyxXQUFXLG1GQUFtRixVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLFVBQVUsS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSw2QkFBNkIsZ0JBQWdCLGlCQUFpQiw2QkFBNkIsS0FBSyxXQUFXLHlCQUF5Qix5QkFBeUIseUJBQXlCLHlCQUF5Qix1QkFBdUIsNEJBQTRCLHNCQUFzQiwyQkFBMkIsOEJBQThCLEtBQUssVUFBVSxxQ0FBcUMseUJBQXlCLEtBQUssZ0JBQWdCLHdCQUF3QixxQkFBcUIscUJBQXFCLGlCQUFpQixLQUFLLFdBQVcsb0JBQW9CLCtCQUErQiwwQkFBMEIsS0FBSyxhQUFhLDZCQUE2Qiw4QkFBOEIsS0FBSyw0Q0FBNEMsd0NBQXdDLEtBQUssb0RBQW9ELHNCQUFzQix1QkFBdUIsaUNBQWlDLEtBQUssdUJBQXVCO0FBQ3IwRTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXFRyYWJhbGhvXFxncmFiLWVhdHNcXHN0eWxlc1xcZ2xvYmFscy5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbjpyb290IHtcXHJcXG4gIC0tY29sb3ItMTogI2ZmYjEwMDtcXHJcXG4gIC0tY29sb3ItMjogIzBjYmM3MDtcXHJcXG4gIC0tY29sb3ItMzogI2Q1MmIxZTtcXHJcXG4gIC0tY29sb3ItNDogIzA1OTg1ODtcXHJcXG4gIC0tbGlnaHQ6ICNmNGY0ZjU7XFxyXFxuICAtLWxpZ2h0LWdyYXk6ICNlYmYyZjU7XFxyXFxuICAtLWRhcms6ICMzMjMyMzI7XFxyXFxuICAtLWRhcmstZ3JheTogIzdlODM5MjtcXHJcXG4gIC0tc2VjdGlvbi1wYWRkaW5nOiA2MHB4O1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1kYXJrKTtcXHJcXG59XFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgcGFkZGluZzogMCA1cHg7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbn1cXHJcXG4uZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBiZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNvbHVtbiB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi8qIGluZGV4ICovXFxyXFxuLmNob29zZSAuY2hvb3NlX19oZWFkZXIge1xcclxcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKSAwO1xcclxcbn1cXHJcXG4uY2hvb3NlIC5jaG9vc2VfX2hlYWRlciAuY2hvb3NlX19oZWFkZXItLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9nbG9iYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxjQUFjO0VBQ2QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6QjtBQUNBLFVBQVU7QUFDVjtFQUNFLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiwwQkFBMEI7QUFDNUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuOnJvb3Qge1xcclxcbiAgLS1jb2xvci0xOiAjZmZiMTAwO1xcclxcbiAgLS1jb2xvci0yOiAjMGNiYzcwO1xcclxcbiAgLS1jb2xvci0zOiAjZDUyYjFlO1xcclxcbiAgLS1jb2xvci00OiAjMDU5ODU4O1xcclxcbiAgLS1saWdodDogI2Y0ZjRmNTtcXHJcXG4gIC0tbGlnaHQtZ3JheTogI2ViZjJmNTtcXHJcXG4gIC0tZGFyazogIzMyMzIzMjtcXHJcXG4gIC0tZGFyay1ncmF5OiAjN2U4MzkyO1xcclxcbiAgLS1zZWN0aW9uLXBhZGRpbmc6IDYwcHg7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xcclxcbiAgY29sb3I6IHZhcigtLWRhcmspO1xcclxcbn1cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBwYWRkaW5nOiAwIDVweDtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxufVxcclxcbi5mbGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uY29sdW1uIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLyogaW5kZXggKi9cXHJcXG4uY2hvb3NlIC5jaG9vc2VfX2hlYWRlciB7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpIDA7XFxyXFxufVxcclxcbi5jaG9vc2UgLmNob29zZV9faGVhZGVyIC5jaG9vc2VfX2hlYWRlci0tdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[12].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[12].use[2]!./styles/globals.css\n"));

/***/ })

});