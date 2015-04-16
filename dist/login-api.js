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

          this.url = 'http://localhost/shoov/www/api/login-token';

          this.http = http;
        }

        var _LoginApi = LoginApi;

        _createClass(_LoginApi, [{
          key: 'url',
          value: undefined,
          enumerable: true
        }, {
          key: 'login',
          value: function login(credentials) {
            return this.http.post(this.url, credentials).then(function (response) {
              log(response);
            });
          }
        }, {
          key: 'getContactList',
          value: function getContactList() {
            var _this = this;

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
                _this.isRequesting = false;
              }, latency);
            });
          }
        }, {
          key: 'getContactDetails',
          value: function getContactDetails(id) {
            var _this2 = this;

            this.isRequesting = true;
            return new Promise(function (resolve) {
              setTimeout(function () {
                var found = contacts.filter(function (x) {
                  return x.id == id;
                })[0];
                resolve(JSON.parse(JSON.stringify(found)));
                _this2.isRequesting = false;
              }, latency);
            });
          }
        }, {
          key: 'saveContact',
          value: function saveContact(contact) {
            var _this3 = this;

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

                _this3.isRequesting = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWFwaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3lEQUlhLFFBQVE7Ozs7aUNBSmIsTUFBTTs7c0NBQ04sVUFBVTs7Ozs7Ozs7O0FBR0wsY0FBUTtBQUdSLGlCQUhBLFFBQVEsQ0FHUCxJQUFJLEVBQUM7OztlQUZqQixHQUFHLEdBQUcsNENBQTRDOztBQUdoRCxjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNsQjs7d0JBTFUsUUFBUTs7Ozs7Ozs7aUJBT2QsZUFBQyxXQUFXLEVBQUU7QUFDakIsbUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDNUQsaUJBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNmLENBQUMsQ0FBQztXQUNKOzs7aUJBSWEsMEJBQUU7OztBQUNkLGdCQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztBQUN6QixtQkFBTyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU8sRUFBSTtBQUM1Qix3QkFBVSxDQUFDLFlBQU07QUFDZixvQkFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsRUFBSztBQUFFLHlCQUFPO0FBQ3hDLHNCQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDUCw2QkFBUyxFQUFDLENBQUMsQ0FBQyxTQUFTO0FBQ3JCLDRCQUFRLEVBQUMsQ0FBQyxDQUFDLFFBQVE7QUFDbkIseUJBQUssRUFBQyxDQUFDLENBQUMsS0FBSzttQkFDZCxDQUFBO2lCQUFDLENBQUMsQ0FBQztBQUNKLHVCQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDakIsc0JBQUssWUFBWSxHQUFHLEtBQUssQ0FBQztlQUMzQixFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ2IsQ0FBQyxDQUFDO1dBQ0o7OztpQkFFZ0IsMkJBQUMsRUFBRSxFQUFDOzs7QUFDbkIsZ0JBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLG1CQUFPLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTyxFQUFJO0FBQzVCLHdCQUFVLENBQUMsWUFBTTtBQUNmLG9CQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQzt5QkFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUU7aUJBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hELHVCQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzQyx1QkFBSyxZQUFZLEdBQUcsS0FBSyxDQUFDO2VBQzNCLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDYixDQUFDLENBQUM7V0FDSjs7O2lCQUVVLHFCQUFDLE9BQU8sRUFBQzs7O0FBQ2xCLGdCQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztBQUN6QixtQkFBTyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU8sRUFBSTtBQUM1Qix3QkFBVSxDQUFDLFlBQU07QUFDZixvQkFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDbkQsb0JBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDO3lCQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksT0FBTyxDQUFDLEVBQUU7aUJBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUV4RCxvQkFBRyxLQUFLLEVBQUM7QUFDUCxzQkFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwQywwQkFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQztpQkFDNUIsTUFBSTtBQUNILDBCQUFRLENBQUMsRUFBRSxHQUFHLEtBQUssRUFBRSxDQUFDO0FBQ3RCLDBCQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUN6Qjs7QUFFRCx1QkFBSyxZQUFZLEdBQUcsS0FBSyxDQUFDO0FBQzFCLHVCQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7ZUFDbkIsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUNiLENBQUMsQ0FBQztXQUNKOzs7QUE3RFUsZ0JBQVEsR0FEcEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUNOLFFBQVEsS0FBUixRQUFRO2VBQVIsUUFBUTs7OzBCQUFSLFFBQVEiLCJmaWxlIjoibG9naW4tYXBpLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=