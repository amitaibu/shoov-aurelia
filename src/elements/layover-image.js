import {bindable, inject} from 'aurelia-framework';

@inject(Element)
export class LayoverImageCustomElement {
  @bindable first;
  @bindable second;
  @bindable width;
  @bindable height;

  constructor(element) {
    this.element = element;
  }

  bind() {
    var element = this.element;

    var $second_wrapper = jQuery(element).find('.second-wrapper');
    var img_width = jQuery(element).find('.second-wrapper img').width();
    var init_split = Math.round(img_width/2);

    $second_wrapper.width(init_split);

    jQuery(element).find('.layover-image').mousemove(function(e) {
      var offX  = (e.offsetX || e.clientX - $second_wrapper.offset().left);
      $second_wrapper.width(offX);
    });
  }

}
