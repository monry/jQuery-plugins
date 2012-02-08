/**
 * jQuery.replaceAttr - jQuery Plugin
 *
 * @author Tetsuya MORI <monry84@gmail.com>
 * @version 1.0.1
 */
void function($) {
  $.fn.replaceAttr = function(attribute_name, pattern, replacement) {
    this.each(
      function(index, element) {
        var $element = $(element);
        if ((typeof replacement == 'string')) {
          if (/#\{?\d+\}?/.test(replacement)) {
            var replacement_list = [];
            var RE = new RegExp(/#\{(\d+)\}|#(\d+)/g);
            var matches;
            while ((matches = RE.exec(replacement)) != null) {
              var index = matches[1] || matches[2];
              replacement_list[index] = matches[0];
            }
            $element.attr(
              attribute_name
              , $element.attr(attribute_name).replace(
                pattern
                , function() {
                  var argument_list = arguments;
                  $.each(
                    replacement_list
                    , function(index, value) {
                      if (typeof value == 'undefined') {
                        return;
                      }
                      replacement = replacement.replace(replacement_list[index], argument_list[index]);
                    }
                  );
                  return replacement;
                }
              )
            );
          } else {
            $element.attr(attribute_name, $element.attr(attribute_name).replace(new RegExp(pattern, 'g'), replacement));
          }
        } else {
          $element.attr(attribute_name, $element.attr(attribute_name).replace(pattern, replacement));
        }
      }
    );
    return this;
  };
}(jQuery);

