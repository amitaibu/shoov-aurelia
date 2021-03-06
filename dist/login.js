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
          key: 'canLogin',
          get: function () {
            return this.credentials.username && this.credentials.pass && !this.api.isRequesting;
          }
        }, {
          key: 'login',
          value: function login() {
            var _this = this;

            this.api.login(this.credentials).then(function (x) {
              return _this.router.navigate('ci-builds');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7K0RBS2EsS0FBSzs7OztpQ0FMVixNQUFNOzs4QkFDTixNQUFNOzsyQkFDTixRQUFROzs7Ozs7Ozs7QUFHSCxXQUFLO0FBT0wsaUJBUEEsS0FBSyxDQU9KLE1BQU0sRUFBRSxHQUFHLEVBQUU7OztlQUx6QixXQUFXLEdBQUc7QUFDWixvQkFBUSxFQUFFLE9BQU87QUFDakIsZ0JBQUksRUFBRSxPQUFPO1dBQ2Q7O0FBR0MsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsY0FBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDaEI7O3FCQVZVLEtBQUs7Ozs7Ozs7O2VBWUosWUFBRztBQUNiLG1CQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7V0FDckY7OztpQkFFSSxpQkFBRzs7O0FBQ04sZ0JBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDN0IsSUFBSSxDQUFDLFVBQUEsQ0FBQztxQkFBSSxNQUFLLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO2FBQUEsQ0FBQyxDQUFDO1dBQ2pEOzs7QUFuQlUsYUFBSyxHQURqQixNQUFNLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUNaLEtBQUssS0FBTCxLQUFLO2VBQUwsS0FBSzs7O3VCQUFMLEtBQUsiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==