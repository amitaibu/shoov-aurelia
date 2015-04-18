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
//# sourceMappingURL=data:application/json;base64,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LG9CQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQzt5QkFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLE9BQU8sQ0FBQyxFQUFFO2lCQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFeEQsb0JBQUcsS0FBSyxFQUFDO0FBQ1Asc0JBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEMsMEJBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUM7aUJBQzVCLE1BQUk7QUFDSCwwQkFBUSxDQUFDLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQztBQUN0QiwwQkFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDekI7O0FBRUQsdUJBQUssWUFBWSxHQUFHLEtBQUssQ0FBQztBQUMxQix1QkFBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2VBQ25CLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDYixDQUFDLENBQUM7V0FDSjs7O0FBeEVVLGdCQUFRLEdBRHBCLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FDTixRQUFRLEtBQVIsUUFBUTtlQUFSLFFBQVE7OzswQkFBUixRQUFRIiwiZmlsZSI6ImxvZ2luLWFwaTAuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==