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
          key: 'getBuilds',
          value: function getBuilds() {
            var _this = this;

            return this.http.configure(function (x) {
              x.withBaseUri(_this.baseUri);
              x.withHeader('access-token', localStorage.getItem('access_token'));
            }).get('api/builds');
          }
        }]);

        BuildsApi = inject(HttpClient)(BuildsApi) || BuildsApi;
        return BuildsApi;
      })();

      _export('BuildsApi', BuildsApi);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2J1aWxkcy1hcGkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijt5REFJYSxTQUFTOzs7O2lDQUpkLE1BQU07O3NDQUNOLFVBQVU7Ozs7Ozs7OztBQUdMLGVBQVM7QUFJVCxpQkFKQSxTQUFTLENBSVIsSUFBSSxFQUFDOzs7ZUFIakIsT0FBTyxHQUFHLDRCQUE0Qjs7QUFJcEMsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbEI7O3lCQU5VLFNBQVM7Ozs7Ozs7O2lCQVFYLHFCQUFHOzs7QUFDVixtQkFBTyxJQUFJLENBQUMsSUFBSSxDQUNmLFNBQVMsQ0FBQyxVQUFBLENBQUMsRUFBSTtBQUNkLGVBQUMsQ0FBQyxXQUFXLENBQUMsTUFBSyxPQUFPLENBQUMsQ0FBQztBQUM1QixlQUFDLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7YUFDcEUsQ0FBQyxDQUNELEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztXQUNwQjs7O0FBZlUsaUJBQVMsR0FEckIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUNOLFNBQVMsS0FBVCxTQUFTO2VBQVQsU0FBUzs7OzJCQUFULFNBQVMiLCJmaWxlIjoic2VydmljZXMvYnVpbGRzLWFwaS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9