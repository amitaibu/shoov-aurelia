System.register(['aurelia-event-aggregator', './web-api', './messages', './utility'], function (_export) {
  var EventAggregator, WebAPI, ContactUpdated, ContactViewed, areEqual, _classCallCheck, _createClass, ContactDetail;

  return {
    setters: [function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }, function (_webApi) {
      WebAPI = _webApi.WebAPI;
    }, function (_messages) {
      ContactUpdated = _messages.ContactUpdated;
      ContactViewed = _messages.ContactViewed;
    }, function (_utility) {
      areEqual = _utility.areEqual;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      ContactDetail = (function () {
        function ContactDetail(api, ea) {
          _classCallCheck(this, ContactDetail);

          this.api = api;
          this.ea = ea;
        }

        _createClass(ContactDetail, [{
          key: 'activate',
          value: function activate(params, qs, config) {
            var _this = this;

            return this.api.getContactDetails(params.id).then(function (contact) {
              _this.contact = contact;
              config.navModel.title = contact.firstName;
              _this.originalContact = JSON.parse(JSON.stringify(contact));
              _this.ea.publish(new ContactViewed(contact));
            });
          }
        }, {
          key: 'canSave',
          get: function () {
            return this.contact.firstName && this.contact.lastName && !this.api.isRequesting;
          }
        }, {
          key: 'save',
          value: function save() {
            var _this2 = this;

            this.api.saveContact(this.contact).then(function (contact) {
              _this2.contact = contact;
              _this2.originalContact = JSON.parse(JSON.stringify(contact));
              _this2.ea.publish(new ContactUpdated(_this2.contact));
            });
          }
        }, {
          key: 'canDeactivate',
          value: function canDeactivate() {
            if (!areEqual(this.originalContact, this.contact)) {
              var result = confirm('You have unsaved changes. Are you sure you wish to leave?');

              if (!result) {
                this.ea.publish(new ContactViewed(this.contact));
              }

              return result;
            }

            return true;
          }
        }], [{
          key: 'inject',
          value: [WebAPI, EventAggregator],
          enumerable: true
        }]);

        return ContactDetail;
      })();

      _export('ContactDetail', ContactDetail);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtZGV0YWlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7dUdBS2EsYUFBYTs7OztnREFMbEIsZUFBZTs7dUJBQ2YsTUFBTTs7aUNBQ04sY0FBYztnQ0FBQyxhQUFhOzswQkFDNUIsUUFBUTs7Ozs7Ozs7O0FBRUgsbUJBQWE7QUFFYixpQkFGQSxhQUFhLENBRVosR0FBRyxFQUFFLEVBQUUsRUFBQztnQ0FGVCxhQUFhOztBQUd0QixjQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNmLGNBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1NBQ2Q7O3FCQUxVLGFBQWE7O2lCQU9oQixrQkFBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBQzs7O0FBQzFCLG1CQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU8sRUFBSTtBQUMzRCxvQkFBSyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLG9CQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO0FBQzFDLG9CQUFLLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUMzRCxvQkFBSyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDN0MsQ0FBQyxDQUFDO1dBQ0o7OztlQUVVLFlBQUU7QUFDWCxtQkFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDO1dBQ2xGOzs7aUJBRUcsZ0JBQUU7OztBQUNKLGdCQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsT0FBTyxFQUFJO0FBQ2pELHFCQUFLLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIscUJBQUssZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQzNELHFCQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxjQUFjLENBQUMsT0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ25ELENBQUMsQ0FBQztXQUNKOzs7aUJBRVkseUJBQUU7QUFDYixnQkFBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQztBQUMvQyxrQkFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLDJEQUEyRCxDQUFDLENBQUM7O0FBRWxGLGtCQUFHLENBQUMsTUFBTSxFQUFDO0FBQ1Qsb0JBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2VBQ2xEOztBQUVELHFCQUFPLE1BQU0sQ0FBQzthQUNmOztBQUVELG1CQUFPLElBQUksQ0FBQztXQUNiOzs7aUJBdkNlLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQzs7OztlQUQ5QixhQUFhOzs7K0JBQWIsYUFBYSIsImZpbGUiOiJjb250YWN0LWRldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9