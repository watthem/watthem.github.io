/**
 * Created by mscoh on 10/13/2016.
 */
$('document').ready(function () {
    $('a[href*=\\#]').on('click', function (event) {
        event.preventDefault();
        $('html,body').animate({scrollTop: $(this.hash).offset().top}, 1500);
    });


    var $window = $(window);

    var mapTop = $(".map-me").offset().top;

    var once = true;
    $(window).scroll(function () {
        var scroll = $window.scrollTop();

        if (scroll > mapTop * .25) {
            if (once) {
                ShowMyHistory();
                once = false;
            }
        }
    });


    function ShowMyHistory() {
        $('.map-marker-info').each(function (i, value) {
            var self = this;
            setTimeout(function () {
                $(self).addClass('hovered');
            }, 1500 * i);
            i++;
            setTimeout(function () {
                $(self).removeClass('hovered');
            }, 1500 * i);
            i++;
        });
    }

    var $window = $(window);
    var lastScroll = 0;
    var $left = $(".left");
    var $right = $(".right");
    var $text = $(".the-simpsons");
    var top = $(".simpsons-intro").offset().top;
    $(window).scroll(function () {
        DoItForHer();
    });

    $(window).on({
        'touchmove': function () {
            DoItForHer();
        }
    });

    function DoItForHer() {
        var scroll = $window.scrollTop();

        if (scroll > top * .25) {
            if (scroll > lastScroll) {
                $left.addClass("to-left");
                $right.addClass("to-right");
                $text.addClass("zoom");
            } else {
                $left.removeClass("to-left");
                $right.removeClass("to-right");
                $text.removeClass("zoom");
            }
            lastScroll = scroll;
        }
    }



var words = ["Oh, why thank you", "I'm blushing", "Oh stop!", "I couldn't be more proud", "Well... ok :)", "Appreciate ya", "Yes - I am quite good at that", "I'm humbled", "That was nice of you", "Do you think? Gee, thanks"]


$(".ranger").each(function (index) {

    setSkills(this);
});

$('.ranger').bind('change mousemove', function () {
    setSkills(this);
});

$('.ranger').on('change', function () {
    var w;
    if ($(this).val() > 5) {
        if (words.length <= 1) {
            w = "I did say stop earlier...";
        } else {
            var i = Math.floor(Math.random() * words.length);
            w = words[i]
        }

        var target = $(this).parents('ul').next('.words');
        $(target).fadeIn("slow").text(w).fadeOut(2000);
        words.splice(i, 1);
    }
});


function setSkills(element) {
    var value = $(element).val() * 30;    
    var offset = value + 3;
    $(element).css(
        'background',
        'linear-gradient(to right, #5B7DA2 0%, #5B7DA2 ' + value + '%, #b3b3b3 ' + value + '%, #b3b3b3 ' + offset + '%, #808080 ' + value + '%, #808080 100%)'
    );


}

});