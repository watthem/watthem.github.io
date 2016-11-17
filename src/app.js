var once = true;
var $window = $(window);
var $animation_elements = $('.animation-element');

$('document').ready(function() {
    $('a[href*=\\#]').on('click', function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1500);
    });

    var lastScroll = 0;
    var words = ["Oh, why thank you", "I'm blushing", "Oh stop!", "I couldn't be more proud", "Well... ok :)", "Appreciate ya", "Yes - I am quite good at that", "I'm humbled", "That was nice of you", "Do you think? Gee, thanks"]
    $(".ranger").each(function(index) {
        setSkills(this);
    });
    $('.ranger').bind('change mousemove', function() {
        setSkills(this);
    });
    $('.ranger').on('change', function() {
        var w;
        if ($(this).val() > 2) {
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
        var value = $(element).val()
        var percentValue = value * 30;
        var offset = percentValue + 3;
        $(element).css(
            'background',
            'linear-gradient(to right, #5B7DA2 0%, #5B7DA2 ' + percentValue + '%, #b3b3b3 ' + percentValue + '%, #b3b3b3 ' + offset + '%, #808080 ' + percentValue + '%, #808080 100%)'
        );
        if (value == 1) {
            $(element).prop('title', 'learning');
        } else if (value == 2) {
            $(element).prop('title', 'comfortable');
        } else if (value == 3) {
            $(element).prop('title', 'experienced');
        }
    }
});

function ShowMyHistory() {
    $('.map-marker-info').each(function(i, value) {
        var self = this;
        setTimeout(function() {
            $(self).addClass('hovered');
        }, 1500 * i);
        i++;
        setTimeout(function() {
            $(self).removeClass('hovered');
        }, 1500 * i);
        i++;
    });
}

function DoItForHer() {
    $(".left").addClass("to-left");
    $(".right").addClass("to-right");
    $(".the-simpsons").addClass("zoom");
}


function check_if_in_view() {

    var window_height = $window.height();
    var window_top_position = $window.scrollTop();

    if (window_top_position <= 0)
        return;
    check_on_harvey();
    var window_bottom_position = (window_top_position + window_height);
    $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
            if ($element.hasClass("map-marker")) {
                if (once) {
                    ShowMyHistory();
                    once = false;
                }
            }
            if ($element.hasClass("the-simpsons")) {
                DoItForHer();
            }
            if ($element.hasClass("my-name")){
                $(".intro-overlay").addClass("active");
                $(".intro-overlay-header").addClass("active");
            }
        } else {
            $element.removeClass('in-view');
        }
    });
}

function check_on_harvey() {
    if ($('#logo-helper').prop('checked')) {
        $('#logo-helper').prop('checked', false)
    }
}
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');