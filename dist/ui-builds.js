System.register(['aurelia-framework', './services/builds-api'], function (_export) {
  var inject, BuildsApi, _classCallCheck, _createClass, CiBuilds;

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_servicesBuildsApi) {
      BuildsApi = _servicesBuildsApi.BuildsApi;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      CiBuilds = (function () {
        function CiBuilds(buildsApi) {
          _classCallCheck(this, _CiBuilds);

          this.buildsApi = buildsApi;
        }

        var _CiBuilds = CiBuilds;

        _createClass(_CiBuilds, [{
          key: 'activate',
          value: function activate(params, qs, config) {
            var _this = this;

            this.buildsApi.get().then(function (response) {
              var data = JSON.parse(response.response).data;
              _this.builds = data;
            });
          }
        }]);

        CiBuilds = inject(BuildsApi)(CiBuilds) || CiBuilds;
        return CiBuilds;
      })();

      _export('CiBuilds', CiBuilds);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpLWJ1aWxkcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3dEQUlhLFFBQVE7Ozs7aUNBSmIsTUFBTTs7cUNBQ04sU0FBUzs7Ozs7Ozs7O0FBR0osY0FBUTtBQUVSLGlCQUZBLFFBQVEsQ0FFUCxTQUFTLEVBQUU7OztBQUNyQixjQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztTQUM1Qjs7d0JBSlUsUUFBUTs7OztpQkFNWCxrQkFBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRTs7O0FBQzNCLGdCQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUNqQixJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDaEIsa0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUM5QyxvQkFBSyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ3BCLENBQUMsQ0FBQztXQUNOOzs7QUFaVSxnQkFBUSxHQURwQixNQUFNLENBQUMsU0FBUyxDQUFDLENBQ0wsUUFBUSxLQUFSLFFBQVE7ZUFBUixRQUFROzs7MEJBQVIsUUFBUSIsImZpbGUiOiJ1aS1idWlsZHMuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==