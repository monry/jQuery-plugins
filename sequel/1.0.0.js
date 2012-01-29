/*
 * jQuery.sequel - jQuery Plugin
 *
 * Version: 1.0.0
 * Revision: $Rev$
 * Date: $Date$
 */
void function($) {
  $.fn.sequel = function(option_list) {
    var default_list = {
      'signature': '====',
      'lang': $.sequel.getBrowserLanguage(),
      'effect': 'blind',
      'duration_hide': 250,
      'duration_show': 500
    };
    if (typeof option_list == 'string') {
      option_list = {
        'signature': option_list
      };
    }

    var setting_list = $.extend(default_list, option_list);
    if (!setting_list.anchor_text) {
      setting_list.anchor_text = $.sequel.anchor_text_list[setting_list.lang];
    }

    var counter = 0;
    $(this).each(
      function() {
        if ($(this).html().match(new RegExp('^([\\s\\S]*?)' + setting_list.signature + '([\\s\\S]*?)$'))) {
          var matches = [
            RegExp.$0,
            RegExp.$1,
            RegExp.$2
          ];
          $.sequel.html_list.push(matches[2]);
          $(this)
            .html(
              matches[1]
              + '<a href="#" data-jquery-sequel-index="' + counter + '">'
              + setting_list.anchor_text
              + '</a>'
            )
            .addClass('has-sequel')
          ;
          counter++;
        }
      }
    );

    $('a[data-jquery-sequel-index]').live(
      'click'
      , function(event) {
        event.preventDefault();
        if (setting_list.effect && setting_list.effect) {
          var $a = $(this);
          var $div = $('<div>').hide().html($.sequel.html_list[$(this).attr('data-jquery-sequel-index')]);
          $.when(
            $a.hide(setting_list.effect, setting_list.duration_hide)
          ).pipe(
            function() {
              $a.replaceWith($div);
              $div.show(setting_list.effect, setting_list.duration_show)
            }
          ).then(
            function() {
              $a.remove();
            }
          );
        } else {
          $(this).replaceWith($.sequel.html_list[$(this).attr('data-jquery-sequel-index')]);
        }
      }
    );

    return this;
  };

  $.sequel = {
    'html_list': [],
    'anchor_text_list': {
      'ja': '続きを読む',
      'en': 'Read more...',
      '': 'Read more...'
    },
    'getBrowserLanguage': function() {
      return (
        window.navigator.userLanguage
        || window.navigator.browserLanguage 
        || window.navigator.language
        || ''
      ).substr(0,2);
    }
  };
}(jQuery);

