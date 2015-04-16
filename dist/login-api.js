System.register([], function (_export) {
  var _classCallCheck, _createClass, latency, id, contacts, LoginAPI;

  function getId() {
    return ++id;
  }

  return {
    setters: [],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      latency = 0;
      id = 0;
      contacts = [{
        id: getId(),
        firstName: 'John',
        lastName: 'Tolkien',
        email: 'tolkien@inklings.com',
        phoneNumber: '867-5309'
      }, {
        id: getId(),
        firstName: 'Clive',
        lastName: 'Lewis',
        email: 'lewis@inklings.com',
        phoneNumber: '867-5309'
      }, {
        id: getId(),
        firstName: 'Owen',
        lastName: 'Barfield',
        email: 'barfield@inklings.com',
        phoneNumber: '867-5309'
      }, {
        id: getId(),
        firstName: 'Charles',
        lastName: 'Williams',
        email: 'williams@inklings.com',
        phoneNumber: '867-5309'
      }, {
        id: getId(),
        firstName: 'Roger',
        lastName: 'Green',
        email: 'green@inklings.com',
        phoneNumber: '867-5309'
      }];

      LoginAPI = (function () {
        function LoginAPI() {
          _classCallCheck(this, LoginAPI);
        }

        _createClass(LoginAPI, [{
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

        return LoginAPI;
      })();

      _export('LoginAPI', LoginAPI);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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