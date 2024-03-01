$(document).ready(function() {
    function openVideo(e, videoID, url) {
        e.preventDefault();

        var $popup = $('<div class="grtyoutube-popup" style="display: none;"></div>');
        var $content = $('<div class="grtyoutube-popup-content"></div>');
        $content.append('<span class="grtyoutube-popup-close"></span><span class="grtyoutube-loading"></span><iframe class="grtyoutube-iframe" src="' + url + videoID + '?autoplay=1" width="1920" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>');
        $popup.append($content);
        $("body").append($popup);

        $popup.fadeIn();

        $('body').addClass('lb-disable-scrolling');
        $('#element').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        });

        $(".grtyoutube-popup-close, .grtyoutube-popup").click(function() {
            var $popup = $(".grtyoutube-popup");

            $popup.fadeOut(400, function() {
                $(this).remove();
            });

            $('body').removeClass('lb-disable-scrolling');
            $('#element').off('scroll touchmove mousewheel');
        });

        $(document).keyup(function(event) {
            if (event.keyCode == 27) {
                var $popup = $(".grtyoutube-popup");
                
                $popup.fadeOut(400, function() {
                    $(this).remove();
                });

                $('body').removeClass('lb-disable-scrolling');
                $('#element').off('scroll touchmove mousewheel');
            }
        });
    }

    $(document).on('click', '.youtube-link', function(e) {
        var videoID = $(this).attr("videoid");
        openVideo(e, videoID, 'https://www.youtube.com/embed/');
    });

    $(document).on('click', '.vimeo-link', function(e) {
        var videoID = $(this).attr("videoid");
        openVideo(e, videoID, 'https://player.vimeo.com/video/');
    });
});
