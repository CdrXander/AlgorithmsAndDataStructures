/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sorter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sorter.js */ "./src/sorter.js");



function testConn() {
    let elem = document.getElementById('test-output')
    elem.innerHTML = 'LOOKS LIKE IT IS WORKING';
}

testConn();

_sorter_js__WEBPACK_IMPORTED_MODULE_0__.default.insertionSort([25, 62, 15, 58, 64, 12, 14, 99, 1, 42]);

/***/ }),

/***/ "./src/sorter.js":
/*!***********************!*\
  !*** ./src/sorter.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sorter)
/* harmony export */ });

class sorter {

    constructor() {

    }

    static mergeSort(toSort) {
    
        if(toSort.length <= 1) {
            return toSort;
        }
    
        let center = Math.floor(toSort.length / 2)
    
        let leftArr = this.mergeSort(toSort.slice(0, center));
        let rightArr = this.mergeSort(toSort.slice(center))
        
        return this.merge(leftArr, rightArr);
    }
    
    static merge(leftArr, rightArr) {
        let i = 0;
        let j = 0;
        let result = [];
    
        while(i < leftArr.length && j < rightArr.length ) {
            if(leftArr[i] <= rightArr[j]) {
                result.push(leftArr[i])
                i++
            }
            else {
                result.push(rightArr[j])
                j++
            }
        }
    
        while(i < leftArr.length) {
            result.push(leftArr[i])
            i++
        }
    
        while(j < rightArr.length) {
            result.push(rightArr[j])
            j++
        }
        return result
    }

    static insertionSort(toSort) {
        
        
        //loop
        for(let i = 0; i < toSort.length; i++) {
            //get item at sortedLimit
            let item = toSort[i];
            //Loop
            for(let j = 0 ; j < i; j++) {
                if(item <= toSort[j]) {
                   
                    for(let k = i-1; k >= j; k--) {
                        toSort[k+1] = toSort[k]
                    }
                    toSort[j] = item;
                }
            }
        }

        return toSort;
    }

    static quickSort(toSort) {
        return null
    }

    static selectionSort(toSort) {
        for (let i = 0; i < toSort.length; i++) {
            let min_index = i
            for (let j = i; j < toSort.length; j++) {
                if (toSort[j] < toSort[min_index]) {
                    min_index = j
                }
            }
            if (min_index != i) {
                var temp = toSort[i];
                toSort[i] = toSort[min_index];
                toSort[min_index] = temp;
            }
        }
        return toSort
    }

    static bubbleSort(toSort) {
        let isSorted = false;
        while(!isSorted) {
            isSorted = true;
            for(let i = 0; i < toSort.length-1; i++){
                if(toSort[i] > toSort[i+1]) {
                    this.swap(toSort, i, i+1);
                    isSorted = false;
                }
            }
        }

        return toSort
    }


