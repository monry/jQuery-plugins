void function($) {
  $(
    function() {
      module('$.replaceAttr');
      test(
        'String to String'
        , function() {
          equal($('#qunit-fixture-string').replaceAttr('data-datetime', '-', '/').attr('data-datetime'), '2012/02/03 12:34:56');
        }
      );
      test(
        'RegExp to Function'
        , function() {
          equal(
            $('#qunit-fixture-regexp1').replaceAttr(
              'data-datetime'
              , /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/
              , function(whole, year, month, day, hour, minute, second, offset, matched) {
                return year + '年' + month + '月' + day + '日 ' + hour + '時' + minute + '分' + second + '秒';
              }
            ).attr('data-datetime')
            , '2012年02月03日 12時34分56秒'
          );
        }
      );
      test(
        'RegExp to String'
        , function() {
          expect(2);
          equal($('#qunit-fixture-regexp1').replaceAttr('data-datetime', /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/, '#1年#2月#3日 #4時#5分#6秒').attr('data-datetime'), '2012年02月03日 12時34分56秒');
          equal($('#qunit-fixture-regexp1').replaceAttr('data-datetime', /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/, '#{1}年#{2}月#{3}日 #{4}時#{5}分#{6}秒').attr('data-datetime'), '2012年02月03日 12時34分56秒');
        }
      );
    }
  );
}(jQuery);
