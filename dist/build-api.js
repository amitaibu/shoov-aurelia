System.register(['aurelia-framework', 'aurelia-http-client'], function (_export) {
  var inject, HttpClient, _classCallCheck, _createClass, LoginApi;

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      LoginApi = (function () {
        function LoginApi(http) {
          _classCallCheck(this, _LoginApi);

          this.baseUri = 'http://localhost/shoov/www';

          this.http = http;
        }

        var _LoginApi = LoginApi;

        _createClass(_LoginApi, [{
          key: 'baseUri',
          value: undefined,
          enumerable: true
        }, {
          key: 'login',
          value: function login(credentials) {
            var _this = this;

            var base64 = window.btoa(credentials.username + ':' + credentials.pass);
            return this.http.configure(function (x) {
              x.withBaseUri(_this.baseUri);
              x.withHeader('Authorization', 'Basic ' + base64);
            }).get('api/login-token').then(function (response) {
              var accessToken = JSON.parse(response.response).access_token;
              localStorage.setItem('access_token', accessToken);
            });
          }
        }, {
          key: 'getContactList',
          value: function getContactList() {
            var _this2 = this;

            this.isRequesting = true;
            return new Promise(function (resolve) {
              setTimeout(function () {
                var results = contacts.map(function (x) {
                  return {
                    id: x.id,
                    firstName: x.firstName,
                    lastName: x.lastName,
                    email: x.email
                  };
                });
                resolve(results);
                _this2.isRequesting = false;
              }, latency);
            });
          }
        }, {
          key: 'getContactDetails',
          value: function getContactDetails(id) {
            var _this3 = this;

            this.isRequesting = true;
            return new Promise(function (resolve) {
              setTimeout(function () {
                var found = contacts.filter(function (x) {
                  return x.id == id;
                })[0];
                resolve(JSON.parse(JSON.stringify(found)));
                _this3.isRequesting = false;
              }, latency);
            });
          }
        }, {
          key: 'saveContact',
          value: function saveContact(contact) {
            var _this4 = this;

            this.isRequesting = true;
            return new Promise(function (resolve) {
              setTimeout(function () {
                var instance = JSON.parse(JSON.stringify(contact));
                var found = contacts.filter(function (x) {
                  return x.id == contact.id;
                })[0];

                if (found) {
                  var index = contacts.indexOf(found);
                  contacts[index] = instance;
                } else {
                  instance.id = getId();
                  contacts.push(instance);
                }

                _this4.isRequesting = false;
                resolve(instance);
              }, latency);
            });
          }
        }]);

        LoginApi = inject(HttpClient)(LoginApi) || LoginApi;
        return LoginApi;
      })();

      _export('LoginApi', LoginApi);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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