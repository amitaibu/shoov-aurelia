System.register(['aurelia-framework', 'aurelia-http-client'], function (_export) {
  var inject, HttpClient, _classCallCheck, _createClass, ScreenshotsApi;

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

      ScreenshotsApi = (function () {
        function ScreenshotsApi(http) {
          _classCallCheck(this, _ScreenshotsApi);

          this.baseUri = 'http://localhost/shoov/www';

          this.http = http;
        }

        var _ScreenshotsApi = ScreenshotsApi;

        _createClass(_ScreenshotsApi, [{
          key: 'baseUri',
          value: undefined,
          enumerable: true
        }, {
          key: 'get',
          value: function get(buildId) {
            var _this = this;

            this.isRequesting = true;

            var params = {
              sort: '-id',
              'filter[build]': buildId };

            return this.http.configure(function (x) {
              x.withBaseUri(_this.baseUri);
              x.withHeader('access-token', localStorage.getItem('access_token'));
            }).get('api/screenshots', params);
          }
        }]);

        ScreenshotsApi = inject(HttpClient)(ScreenshotsApi) || ScreenshotsApi;
        return ScreenshotsApi;
      })();

      _export('ScreenshotsApi', ScreenshotsApi);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3NjcmVlbnNob3RzLWFwaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3lEQUlhLGNBQWM7Ozs7aUNBSm5CLE1BQU07O3NDQUNOLFVBQVU7Ozs7Ozs7OztBQUdMLG9CQUFjO0FBR2QsaUJBSEEsY0FBYyxDQUdiLElBQUksRUFBQzs7O2VBRmpCLE9BQU8sR0FBRyw0QkFBNEI7O0FBR3BDLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCOzs4QkFMVSxjQUFjOzs7Ozs7OztpQkFPdEIsYUFBQyxPQUFPLEVBQUU7OztBQUNYLGdCQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzs7QUFHekIsZ0JBQUksTUFBTSxHQUFHO0FBQ1gsb0JBQVEsS0FBSztBQUNiLDZCQUFlLEVBQUUsT0FBTyxFQUN6QixDQUFDOztBQUVGLG1CQUFPLElBQUksQ0FBQyxJQUFJLENBQ2YsU0FBUyxDQUFDLFVBQUEsQ0FBQyxFQUFJO0FBQ2QsZUFBQyxDQUFDLFdBQVcsQ0FBQyxNQUFLLE9BQU8sQ0FBQyxDQUFDO0FBQzVCLGVBQUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQzthQUNwRSxDQUFDLENBQ0QsR0FBRyxDQUFDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1dBQ2pDOzs7QUF0QlUsc0JBQWMsR0FEMUIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUNOLGNBQWMsS0FBZCxjQUFjO2VBQWQsY0FBYzs7O2dDQUFkLGNBQWMiLCJmaWxlIjoic2VydmljZXMvc2NyZWVuc2hvdHMtYXBpLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=