(function($) {

    function randomString(length = 5) {
        const randomChars = "ankpfjioAHNsfgouiABNguiabhiut9127840128590901";
        let ret = "";

        for(let i=0; i < length; i++) ret += randomChars.charAt(Math.floor(Math.random() * randomChars.length));

        return ret;
    }
    jQuery.extend( jQuery.fn, {
        hasParent: function( pSelector ) {
            return (this.filter(function(){
                return ($(this).closest( pSelector ).length);
            })).length > 0;
        }
    });

    jQuery.fn.extend({
        UIRadio: function(options) {
            return this.each(function(options) {
                const input = $(this);

                if (input.hasParent(".ui-radio-wrap")) {
                    return false;
                };

                const [name = randomString(5), label = ''] = [input.attr('id'), input.data('label')];

                $(this).wrap("<span class='input__container input__container--radio'/>");
                $(this).after(`<label for="${name}"><span class="icon-radio-checked"></span><span class="icon-radio-unchecked"></span>${label}</label>`).addClass("input__container--hide-input").attr("id", name);
            });
        },
        UICheckbox: function(options) {
            return this.each(function(options) {
                var input = $(this);

                if (input.hasParent(".ui-checkbox-wrap")) {
                    return false;
                }

                const [name = randomString(5), label = ''] = [input.attr('id'), input.data('label')];

                $(this).wrap("<span class='input__container input__container--checkbox'/>");
                $(this).after(`<label for="${name}"><span class="icon-checkbox-checked"></span><span class="icon-checkbox-unchecked"></span>${label}</label>`).addClass("input__container--hide-input").attr("id", name);
            });
        }
    });

    $(document).ready(function() {
        $('input[type="checkbox"]').UICheckbox();
        $('input[type="radio"]').UIRadio();
    });
})(jQuery);