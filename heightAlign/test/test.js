void function($) {
  $(
    function() {
      module('$.heightAlign');
      test(
        'No options'
        , function() {
          $('#qunit-fixture-normal p.align').heightAlign();
          equal($('#qunit-fixture-normal div:eq(0) p.align').height(), $('#qunit-fixture-normal div:eq(2) p.align').height());
        }
      );
      test(
        'Group 1 (group by `data-row` attribute)'
        , function() {
          expect(3);
          equal($('#qunit-fixture-attr div:eq(1) p.align').height(), $('#qunit-fixture-attr div:eq(3) p.align').height());
          $('#qunit-fixture-attr p.align').heightAlign({group_attr: 'data-row'});
          equal($('#qunit-fixture-attr div:eq(0) p.align').height(), $('#qunit-fixture-attr div:eq(2) p.align').height());
          notEqual($('#qunit-fixture-attr div:eq(1) p.align').height(), $('#qunit-fixture-attr div:eq(3) p.align').height());
        }
      );
      test(
        'Group 2 (group by `data-col` attribute)'
        , function() {
          expect(3);
          equal($('#qunit-fixture-attr div:eq(6) p.align').height(), $('#qunit-fixture-attr div:eq(2) p.align').height());
          $('#qunit-fixture-attr p.align').heightAlign({group_attr: 'data-col'});
          equal($('#qunit-fixture-attr div:eq(0) p.align').height(), $('#qunit-fixture-attr div:eq(6) p.align').height());
          notEqual($('#qunit-fixture-attr div:eq(6) p.align').height(), $('#qunit-fixture-attr div:eq(2) p.align').height());
        }
      );
      test(
        'Cycle 1 (group by 3 cycle)'
        , function() {
          expect(3);
          equal($('#qunit-fixture-cycle div:eq(1) p.align').height(), $('#qunit-fixture-cycle div:eq(3) p.align').height());
          $('#qunit-fixture-cycle p.align').heightAlign({group_cycle: 3});
          equal($('#qunit-fixture-cycle div:eq(0) p.align').height(), $('#qunit-fixture-cycle div:eq(2) p.align').height());
          notEqual($('#qunit-fixture-cycle div:eq(1) p.align').height(), $('#qunit-fixture-cycle div:eq(3) p.align').height());
        }
      );
      test(
        'Cycle 2 (group by 4 cycle)'
        , function() {
          expect(3);
          equal($('#qunit-fixture-cycle div:eq(2) p.align').height(), $('#qunit-fixture-cycle div:eq(4) p.align').height());
          $('#qunit-fixture-cycle p.align').heightAlign({group_cycle: 4});
          equal($('#qunit-fixture-cycle div:eq(0) p.align').height(), $('#qunit-fixture-cycle div:eq(3) p.align').height());
          notEqual($('#qunit-fixture-cycle div:eq(2) p.align').height(), $('#qunit-fixture-cycle div:eq(4) p.align').height());
        }
      );
      test(
        'Mix 1 (group by `data-row` attribute / group by 3 cycle)'
        , function() {
          expect(3);
          equal($('#qunit-fixture-mix div:eq(3) p.align').height(), $('#qunit-fixture-mix div:eq(8) p.align').height());
          $('#qunit-fixture-mix p.align').heightAlign({group_attr: 'data-row', group_cycle: 3});
          equal($('#qunit-fixture-mix div:eq(0) p.align').height(), $('#qunit-fixture-mix div:eq(2) p.align').height());
          notEqual($('#qunit-fixture-mix div:eq(3) p.align').height(), $('#qunit-fixture-mix div:eq(8) p.align').height());
        }
      );
      test(
        'Mix 2 (group by `data-col` attribute / group by 2 cycle)'
        , function() {
          expect(3);
          equal($('#qunit-fixture-mix div:eq(1) p.align').height(), $('#qunit-fixture-mix div:eq(6) p.align').height());
          $('#qunit-fixture-mix p.align').heightAlign({group_attr: 'data-col', group_cycle: 2});
          equal($('#qunit-fixture-mix div:eq(2) p.align').height(), $('#qunit-fixture-mix div:eq(8) p.align').height());
          notEqual($('#qunit-fixture-mix div:eq(1) p.align').height(), $('#qunit-fixture-mix div:eq(6) p.align').height());
        }
      );
    }
  );
}(jQuery);
