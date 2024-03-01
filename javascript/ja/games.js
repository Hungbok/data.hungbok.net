async function loadAsyncScripts() {
    // 동영상 팝업 재생
    await loadScript('//data.hungbok.net/javascript/youtube-popup.js');
    // 이미지 팝업 슬라이드쇼
    await loadScript('//data.hungbok.net/javascript/lightbox.js');
    // 이미지 및 동영상 슬라이드쇼
    await loadScript('//data.hungbok.net/javascript/slick.js');
    await loadScript('//data.hungbok.net/javascript/html_loader.js');
    await loadScript('//data.hungbok.net/javascript/ja/error404.js');
}

function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

$(document).ready(function(){
    // 파라미터에서 'q' 값을 가져옴
    const params = new URLSearchParams(window.location.search);
    const queryParam = params.get("q");
    
    if (queryParam) {
        // JSON 파일 가져오기
        $.getJSON(`//data.hungbok.net/data/games/${queryParam}.json`, function (data) {
            // JSON 데이터를 HTML에 대체삽입

            $("#page-title").text(data['ja'].title + ' | HungBok');
            $('body').addClass('body-' + data.type + ' ' + data['ja'].lang);
            $('#report-title').attr('value', 'https://www.hungbok.com' + data.page);

            document.body.innerHTML = document.body.innerHTML.replace(/{type}/g, data.type);
            document.body.innerHTML = document.body.innerHTML.replace(/{title}/g, data['ja'].title);
            document.body.innerHTML = document.body.innerHTML.replace(/{developer}/g, data['ja'].developer);
            document.body.innerHTML = document.body.innerHTML.replace(/{info_developer}/g, data['ja'].info_developer);
            document.body.innerHTML = document.body.innerHTML.replace(/{publisher}/g, data['ja'].publisher);
            document.body.innerHTML = document.body.innerHTML.replace(/{info_publisher}/g, data['ja'].info_publisher);
            document.body.innerHTML = document.body.innerHTML.replace(/{platform}/g, data.platform);
            document.body.innerHTML = document.body.innerHTML.replace(/{release}/g, data['ja'].release);
            document.body.innerHTML = document.body.innerHTML.replace(/{genre}/g, data['ja'].genre);
            document.body.innerHTML = document.body.innerHTML.replace(/{mode}/g, data['ja'].mode);
            document.body.innerHTML = document.body.innerHTML.replace(/{franchise}/g, data['ja'].franchise);

            document.body.innerHTML = document.body.innerHTML.replace(/{pc}/g, data.pc);
            document.body.innerHTML = document.body.innerHTML.replace(/{console}/g, data.console);
            document.body.innerHTML = document.body.innerHTML.replace(/{mobile}/g, data.mobile);
            document.body.innerHTML = document.body.innerHTML.replace(/{esd}/g, data.esd);
            document.body.innerHTML = document.body.innerHTML.replace(/{release_date}/g, data['ja'].release_date);
            document.body.innerHTML = document.body.innerHTML.replace(/{engine}/g, data['ja'].engine);
            document.body.innerHTML = document.body.innerHTML.replace(/{age}/g, data.age);
            document.body.innerHTML = document.body.innerHTML.replace(/{esrb}/g, data.esrb);
            document.body.innerHTML = document.body.innerHTML.replace(/{pegi}/g, data.pegi);
            document.body.innerHTML = document.body.innerHTML.replace(/{iarc}/g, data.iarc);
            document.body.innerHTML = document.body.innerHTML.replace(/{cero}/g, data.cero);
            document.body.innerHTML = document.body.innerHTML.replace(/{grac}/g, data.grac);
            document.body.innerHTML = document.body.innerHTML.replace(/{usk}/g, data.usk);
            document.body.innerHTML = document.body.innerHTML.replace(/{acb}/g, data.acb);
            document.body.innerHTML = document.body.innerHTML.replace(/{gsrr}/g, data.gsrr);
            document.body.innerHTML = document.body.innerHTML.replace(/{rars}/g, data.rars);
            document.body.innerHTML = document.body.innerHTML.replace(/{classind}/g, data.classind);
            document.body.innerHTML = document.body.innerHTML.replace(/{appstoreage}/g, data.appstoreage);

            document.body.innerHTML = document.body.innerHTML.replace(/{en_audio}/g, data.en_audio);
            document.body.innerHTML = document.body.innerHTML.replace(/{en_text}/g, data.en_text);
            document.body.innerHTML = document.body.innerHTML.replace(/{id_audio}/g, data.id_audio);
            document.body.innerHTML = document.body.innerHTML.replace(/{id_text}/g, data.id_text);
            document.body.innerHTML = document.body.innerHTML.replace(/{ms_audio}/g, data.ms_audio);
            document.body.innerHTML = document.body.innerHTML.replace(/{ms_text}/g, data.ms_text);
            document.body.innerHTML = document.body.innerHTML.replace(/{cs_audio}/g, data.cs_audio);
            document.body.innerHTML = document.body.innerHTML.replace(/{cs_text}/g, data.cs_text);
            document.body.innerHTML = document.body.innerHTML.replace(/{da_audio}/g, data.da_audio);
            document.body.innerHTML = document.body.innerHTML.replace(/{da_text}/g, data.da_text);
            document.body.innerHTML = document.body.innerHTML.replace(/{de_audio}/g, data.de_audio);
            document.body.innerHTML = document.body.innerHTML.replace(/{de_text}/g, data.de_text);
            document.body.innerHTML = document.body.innerHTML.replace(/{es_audio}/g, data.es_audio);
            document.body.innerHTML = document.body.innerHTML.replace(/{es_text}/g, data.es_text);
            document.body.innerHTML = document.body.innerHTML.replace(/{fr_audio}/g, data.fr_audio);
            document.body.innerHTML = document.body.innerHTML.replace(/{fr_text}/g, data.fr_text);
            document.body.innerHTML = document.body.innerHTML.replace(/{es_mx_audio}/g, data.es_mx_audio);
            document.body.innerHTML = document.body.innerHTML.replace(/{es_mx_text}/g, data.es_mx_text);
            document.body.innerHTML = document.body.innerHTML.replace(/{it_audio}/g, data.it_audio);
            document.body.innerHTML = document.body.innerHTML.replace(/{it_text}/g, data.it_text);
            document.body.innerHTML = document.body.innerHTML.replace(/{hu_audio}/g, data.hu_audio);
            document.body.innerHTML = document.body.innerHTML.replace(/{hu_text}/g, data.hu_text);
            document.body.innerHTML = document.body.innerHTML.replace(/{nl_audio}/g, data.nl_audio);
            document.body.innerHTML = document.body.innerHTML.replace(/{nl_text}/g, data.nl_text);
            document.body.innerHTML = document.body.innerHTML.replace(/{no_audio}/g, data.no_audio);
            document.body.innerHTML = document.body.innerHTML.replace(/{no_text}/g, data.no_text);
            document.body.innerHTML = document.body.innerHTML.replace(/{pl_audio}/g, data.pl_audio);
            document.body.innerHTML = document.body.innerHTML.replace(/{pl_text}/g, data.pl_text);
            document.body.innerHTML = document.body.innerHTML.replace(/{pt_audio}/g, data.pt_audio);
            document.body.innerHTML = document.body.innerHTML.replace(/{pt_text}/g, data.pt_text);
            document.body.innerHTML = document.body.innerHTML.replace(/{ro_audio}/g, data.ro_audio);
            document.body.innerHTML = document.body.innerHTML.replace(/{ro_text}/g, data.ro_text);
            document.body.innerHTML = document.body.innerHTML.replace(/{fi_audio}/g, data.fi_audio);
            document.body.innerHTML = document.body.innerHTML.replace(/{fi_text}/g, data.fi_text);
            document.body.innerHTML = document.body.innerHTML.replace(/{sv_audio}/g, data.sv_audio);
            document.body.innerHTML = document.body.innerHTML.replace(/{sv_text}/g, data.sv_text);
            document.body.innerHTML = document.body.innerHTML.replace(/{vi_audio}/g, data.vi_audio);
            document.body.innerHTML = document.body.innerHTML.replace(/{vi_text}/g, data.vi_text);
            document.body.innerHTML = document.body.innerHTML.replace(/{tr_audio}/g, data.tr_audio);
            document.body.innerHTML = document.body.innerHTML.replace(/{tr_text}/g, data.tr_text);
            document.body.innerHTML = document.body.innerHTML.replace(/{bg_audio}/g, data.bg_audio);
            document.body.innerHTML = document.body.innerHTML.replace(/{bg_text}/g, data.bg_text);
            document.body.innerHTML = document.body.innerHTML.replace(/{ru_audio}/g, data.ru_audio);
            document.body.innerHTML = document.body.innerHTML.replace(/{ru_text}/g, data.ru_text);
            document.body.innerHTML = document.body.innerHTML.replace(/{uk_audio}/g, data.uk_audio);
            document.body.innerHTML = document.body.innerHTML.replace(/{uk_text}/g, data.uk_text);
            document.body.innerHTML = document.body.innerHTML.replace(/{el_audio}/g, data.el_audio);
            document.body.innerHTML = document.body.innerHTML.replace(/{el_text}/g, data.el_text);
            document.body.innerHTML = document.body.innerHTML.replace(/{ar_audio}/g, data.ar_audio);
            document.body.innerHTML = document.body.innerHTML.replace(/{ar_text}/g, data.ar_text);
            document.body.innerHTML = document.body.innerHTML.replace(/{hi_audio}/g, data.hi_audio);
            document.body.innerHTML = document.body.innerHTML.replace(/{hi_text}/g, data.hi_text);
            document.body.innerHTML = document.body.innerHTML.replace(/{th_audio}/g, data.th_audio);
            document.body.innerHTML = document.body.innerHTML.replace(/{th_text}/g, data.th_text);
            document.body.innerHTML = document.body.innerHTML.replace(/{ja_audio}/g, data.ja_audio);
            document.body.innerHTML = document.body.innerHTML.replace(/{ja_text}/g, data.ja_text);
            document.body.innerHTML = document.body.innerHTML.replace(/{ko_audio}/g, data.ko_audio);
            document.body.innerHTML = document.body.innerHTML.replace(/{ko_text}/g, data.ko_text);
            document.body.innerHTML = document.body.innerHTML.replace(/{pt_br_audio}/g, data.pt_br_audio);
            document.body.innerHTML = document.body.innerHTML.replace(/{pt_br_text}/g, data.pt_br_text);
            document.body.innerHTML = document.body.innerHTML.replace(/{zh_cn_audio}/g, data.zh_cn_audio);
            document.body.innerHTML = document.body.innerHTML.replace(/{zh_cn_text}/g, data.zh_cn_text);
            document.body.innerHTML = document.body.innerHTML.replace(/{zh_tw_audio}/g, data.zh_tw_audio);
            document.body.innerHTML = document.body.innerHTML.replace(/{zh_tw_text}/g, data.zh_tw_text);

            document.body.innerHTML = document.body.innerHTML.replace(/{social}/g, data.social);
            document.body.innerHTML = document.body.innerHTML.replace(/{store}/g, data.store);

            document.body.innerHTML = document.body.innerHTML.replace(/{attention}/g, data.attention);
            document.body.innerHTML = document.body.innerHTML.replace(/{plot}/g, data['ja'].plot);
            document.body.innerHTML = document.body.innerHTML.replace(/{source}/g, data['ja'].source);
            document.body.innerHTML = document.body.innerHTML.replace(/{update}/g, data['ja'].update);

            document.body.innerHTML = document.body.innerHTML.replace(/{url}/g, data.url);
            document.body.innerHTML = document.body.innerHTML.replace(/{share}/g, data.share);
            document.body.innerHTML = document.body.innerHTML.replace(/{page}/g, data.page);
            document.body.innerHTML = document.body.innerHTML.replace(/{logo}/g, data.logo);
            document.body.innerHTML = document.body.innerHTML.replace(/{capsule}/g, data.capsule);
            document.body.innerHTML = document.body.innerHTML.replace(/{poster}/g, data.poster);
            document.body.innerHTML = document.body.innerHTML.replace(/{thumbnail}/g, data.thumbnail);
            document.body.innerHTML = document.body.innerHTML.replace(/{background}/g, data.background);
            document.body.innerHTML = document.body.innerHTML.replace(/{franchise1}/g, data.franchise1);
            document.body.innerHTML = document.body.innerHTML.replace(/{franchise2}/g, data.franchise2);
            document.body.innerHTML = document.body.innerHTML.replace(/{franchise3}/g, data.franchise3);
            document.body.innerHTML = document.body.innerHTML.replace(/{franchise4}/g, data.franchise4);
            document.body.innerHTML = document.body.innerHTML.replace(/{franchise5}/g, data.franchise5);

            // 통합 const
            const url = data.url;
    
            // 반복생성

            var video_value = data.videocount; // video 수
            var videoData = [];
            for (var i = 1; i <= video_value; i++) {
                var videoId = data['videoid' + i];
                var videoTitle = data['ja']['videotitle' + i];
                var videoServer = data['videoserver' + i];
                videoData.push({
                    id: videoId,
                    title: videoTitle,
                    server: videoServer,
                });
            }
            // video 생성
            videoData.forEach(function(item) {
                $(".slider-main").append('<div class="slider-item">'+
                    '<div class="video-play-button youtube-link" videoid="' + item.id + '">'+
                        '<img class="slider-background" src="//data.hungbok.net/image/games/' + url + '/hb_' + item.id + '.jpg" onerror="this.src=`//data.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                        '<div class="youtube-title">' + item.title + '</div>'+
                    '</div>'+
                '</div>');
                $(".slider-nav").append('<div class="slider-item">'+
                    '<div class="video-play-button">'+
                        '<img class="slider-background" src="//data.hungbok.net/image/games/' + url + '/hb_' + item.id + '.jpg" onerror="this.src=`//data.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                    '</div>'+
                '</div>');
            });
    
            var image_value = data.imagecount; // image 수
            var imageData = [];
            for (var i = 1; i <= image_value; i++) {
                var imageImage = 'image_' + i;
                imageData.push({
                    img: imageImage,
                });
            }
            // image 생성
            imageData.forEach(function(item) {
                $(".slider-main").append('<div class="slider-item">'+
                    '<a class="slider-image" href="//data.hungbok.net/image/games/' + url + '/hb_' + item.img + '.jpg" data-lightbox="preview">'+
                        '<img class="slider-background" src="//data.hungbok.net/image/games/' + url + '/hb_' + item.img + '.jpg" onerror="this.src=`//data.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                    '</a>'+
                '</div>');
                $(".slider-nav").append('<div class="slider-item">'+
                    '<a class="slider-image">'+
                        '<img class="slider-background" src="//data.hungbok.net/image/games/' + url + '/hb_' + item.img + '.jpg" onerror="this.src=`//data.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                    '</a>'+
                '</div>');
            });

            var description_value = data['ja'].descriptioncount; // description 수
            var descriptionData = [];
            for (var i = 1; i <= description_value; i++) {
                var desClass = data['ja']['pclass' + i];
                var desText = data['ja']['ptext' + i];
                descriptionData.push({
                    class: desClass,
                    text: desText,
                });
            }
            // description 생성
            descriptionData.forEach(function(item) {
                $(".description-content").append('<p class="' + item.class + '">' + item.text + '</p>');
            });

            // 틀 생성

            // 소셜 const
            const websiteurl = data.website;
            const facebookurl = data.facebook;
            const instagramurl = data.instagram;
            const threadsurl = data.threads;
            const twitterurl = data.twitter;
            const waibourl = data.waibo;
            const mastodonurl = data.mastodon;
            const discordurl = data.discord;
            const vkurl = data.vk;
            const tumblrurl = data.tumblr;
            const navercafeurl = data.navercafe;
            const youtubeurl = data.youtube;
            const twitchurl = data.twitch;
            const tiktokurl = data.tiktok;
            const douyinurl = data.douyin;
            const niconicodougaurl = data.niconicodouga;
            const bilibiliurl = data.bilibili;
            const kakaotalkurl = data.kakaotalk;
            const lineurl = data.line;
            const whatsappurl = data.whatsapp;
            const linkedinurl = data.linkedin;
            const wikipediaurl = data.wikipedia;
            const wikipediaenurl = data.wikipediaen;
            const wikipediajaurl = data.wikipediaja;
            const fandomurl = data.fandom;
            const namuwikiurl = data.namuwiki;
            const niconicodaihyakkaurl = data.niconicodaihyakka;
            const pixivhyakkajitenurl = data.pixivhyakkajiten;
            const baidubaikeurl = data.baidubaike;
            const kickurl = data.kick;
            const kakaostoryurl = data.kakaostory;
            const telegramurl = data.telegram;
            const snapchaturl = data.snapchat;
            const wechaturl = data.wechat;
            const qqurl = data.qq;
            const redditurl = data.reddit;

            // 소셜 링크

            // https://www.example.com
            $(".website").append('<div class="external-link" ttt="Official Website">'+
                '<a class="external-link-button icon-website" href="' + websiteurl + '" target="_blank"></a>'+
            '</div>');

            // https://www.facebook.com/FortniteGame
            $(".facebook").append('<div class="external-link" ttt="facebook">'+
                '<a class="external-link-button icon-facebook" href="https://www.facebook.com/' + facebookurl + '" target="_blank"></a>'+
            '</div>');

            // https://www.instagram.com/rockstargames
            $(".instagram").append('<div class="external-link" ttt="Instagram">'+
                '<a class="external-link-button icon-instagram" href="https://www.instagram.com/' + instagramurl + '" target="_blank"></a>'+
            '</div>');

            // https://x.com/CyberpunkGame
            $(".x").append('<div class="external-link" ttt="X">'+
                '<a class="external-link-button icon-x" href="https://x.com/' + twitterurl + '" target="_blank"></a>'+
            '</div>');

            // https://www.threads.net/@rockstargames
            $(".threads").append('<div class="external-link" ttt="Threads">'+
                '<a class="external-link-button icon-threads" href="https://www.threads.net/' + threadsurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://weibo.com/ysmihoyo
            $(".waibo").append('<div class="external-link" ttt="Weibo">'+
                '<a class="external-link-button icon-waibo" href="https://weibo.com/' + waibourl + '" target="_blank"></a>'+
            '</div>');
            
            // https://mastodon.social/@SteamDB@infosec.exchange
            $(".mastodon").append('<div class="external-link" ttt="Mastodon">'+
                '<a class="external-link-button icon-mastodon" href="https://mastodon.social/' + mastodonurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://discord.gg/genshinimpact
            $(".discord").append('<div class="external-link" ttt="Discord">'+
                '<a class="external-link-button icon-discord" href="https://discord.gg/' + discordurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://vk.com/genshinimpact
            $(".vk").append('<div class="external-link" ttt="VK">'+
                '<a class="external-link-button icon-vk" href="https://vk.com/' + vkurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://www.tumblr.com/cyberpunkgame
            $(".tumblr").append('<div class="external-link" ttt="Tumblr">'+
                '<a class="external-link-button icon-tumblr" href="https://www.tumblr.com/' + tumblrurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://cafe.naver.com/genshin
            $(".navercafe").append('<div class="external-link" ttt="Naver Cafe">'+
                '<a class="external-link-button icon-navercafe" href="https://cafe.naver.com/' + navercafeurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://www.youtube.com/@CyberpunkGame
            $(".youtube").append('<div class="external-link" ttt="YouTube">'+
                '<a class="external-link-button icon-youtube" href="https://www.youtube.com/' + youtubeurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://www.twitch.tv/cdprojektred
            $(".twitch").append('<div class="external-link" ttt="Twitch">'+
                '<a class="external-link-button icon-twitch" href="https://www.twitch.tv/' + twitchurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://kick.com/ninja
            $(".kick").append('<div class="external-link" ttt="Kick">'+
                '<a class="external-link-button icon-kick" href="https://kick.com/' + kickurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://www.tiktok.com/@Xbox
            $(".tiktok").append('<div class="external-link" ttt="TikTok">'+
                '<a class="external-link-button icon-tiktok" href="https://www.tiktok.com/' + tiktokurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://v.douyin.com/iNkT3QN7/
            $(".douyin").append('<div class="external-link" ttt="抖音">'+
                '<a class="external-link-button icon-tiktok" href="https://v.douyin.com/' + douyinurl + '" target="_blank"></a>'+
            '</div>');
            
            // http://www.nicovideo.jp/user/15426275
            $(".niconicodouga").append('<div class="external-link" ttt="ニコニコ動画">'+
                '<a class="external-link-button icon-niconicodouga" href="https://www.nicovideo.jp/user/' + niconicodougaurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://space.bilibili.com/3461579184015582
            $(".bilibili").append('<div class="external-link" ttt="bìlibìli">'+
                '<a class="external-link-button icon-bilibili" href="https://space.bilibili.com/' + bilibiliurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://pf.kakao.com/_DzxjIb
            $(".kakaotalk").append('<div class="external-link" ttt="KakaoTalk">'+
                '<a class="external-link-button icon-kakaotalk" href="https://pf.kakao.com/' + kakaotalkurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://story.kakao.com/ch/nintendokorea
            $(".kakaostory").append('<div class="external-link" ttt="KakaoStory">'+
                '<a class="external-link-button icon-kakaostory" href="https://story.kakao.com/ch/' + kakaostoryurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://line.me/ti/p/@playstation
            $(".line").append('<div class="external-link" ttt="LINE">'+
                '<a class="external-link-button icon-line" href="https://line.me/ti/p/' + lineurl + '" target="_blank"></a>'+
            '</div>');
            
            // 
            $(".telegram").append('<div class="external-link" ttt="Telegram">'+
                '<a class="external-link-button icon-telegram" href="' + telegramurl + '" target="_blank"></a>'+
            '</div>');
            
            // 
            $(".snapchat").append('<div class="external-link" ttt="Snapchat">'+
                '<a class="external-link-button icon-snapchat" href="' + snapchaturl + '" target="_blank"></a>'+
            '</div>');
            
            // https://www.whatsapp.com/channel/0029Va4J1hI5a248Y7hu6A2Y
            $(".whatsapp").append('<div class="external-link" ttt="WhatsApp">'+
                '<a class="external-link-button icon-whatsapp" href="https://www.whatsapp.com/channel/' + whatsappurl + '" target="_blank"></a>'+
            '</div>');
            
            // 
            $(".wechat").append('<div class="external-link" ttt="WeChat">'+
                '<a class="external-link-button icon-wechat" href="' + wechaturl + '" target="_blank"></a>'+
            '</div>');
            
            // 
            $(".qq").append('<div class="external-link" ttt="QQ">'+
                '<a class="external-link-button icon-qq" href="' + qqurl + '" target="_blank"></a>'+
            '</div>');
            
            // 
            $(".reddit").append('<div class="external-link" ttt="reddit">'+
                '<a class="external-link-button icon-reddit" href="' + redditurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://www.linkedin.com/company/iointeractive/
            $(".linkedin").append('<div class="external-link" ttt="LinkedIn">'+
                '<a class="external-link-button icon-linkedin" href="https://www.linkedin.com/company/' + linkedinurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://en.wikipedia.org/wiki/Counter-Strike
            $(".wikipedia").append('<div class="external-link" ttt="Wikipedia">'+
                '<a class="external-link-button icon-wikipedia" href="https://en.wikipedia.org/wiki/' + wikipediaurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://en.wikipedia.org/wiki/Counter-Strike_2
            $(".wikipediaen").append('<div class="external-link us" ttt="Wikipedia">'+
                '<a class="external-link-button icon-wikipedia" href="https://en.wikipedia.org/wiki/' + wikipediaenurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://ja.wikipedia.org/wiki/カウンターストライク
            $(".wikipediaja").append('<div class="external-link jp" ttt="Wikipedia">'+
                '<a class="external-link-button icon-wikipedia" href="https://ja.wikipedia.org/wiki/' + wikipediajaurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://counterstrike.fandom.com/
            $(".fandom").append('<div class="external-link" ttt="FANDOM">'+
                '<a class="external-link-button icon-fandom" href="https://' + fandomurl + '.fandom.com" target="_blank"></a>'+
            '</div>');
            
            // https://namu.wiki/w/사이버펑크%202077
            $(".namuwiki").append('<div class="external-link" ttt="나무위키">'+
                '<a class="external-link-button icon-namuwiki" href="https://namu.wiki/w/' + namuwikiurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://dic.nicovideo.jp/a/steam
            $(".niconicodaihyakka").append('<div class="external-link" ttt="ニコニコ大百科">'+
                '<a class="external-link-button icon-niconicodaihyakka" href="https://dic.nicovideo.jp/a/' + niconicodaihyakkaurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://dic.pixiv.net/a/Steam
            $(".pixivhyakkajiten").append('<div class="external-link" ttt="ピクシブ百科事典">'+
                '<a class="external-link-button icon-pixivhyakkajiten" href="https://dic.pixiv.net/a/' + pixivhyakkajitenurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://baike.baidu.com/item/Steam/10092959
            $(".baidubaike").append('<div class="external-link" ttt="百度百科">'+
                '<a class="external-link-button icon-baidubaike" href="https://baike.baidu.com/item/' + baidubaikeurl + '" target="_blank"></a>'+
            '</div>');

            // ESD const
            const steamurl = data.steam;
            const epicgamesstoreurl = data.epicgamesstore;
            const gogcomurl = data.gog;
            const eaappurl = data.ea;
            const ubisoftconnecturl = data.ubisoft;
            const rockstargameslauncherurl = data.rockstargames;
            const stoveurl = data.stove;
            const metastoreurl = data.metastore;
            const googleplayurl = data.googleplay;
            const appstoreurl = data.appstore;
            const galaxystoreurl = data.galaxystore;
            const microsoftstoreurl = data.msstore;
            const dmmgamesurl = data.dmm;
            const dlsiteurl = data.dlsite;
            const amazonlunaurl = data.amazonluna;
            const geforcenowurl = data.geforcenow;
            const xboxcloudgamingurl = data.xboxcloudgaming;
            const stadiaurl = data.stadia;

            // ESD 링크
            $(".steam").append('<div class="external-link" ttt="Steam">'+
                '<a class="external-link-button icon-steam" href="https://store.steampowered.com/app/' + steamurl + '" target="_blank"></a>'+
            '</div>');

            $(".epicgamesstore").append('<div class="external-link" ttt="Epic Games Store">'+
                '<a class="external-link-button icon-epicgamesstore" href="https://store.epicgames.com/p/' + epicgamesstoreurl + '" target="_blank"></a>'+
            '</div>');

            $(".gog").append('<div class="external-link" ttt="GOG.com">'+
                '<a class="external-link-button icon-gogcom" href="https://www.gog.com/game/' + gogcomurl + '" target="_blank"></a>'+
            '</div>');

            $(".ea").append('<div class="external-link" ttt="EA">'+
                '<a class="external-link-button icon-eaapp" href="https://www.ea.com/games/' + eaappurl + '/buy/pc" target="_blank"></a>'+
            '</div>');

            $(".ubisoft").append('<div class="external-link" ttt="Ubisoft Store">'+
                '<a class="external-link-button icon-ubisoftconnect" href="https://store.ubisoft.com/' + ubisoftconnecturl + '.html" target="_blank"></a>'+
            '</div>');

            $(".msstore").append('<div class="external-link" ttt="Microsoft Store">'+
                '<a class="external-link-button icon-microsoftstore" href="https://apps.microsoft.com/detail/' + microsoftstoreurl + '" target="_blank"></a>'+
            '</div>');

            // battle.net
            const battleneturl = data.battlenet;
            const battlenetusurl = data.battlenetus;
            const battleneteuurl = data.battleneteu;
            const battlenetkrurl = data.battlenetkr;
            const battlenettwurl = data.battlenettw;
            $(".battlenet").append('<div class="external-link" ttt="Battle.net">'+
                '<a class="external-link-button icon-battlenet" href="https://shop.battle.net/product/' + battleneturl + '" target="_blank"></a>'+
            '</div>');
            $(".battlenetus").append('<div class="external-link" ttt="Battle.net">'+
                '<a class="external-link-button icon-battlenet" href="https://us.shop.battle.net/product/' + battlenetusurl + '" target="_blank"></a>'+
            '</div>');
            //

            $(".rockstargames").append('<div class="external-link" ttt="Rockstar Games Store">'+
                '<a class="external-link-button icon-rockstargameslauncher" href="https://store.rockstargames.com/game/buy-' + rockstargameslauncherurl + '" target="_blank"></a>'+
            '</div>');

            $(".stove").append('<div class="external-link" ttt="STOVE">'+
                '<a class="external-link-button icon-stove" href="https://store.onstove.com/games/' + stoveurl + '" target="_blank"></a>'+
            '</div>');

            $(".metastore").append('<div class="external-link" ttt="Meta Store">'+
                '<a class="external-link-button icon-metastore" href="https://www.meta.com/experiences/' + metastoreurl + '" target="_blank"></a>'+
            '</div>');

            $(".dmm").append('<div class="external-link" ttt="DMM GAMES">'+
                '<a class="external-link-button icon-dmmgames" href="https://' + dmmgamesurl + '" target="_blank"></a>'+
            '</div>');

            $(".dlsite").append('<div class="external-link" ttt="DLsite">'+
                '<a class="external-link-button icon-dlsite" href="https://' + dlsiteurl + '" target="_blank"></a>'+
            '</div>');

            // xbox store
            const xboxgamesstoreurl = data.xboxstore;
            const xboxgamesstorexbourl = data.xboxstorexbo;
            const xboxgamesstorexsxurl = data.xboxstorexsx;
            $(".xboxstore").append('<div class="external-link" ttt="Xbox Store">'+
                '<a class="external-link-button icon-xboxgamesstore" href="https://www.microsoft.com/store/productid/' + xboxgamesstoreurl + '" target="_blank"></a>'+
            '</div>');
            $(".xboxstorexbo").append('<div class="external-link" ttt="Xbox One | Xbox Store">'+
                '<a class="external-link-button icon-xboxgamesstore" href="https://www.microsoft.com/store/productid/' + xboxgamesstorexbourl + '" target="_blank"></a>'+
            '</div>');
            $(".xboxstorexsx").append('<div class="external-link" ttt="Xbox Series X|S | Xbox Store">'+
                '<a class="external-link-button icon-xboxgamesstore" href="https://www.microsoft.com/store/productid/' + xboxgamesstorexsxurl + '" target="_blank"></a>'+
            '</div>');
            //

            // playstation store
            const playstationstoreurl = data.psstore;
            const playstationstoreps4url = data.psstoreps4;
            const playstationstoreps5url = data.psstoreps5;
            const playstationstorejpurl = data.psstorejp;
            const playstationstorenaurl = data.psstorena;
            const playstationstoreeuurl = data.psstoreeu;
            const playstationstoreusurl = data.psstoreus;
            const playstationstorecaurl = data.psstoreca;
            const playstationstoremxurl = data.psstoremx;
            const playstationstoreukurl = data.psstoreuk;
            const playstationstorefrurl = data.psstorefr;
            const playstationstoredeurl = data.psstorede;
            const playstationstoreiturl = data.psstoreit;
            const playstationstorenlurl = data.psstorenl;
            const playstationstorebeurl = data.psstorebe;
            const playstationstoreplurl = data.psstorepl;
            const playstationstoreczurl = data.psstorecz;
            const playstationstoreesurl = data.psstorees;
            const playstationstorepturl = data.psstorept;
            const playstationstorekrurl = data.psstorekr;
            const playstationstorehkurl = data.psstorehk;
            const playstationstoretwurl = data.psstoretw;
            const playstationstoreauurl = data.psstoreau;
            const playstationstorenzurl = data.psstorenz;
            const playstationstorebrurl = data.psstorebr;
            const playstationstorearurl = data.psstorear;
            const playstationstorezaurl = data.psstoreza;
            const playstationstoreuscamxurl = data.psstoreuscamx;
            const playstationstoreukfrdeurl = data.psstoreukfrde;
            const playstationstorekrhktwurl = data.psstorekrhktw;
            const playstationstorehktwurl = data.psstorehktw;
            const playstationstoreaunzurl = data.psstoreaunz;
            const playstationstorebrarurl = data.psstorebrar;
            const playstationstorenaeuurl = data.psstorenaeu;
            const playstationstorenajpurl = data.psstorenajp;
            $(".psstore").append('<div class="external-link" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstoreurl + '" target="_blank"></a>'+
            '</div>');
            $(".psstoreps4").append('<div class="external-link" ttt="PlayStation 4 | PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstoreps4url + '" target="_blank"></a>'+
            '</div>');
            $(".psstoreps5").append('<div class="external-link" ttt="PlayStation 5 | PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstoreps5url + '" target="_blank"></a>'+
            '</div>');
            $(".psstorenajp").append('<div class="external-link" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstorenajpurl + '" target="_blank"></a>'+
            '</div>');
            $(".psstorejp").append('<div class="external-link" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstorejpurl + '" target="_blank"></a>'+
            '</div>');
            //

            // nintendo eshop
            const nintendoeshopurl = data.eshop;
            const nintendoeshopjpurl = data.eshopjp;
            const nintendoeshopnaurl = data.eshopna;
            const nintendoeshopeuurl = data.eshopeu;
            const nintendoeshopusurl = data.eshopus;
            const nintendoeshopcaurl = data.eshopca;
            const nintendoeshopmxurl = data.eshopmx;
            const nintendoeshopukurl = data.eshopuk;
            const nintendoeshopfrurl = data.eshopfr;
            const nintendoeshopdeurl = data.eshopde;
            const nintendoeshopiturl = data.eshopit;
            const nintendoeshopnlurl = data.eshopnl;
            const nintendoeshopbeurl = data.eshopbe;
            const nintendoeshopplurl = data.eshoppl;
            const nintendoeshopczurl = data.eshopcz;
            const nintendoeshopesurl = data.eshopes;
            const nintendoeshoppturl = data.eshoppt;
            const nintendoeshopkrurl = data.eshopkr;
            const nintendoeshophkurl = data.eshophk;
            const nintendoeshoptwurl = data.eshoptw;
            const nintendoeshopauurl = data.eshopau;
            const nintendoeshopnzurl = data.eshopnz;
            const nintendoeshopbrurl = data.eshopbr;
            const nintendoeshoparurl = data.eshopar;
            const nintendoeshopzaurl = data.eshopza;
            const nintendoeshopuscamxurl = data.eshopuscamx;
            const nintendoeshopukfrdeurl = data.eshopukfrde;
            const nintendoeshopkrhktwurl = data.eshopkrhktw;
            const nintendoeshophktwurl = data.eshophktw;
            const nintendoeshopaunzurl = data.eshopaunz;
            const nintendoeshopbrarurl = data.eshopbrar;
            const nintendoeshopnaeuurl = data.eshopnaeu;
            const nintendoeshopnajpurl = data.eshopnajp;
            $(".eshop").append('<div class="external-link" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="https://www.nintendo.com/store/products/' + nintendoeshopurl + '" target="_blank"></a>'+
            '</div>');
            $(".eshopjp").append('<div class="external-link" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="https://ec.nintendo.com/JP/ja/titles/' + nintendoeshopjpurl + '" target="_blank"></a>'+
            '</div>');
            //

            $(".googleplay").append('<div class="external-link" ttt="Google Play">'+
                '<a class="external-link-button icon-googleplay" href="https://play.google.com/store/apps/details?id=' + googleplayurl + '" target="_blank"></a>'+
            '</div>');

            $(".appstore").append('<div class="external-link" ttt="App Store">'+
                '<a class="external-link-button icon-appstore" href="https://apps.apple.com/app/id' + appstoreurl + '" target="_blank"></a>'+
            '</div>');

            $(".galaxystore").append('<div class="external-link" ttt="Galaxy Store">'+
                '<a class="external-link-button icon-galaxystore" href="https://galaxystore.samsung.com/detail/' + galaxystoreurl + '" target="_blank"></a>'+
            '</div>');

            // https://luna.amazon.com/detail/B0BTRVRN6M
            $(".luna").append('<div class="external-link" ttt="Amazon Luna">'+
                '<a class="external-link-button icon-amazonluna" href="https://luna.amazon.com/detail/' + amazonlunaurl + '" target="_blank"></a>'+
            '</div>');

            // https://nvda.ws/3Qee2Mx
            $(".geforcenow").append('<div class="external-link" ttt="GeForce NOW">'+
                '<a class="external-link-button icon-geforcenow" href="https://nvda.ws/' + geforcenowurl + '" target="_blank"></a>'+
            '</div>');

            // https://www.xbox.com/play/games/BT5P2X999VH2
            $(".xboxcloud").append('<div class="external-link" ttt="Xbox Cloud Gaming">'+
                '<a class="external-link-button icon-xboxcloudgaming" href="https://www.xbox.com/play/games/' + xboxcloudgamingurl + '" target="_blank"></a>'+
            '</div>');

            // https://stadia.google.com/store/details/990ec302c2cd4ba7817cedcf633ab20frcp1/sku/7ac7671e9f4342bd8c55ca140cf94138p
            $(".stadia").append('<div class="external-link" ttt="Stadia">'+
                '<a class="external-link-button icon-stadia" href="https://stadia.google.com/store/details/' + stadiaurl + '" target="_blank"></a>'+
            '</div>');

            // 얼리엑세스 틀
            $(".early-access").append('<p class="description-title">このゲームは早期アクセスゲームです。</p>'+
            '<p>早期アクセスゲームは開発中であり、今後大幅に変更される場合があります。その結果、このゲームをプレイ中に予期せぬ問題や、完全に新しいゲームプレイ要素に遭遇する場合があります。</p>'+
            '<p>開発途中のゲームを今すぐプレイするか、あるいはより完成されたゲーム体験が提供されるまで待つことができます。</p>'+
            '<p class="description-link"><a href="https://www.hungbok.com/" target="_blank">さらに詳しく</a></p>');
    
            var description = document.querySelector('.description');
            var showMore = document.querySelector('.show-more');
            
            if(description.offsetHeight > 1000){
                description.style.maxHeight = "1000px";
                showMore.style.display = "block";
            }

            const data_import_type_first = data.data_import_type_first;
            const data_import_first = data.data_import_first;
            const data_import_type_second = data.data_import_type_second;
            const data_import_second = data.data_import_second;
            const data_import_type_third = data.data_import_type_third;
            const data_import_third = data.data_import_third;

            $(".dlc").append('<p class="description-title">このコンテンツはダウンロードコンテンツです。</p>'+
            '<p>このコンテンツをプレイするには以下の製品のひとつが必要です。</p>'+
            '<div>'+
                '<p class="data-import" data-type={data_import_type_first} data-file={data_import_first}>'+
                    '<a href="https://www.hungbok.com/' + data_import_type_first + '?p=' + data_import_first + '" target="_blank">'+
                        '<img src="//data.hungbok.net/image/' + data_import_type_first + '/' + data_import_first + '/hb_capsule.jpg" onerror="this.src=`//data.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                    '</a>'+
                    '<a data-placeholder="title"></a>'+
                '</p>'+
                '<p class="data-import" data-type={data_import_type_second} data-file={data_import_second}>'+
                    '<a href="https://www.hungbok.com/' + data_import_type_second + '?p=' + data_import_second + '" target="_blank">'+
                        '<img src="//data.hungbok.net/image/' + data_import_type_second + '/' + data_import_second + '/hb_capsule.jpg" onerror="this.src=`//data.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                        '</a>'+
                        '<a data-placeholder="title"></a>'+
                '</p>'+
                '<p class="data-import" data-type={data_import_type_third} data-file={data_import_third}>'+
                    '<a href="https://www.hungbok.com/' + data_import_type_third + '?p=' + data_import_third + '" target="_blank">'+
                        '<img src="//data.hungbok.net/image/' + data_import_type_third + '/' + data_import_third + '/hb_capsule.jpg" onerror="this.src=`//data.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                        '</a>'+
                        '<a data-placeholder="title"></a>'+
                '</p>'+
            '</div>');

            $(".mod").append('<p class="description-title">このコンテンツは Mod またはアドオンです。</p>'+
            '<p>このコンテンツをプレイするには以下の製品が必要です。</p>'+
            '<div>'+
                '<p class="data-import" data-type={data_import_type_first} data-file={data_import_first}>'+
                    '<a href="https://www.hungbok.com/' + data_import_type_first + '?p=' + data_import_first + '" target="_blank">'+
                        '<img src="//data.hungbok.net/image/' + data_import_type_first + '/' + data_import_first + '/hb_capsule.jpg" onerror="this.src=`//data.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                    '</a>'+
                    '<a data-placeholder="title"></a>'+
                '</p>'+
                '<p class="data-import" data-type={data_import_type_second} data-file={data_import_second}>'+
                    '<a href="https://www.hungbok.com/' + data_import_type_second + '?p=' + data_import_second + '" target="_blank">'+
                        '<img src="//data.hungbok.net/image/' + data_import_type_second + '/' + data_import_second + '/hb_capsule.jpg" onerror="this.src=`//data.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                        '</a>'+
                        '<a data-placeholder="title"></a>'+
                '</p>'+
                '<p class="data-import" data-type={data_import_type_third} data-file={data_import_third}>'+
                    '<a href="https://www.hungbok.com/' + data_import_type_third + '?p=' + data_import_third + '" target="_blank">'+
                        '<img src="//data.hungbok.net/image/' + data_import_type_third + '/' + data_import_third + '/hb_capsule.jpg" onerror="this.src=`//data.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                        '</a>'+
                        '<a data-placeholder="title"></a>'+
                '</p>'+
            '</div>');

            $(".mode").append('<p class="description-title">このコンテンツはゲームモードです。</p>'+
            '<p>以下の製品に含まれています。</p>'+
            '<div>'+
                '<p class="data-import" data-type={data_import_type_first} data-file={data_import_first}>'+
                    '<a href="https://www.hungbok.com/' + data_import_type_first + '?p=' + data_import_first + '" target="_blank">'+
                        '<img src="//data.hungbok.net/image/' + data_import_type_first + '/' + data_import_first + '/hb_capsule.jpg" onerror="this.src=`//data.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                    '</a>'+
                    '<a data-placeholder="title"></a>'+
                '</p>'+
                '<p class="data-import" data-type={data_import_type_second} data-file={data_import_second}>'+
                    '<a href="https://www.hungbok.com/' + data_import_type_second + '?p=' + data_import_second + '" target="_blank">'+
                        '<img src="//data.hungbok.net/image/' + data_import_type_second + '/' + data_import_second + '/hb_capsule.jpg" onerror="this.src=`//data.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                        '</a>'+
                        '<a data-placeholder="title"></a>'+
                '</p>'+
                '<p class="data-import" data-type={data_import_type_third} data-file={data_import_third}>'+
                    '<a href="https://www.hungbok.com/' + data_import_type_third + '?p=' + data_import_third + '" target="_blank">'+
                        '<img src="//data.hungbok.net/image/' + data_import_type_third + '/' + data_import_third + '/hb_capsule.jpg" onerror="this.src=`//data.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                        '</a>'+
                        '<a data-placeholder="title"></a>'+
                '</p>'+
            '</div>');

            document.body.innerHTML = document.body.innerHTML.replace(/{data_import_type_first}/g, data.data_import_type_first);
            document.body.innerHTML = document.body.innerHTML.replace(/{data_import_first}/g, data.data_import_first);
            document.body.innerHTML = document.body.innerHTML.replace(/{data_import_type_second}/g, data.data_import_type_second);
            document.body.innerHTML = document.body.innerHTML.replace(/{data_import_second}/g, data.data_import_second);
            document.body.innerHTML = document.body.innerHTML.replace(/{data_import_type_third}/g, data.data_import_type_third);
            document.body.innerHTML = document.body.innerHTML.replace(/{data_import_third}/g, data.data_import_third);
            
            function loadJSON(file, callback) {
                var xhr = new XMLHttpRequest();
                xhr.overrideMimeType("application/json");
                xhr.open('GET', file, true);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        callback(xhr.responseText);
                    }
                };
                xhr.send(null);
            }
            
            function updateElementWithData(element) {
                var elementType = element.getAttribute('data-type');
                var elementId = element.getAttribute('data-file');
                var jsonFile = '//data.hungbok.net/data/' + elementType + '/' + elementId + '.json';
            
                loadJSON(jsonFile, function (response) {
                    var jsonData = JSON.parse(response);
                    var placeholders = element.querySelectorAll('[data-placeholder]');
            
                    placeholders.forEach(function (placeholder) {
                        var key = placeholder.getAttribute('data-placeholder');
                        if (jsonData.hasOwnProperty('ko') && jsonData['ko'].hasOwnProperty(key)) {
                            placeholder.innerText = jsonData['ko'][key];
                        }
                    });
                });
            }
            
            var dataImportElements = document.querySelectorAll('.data-import');
            
            dataImportElements.forEach(function (element) {
                updateElementWithData(element);
            });
        });
    } else {
        $('body').addClass('ja');
        $('.section').remove();
        $('.top-backgrounds').remove();
        $('main').append('<div class="game-section">'+
            '<div class="owl-carousel custom-carousel owl-theme">'+
                '<div class="item" style="background-image: url(https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S1_03_2560x1440-359e77d3cd0a40aebf3bbc130d14c5c7);">'+
                    '<div class="item-desc">'+
                        '<h3>Cyberpunk 2077</h3>'+
                        '<p>Cyberpunk 2077 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.</p>'+
                        '<div class="slide-progress-main">'+
                            '<div class="progressBar"></div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="item" style="background-image: url(https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f);">'+
                    '<div class="item-desc">'+
                        '<h3>The Witcher 3: Wild Hunt</h3>'+
                        '<p>The Witcher 3 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.</p>'+
                        '<div class="slide-progress-main">'+
                            '<div class="progressBar"></div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="item" style="background-image: url(https://cdn1.epicgames.com/epic/offer/RDR2PC1227_Epic%20Games_860x1148-860x1148-b4c2210ee0c3c3b843a8de399bfe7f5c.jpg);">'+
                    '<div class="item-desc">'+
                        '<h3>Red Dead Redemption 2</h3>'+
                        '<p>Red Dead Redemption 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.</p>'+
                        '<div class="slide-progress-main">'+
                            '<div class="progressBar"></div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="item" style="background-image: url(https://cdn1.epicgames.com/spt-assets/53ec4985296b4facbe3a8d8d019afba9/pubg-battlegrounds-1lbll.jpg?h=2560&quality=high&resize=1&w=1440);">'+
                    '<div class="item-desc">'+
                        '<h3>PUBG: BATTLEGROUNDS</h3>'+
                        '<p>PUBG 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.</p>'+
                        '<div class="slide-progress-main">'+
                            '<div class="progressBar"></div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="item" style="background-image: url(https://cdn1.epicgames.com/offer/fn/Blade_2560x1440_2560x1440-95718a8046a942675a0bc4d27560e2bb);">'+
                    '<div class="item-desc">'+
                        '<h3>Fortnite</h3>'+
                        '<p>Battle royale where 100 players fight to be the last person standing. which was a community-created mod for Blizzard Entertainment\'s Warcraft III.</p>'+
                        '<div class="slide-progress-main">'+
                            '<div class="progressBar"></div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="item" style="background-image: url(https://cdn1.epicgames.com/offer/611482b8586142cda48a0786eb8a127c/EGS_DeadbyDaylight_BehaviourInteractive_S1_2560x1440-a32581cf9948a9a2e24b2ff15c1577c7);">'+
                    '<div class="item-desc">'+
                        '<h3>Dead by Daylight</h3>'+
                        '<p>Dead by Daylight is a 2018 first-person shooter game developed by Ubisoft. which was a community-created mod for Blizzard Entertainment\'s Warcraft III.</p>'+
                        '<div class="slide-progress-main">'+
                            '<div class="progressBar"></div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="item" style="background-image: url(https://cdn1.epicgames.com/offer/0c05e0889c3e42a4be1d81077d6e653a/SAB_Store_Landscape_2560x1440_2560x1440-00b4029199a7a6778fd27dec96f08a28);">'+
                    '<div class="item-desc">'+
                        '<h3>SKULL AND BONES™</h3>'+
                        '<p>SKULL AND BONES™ is a 2018 first-person shooter game developed by Ubisoft. which was a community-created mod for Blizzard Entertainment\'s Warcraft III.</p>'+
                        '<div class="slide-progress-main">'+
                            '<div class="progressBar"></div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="item" style="background-image: url(https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S1_2560x1440-055bbe0f10c1778fcbd134f2de02daf6);">'+
                    '<div class="item-desc">'+
                        '<h3>VALORANT</h3>'+
                        '<p>VALORANT is a 2018 first-person shooter game developed by Ubisoft. which was a community-created mod for Blizzard Entertainment\'s Warcraft III.</p>'+
                        '<div class="slide-progress-main">'+
                            '<div class="progressBar"></div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="item" style="background-image: url(https://cdn.cloudflare.steamstatic.com/steam/apps/271590/hero_capsule.jpg?t=1671484916);">'+
                    '<div class="item-desc">'+
                        '<h3>Grand Theft Auto V: Premium Edition</h3>'+
                        '<p>Grand Theft Auto V: Premium Edition is a 2018 first-person shooter game developed by Ubisoft. which was a community-created mod for Blizzard Entertainment\'s Warcraft III.</p>'+
                        '<div class="slide-progress-main">'+
                            '<div class="progressBar"></div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="item" style="background-image: url(https://cdn1.epicgames.com/salesEvent/salesEvent/Landscape%20Product%20image-JAP_2560x1440-e038a07c8f4ced528ff97619017058e5);">'+
                    '<div class="item-desc">'+
                        '<h3>Genshin Impact</h3>'+
                        '<p>Genshin Impact is a 2018 first-person shooter game developed by Ubisoft. which was a community-created mod for Blizzard Entertainment\'s Warcraft III.</p>'+
                        '<div class="slide-progress-main">'+
                            '<div class="progressBar"></div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="item eleven">'+
                    '<div class="item-desc">'+
                        '<h3></h3>'+
                        '<p></p>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'+
        '<div class="discover-section">'+
            '<div class="discover-title">'+
                '<div class="discover-text">新しく追加された</div>'+
            '</div>'+
            '<div class="discover-container">'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//data.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/minecraft/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//data.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/detroit-become-human/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//data.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/inside/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//data.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/grand-theft-auto-5/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//data.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/cyberpunk-2077/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
            '<div class="discover-title">'+
                '<div class="discover-text">発売予定</div>'+
            '</div>'+
            '<div class="discover-container">'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//data.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/stray/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//data.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/biohazard-7-resident-evil/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//data.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/journey/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//data.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/biohazard-2/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//data.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/portal-2/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
            '<div class="discover-title">'+
                '<div class="discover-text">スチーム</div>'+
            '</div>'+
            '<div class="discover-container">'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//data.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/detroit-become-human/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//data.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/inside/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//data.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/minecraft/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//data.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/cyberpunk-2077/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//data.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/grand-theft-auto-5/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
            '<div class="discover-title">'+
                '<div class="discover-text">エピックゲームズストア</div>'+
            '</div>'+
            '<div class="discover-container">'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//data.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/biohazard-2/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//data.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/portal-2/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//data.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/biohazard-7-resident-evil/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//data.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/stray/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//data.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/journey/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
            '<div class="discover-title">'+
                '<div class="discover-text">コンソール</div>'+
            '</div>'+
            '<div class="discover-container">'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//data.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/minecraft/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//data.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/portal-2/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//data.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/inside/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//data.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/grand-theft-auto-5/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//data.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/biohazard-7-resident-evil/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>');
        $.getScript('//data.hungbok.net/javascript/owl.carousel.min.js', function() {
            // 스크립트가 성공적으로 로드되고 실행된 후에 실행할 코드를 작성합니다.
            // 이 코드는 your_script.js 파일 내의 함수 또는 기능을 호출할 수 있습니다.
            var $owl = $('.owl-carousel');

            $owl.children().each( function( index ) {
              $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
            });

            $(document).ready(function() {
                var owl = $('.owl-carousel');
                owl.owlCarousel({
                    autoWidth: true,
                    loop: true,
                    merge: true,
                    center: true,
                    autoplay: true,
                    autoplayHoverPause: true,
                    autoplayTimeout: 6000,
                    autoplaySpeed: 1000,
                    items: 1,
                    onInitialized: startProgressBar,
                    onTranslate: resetProgressBar,
                    onTranslated: startProgressBar
                });
            
                function startProgressBar() {
                    $(".progressBar").css({
                        width: "100%",
                        transition: "width 5000ms linear"
                    });
                }
            
                function resetProgressBar() {
                    $(".progressBar").css({
                        width: 0,
                        transition: "width 0ms"
                    });
                }
            
                owl.on('mouseover',function(e){
                    owl.trigger('stop.owl.autoplay');
                    var progressBar = $(".progressBar");
                    var width = progressBar.width();
                    progressBar.stop(true, true).css({
                        width: width,
                        transition: "width 0s"
                    });
                });
            
                owl.on('mouseleave',function(e){
                    owl.trigger('play.owl.autoplay');
                    startProgressBar();
                });

                owl.on('changed.owl.carousel', function(event) {
                    var item = event.item.index;   // 현재 아이템 위치
            
                    // 11번째 아이템에 도달했을 때 즉시 다음 아이템으로 이동
                    if($('.owl-item').eq(item).find('.item.eleven').length > 0) {
                        setTimeout(function() {
                            owl.trigger('next.owl.carousel');
                        }, 500);
                    }
                });
            });

            $(window).on('resize', function() {
                owl.trigger('next.owl.carousel');
            });

            $(document).ready(function () {
                // 처음 로딩되었을 때 첫번째 활성화된 .owl-item의 .item에 .active 추가
                $('.owl-stage .owl-item.center .item').addClass('active');
            
                // 슬라이드 이동 이벤트가 발생할 때마다 실행
                $('.owl-carousel').on('translated.owl.carousel', function(e) {
                    // 기존에 .active가 있던 .item에서 .active 제거
                    $('.owl-stage .owl-item .item.active').removeClass('active');
            
                    // 새로 .active가 된 첫번째 .owl-item의 .item에 .active 추가
                    $('.owl-stage .owl-item.center .item').addClass('active');
                });

                $(document).on('click', '.owl-item > div', function() {
                    // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
                    var $speed = 300;  // in ms
                    $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
                });
            });
        });
    }
});

window.addEventListener("scroll", function() {
    var scrolledHeight= window.pageYOffset;
    var newPosition = -(scrolledHeight * 0.5);
    var newPosition2 = (scrolledHeight * 0.5);
  
    if (newPosition >= -250 && newPosition <= 0) {
        document.getElementsByClassName("top-background")[0].style.backgroundPosition = "center " + newPosition + "px";
        document.getElementsByClassName("top-background-mirror")[0].style.backgroundPosition = "center " + newPosition + "px";
    }
  
    if (newPosition2 >= 0 && newPosition2 <= 250) {
        document.getElementsByClassName("top-background-shadow")[0].style.transform = "scaleX(1) scaleY(-1) translate(-50%, " + newPosition2 + "px)";
    }
});

function showError(image) {
    // URL의 쿼리 매개변수에서 'q'값을 가져옴
    var urlParams = new URLSearchParams(window.location.search);
    var q = urlParams.get('q');

    // JSON 파일 불러오기
    fetch(`//data.hungbok.net/data/games/${q}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // 'title'값을 가져와서 div에 설정
            var div = document.createElement('div');
            div.innerHTML = data.title;

            // 기존 이미지 대신 div 삽입
            image.parentNode.insertBefore(div, image);
            image.parentNode.removeChild(image);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

function hideError(image) {
    image.src = "//data.hungbok.net/image/hb/hb_error_horizontal.svg";
}

$(document).ready(function(){
    $(document).on('click', '.show-more', function(){
      var $this = $(this);
      var descriptionElement = $this.siblings('.description');
      descriptionElement.toggleClass('open');
  
      if ($this.hasClass('open')) {
        $this.removeClass('open');
      } else {
        $this.addClass('open');
      }
    });
});

window.addEventListener('load', function() {
    loadAsyncScripts();
});