/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/runningPython.js":
/*!******************************!*\
  !*** ./src/runningPython.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "runit": () => (/* binding */ runit)
/* harmony export */ });
function outf(text) {
  var mypre = document.getElementById("output");
  mypre.innerHTML = mypre.innerHTML + text;
}

function builtinRead(x) {
  if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined) throw "File not found: '" + x + "'";
  return Sk.builtinFiles["files"][x];
} // Here's everything you need to run a python program in skulpt
// grab the code from your textarea
// get a reference to your pre element for output
// configure the output function
// call Sk.importMainWithBody()


function runit(pythonScript) {
  var prog = pythonScript;
  var mypre = document.getElementById('output');
  mypre.innerHTML = '';
  Sk.pre = "output";
  Sk.configure({
    output: outf,
    read: builtinRead
  });
  (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'mycanvas';
  var myPromise = Sk.misceval.asyncToPromise(function () {
    return Sk.importMainWithBody("<stdin>", false, prog, true);
  });
  myPromise.then(function (mod) {
    console.log('success');
  }, function (err) {
    console.log(err.toString());
  });
}

;


/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _runningPython__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./runningPython */ "./src/runningPython.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var fs = __webpack_require__(/*! fs */ "fs");



var Loader = /*#__PURE__*/function () {
  function Loader(url, form, dadosPessoa) {
    _classCallCheck(this, Loader);

    this.form = form;
    this.dadosPessoa = dadosPessoa;
    this.request(url);
  }

  _createClass(Loader, [{
    key: "request",
    value: function request(url) {
      var _this = this;

      axios.get(url).then(function (response) {
        _this.form.innerHTML = response.data;

        _this.carregaDadosPessoa();
      })["catch"](function (error) {
        console.error(error);
      });
    }
  }, {
    key: "carregaDadosPessoa",
    value: function carregaDadosPessoa() {
      this.form.querySelector('#nome').value = this.dadosPessoa.nome;
      this.form.querySelector('#sobrenome').value = this.dadosPessoa.sobrenome;
      this.form.querySelector('#email').value = this.dadosPessoa.email;
    }
  }]);

  return Loader;
}();

var Action = /*#__PURE__*/function () {
  function Action(button) {
    _classCallCheck(this, Action);

    this.button = button;
    this.form = document.querySelector('.form');
    this.holdEvent();
  }

  _createClass(Action, [{
    key: "holdEvent",
    value: function holdEvent() {
      var _this2 = this;

      if (this.button.value === 'Continuar') {
        this.form.addEventListener('submit', function (e) {
          console.log('algumacoisa');

          _this2.handleSubmit(e);
        });
        return;
      }

      ;
      this.form.addEventListener('submit', function (e) {
        _this2.enviaFormulario(e);
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var _ref = [this.form.querySelector('#nome').value, this.form.querySelector('#sobrenome').value, this.form.querySelector('#email').value],
          nome = _ref[0],
          sobrenome = _ref[1],
          email = _ref[2];
      var dadosPessoa = new Pessoa(nome, sobrenome, email);
      var loader = new Loader('contato2.html', this.form, dadosPessoa);
    }
  }, {
    key: "enviaFormulario",
    value: function enviaFormulario(e) {
      e.preventDefault();

      try {
        var assunto = this.form.querySelector('#assunto').value;
        var mensagem = this.form.querySelector('#mensagem').value; //runit();

        /*alert(`Formulario enviado: \nAssunto: ${assunto}` +
              `\nMensagem: ${mensagem}`)
        this.form.submit();*/
      } catch (error) {
        console.error(error);
      }

      ;
    }
  }]);

  return Action;
}();

var Pessoa = function Pessoa(nome, sobrenome, email) {
  _classCallCheck(this, Pessoa);

  this.nome = nome;
  this.sobrenome = sobrenome;
  this.email = email;
};

document.addEventListener('click', function (e) {
  if (e.target.value === 'Continuar') {
    var actContinuar = new Action(e.target);
    return;
  }

  ;

  if (e.target.value === 'Enviar formulário') {
    var actEnviaForm = new Action(e.target);
    return;
  }

  ;
});
console.log(fs.readFileSync('./pythonFile.txt', 'utf-8'));
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map