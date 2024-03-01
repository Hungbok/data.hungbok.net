async function loadAsyncScripts() {
    // 동영상 팝업 재생
    await loadScript('/data.hungbok.net/javascript/youtube-popup.js');
    // 이미지 팝업 슬라이드쇼
    await loadScript('/data.hungbok.net/javascript/lightbox.js');
    // 이미지 및 동영상 슬라이드쇼
    await loadScript('/data.hungbok.net/javascript/slick.js');
    await loadScript('/data.hungbok.net/javascript/html_loader.js');
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

document.addEventListener("DOMContentLoaded", function () {
    // 파라미터에서 'q' 값을 가져옴
    const params = new URLSearchParams(window.location.search);
    const queryParam = params.get("q");
    
    if (queryParam) {
        // JSON 파일 가져오기
        $.getJSON(`/data.hungbok.net/data/anime/${queryParam}.json`, function (data) {
            // JSON 데이터를 HTML에 대체삽입

            $("#page_title").text(data.title + ' | HungBok');
            $('body').addClass('body-' + data.type);

            document.body.innerHTML = document.body.innerHTML.replace(/{title}/g, data.title);
            document.body.innerHTML = document.body.innerHTML.replace(/{developer}/g, data.developer);
            document.body.innerHTML = document.body.innerHTML.replace(/{more_developer}/g, data.more_developer);
            document.body.innerHTML = document.body.innerHTML.replace(/{publisher}/g, data.publisher);
            document.body.innerHTML = document.body.innerHTML.replace(/{more_publisher}/g, data.more_publisher);
            document.body.innerHTML = document.body.innerHTML.replace(/{platform}/g, data.platform);
            document.body.innerHTML = document.body.innerHTML.replace(/{release}/g, data.release);

            document.body.innerHTML = document.body.innerHTML.replace(/{pc}/g, data.pc);
            document.body.innerHTML = document.body.innerHTML.replace(/{console}/g, data.console);
            document.body.innerHTML = document.body.innerHTML.replace(/{mobile}/g, data.mobile);
            document.body.innerHTML = document.body.innerHTML.replace(/{esd}/g, data.esd);
            document.body.innerHTML = document.body.innerHTML.replace(/{release_date}/g, data.release_date);
            document.body.innerHTML = document.body.innerHTML.replace(/{engine}/g, data.engine);
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

            document.body.innerHTML = document.body.innerHTML.replace(/{social}/g, data.social);
            document.body.innerHTML = document.body.innerHTML.replace(/{store}/g, data.store);

            document.body.innerHTML = document.body.innerHTML.replace(/{attention}/g, data.attention);
            document.body.innerHTML = document.body.innerHTML.replace(/{plot}/g, data.plot);
            document.body.innerHTML = document.body.innerHTML.replace(/{ptext}/g, data.ptext);
            document.body.innerHTML = document.body.innerHTML.replace(/{source}/g, data.source);
            document.body.innerHTML = document.body.innerHTML.replace(/{update}/g, data.update);

            document.body.innerHTML = document.body.innerHTML.replace(/{url}/g, data.url);
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
                var videoTitle = data['videotitle' + i];
                var videoServer = data['videoserver' + i];
                videoData.push({
                    id: videoId,
                    title: videoTitle,
                    server: videoServer,
                });
            }
            // video 생성
            videoData.forEach(function(item) {
                $(".slider").append('<div class="slider-item">'+
                    '<div class="video-play-button youtube-link" videoid="' + item.id + '">'+
                        '<img class="slider-background" src="/data.hungbok.net/image/anime/' + url + '/hb_' + item.id + '.jpg" onerror="this.src=`/data.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                        '<div class="youtube-title">' + item.title + '</div>'+
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
                $(".slider").append('<div class="slider-item">'+
                    '<a class="slider-image" href="/data.hungbok.net/image/anime/' + url + '/hb_' + item.img + '.jpg" data-lightbox="preview">'+
                        '<img class="slider-background" src="/data.hungbok.net/image/anime/' + url + '/hb_' + item.img + '.jpg" onerror="this.src=`/data.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                    '</a>'+
                '</div>');
            });

            var episode_value = data.episodecount; // episode 수
            var episodeData = [];
            for (var i = 1; i <= episode_value; i++) {
                var epClass = data['epclass' + i];
                var epText = data['eptext' + i];
                episodeData.push({
                    class: epClass,
                    text: epText,
                });
            }
            // episode 생성
            episodeData.forEach(function(item) {
                $(".episode-content").append('<p class="' + item.class + '">' + item.text + '</p>');
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
            
            // https://infosec.exchange/@SteamDB
            $(".mastodon").append('<div class="external-link" ttt="Mastodon">'+
                '<a class="external-link-button icon-mastodon" href="https://' + mastodonurl + '" target="_blank"></a>'+
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
            
            // 
            $(".kick").append('<div class="external-link" ttt="Kick">'+
                '<a class="external-link-button icon-kick" href="' + kickurl + '" target="_blank"></a>'+
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
            
            // 
            $(".kakaostory").append('<div class="external-link" ttt="KakaoStory">'+
                '<a class="external-link-button icon-kakaostory" href="' + kakaostoryurl + '" target="_blank"></a>'+
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
                '<a class="external-link-button icon-eaapp" href="https://www.ea.com/anime/' + eaappurl + '/buy/pc" target="_blank"></a>'+
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
            $(".battlenetus").append('<div class="external-link region_002" ttt="Battle.net">'+
                '<a class="external-link-button icon-battlenet" href="https://us.shop.battle.net/product/' + battlenetusurl + '" target="_blank"></a>'+
            '</div>');
            $(".battleneteu").append('<div class="external-link region_003" ttt="Battle.net">'+
                '<a class="external-link-button icon-battlenet" href="https://eu.shop.battle.net/product/' + battleneteuurl + '" target="_blank"></a>'+
            '</div>');
            $(".battlenetkr").append('<div class="external-link region_301" ttt="Battle.net">'+
                '<a class="external-link-button icon-battlenet" href="https://kr.shop.battle.net/product/' + battlenetkrurl + '" target="_blank"></a>'+
            '</div>');
            $(".battlenettw").append('<div class="external-link region_303" ttt="Battle.net">'+
                '<a class="external-link-button icon-battlenet" href="https://tw.shop.battle.net/product/' + battlenettwurl + '" target="_blank"></a>'+
            '</div>');
            //

            $(".rockstargames").append('<div class="external-link" ttt="Rockstar Games Store">'+
                '<a class="external-link-button icon-rockstargameslauncher" href="https://store.rockstargames.com/game/buy-' + rockstargameslauncherurl + '" target="_blank"></a>'+
            '</div>');

            $(".stove").append('<div class="external-link" ttt="STOVE">'+
                '<a class="external-link-button icon-stove" href="https://store.onstove.com/anime/' + stoveurl + '" target="_blank"></a>'+
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
            $(".psstorenaeu").append('<div class="external-link region_901" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstorenaeuurl + '" target="_blank"></a>'+
            '</div>');
            $(".psstorenajp").append('<div class="external-link region_902" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstorenajpurl + '" target="_blank"></a>'+
            '</div>');
            $(".psstoreuscamx").append('<div class="external-link region_701" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstoreuscamxurl + '" target="_blank"></a>'+
            '</div>');
            $(".psstoreukfrde").append('<div class="external-link region_702" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstoreukfrdeurl + '" target="_blank"></a>'+
            '</div>');
            $(".psstorekrhktw").append('<div class="external-link region_703" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstorekrhktwurl + '" target="_blank"></a>'+
            '</div>');
            $(".psstorehktw").append('<div class="external-link region_801" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstorehktwurl + '" target="_blank"></a>'+
            '</div>');
            $(".psstoreaunz").append('<div class="external-link region_802" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstoreaunzurl + '" target="_blank"></a>'+
            '</div>');
            $(".psstorebrar").append('<div class="external-link region_803" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstorebrarurl + '" target="_blank"></a>'+
            '</div>');
            $(".psstorena").append('<div class="external-link region_001" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstorenaurl + '" target="_blank"></a>'+
            '</div>');
            $(".psstorejp").append('<div class="external-link region_002" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstorejpurl + '" target="_blank"></a>'+
            '</div>');
            $(".psstoreeu").append('<div class="external-link region_003" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstoreeuurl + '" target="_blank"></a>'+
            '</div>');
            $(".psstoreus").append('<div class="external-link region_101" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstoreusurl + '" target="_blank"></a>'+
            '</div>');
            $(".psstoreca").append('<div class="external-link region_102" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstorecaurl + '" target="_blank"></a>'+
            '</div>');
            $(".psstoremx").append('<div class="external-link region_103" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstoremxurl + '" target="_blank"></a>'+
            '</div>');
            $(".psstoreuk").append('<div class="external-link region_201" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstoreukurl + '" target="_blank"></a>'+
            '</div>');
            $(".psstorefr").append('<div class="external-link region_202" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstorefrurl + '" target="_blank"></a>'+
            '</div>');
            $(".psstorede").append('<div class="external-link region_203" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstoredeurl + '" target="_blank"></a>'+
            '</div>');
            $(".psstoreit").append('<div class="external-link region_204" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstoreiturl + '" target="_blank"></a>'+
            '</div>');
            $(".psstorenl").append('<div class="external-link region_205" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstorenlurl + '" target="_blank"></a>'+
            '</div>');
            $(".psstorebe").append('<div class="external-link region_206" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstorebeurl + '" target="_blank"></a>'+
            '</div>');
            $(".psstorepl").append('<div class="external-link region_207" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstoreplurl + '" target="_blank"></a>'+
            '</div>');
            $(".psstorecz").append('<div class="external-link region_208" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstoreczurl + '" target="_blank"></a>'+
            '</div>');
            $(".psstorees").append('<div class="external-link region_209" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstoreesurl + '" target="_blank"></a>'+
            '</div>');
            $(".psstorept").append('<div class="external-link region_210" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstorepturl + '" target="_blank"></a>'+
            '</div>');
            $(".psstorekr").append('<div class="external-link region_301" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstorekrurl + '" target="_blank"></a>'+
            '</div>');
            $(".psstorehk").append('<div class="external-link region_302" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstorehkurl + '" target="_blank"></a>'+
            '</div>');
            $(".psstoretw").append('<div class="external-link region_303" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstoretwurl + '" target="_blank"></a>'+
            '</div>');
            $(".psstoreau").append('<div class="external-link region_401" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstoreauurl + '" target="_blank"></a>'+
            '</div>');
            $(".psstorenz").append('<div class="external-link region_402" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstorenzurl + '" target="_blank"></a>'+
            '</div>');
            $(".psstorebr").append('<div class="external-link region_501" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstorebrurl + '" target="_blank"></a>'+
            '</div>');
            $(".psstorear").append('<div class="external-link region_502" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstorearurl + '" target="_blank"></a>'+
            '</div>');
            $(".psstoreza").append('<div class="external-link region_601" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstorezaurl + '" target="_blank"></a>'+
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
            // top multiple
            $(".eshopnaeu").append('<div class="external-link region_901" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="' + nintendoeshopnaeuurl + '" target="_blank"></a>'+
            '</div>');
            $(".eshopnajp").append('<div class="external-link region_902" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="' + nintendoeshopnajpurl + '" target="_blank"></a>'+
            '</div>');
            // multiple
            $(".eshopuscamx").append('<div class="external-link region_701" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="' + nintendoeshopuscamxurl + '" target="_blank"></a>'+
            '</div>');
            $(".eshopukfrde").append('<div class="external-link region_702" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="' + nintendoeshopukfrdeurl + '" target="_blank"></a>'+
            '</div>');
            $(".eshopkrhktw").append('<div class="external-link region_703" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="' + nintendoeshopkrhktwurl + '" target="_blank"></a>'+
            '</div>');

            $(".eshophktw").append('<div class="external-link region_801" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="' + nintendoeshophktwurl + '" target="_blank"></a>'+
            '</div>');
            $(".eshopaunz").append('<div class="external-link region_802" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="' + nintendoeshopaunzurl + '" target="_blank"></a>'+
            '</div>');
            $(".eshopbrar").append('<div class="external-link region_803" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="' + nintendoeshopbrarurl + '" target="_blank"></a>'+
            '</div>');
            // top
            $(".eshopna").append('<div class="external-link region_001" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="' + nintendoeshopnaurl + '" target="_blank"></a>'+
            '</div>');
            $(".eshopjp").append('<div class="external-link region_002" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="https://ec.nintendo.com/JP/ja/titles/' + nintendoeshopjpurl + '" target="_blank"></a>'+
            '</div>');
            $(".eshopeu").append('<div class="external-link region_003" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="' + nintendoeshopeuurl + '" target="_blank"></a>'+
            '</div>');
            // na
            $(".eshopus").append('<div class="external-link region_101" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="https://www.nintendo.com/store/products/' + nintendoeshopusurl + '" target="_blank"></a>'+
            '</div>');
            $(".eshopca").append('<div class="external-link region_102" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="https://www.nintendo.com/en-ca/store/products/' + nintendoeshopcaurl + '" target="_blank"></a>'+
            '</div>');
            $(".eshopmx").append('<div class="external-link region_103" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="https://www.nintendo.com/es-mx/store/products/' + nintendoeshopmxurl + '" target="_blank"></a>'+
            '</div>');
            // eu
            $(".eshopuk").append('<div class="external-link region_201" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="https://ec.nintendo.com/GB/en/titles/' + nintendoeshopukurl + '" target="_blank"></a>'+
            '</div>');
            $(".eshopfr").append('<div class="external-link region_202" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="https://ec.nintendo.com/FR/fr/titles/' + nintendoeshopfrurl + '" target="_blank"></a>'+
            '</div>');
            $(".eshopde").append('<div class="external-link region_203" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="https://ec.nintendo.com/DE/de/titles/' + nintendoeshopdeurl + '" target="_blank"></a>'+
            '</div>');
            $(".eshopit").append('<div class="external-link region_204" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="https://ec.nintendo.com///titles/' + nintendoeshopiturl + '" target="_blank"></a>'+
            '</div>');
            $(".eshopnl").append('<div class="external-link region_205" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="https://ec.nintendo.com///titles/' + nintendoeshopnlurl + '" target="_blank"></a>'+
            '</div>');
            $(".eshopbe").append('<div class="external-link region_206" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="https://ec.nintendo.com///titles/' + nintendoeshopbeurl + '" target="_blank"></a>'+
            '</div>');
            $(".eshoppl").append('<div class="external-link region_207" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="https://ec.nintendo.com///titles/' + nintendoeshopplurl + '" target="_blank"></a>'+
            '</div>');
            $(".eshopcz").append('<div class="external-link region_208" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="https://ec.nintendo.com///titles/' + nintendoeshopczurl + '" target="_blank"></a>'+
            '</div>');
            $(".eshopes").append('<div class="external-link region_209" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="https://ec.nintendo.com///titles/' + nintendoeshopesurl + '" target="_blank"></a>'+
            '</div>');
            $(".eshoppt").append('<div class="external-link region_210" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="https://ec.nintendo.com///titles/' + nintendoeshoppturl + '" target="_blank"></a>'+
            '</div>');
            // as
            $(".eshopkr").append('<div class="external-link region_301" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="https://store.nintendo.co.kr/' + nintendoeshopkrurl + '" target="_blank"></a>'+
            '</div>');
            $(".eshophk").append('<div class="external-link region_302" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="https://ec.nintendo.com/HK/zh/titles/' + nintendoeshophkurl + '" target="_blank"></a>'+
            '</div>');
            $(".eshoptw").append('<div class="external-link region_303" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="' + nintendoeshoptwurl + '" target="_blank"></a>'+
            '</div>');
            // oc
            $(".eshopau").append('<div class="external-link region_401" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="https://ec.nintendo.com/AU/en/titles/' + nintendoeshopauurl + '" target="_blank"></a>'+
            '</div>');
            $(".eshopnz").append('<div class="external-link region_402" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="https://ec.nintendo.com/NZ/en/titles/' + nintendoeshopnzurl + '" target="_blank"></a>'+
            '</div>');
            // sa
            $(".eshopbr").append('<div class="external-link region_501" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="' + nintendoeshopbrurl + '" target="_blank"></a>'+
            '</div>');
            $(".eshopar").append('<div class="external-link region_502" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="' + nintendoeshoparurl + '" target="_blank"></a>'+
            '</div>');
            // af
            $(".eshopza").append('<div class="external-link region_601" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="' + nintendoeshopzaurl + '" target="_blank"></a>'+
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

            // https://www.xbox.com/play/anime/BT5P2X999VH2
            $(".xboxcloud").append('<div class="external-link" ttt="Xbox Cloud Gaming">'+
                '<a class="external-link-button icon-xboxcloudgaming" href="https://www.xbox.com/play/anime/' + xboxcloudgamingurl + '" target="_blank"></a>'+
            '</div>');

            // https://stadia.google.com/store/details/990ec302c2cd4ba7817cedcf633ab20frcp1/sku/7ac7671e9f4342bd8c55ca140cf94138p
            $(".stadia").append('<div class="external-link" ttt="Stadia">'+
                '<a class="external-link-button icon-stadia" href="https://stadia.google.com/store/details/' + stadiaurl + '" target="_blank"></a>'+
            '</div>');

            // 얼리엑세스 틀
            $(".early-access.en").append('<p class="description-title">This Game is an Early Access Game</p>'+
            '<p>Early Access games are still under development and may change significantly over time. As a result, you may experience unforeseen issues or completely new gameplay elements while playing this game.</p>'+
            '<p>You can play now to experience the game while it\'s being built or wait until it offers a more complete experience.</p>'+
            '<p class="description-link"><a href="https://www.hungbok.com/" target="_blank">Learn More</a></p>');
    
            $(".early-access.ja").append('<p class="description-title">このゲームは早期アクセスゲームです</p>'+
            '<p>早期アクセスゲームは開発中であり、今後大幅に変更される場合があります。その結果、このゲームをプレイ中に予期せぬ問題や、完全に新しいゲームプレイ要素に遭遇する場合があります。</p>'+
            '<p>開発途中のゲームを今すぐプレイするか、あるいはより完成されたゲーム体験が提供されるまで待つことができます。</p>'+
            '<p class="description-link"><a href="https://www.hungbok.com/" target="_blank">さらに詳しく</a></p>');
    
            $(".early-access.ko").append('<p class="description-title">이 게임은 앞서 해보기 게임입니다</p>'+
            '<p>앞서 해보기 게임은 현재 개발 중인 게임으로 개발 중간에 많은 것이 변경될 수 있습니다. 앞서 해보기 게임을 플레이할 때 전혀 예측하지 못한 이슈가 발생하거나 완전히 새로운 게임플레이 요소를 경험할 수 있습니다.</p>'+
            '<p>현재 개발 중인 게임을 바로 플레이하거나 더 완전한 게임 경험을 제공할 때까지 기다릴 수 있습니다.</p>'+
            '<p class="description-link"><a href="https://www.hungbok.com/" target="_blank">자세히 보기</a></p>');
    
            var description = document.querySelector('.description');
            var showMore = document.querySelector('.show-more');
            
            if(description.offsetHeight > 1000){
                description.style.maxHeight = "1000px";
                showMore.style.display = "block";
            }
        });
    } else {
        $('body').addClass('no-query')
    }
});

function showError(image) {
    // URL의 쿼리 매개변수에서 'q'값을 가져옴
    var urlParams = new URLSearchParams(window.location.search);
    var q = urlParams.get('q');

    // JSON 파일 불러오기
    fetch(`/data.hungbok.net/data/anime/${q}.json`)
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
    image.src = "/data.hungbok.net/image/hb/hb_error_horizontal.svg";
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
  

loadAsyncScripts();