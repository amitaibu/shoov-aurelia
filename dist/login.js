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

          this.credentials = {
            username: 'admin',
            pass: 'admin'
          };

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
            return this.credentials.username && this.credentials.pass && !this.api.isRequesting;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7dURBSWEsS0FBSzs7OztpQ0FKVixNQUFNOzsyQkFDTixRQUFROzs7Ozs7Ozs7QUFHSCxXQUFLO0FBT0wsaUJBUEEsS0FBSyxDQU9KLEdBQUcsRUFBQzs7O2VBTGhCLFdBQVcsR0FBRztBQUNaLG9CQUFRLEVBQUUsT0FBTztBQUNqQixnQkFBSSxFQUFFLE9BQU87V0FDZDs7QUFHQyxjQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUNoQjs7cUJBVFUsS0FBSzs7Ozs7Ozs7aUJBV1Isa0JBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFDNUI7OztlQUdXLFlBQUc7QUFDYixtQkFBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDO1dBQ3JGOzs7aUJBRUksaUJBQUcsRUFFUDs7O0FBckJVLGFBQUssR0FEakIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUNKLEtBQUssS0FBTCxLQUFLO2VBQUwsS0FBSzs7O3VCQUFMLEtBQUsiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==