System.register(['aurelia-framework'], function (_export) {
  var bindable, inject, _classCallCheck, _createDecoratedClass, LayoverImageCustomElement;

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (initializers) initializers[key] = descriptor.initializer; } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

      LayoverImageCustomElement = (function () {
        var _instanceInitializers = {};

        function LayoverImageCustomElement(element) {
          _classCallCheck(this, _LayoverImageCustomElement);

          this.first = _instanceInitializers.first.call(this);
          this.second = _instanceInitializers.second.call(this);
          this.width = _instanceInitializers.width.call(this);
          this.height = _instanceInitializers.height.call(this);

          this.element = element;
        }

        var _LayoverImageCustomElement = LayoverImageCustomElement;

        _createDecoratedClass(_LayoverImageCustomElement, [{
          key: 'first',
          decorators: [bindable],
          initializer: function () {},
          enumerable: true
        }, {
          key: 'second',
          decorators: [bindable],
          initializer: function () {},
          enumerable: true
        }, {
          key: 'width',
          decorators: [bindable],
          initializer: function () {},
          enumerable: true
        }, {
          key: 'height',
          decorators: [bindable],
          initializer: function () {},
          enumerable: true
        }, {
          key: 'bind',
          value: function bind() {
            var element = this.element;

            var $second_wrapper = jQuery(element).find('.second-wrapper');
            var img_width = jQuery(element).find('.second-wrapper img').width();
            var init_split = Math.round(img_width / 2);

            $second_wrapper.width(init_split);

            jQuery(element).find('.layover-image').mousemove(function (e) {
              var offX = e.offsetX || e.clientX - $second_wrapper.offset().left;
              $second_wrapper.width(offX);
            });
          }
        }], null, _instanceInitializers);

        LayoverImageCustomElement = inject(Element)(LayoverImageCustomElement) || LayoverImageCustomElement;
        return LayoverImageCustomElement;
      })();

      _export('LayoverImageCustomElement', LayoverImageCustomElement);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL2xheW92ZXItaW1hZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtnRUFHYSx5QkFBeUI7Ozs7bUNBSDlCLFFBQVE7aUNBQUUsTUFBTTs7Ozs7Ozs7O0FBR1gsK0JBQXlCOzs7QUFNekIsaUJBTkEseUJBQXlCLENBTXhCLE9BQU8sRUFBRTs7O2VBTFgsS0FBSyx5QkFBTCxLQUFLO2VBQ0wsTUFBTSx5QkFBTixNQUFNO2VBQ04sS0FBSyx5QkFBTCxLQUFLO2VBQ0wsTUFBTSx5QkFBTixNQUFNOztBQUdkLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQ3hCOzt5Q0FSVSx5QkFBeUI7Ozs7dUJBQ25DLFFBQVE7Ozs7O3VCQUNSLFFBQVE7Ozs7O3VCQUNSLFFBQVE7Ozs7O3VCQUNSLFFBQVE7Ozs7O2lCQU1MLGdCQUFHO0FBQ0wsZ0JBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7O0FBRTNCLGdCQUFJLGVBQWUsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDOUQsZ0JBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNwRSxnQkFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRXpDLDJCQUFlLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDOztBQUVsQyxrQkFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFTLENBQUMsRUFBRTtBQUMzRCxrQkFBSSxJQUFJLEdBQUssQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEFBQUMsQ0FBQztBQUNyRSw2QkFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM3QixDQUFDLENBQUM7V0FDSjs7O0FBdkJVLGlDQUF5QixHQURyQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQ0gseUJBQXlCLEtBQXpCLHlCQUF5QjtlQUF6Qix5QkFBeUI7OzsyQ0FBekIseUJBQXlCIiwiZmlsZSI6ImVsZW1lbnRzL2xheW92ZXItaW1hZ2UuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==