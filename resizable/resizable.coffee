_ = ($)->
  $.fn.resizable = (options)->
    settings = $.extend({ duration: 250, callback: -> }, options)

    $div = $(this).filter('div').each(
      ->
        $element = $(this).css(
          resize: 'none'
          'overflow-y': 'hidden'
        )
        if !$element.children('[data-resizable-inner="1"]').length
          $element.html($('<div>').attr('data-resizable-inner': 1, 'contenteditable': 'true').css(width: $element.width(), height: 'auto', 'min-height': $element.height()).html($element.html()))
        $editable = $($element.find('[data-resizable-inner="1"]')[0])
        resize = ->
          $element.animate({ height: $editable.height() }, settings.duration).promise().then(settings.callback)
          return
        $editable.unbind('.resizable').bind('change.resizable', resize).bind('keyup.resizable', resize)
        return $element
    );
    this

_(jQuery)
