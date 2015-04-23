System.register(['aurelia-framework', 'aurelia-http-client'], function (_export) {
  var inject, HttpClient, _classCallCheck, _createClass, ReposApi;

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

      ReposApi = (function () {
        function ReposApi(http) {
          _classCallCheck(this, _ReposApi);

          this.baseUri = 'http://localhost/shoov/www';

          this.http = http;
        }

        var _ReposApi = ReposApi;

        _createClass(_ReposApi, [{
          key: 'baseUri',
          value: undefined,
          enumerable: true
        }, {
          key: 'get',
          value: function get() {
            var _this = this;

            this.isRequesting = true;
            return this.http.configure(function (x) {
              x.withBaseUri(_this.baseUri);
              x.withHeader('access-token', localStorage.getItem('access_token'));
            }).get('api/github_repos');
          }
        }]);

        ReposApi = inject(HttpClient)(ReposApi) || ReposApi;
        return ReposApi;
      })();

      _export('ReposApi', ReposApi);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3JlcG9zLWFwaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3lEQUlhLFFBQVE7Ozs7aUNBSmIsTUFBTTs7c0NBQ04sVUFBVTs7Ozs7Ozs7O0FBR0wsY0FBUTtBQUdSLGlCQUhBLFFBQVEsQ0FHUCxJQUFJLEVBQUM7OztlQUZqQixPQUFPLEdBQUcsNEJBQTRCOztBQUdwQyxjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNsQjs7d0JBTFUsUUFBUTs7Ozs7Ozs7aUJBT2hCLGVBQUc7OztBQUNKLGdCQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztBQUN6QixtQkFBTyxJQUFJLENBQUMsSUFBSSxDQUNiLFNBQVMsQ0FBQyxVQUFBLENBQUMsRUFBSTtBQUNkLGVBQUMsQ0FBQyxXQUFXLENBQUMsTUFBSyxPQUFPLENBQUMsQ0FBQztBQUM1QixlQUFDLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7YUFDcEUsQ0FBQyxDQUNELEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1dBQzVCOzs7QUFmVSxnQkFBUSxHQURwQixNQUFNLENBQUMsVUFBVSxDQUFDLENBQ04sUUFBUSxLQUFSLFFBQVE7ZUFBUixRQUFROzs7MEJBQVIsUUFBUSIsImZpbGUiOiJzZXJ2aWNlcy9yZXBvcy1hcGkuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==