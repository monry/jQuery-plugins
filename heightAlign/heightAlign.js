/**
 * jQuery.heightAlign - jQuery Plugin
 *
 * @author Tetsuya MORI <monry84@gmail.com>
 * @version 1.0.0
 */
(
  function($) {
    $.fn.heightAlign = function(option_list) {
      // {{{ 変数初期化
      var default_list, setting_list;
      default_list = {
        group_attr: false,
        group_cycle: false
      };
      setting_list = $.extend(default_list, option_list);
      // }}}

      void function(targets, context, selector) {
        // {{{ 高さリスト構築
        var height_list = {};
        var cycle_list = {};
        targets.each(
          function(index, element) {
            var key = '';
            if (setting_list.group_attr) {
              key += $(element).attr(setting_list.group_attr);
            }
            if (setting_list.group_cycle) {
              if (typeof cycle_list[key] == 'undefined') {
                cycle_list[key] = 0;
              } else {
                cycle_list[key]++;
              }
              var cycle_key = Math.floor(cycle_list[key] / setting_list.group_cycle);
              key += '\t' + cycle_key;
              $(element).attr('data-jquery-heightalign-cycle', cycle_key);
            }
            if (typeof height_list[key] == 'undefined') {
              height_list[key] = 0;
            }
            if (height_list[key] < $(element).height()) {
              height_list[key] = $(element).height();
            }
          }
        );
        // }}}

        // {{{ 高さリストを元に高さを実際に調整
        $.each(
          height_list
          , function(key, value) {
            var _selector = selector;
            if (setting_list.group_cycle) {
              var _ = key.split(/\t/);
              key = _[0];
              _selector += '[data-jquery-heightalign-cycle="' + _[1] + '"]';
            }
            if (setting_list.group_attr) {
              _selector += '[' + setting_list.group_attr + '="' + key + '"]';
            }
            $(_selector, context).height(value);
          }
        );
        // }}}
      }(this, $(this).context, $(this).selector);

      return this;
    }
  }
)(jQuery);

