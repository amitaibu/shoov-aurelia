System.register(['aurelia-framework', './login-api'], function (_export) {
  var inject, LoginApi, _classCallCheck, _createClass, Login;

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_loginApi) {
      LoginApi = _loginApi.LoginApi;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      Login = (function () {
        function Login(api) {
          _classCallCheck(this, _Login);

          this.username = '';
          this.pass = 'bar';

          this.api = api;
        }

        var _Login = Login;

        _createClass(_Login, [{
          key: 'username',
          value: undefined,
          enumerable: true
        }, {
          key: 'pass',
          value: undefined,
          enumerable: true
        }, {
          key: 'activate',
          value: function activate(params, qs, config) {}
        }, {
          key: 'canLogin',
          get: function () {
            return this.username && this.pass && !this.api.isRequesting;
          }
        }, {
          key: 'login',
          value: function login() {}
        }]);

        Login = inject(LoginApi)(Login) || Login;
        return Login;
      })();

      _export('Login', Login);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7dURBSWEsS0FBSzs7OztpQ0FKVixNQUFNOzsyQkFDTixRQUFROzs7Ozs7Ozs7QUFHSCxXQUFLO0FBSUwsaUJBSkEsS0FBSyxDQUlKLEdBQUcsRUFBQzs7O2VBSGhCLFFBQVEsR0FBRyxFQUFFO2VBQ2IsSUFBSSxHQUFHLEtBQUs7O0FBR1YsY0FBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDaEI7O3FCQU5VLEtBQUs7Ozs7Ozs7Ozs7OztpQkFRUixrQkFBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUM1Qjs7O2VBR1csWUFBRztBQUNiLG1CQUFPLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDO1dBQzdEOzs7aUJBRUksaUJBQUcsRUFFUDs7O0FBbEJVLGFBQUssR0FEakIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUNKLEtBQUssS0FBTCxLQUFLO2VBQUwsS0FBSzs7O3VCQUFMLEtBQUsiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==