(function($) {
    $(document).ready(function() {
        $('.btn--spinner')
        .on('click', function() {
            $(this).toggleClass('btn--spinner--active');
        })
        .wrapInner('<div class="btn__spinner__container"><div class="btn__spinner__inner"><div class="btn__spinner__text"></div></div></div>')
        .find('.btn__spinner__text')
        .after('<div class="btn__spinner__icon"></div>')
        .each(function() {
            var icon = $(this).closest('.btn').data('icon');
            $(this).closest('.btn').find('.btn__spinner__icon').addClass('icon-' + icon);
        });
    });
})(jQuery);