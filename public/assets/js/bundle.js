/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
    this.execute();
  }

  _createClass(Action, [{
    key: "execute",
    value: function execute() {
      var _this2 = this;

      if (this.button.value === 'Continuar') {
        this.form.addEventListener('submit', function (e) {
          console.log('algumacoisa');

          _this2.loadNewContatos(e);
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
    }
  }, {
    key: "loadNewContatos",
    value: function loadNewContatos(e) {
      this.handleSubmit(e);
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
      this.handleSubmit(e);

      try {
        var assunto = this.form.querySelector('#assunto').value;
        var mensagem = this.form.querySelector('#mensagem').value;
        alert("Formulario enviado: \nAssunto: ".concat(assunto) + "\nMensagem: ".concat(mensagem));
        this.form.submit();
      } catch (error) {
        console.error(error);
      }

      ;
    }
  }]);

  return Action;
}();

;

var Pessoa = function Pessoa(nome, sobrenome, email) {
  _classCallCheck(this, Pessoa);

  this.nome = nome;
  this.sobrenome = sobrenome;
  this.email = email;
};

;
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
/******/ })()
;
//# sourceMappingURL=bundle.js.map