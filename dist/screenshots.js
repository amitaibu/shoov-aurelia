System.register(['aurelia-framework', './services/builds-api', './services/screenshots-api'], function (_export) {
  var inject, BuildsApi, ScreenshotsApi, _classCallCheck, _createClass, Screenshots;

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_servicesBuildsApi) {
      BuildsApi = _servicesBuildsApi.BuildsApi;
    }, function (_servicesScreenshotsApi) {
      ScreenshotsApi = _servicesScreenshotsApi.ScreenshotsApi;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      Screenshots = (function () {
        function Screenshots(buildsApi, screenshotsApi) {
          _classCallCheck(this, _Screenshots);

          this.buildsApi = buildsApi;
          this.screenshotsApi = screenshotsApi;
        }

        var _Screenshots = Screenshots;

        _createClass(_Screenshots, [{
          key: 'activate',
          value: function activate(params, queryString, routeConfig) {
            var _this = this;

            var buildId = params.id;
            this.buildsApi.get(buildId).then(function (response) {
              var data = JSON.parse(response.response).data;
              _this.build = data[0];
            });

            this.screenshotsApi.get(buildId).then(function (response) {
              var data = JSON.parse(response.response).data;
              _this.screenshots = data;
            });

            this.showDiff = false;
          }
        }]);

        Screenshots = inject(BuildsApi, ScreenshotsApi)(Screenshots) || Screenshots;
        return Screenshots;
      })();

      _export('Screenshots', Screenshots);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmVlbnNob3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7d0VBTWEsV0FBVzs7OztpQ0FOaEIsTUFBTTs7cUNBQ04sU0FBUzs7K0NBQ1QsY0FBYzs7Ozs7Ozs7O0FBSVQsaUJBQVc7QUFFWCxpQkFGQSxXQUFXLENBRVYsU0FBUyxFQUFFLGNBQWMsRUFBRTs7O0FBQ3JDLGNBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQzNCLGNBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1NBQ3RDOzsyQkFMVSxXQUFXOzs7O2lCQU9kLGtCQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFOzs7QUFDekMsZ0JBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7QUFDeEIsZ0JBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUN4QixJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDaEIsa0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUM5QyxvQkFBSyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3RCLENBQUMsQ0FBQzs7QUFFTCxnQkFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQzdCLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUNoQixrQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQzlDLG9CQUFLLFdBQVcsR0FBRyxJQUFJLENBQUM7YUFDekIsQ0FBQyxDQUFDOztBQUVMLGdCQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztXQUN2Qjs7O0FBdEJVLG1CQUFXLEdBRHZCLE1BQU0sQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQ3JCLFdBQVcsS0FBWCxXQUFXO2VBQVgsV0FBVzs7OzZCQUFYLFdBQVciLCJmaWxlIjoic2NyZWVuc2hvdHMuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==