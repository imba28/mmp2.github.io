(function($) {
    $(document).ready(function() {
        $(".nav .nav__item a").click(function() {
            $(".nav__item--active").removeClass("nav__item--active");
            $(this).parent().addClass("nav__item--active");
        });
    });
})($);