System.register(['aurelia-router', './web-api'], function (_export) {
  var Router, WebAPI, _classCallCheck, _createClass, App;

  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_webApi) {
      WebAPI = _webApi.WebAPI;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      App = (function () {
        function App(router, api) {
          _classCallCheck(this, App);

          this.router = router;
          this.api = api;

          this.router.configure(function (config) {
            config.title = 'Contacts';
            config.map([{ route: '', moduleId: 'no-selection', title: 'Select' }, { route: 'contacts/:id', moduleId: 'contact-detail' }]);
          });
        }

        _createClass(App, null, [{
          key: 'inject',
          value: [Router, WebAPI],
          enumerable: true
        }]);

        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3FEQUdhLEdBQUc7Ozs7OEJBSFIsTUFBTTs7dUJBQ04sTUFBTTs7Ozs7Ozs7O0FBRUQsU0FBRztBQUVILGlCQUZBLEdBQUcsQ0FFRixNQUFNLEVBQUUsR0FBRyxFQUFFO2dDQUZkLEdBQUc7O0FBR1osY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsY0FBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7O0FBRWYsY0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLEVBQUk7QUFDOUIsa0JBQU0sQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO0FBQzFCLGtCQUFNLENBQUMsR0FBRyxDQUFDLENBQ1QsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFlLFFBQVEsRUFBRSxjQUFjLEVBQUksS0FBSyxFQUFFLFFBQVEsRUFBQyxFQUN0RSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUcsUUFBUSxFQUFFLGdCQUFnQixFQUFFLENBQ3ZELENBQUMsQ0FBQztXQUNKLENBQUMsQ0FBQztTQUNKOztxQkFiVSxHQUFHOztpQkFDRSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7Ozs7ZUFEckIsR0FBRzs7O3FCQUFILEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=