    static swap(array, idx1, idx2) {
        var temp = array[idx1];
        array[idx1] = array[idx2];
        array[idx2] = temp;
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbGdvcml0aG1zYW5kZGF0YXN0cnVjdHVyZXMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYWxnb3JpdGhtc2FuZGRhdGFzdHJ1Y3R1cmVzLy4vc3JjL3NvcnRlci5qcyIsIndlYnBhY2s6Ly9hbGdvcml0aG1zYW5kZGF0YXN0cnVjdHVyZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYWxnb3JpdGhtc2FuZGRhdGFzdHJ1Y3R1cmVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hbGdvcml0aG1zYW5kZGF0YXN0cnVjdHVyZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hbGdvcml0aG1zYW5kZGF0YXN0cnVjdHVyZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hbGdvcml0aG1zYW5kZGF0YXN0cnVjdHVyZXMvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDZEQUFvQiwwQzs7Ozs7Ozs7Ozs7Ozs7O0FDVEw7O0FBRWY7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0Esc0JBQXNCLG1CQUFtQjtBQUN6QztBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQzs7QUFFQSxvQ0FBb0MsUUFBUTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0EsMkJBQTJCLG1CQUFtQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIscUJBQXFCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNqSEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHNvcnRlciBmcm9tICcuL3NvcnRlci5qcyc7XHJcblxyXG5mdW5jdGlvbiB0ZXN0Q29ubigpIHtcclxuICAgIGxldCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlc3Qtb3V0cHV0JylcclxuICAgIGVsZW0uaW5uZXJIVE1MID0gJ0xPT0tTIExJS0UgSVQgSVMgV09SS0lORyc7XHJcbn1cclxuXHJcbnRlc3RDb25uKCk7XHJcblxyXG5zb3J0ZXIuaW5zZXJ0aW9uU29ydChbMjUsIDYyLCAxNSwgNTgsIDY0LCAxMiwgMTQsIDk5LCAxLCA0Ml0pOyIsIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzb3J0ZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbWVyZ2VTb3J0KHRvU29ydCkge1xyXG4gICAgXHJcbiAgICAgICAgaWYodG9Tb3J0Lmxlbmd0aCA8PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0b1NvcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgbGV0IGNlbnRlciA9IE1hdGguZmxvb3IodG9Tb3J0Lmxlbmd0aCAvIDIpXHJcbiAgICBcclxuICAgICAgICBsZXQgbGVmdEFyciA9IHRoaXMubWVyZ2VTb3J0KHRvU29ydC5zbGljZSgwLCBjZW50ZXIpKTtcclxuICAgICAgICBsZXQgcmlnaHRBcnIgPSB0aGlzLm1lcmdlU29ydCh0b1NvcnQuc2xpY2UoY2VudGVyKSlcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5tZXJnZShsZWZ0QXJyLCByaWdodEFycik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBtZXJnZShsZWZ0QXJyLCByaWdodEFycikge1xyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICBsZXQgaiA9IDA7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgXHJcbiAgICAgICAgd2hpbGUoaSA8IGxlZnRBcnIubGVuZ3RoICYmIGogPCByaWdodEFyci5sZW5ndGggKSB7XHJcbiAgICAgICAgICAgIGlmKGxlZnRBcnJbaV0gPD0gcmlnaHRBcnJbal0pIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGxlZnRBcnJbaV0pXHJcbiAgICAgICAgICAgICAgICBpKytcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHJpZ2h0QXJyW2pdKVxyXG4gICAgICAgICAgICAgICAgaisrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICB3aGlsZShpIDwgbGVmdEFyci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2gobGVmdEFycltpXSlcclxuICAgICAgICAgICAgaSsrXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgd2hpbGUoaiA8IHJpZ2h0QXJyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChyaWdodEFycltqXSlcclxuICAgICAgICAgICAgaisrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaW5zZXJ0aW9uU29ydCh0b1NvcnQpIHtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAvL2xvb3BcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdG9Tb3J0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vZ2V0IGl0ZW0gYXQgc29ydGVkTGltaXRcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0b1NvcnRbaV07XHJcbiAgICAgICAgICAgIC8vTG9vcFxyXG4gICAgICAgICAgICBmb3IobGV0IGogPSAwIDsgaiA8IGk7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYoaXRlbSA8PSB0b1NvcnRbal0pIHtcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgayA9IGktMTsgayA+PSBqOyBrLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Tb3J0W2srMV0gPSB0b1NvcnRba11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdG9Tb3J0W2pdID0gaXRlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRvU29ydDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcXVpY2tTb3J0KHRvU29ydCkge1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNlbGVjdGlvblNvcnQodG9Tb3J0KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b1NvcnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG1pbl9pbmRleCA9IGlcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IGk7IGogPCB0b1NvcnQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0b1NvcnRbal0gPCB0b1NvcnRbbWluX2luZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbl9pbmRleCA9IGpcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobWluX2luZGV4ICE9IGkpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ZW1wID0gdG9Tb3J0W2ldO1xyXG4gICAgICAgICAgICAgICAgdG9Tb3J0W2ldID0gdG9Tb3J0W21pbl9pbmRleF07XHJcbiAgICAgICAgICAgICAgICB0b1NvcnRbbWluX2luZGV4XSA9IHRlbXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRvU29ydFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBidWJibGVTb3J0KHRvU29ydCkge1xyXG4gICAgICAgIGxldCBpc1NvcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHdoaWxlKCFpc1NvcnRlZCkge1xyXG4gICAgICAgICAgICBpc1NvcnRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0b1NvcnQubGVuZ3RoLTE7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBpZih0b1NvcnRbaV0gPiB0b1NvcnRbaSsxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3dhcCh0b1NvcnQsIGksIGkrMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNTb3J0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRvU29ydFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgc3dhcChhcnJheSwgaWR4MSwgaWR4Mikge1xyXG4gICAgICAgIHZhciB0ZW1wID0gYXJyYXlbaWR4MV07XHJcbiAgICAgICAgYXJyYXlbaWR4MV0gPSBhcnJheVtpZHgyXTtcclxuICAgICAgICBhcnJheVtpZHgyXSA9IHRlbXA7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=