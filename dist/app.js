System.register(['aurelia-framework', 'aurelia-router', './login-api', 'bootstrap', 'bootstrap/css/bootstrap.css!'], function (_export) {
  var inject, Router, Redirect, LoginApi, _createClass, _classCallCheck, App, AuthorizeStep;

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
      Redirect = _aureliaRouter.Redirect;
    }, function (_loginApi) {
      LoginApi = _loginApi.LoginApi;
    }, function (_bootstrap) {}, function (_bootstrapCssBootstrapCss) {}],
    execute: function () {
      'use strict';

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      App = (function () {
        function App(router, api) {
          _classCallCheck(this, _App);

          this.router = router;
          this.api = api;

          this.router.configure(function (config) {
            config.title = 'DemoApp';

            config.addPipelineStep('authorize', AuthorizeStep);
            config.map([{ route: '', moduleId: './no-selection', title: 'Select' }, { route: 'contacts/:id', moduleId: './contact-detail' }, { route: 'login', moduleId: './login', nav: true }, { route: 'ci-builds', moduleId: './ci-builds', nav: true, title: 'CI-Builds', auth: true }, { route: 'ui-builds', moduleId: './ui-builds', nav: true, title: 'UI-Builds', auth: true }, { route: 'screenshots/:id', moduleId: './screenshots', title: 'Regression screenshots', auth: true }]);
          });
        }

        var _App = App;
        App = inject(LoginApi)(App) || App;
        App = inject(Router)(App) || App;
        return App;
      })();

      _export('App', App);

      AuthorizeStep = (function () {
        function AuthorizeStep() {
          _classCallCheck(this, AuthorizeStep);
        }

        _createClass(AuthorizeStep, [{
          key: 'run',
          value: function run(routingContext, next) {
            if (routingContext.nextInstructions.some(function (i) {
              return i.config.auth;
            })) {
              var isLoggedIn = localStorage.getItem('access_token');
              if (!isLoggedIn) {
                return next.cancel(new Redirect('login'));
              }
            }

            return next();
          }
        }]);

        return AuthorizeStep;
      })();
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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