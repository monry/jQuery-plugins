/*
 * jQuery.replaceAttr - jQuery Plugin
 *
 * Version: 1.0.0
 * Revision: $Rev$
 * Date: $Date$
 */
void function($) {
  $.fn.replaceAttr = function(attribute_name, pattern, replacement) {
    this.each(
      function(index, element) {
        var $element = $(element);
        $element.attr(attribute_name, $element.attr(attribute_name).replace(pattern, replacement));
      }
    );
    return this;
  };
}(jQuery);

