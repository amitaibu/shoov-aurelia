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
          buildsApi.get().then(function (response) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpLWJ1aWxkczAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjswQ0FJYSxRQUFROzs7O2lDQUpiLE1BQU07O3FDQUNOLFNBQVM7Ozs7Ozs7QUFHSixjQUFRO0FBRVIsaUJBRkEsUUFBUSxDQUVQLFNBQVMsRUFBRTs7O0FBQ3JCLGNBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDOztBQUUzQixjQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFDaEIsbUJBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FDWixJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDaEIsZ0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUM5QyxnQkFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7V0FDcEIsQ0FBQyxDQUFDO1NBQ047O3dCQVhVLFFBQVE7QUFBUixnQkFBUSxHQURwQixNQUFNLENBQUMsU0FBUyxDQUFDLENBQ0wsUUFBUSxLQUFSLFFBQVE7ZUFBUixRQUFROzs7MEJBQVIsUUFBUSIsImZpbGUiOiJ1aS1idWlsZHMwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=