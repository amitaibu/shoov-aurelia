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
          this.code = 'YWRtaW46YWRtaW4=';

          this.http = http;
        }

        var _LoginApi = LoginApi;

        _createClass(_LoginApi, [{
          key: 'baseUri',
          value: undefined,
          enumerable: true
        }, {
          key: 'code',
          value: undefined,
          enumerable: true
        }, {
          key: 'login',
          value: function login(credentials) {
            var _this = this;

            this.http.configure(function (x) {
              x.withBaseUri(_this.baseUri);
              x.withHeader('Authorization', 'Basic YWRtaW46YWRtaW4=');
            }).get('api/login-token').then(function (response) {
              log(response);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWFwaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3lEQUlhLFFBQVE7Ozs7aUNBSmIsTUFBTTs7c0NBQ04sVUFBVTs7Ozs7Ozs7O0FBR0wsY0FBUTtBQU1SLGlCQU5BLFFBQVEsQ0FNUCxJQUFJLEVBQUM7OztlQUxqQixPQUFPLEdBQUcsNEJBQTRCO2VBR3RDLElBQUksR0FBRyxrQkFBa0I7O0FBR3ZCLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCOzt3QkFSVSxRQUFROzs7Ozs7Ozs7Ozs7aUJBVWQsZUFBQyxXQUFXLEVBQUU7OztBQUNqQixnQkFBSSxDQUFDLElBQUksQ0FDUixTQUFTLENBQUMsVUFBQSxDQUFDLEVBQUk7QUFDZCxlQUFDLENBQUMsV0FBVyxDQUFDLE1BQUssT0FBTyxDQUFDLENBQUM7QUFDNUIsZUFBQyxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsd0JBQXdCLENBQUMsQ0FBQzthQUN6RCxDQUFDLENBQ0QsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQ3BCLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUNoQixpQkFBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ2YsQ0FBQyxDQUFDO1dBQ047OztpQkFJYSwwQkFBRTs7O0FBQ2QsZ0JBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLG1CQUFPLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTyxFQUFJO0FBQzVCLHdCQUFVLENBQUMsWUFBTTtBQUNmLG9CQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxFQUFLO0FBQUUseUJBQU87QUFDeEMsc0JBQUUsRUFBQyxDQUFDLENBQUMsRUFBRTtBQUNQLDZCQUFTLEVBQUMsQ0FBQyxDQUFDLFNBQVM7QUFDckIsNEJBQVEsRUFBQyxDQUFDLENBQUMsUUFBUTtBQUNuQix5QkFBSyxFQUFDLENBQUMsQ0FBQyxLQUFLO21CQUNkLENBQUE7aUJBQUMsQ0FBQyxDQUFDO0FBQ0osdUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNqQix1QkFBSyxZQUFZLEdBQUcsS0FBSyxDQUFDO2VBQzNCLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDYixDQUFDLENBQUM7V0FDSjs7O2lCQUVnQiwyQkFBQyxFQUFFLEVBQUM7OztBQUNuQixnQkFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7QUFDekIsbUJBQU8sSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPLEVBQUk7QUFDNUIsd0JBQVUsQ0FBQyxZQUFNO0FBQ2Ysb0JBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDO3lCQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRTtpQkFBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEQsdUJBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNDLHVCQUFLLFlBQVksR0FBRyxLQUFLLENBQUM7ZUFDM0IsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUNiLENBQUMsQ0FBQztXQUNKOzs7aUJBRVUscUJBQUMsT0FBTyxFQUFDOzs7QUFDbEIsZ0JBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLG1CQUFPLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTyxFQUFJO0FBQzVCLHdCQUFVLENBQUMsWUFBTTtBQUNmLG9CQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNuRCxvQkFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUM7eUJBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxPQUFPLENBQUMsRUFBRTtpQkFBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRXhELG9CQUFHLEtBQUssRUFBQztBQUNQLHNCQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BDLDBCQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDO2lCQUM1QixNQUFJO0FBQ0gsMEJBQVEsQ0FBQyxFQUFFLEdBQUcsS0FBSyxFQUFFLENBQUM7QUFDdEIsMEJBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3pCOztBQUVELHVCQUFLLFlBQVksR0FBRyxLQUFLLENBQUM7QUFDMUIsdUJBQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztlQUNuQixFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ2IsQ0FBQyxDQUFDO1dBQ0o7OztBQXRFVSxnQkFBUSxHQURwQixNQUFNLENBQUMsVUFBVSxDQUFDLENBQ04sUUFBUSxLQUFSLFFBQVE7ZUFBUixRQUFROzs7MEJBQVIsUUFBUSIsImZpbGUiOiJsb2dpbi1hcGkuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==