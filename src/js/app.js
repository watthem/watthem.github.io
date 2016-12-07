var animateMapHistory = true;

var $window = $(window);
var $hash_link = $('a[href*=\\#]');
var $animation_elements = $('.animation-element');

var $left, $right, $simpsons;


$('document').ready(function() {

    $left = $(".clouds-left");
    $right = $(".clouds-right");
    $simpsons = $(".the-simpsons");

});

function doSmoothScroll(event) {
    event.preventDefault();
    $('html,body').animate({
        scrollTop: $(this.hash).offset().top
    }, 1500);
}

function doIterateHistory() {

    $('.map-marker-info').each(function(i) {
        var self = this;

        setTimeout(function() {
            $(self).addClass('hovered');            
        }, 1500 * i);
        i++;
        setTimeout(function() {
            $(self).removeClass('hovered');
        }, 1500 * i);
        //noinspection JSUnusedAssignment
        i++;
    });
}

function doItForHer() {
    if($left)
        $left.addClass("to-left");
    if($right)
        $right.addClass("to-right");
    if($simpsons)
        $simpsons.addClass("simpsons-text-zoom");
}

function checkInView() {

    var window_bottom_position;
    var window_height, window_top_position;

    window_height = $window.height();
    window_top_position = $window.scrollTop();

    if (window_top_position <= 0)
        return;

    window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
        var element_bottom_position, element_height, element_top_position, $element;

        $element = $(this);
        element_height = $element.outerHeight();
        element_top_position = $element.offset().top;
        element_bottom_position = (element_top_position + element_height) + 500;

        //check to see if this current container is within viewport
        if (element_bottom_position < window_top_position) {
            $element.removeClass('in-view');

        } else if (element_top_position <= window_bottom_position) {
            $element.addClass('in-view');
            if ($element.hasClass("map-markers") && animateMapHistory) {
                doIterateHistory();
                animateMapHistory = false;
            }
            if ($element.hasClass("the-simpsons")) {
                doItForHer();
            }
        } else {
            $element.removeClass('in-view');
        }
    });
}

function toggleHello() {
    
    var $hello = $('#hello-toggle');    

    if (!$hello.prop('checked')) {
        $hello.prop('checked', true);
    }
}

function toggleResume() {
    
    var $resume = $('#resume-toggle');    

    if (!$resume.prop('checked')) {
        $resume.prop('checked', true);
    }
}


$window.on('scroll resize', checkInView);

$hash_link.on('click', doSmoothScroll);

$window.trigger('scroll');