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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2J1aWxkcy1hcGkwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7eURBSWEsU0FBUzs7OztpQ0FKZCxNQUFNOztzQ0FDTixVQUFVOzs7Ozs7Ozs7QUFHTCxlQUFTO0FBSVQsaUJBSkEsU0FBUyxDQUlSLElBQUksRUFBQzs7O2VBSGpCLE9BQU8sR0FBRyw0QkFBNEI7O0FBSXBDLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCOzt5QkFOVSxTQUFTOzs7Ozs7OztpQkFRWCxxQkFBRzs7O0FBQ1YsbUJBQU8sSUFBSSxDQUFDLElBQUksQ0FDZixTQUFTLENBQUMsVUFBQSxDQUFDLEVBQUk7QUFDZCxlQUFDLENBQUMsV0FBVyxDQUFDLE1BQUssT0FBTyxDQUFDLENBQUM7QUFDNUIsZUFBQyxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2FBQ3BFLENBQUMsQ0FDRCxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7V0FDcEI7OztBQWZVLGlCQUFTLEdBRHJCLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FDTixTQUFTLEtBQVQsU0FBUztlQUFULFNBQVM7OzsyQkFBVCxTQUFTIiwiZmlsZSI6InNlcnZpY2VzL2J1aWxkcy1hcGkwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=