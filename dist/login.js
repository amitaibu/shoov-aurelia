System.register(['aurelia-framework', 'aurelia-router', './login-api'], function (_export) {
  var inject, Router, LoginApi, _classCallCheck, _createClass, Login;

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

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      Login = (function () {
        function Login(router, api) {
          _classCallCheck(this, _Login);

          this.credentials = {
            username: 'admin',
            pass: 'admin'
          };

          this.router = router;
          this.api = api;
        }

        var _Login = Login;

        _createClass(_Login, [{
          key: 'credentials',
          value: undefined,
          enumerable: true
        }, {
          key: 'activate',
          value: function activate(params, qs, config) {}
        }, {
          key: 'canLogin',
          get: function () {
            return this.credentials.username && this.credentials.pass;
          }
        }, {
          key: 'login',
          value: function login() {
            var _this = this;

            this.api.login(this.credentials).then(function (x) {
              _this.router.navigate('');
            });
          }
        }]);

        Login = inject(Router, LoginApi)(Login) || Login;
        return Login;
      })();

      _export('Login', Login);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7K0RBS2EsS0FBSzs7OztpQ0FMVixNQUFNOzs4QkFDTixNQUFNOzsyQkFDTixRQUFROzs7Ozs7Ozs7QUFHSCxXQUFLO0FBT0wsaUJBUEEsS0FBSyxDQU9KLE1BQU0sRUFBRSxHQUFHLEVBQUU7OztlQUx6QixXQUFXLEdBQUc7QUFDWixvQkFBUSxFQUFFLE9BQU87QUFDakIsZ0JBQUksRUFBRSxPQUFPO1dBQ2Q7O0FBR0MsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsY0FBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDaEI7O3FCQVZVLEtBQUs7Ozs7Ozs7O2lCQVlSLGtCQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQzVCOzs7ZUFHVyxZQUFHO0FBRWIsbUJBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7V0FDM0Q7OztpQkFFSSxpQkFBRzs7O0FBQ04sZ0JBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDN0IsSUFBSSxDQUFDLFVBQUEsQ0FBQyxFQUFJO0FBQ1Qsb0JBQUssTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUMxQixDQUFDLENBQUM7V0FDTjs7O0FBMUJVLGFBQUssR0FEakIsTUFBTSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FDWixLQUFLLEtBQUwsS0FBSztlQUFMLEtBQUs7Ozt1QkFBTCxLQUFLIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=