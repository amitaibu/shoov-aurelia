System.register(['nprogress', 'aurelia-framework'], function (_export) {
  var nprogress, bindable, noView, _classCallCheck, _createDecoratedClass, LoadingIndicator;

  return {
    setters: [function (_nprogress) {
      nprogress = _nprogress['default'];
    }, function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      noView = _aureliaFramework.noView;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (initializers) initializers[key] = descriptor.initializer; } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

      LoadingIndicator = (function () {
        var _instanceInitializers = {};

        function LoadingIndicator() {
          _classCallCheck(this, _LoadingIndicator);

          this.loading = _instanceInitializers.loading.call(this);
        }

        var _LoadingIndicator = LoadingIndicator;

        _createDecoratedClass(_LoadingIndicator, [{
          key: 'loading',
          decorators: [bindable],
          initializer: function () {
            return false;
          },
          enumerable: true
        }, {
          key: 'loadingChanged',
          value: function loadingChanged(newValue) {
            if (newValue) {
              nprogress.start();
            } else {
              nprogress.done();
            }
          }
        }], null, _instanceInitializers);

        LoadingIndicator = noView(LoadingIndicator) || LoadingIndicator;
        return LoadingIndicator;
      })();

      _export('LoadingIndicator', LoadingIndicator);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmctaW5kaWNhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7MkVBSWEsZ0JBQWdCOzs7Ozs7bUNBSHJCLFFBQVE7aUNBQUUsTUFBTTs7Ozs7Ozs7O0FBR1gsc0JBQWdCOzs7aUJBQWhCLGdCQUFnQjs7O2VBQ2pCLE9BQU8seUJBQVAsT0FBTzs7O2dDQUROLGdCQUFnQjs7Ozt1QkFDMUIsUUFBUTs7bUJBQVcsS0FBSzs7Ozs7aUJBRVgsd0JBQUMsUUFBUSxFQUFDO0FBQ3RCLGdCQUFHLFFBQVEsRUFBQztBQUNWLHVCQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDbkIsTUFDRztBQUNGLHVCQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDbEI7V0FDRjs7O0FBVlUsd0JBQWdCLEdBRDVCLE1BQU0sQ0FDTSxnQkFBZ0IsS0FBaEIsZ0JBQWdCO2VBQWhCLGdCQUFnQjs7O2tDQUFoQixnQkFBZ0IiLCJmaWxlIjoibG9hZGluZy1pbmRpY2F0b3IuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==