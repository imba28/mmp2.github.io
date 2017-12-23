(function($) {
    $(document).ready(function() {
        $(".nav .nav__item a").click(function() {
            $(".nav__item--active").removeClass("nav__item--active");
            $(this).parent().addClass("nav__item--active");
        });

        // show actual section
        $(document).on("scroll", changeNavActiveOnScroll);

        // smoothscroll
        $(".nav .nav__item a").click(function(event) {
            if (this.hash !== "") {
                console.log(this.hash);
                event.preventDefault();

                var hash = this.hash;
                var pos = $(hash).offset().top

                $("html,body").animate({scrollTop: pos}, 800);
            }
        });
    });
})($);



function changeNavActiveOnScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.nav .nav__item a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.nav .nav__item').removeClass("nav__item--active");
            $(this).parent().addClass("nav__item--active");
        }
        else {
            currLink.removeClass("nav__item--active");
        }
    });
}