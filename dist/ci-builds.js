System.register(['aurelia-framework', './services/builds-api'], function (_export) {
  var inject, BuildsApi, _classCallCheck, CiBuilds;

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_servicesBuildsApi) {
      BuildsApi = _servicesBuildsApi.BuildsApi;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      CiBuilds = (function () {
        function CiBuilds(buildsApi) {
          _classCallCheck(this, _CiBuilds);

          this.buildsApi = buildsApi;

          var self = this;
          buildsApi.getBuilds().then(function (response) {
            var data = JSON.parse(response.response).data;
            self.builds = data;
          });
        }

        var _CiBuilds = CiBuilds;
        CiBuilds = inject(BuildsApi)(CiBuilds) || CiBuilds;
        return CiBuilds;
      })();

      _export('CiBuilds', CiBuilds);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpLWJ1aWxkcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzBDQUlhLFFBQVE7Ozs7aUNBSmIsTUFBTTs7cUNBQ04sU0FBUzs7Ozs7OztBQUdKLGNBQVE7QUFFUixpQkFGQSxRQUFRLENBRVAsU0FBUyxFQUFFOzs7QUFDckIsY0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7O0FBRTNCLGNBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUNoQixtQkFBUyxDQUFDLFNBQVMsRUFBRSxDQUNsQixJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDaEIsZ0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUM5QyxnQkFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7V0FDcEIsQ0FBQyxDQUFDO1NBQ047O3dCQVhVLFFBQVE7QUFBUixnQkFBUSxHQURwQixNQUFNLENBQUMsU0FBUyxDQUFDLENBQ0wsUUFBUSxLQUFSLFFBQVE7ZUFBUixRQUFROzs7MEJBQVIsUUFBUSIsImZpbGUiOiJjaS1idWlsZHMuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==