System.register(['aurelia-framework', './services/repos-api'], function (_export) {
  var inject, ReposApi, _classCallCheck, _createClass, CiBuilds;

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_servicesReposApi) {
      ReposApi = _servicesReposApi.ReposApi;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      CiBuilds = (function () {
        function CiBuilds(reposApi) {
          _classCallCheck(this, _CiBuilds);

          this.reposApi = reposApi;
        }

        var _CiBuilds = CiBuilds;

        _createClass(_CiBuilds, [{
          key: 'activate',
          value: function activate(params, qs, config) {
            var _this = this;

            this.reposApi.get().then(function (response) {
              var data = JSON.parse(response.response).data;
              _this.repos = data;
            });
          }
        }]);

        CiBuilds = inject(ReposApi)(CiBuilds) || CiBuilds;
        return CiBuilds;
      })();

      _export('CiBuilds', CiBuilds);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpLWJ1aWxkcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3VEQUlhLFFBQVE7Ozs7aUNBSmIsTUFBTTs7bUNBQ04sUUFBUTs7Ozs7Ozs7O0FBR0gsY0FBUTtBQUVSLGlCQUZBLFFBQVEsQ0FFUCxRQUFRLEVBQUU7OztBQUNwQixjQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztTQUMxQjs7d0JBSlUsUUFBUTs7OztpQkFNWCxrQkFBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRTs7O0FBQzNCLGdCQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUNoQixJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDaEIsa0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUM5QyxvQkFBSyxLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQ25CLENBQUMsQ0FBQztXQUNOOzs7QUFaVSxnQkFBUSxHQURwQixNQUFNLENBQUMsUUFBUSxDQUFDLENBQ0osUUFBUSxLQUFSLFFBQVE7ZUFBUixRQUFROzs7MEJBQVIsUUFBUSIsImZpbGUiOiJjaS1idWlsZHMuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==