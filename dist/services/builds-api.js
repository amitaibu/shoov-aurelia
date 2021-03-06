System.register(['aurelia-framework', 'aurelia-http-client'], function (_export) {
  var inject, HttpClient, _classCallCheck, _createClass, BuildsApi;

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

      BuildsApi = (function () {
        function BuildsApi(http) {
          _classCallCheck(this, _BuildsApi);

          this.baseUri = 'http://localhost/shoov/www';

          this.http = http;
        }

        var _BuildsApi = BuildsApi;

        _createClass(_BuildsApi, [{
          key: 'baseUri',
          value: undefined,
          enumerable: true
        }, {
          key: 'get',
          value: function get(buildId) {
            var _this = this;

            buildId = buildId || '';
            this.isRequesting = true;
            return this.http.configure(function (x) {
              x.withBaseUri(_this.baseUri);
              x.withHeader('access-token', localStorage.getItem('access_token'));
            }).get('api/builds/' + buildId);
          }
        }]);

        BuildsApi = inject(HttpClient)(BuildsApi) || BuildsApi;
        return BuildsApi;
      })();

      _export('BuildsApi', BuildsApi);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2J1aWxkcy1hcGkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijt5REFJYSxTQUFTOzs7O2lDQUpkLE1BQU07O3NDQUNOLFVBQVU7Ozs7Ozs7OztBQUdMLGVBQVM7QUFHVCxpQkFIQSxTQUFTLENBR1IsSUFBSSxFQUFDOzs7ZUFGakIsT0FBTyxHQUFHLDRCQUE0Qjs7QUFHcEMsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbEI7O3lCQUxVLFNBQVM7Ozs7Ozs7O2lCQU9qQixhQUFDLE9BQU8sRUFBRTs7O0FBQ1gsbUJBQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO0FBQ3hCLGdCQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztBQUN6QixtQkFBTyxJQUFJLENBQUMsSUFBSSxDQUNiLFNBQVMsQ0FBQyxVQUFBLENBQUMsRUFBSTtBQUNkLGVBQUMsQ0FBQyxXQUFXLENBQUMsTUFBSyxPQUFPLENBQUMsQ0FBQztBQUM1QixlQUFDLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7YUFDcEUsQ0FBQyxDQUNELEdBQUcsQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLENBQUM7V0FDakM7OztBQWhCVSxpQkFBUyxHQURyQixNQUFNLENBQUMsVUFBVSxDQUFDLENBQ04sU0FBUyxLQUFULFNBQVM7ZUFBVCxTQUFTOzs7MkJBQVQsU0FBUyIsImZpbGUiOiJzZXJ2aWNlcy9idWlsZHMtYXBpLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=