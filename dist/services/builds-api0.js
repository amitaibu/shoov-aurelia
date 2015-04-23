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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2J1aWxkcy1hcGkwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7eURBSWEsU0FBUzs7OztpQ0FKZCxNQUFNOztzQ0FDTixVQUFVOzs7Ozs7Ozs7QUFHTCxlQUFTO0FBR1QsaUJBSEEsU0FBUyxDQUdSLElBQUksRUFBQzs7O2VBRmpCLE9BQU8sR0FBRyw0QkFBNEI7O0FBR3BDLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCOzt5QkFMVSxTQUFTOzs7Ozs7OztpQkFPakIsYUFBQyxPQUFPLEVBQUU7OztBQUNYLG1CQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUN4QixnQkFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7QUFDekIsbUJBQU8sSUFBSSxDQUFDLElBQUksQ0FDYixTQUFTLENBQUMsVUFBQSxDQUFDLEVBQUk7QUFDZCxlQUFDLENBQUMsV0FBVyxDQUFDLE1BQUssT0FBTyxDQUFDLENBQUM7QUFDNUIsZUFBQyxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2FBQ3BFLENBQUMsQ0FDRCxHQUFHLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxDQUFDO1dBQ2pDOzs7QUFoQlUsaUJBQVMsR0FEckIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUNOLFNBQVMsS0FBVCxTQUFTO2VBQVQsU0FBUzs7OzJCQUFULFNBQVMiLCJmaWxlIjoic2VydmljZXMvYnVpbGRzLWFwaTAuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==