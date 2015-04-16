System.register(['aurelia-framework', 'aurelia-router', './login-api'], function (_export) {
  var inject, Router, LoginApi, _classCallCheck, App;

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_loginApi) {
      LoginApi = _loginApi.LoginApi;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      App = (function () {
        function App(router, api) {
          _classCallCheck(this, _App);

          this.router = router;

          this.router.configure(function (config) {
            config.title = 'DemoApp';
            config.map([{ route: '', moduleId: './no-selection', title: 'Select' }, { route: 'contacts/:id', moduleId: './contact-detail' }, { route: 'login', moduleId: './login', nav: true }]);
          });
        }

        var _App = App;
        App = inject(LoginApi)(App) || App;
        App = inject(Router)(App) || App;
        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO2lEQU1hLEdBQUc7Ozs7aUNBTlIsTUFBTTs7OEJBQ04sTUFBTTs7MkJBQ04sUUFBUTs7Ozs7OztBQUlILFNBQUc7QUFDSCxpQkFEQSxHQUFHLENBQ0YsTUFBTSxFQUFFLEdBQUcsRUFBRTs7O0FBQ3ZCLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztBQUdyQixjQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sRUFBSTtBQUM5QixrQkFBTSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7QUFDekIsa0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDVCxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQWUsUUFBUSxFQUFFLGdCQUFnQixFQUFJLEtBQUssRUFBRSxRQUFRLEVBQUMsRUFDeEUsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFHLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxFQUN4RCxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQVUsUUFBUSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQzNELENBQUMsQ0FBQztXQUNKLENBQUMsQ0FBQztTQUNKOzttQkFiVSxHQUFHO0FBQUgsV0FBRyxHQURmLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FDSixHQUFHLEtBQUgsR0FBRztBQUFILFdBQUcsR0FGZixNQUFNLENBQUMsTUFBTSxDQUFDLENBRUYsR0FBRyxLQUFILEdBQUc7ZUFBSCxHQUFHOzs7cUJBQUgsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==