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
            config.map([{ route: '', moduleId: './no-selection', title: 'Select' }, { route: 'contacts/:id', moduleId: './contact-detail' }, { route: 'login', moduleId: './login', nav: true }, { route: 'ci-builds', moduleId: './ci-builds', nav: true, title: 'CI-Builds', auth: true }]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3lFQVFhLEdBQUcsRUFtQlYsYUFBYTs7OztpQ0EzQlgsTUFBTTs7OEJBQ04sTUFBTTtnQ0FBRSxRQUFROzsyQkFDaEIsUUFBUTs7Ozs7Ozs7O0FBTUgsU0FBRztBQUNILGlCQURBLEdBQUcsQ0FDRixNQUFNLEVBQUUsR0FBRyxFQUFFOzs7QUFDdkIsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsY0FBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7O0FBRWYsY0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLEVBQUk7QUFDOUIsa0JBQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDOztBQUV6QixrQkFBTSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDbkQsa0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDVCxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQWUsUUFBUSxFQUFFLGdCQUFnQixFQUFJLEtBQUssRUFBRSxRQUFRLEVBQUMsRUFDeEUsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFHLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxFQUN4RCxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQVUsUUFBUSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLEVBQ3pELEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBTSxRQUFRLEVBQUUsYUFBYSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDLENBQzlGLENBQUMsQ0FBQztXQUNKLENBQUMsQ0FBQztTQUNKOzttQkFoQlUsR0FBRztBQUFILFdBQUcsR0FEZixNQUFNLENBQUMsUUFBUSxDQUFDLENBQ0osR0FBRyxLQUFILEdBQUc7QUFBSCxXQUFHLEdBRmYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUVGLEdBQUcsS0FBSCxHQUFHO2VBQUgsR0FBRzs7O3FCQUFILEdBQUc7O0FBbUJWLG1CQUFhO2lCQUFiLGFBQWE7Z0NBQWIsYUFBYTs7O3FCQUFiLGFBQWE7O2lCQUNkLGFBQUMsY0FBYyxFQUFFLElBQUksRUFBRTtBQUl4QixnQkFBSSxjQUFjLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztxQkFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUk7YUFBQSxDQUFDLEVBQUU7QUFDNUQsa0JBQUksVUFBVSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDdEQsa0JBQUksQ0FBQyxVQUFVLEVBQUU7QUFDZix1QkFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7ZUFDM0M7YUFDRjs7QUFFRCxtQkFBTyxJQUFJLEVBQUUsQ0FBQztXQUNmOzs7ZUFiRyxhQUFhIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9