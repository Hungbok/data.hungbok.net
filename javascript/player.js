$(document).ready(function() {
    
    let query = window.location.search;
    let param = new URLSearchParams(query);
    let id = param.get('v');
    
    if (id === "enabled") {
        $(".external-links").append('<div class="player-open">'+
            '<a class="external-link-content" target="_blank">'+
                '<img src="/img/icon/play_circle.svg" onerror="this.remove ? this.remove() : this.removeNode();" loading="lazy">'+
            '</a>'+
        '</div>');
        $("body").append('<div class="player-playlist-section player-hide">'+
                '<div class="player-playlist">'+
                    '<ul class="tabs"></ul>'+
                '</div>'+
            '</div>');
        // 파라미터에서 'q' 값을 가져옴
        const params = new URLSearchParams(window.location.search);
        const queryParam = params.get("q");
        
        if (queryParam) {
            // JSON 파일 가져오기
            $.getJSON(`/data/anime/${queryParam}.json`, function (data) {
                const url = data.url;
                const defaultvideo = data.player1id1;
                const defaultepisode = data.player1epi1;
                const defaulttitle = data.player1title1;

                var player_value = data.playercount;
                var tabCounts = [
                    data.tab1count,
                    data.tab2count,
                    data.tab3count,
                    data.tab4count,
                    data.tab5count,
                    data.tab6count,
                    data.tab7count,
                    data.tab8count,
                    data.tab9count,
                    data.tab10count,
                    data.tab11count,
                    data.tab12count,
                    data.tab13count,
                    data.tab14count,
                    data.tab15count,
                    data.tab16count,
                    data.tab17count,
                    data.tab18count,
                    data.tab19count,
                    data.tab20count,
                    data.tab21count,
                    data.tab22count,
                    data.tab23count,
                    data.tab24count,
                    data.tab25count,
                    data.tab26count,
                    data.tab27count,
                    data.tab28count,
                    data.tab29count,
                    data.tab30count,
                    data.tab31count,
                    data.tab32count,
                    data.tab33count,
                    data.tab34count,
                    data.tab35count,
                    data.tab36count,
                    data.tab37count,
                    data.tab38count,
                    data.tab39count,
                    data.tab40count,
                    data.tab41count,
                    data.tab42count,
                    data.tab43count,
                    data.tab44count,
                    data.tab45count,
                    data.tab46count,
                    data.tab47count,
                    data.tab48count,
                    data.tab49count,
                    data.tab50count,
                    data.tab51count,
                    data.tab52count,
                    data.tab53count,
                    data.tab54count,
                    data.tab55count,
                    data.tab56count,
                    data.tab57count,
                    data.tab58count,
                    data.tab59count,
                    data.tab60count,
                    data.tab61count,
                    data.tab62count,
                    data.tab63count,
                    data.tab64count,
                    data.tab65count,
                    data.tab66count,
                    data.tab67count,
                    data.tab68count,
                    data.tab69count,
                    data.tab70count,
                    data.tab71count,
                    data.tab72count,
                    data.tab73count,
                    data.tab74count,
                    data.tab75count,
                    data.tab76count,
                    data.tab77count,
                    data.tab78count,
                    data.tab79count,
                    data.tab80count,
                    data.tab81count,
                    data.tab82count,
                    data.tab83count,
                    data.tab84count,
                    data.tab85count,
                    data.tab86count,
                    data.tab87count,
                    data.tab88count,
                    data.tab89count,
                    data.tab90count,
                    data.tab91count,
                    data.tab92count,
                    data.tab93count,
                    data.tab94count,
                    data.tab95count,
                    data.tab96count,
                    data.tab97count,
                    data.tab98count,
                    data.tab99count,
                    data.tab100count,
                ];
                var playerData = [];
                for (var i = 1; i <= player_value; i++) {
                    var playerTab = 'tab-' + i;
                    var playerName = data['playername' + i];

                    playerData.push({
                        tab: playerTab,
                        name: playerName,
                    });
                }
                playerData.forEach(function(item) {
                    $(".player-playlist").prepend('<div id="' + item.tab + '" class="default' + item.tab + ' tab-content"></div>');
                    $(".tabs").append('<li class="default' + item.tab + ' tab-link" data-tab="' + item.tab + '">' + item.name + '</li>');
                    $('.defaulttab-1').addClass('current');
                });
                tabCounts.forEach(function (tabCount, countIndex) {
                    for (var j = 1; j <= tabCount; j++) {
                        var ptext = data['player' + (countIndex + 1) + 'text' + j];
                        var ptitle = data['player' + (countIndex + 1) + 'title' + j];
                        var pepisode = data['player' + (countIndex + 1) + 'epi' + j];
                        var pdate = data['player' + (countIndex + 1) + 'date' + j];
                        var pid = data['player' + (countIndex + 1) + 'id' + j];
                        var pres = data['player' + (countIndex + 1) + 'res' + j];
                        var pimage = 'player' + (countIndex + 1) + '_' + j;
                        var ptime = data['player' + (countIndex + 1) + 'time' + j];
                        var psub = data['player' + (countIndex + 1) + 'sub' + j];
                        var pdub = data['player' + (countIndex + 1) + 'dub' + j];
                        var pnumber = data['player_' + j];
            
                        $('#tab-' + (countIndex + 1)).append('<div id="' + pimage + '" class="story-card player" playid="' + pid + '" playepi="' + pepisode + '" playtitle="' + ptitle + '">'+
                                '<div class="story-image">'+
                                    '<img class="story-background" src="/img/hungbok/hb_error_horizontal.svg">'+
                                    '<img class="story-background" src="/img/anime/' + url + '/' + pimage + '.avif" onerror="this.remove ? this.remove() : this.removeNode();">'+
                                '</div>'+
                                '<div class="player-info">'+
                                    '<div class="story-title">'+
                                        '<p>' + pepisode + '&nbsp;|&nbsp;' + ptitle + '</p>'+
                                        '<p ttt=' + pres + '><img src="/img/icon/' + pres + '.svg" onerror="this.src=`/img/icon/warning.svg`;"></p>'+
                                        '<p ttt=' + pdub + '><img src="/img/icon/headphones.svg" onerror="this.src=`/img/icon/warning.svg`;"></p>'+
                                        '<p ttt=' + psub + '><img src="/img/icon/subtitles.svg" onerror="this.src=`/img/icon/warning.svg`;"></p>'+
                                    '</div>'+
                                    '<div class="story-description">'+
                                        '<p>' + ptext + '</p>'+
                                    '</div>'+
                                    '<div class="story-date">'+
                                        '<p>' + ptime + '&nbsp;·&nbsp;' + pdate + '</p>'+
                                    '</div>'+
                                '</div>'+
                            '</div>');
                    }
                });

                $.fn.grtyoutube = function(options) {
                    return this.each(function() {
                        var getvideoid = defaultvideo;
                        var settings = $.extend({
                            videoID: getvideoid,
                            autoPlay: true,
                            theme: "dark"
                        }, options);
                        if (settings.autoPlay === true) {
                            settings.autoPlay = 1;
                        } else if (settings.autoPlay === false) {
                            settings.autoPlay = 0;
                        }
                        if (settings.theme === "dark") {
                            settings.theme = "grtyoutube-dark-theme";
                        } else if (settings.theme === "light") {
                            settings.theme = "grtyoutube-light-theme";
                        }
                        if (getvideoid) {
                            $(this).on("click", function() {
                                $('.player-playlist').append('<span class="grtyoutube-popup-close"></span><span class="grtyoutube-loading"></span><iframe class="grtyoutube-iframe" id="player" src="https://player.vimeo.com/video/' + settings.videoID + '" width="1920" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe><div class="player-titles"><p class="player-episode">' + defaultepisode + '</p><p class="player-title">' + defaulttitle + '</p></div>');
                                $('body').addClass('lb-disable-scrolling');
                                $('#element').on('scroll touchmove mousewheel', function(event) {
                                    event.preventDefault();
                                    event.stopPropagation();
                                    return false;
                                });
                                $('.player-playlist-section').removeClass('player-hide').addClass('player-show');
                            });
                        }
                        $(this).on('click', function(event) {
                            event.preventDefault();
                            $(".grtyoutube-popup-close").click(function() {
                                var $popup = $(".player-playlist-section");
                                $popup.removeClass('player-show');
                                $popup.addClass('player-hide');
                                var $popupcon = $(".grtyoutube-popup-close, .grtyoutube-loading, .grtyoutube-iframe, .player-titles");
                                $popupcon.remove();
                                $('body').removeClass('lb-disable-scrolling');
                                $('#element').off('scroll touchmove mousewheel');
                            });
                        });
                        $(document).keyup(function(event) {
                            if (event.keyCode == 27) {
                                var $popup = $(".player-playlist-section");
                                $popup.removeClass('player-show');
                                $popup.addClass('player-hide');
                                var $popupcon = $(".grtyoutube-popup-close, .grtyoutube-loading, .grtyoutube-iframe, .player-titles");
                                $popupcon.remove();
                                $('body').removeClass('lb-disable-scrolling');
                                $('#element').off('scroll touchmove mousewheel');
                            }
                        });
                    });
                };
                $(".player-open").grtyoutube({
                    autoPlay: true,
                    theme: "dark"
                });
            })
        }
    }
});