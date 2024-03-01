$(document).ready(function() {
    
    // 웹 브라우저에서 사용자의 언어 감지
    var footeruserLang = navigator.language || navigator.userLanguage; 
    
    // 언어 코드가 2자리라면, 이를 2자리로 줄입니다. (예: en-US -> en)
    footeruserLang = footeruserLang.substr(0,2);

    $.getJSON('//data.hungbok.net/data/langData.json', function(langData) {

        // body에 언어 코드 클래스 확인
        var bodyClass = $('body').attr('class');
        var bodyClassList = bodyClass ? bodyClass.split(/\s+/) : [];
        var isLangClassExist = false;
        var selectedLang = 'en'; // 기본 언어 설정
      
        $.each(bodyClassList, function(index, item) {
            if (langData[item]) {
                // body 클래스 중 언어 코드 클래스가 있고, 데이터가 있는 경우
                isLangClassExist = true;
                selectedLang = item;
                return false; // loop break
            }
        });
      
        if (!isLangClassExist) {
            // body 클래스 중 언어 코드 클래스가 없는 경우
            if (langData[footeruserLang]) {
                // 사용자의 언어에 해당하는 데이터가 있는 경우
                selectedLang = footeruserLang;
            }
        }
        
        $("footer").append('<section class="section">'+
            '<div class="footer">'+
                '<div class="footer-top">'+
                    '<a class="footer-menu-logo" onclick="window.location.reload()">'+
                        '<div class="footer-title logo">HUNGBOK</div>'+
                    '</a>'+
                '</div>'+
                '<div class="footer-middle">'+
                    '<div class="footer-social">'+
                        '<div class="footer-menu" ttt="facebook">'+
                            '<a class="footer-menu-button icon-facebook" href="https://www.hungbok.com/facebook" target="_blank"></a>'+
                        '</div>'+
                        '<div class="footer-menu" ttt="Instagram">'+
                            '<a class="footer-menu-button icon-instagram" href="https://www.hungbok.com/instagram" target="_blank"></a>'+
                        '</div>'+
                        '<div class="footer-menu" ttt="X">'+
                            '<a class="footer-menu-button icon-x" href="https://www.hungbok.com/x" target="_blank"></a>'+
                        '</div>'+
                        '<div class="footer-menu" ttt="YouTube">'+
                            '<a class="footer-menu-button icon-youtube" href="https://www.hungbok.com/youtube" target="_blank"></a>'+
                        '</div>'+
                        '<div class="footer-menu" ttt="Discord">'+
                            '<a class="footer-menu-button icon-discord" href="https://www.hungbok.com/discord" target="_blank"></a>'+
                        '</div>'+
                    '</div>'+
                    '<div class="footer-site">'+
                        '<div class="footer-menu">'+
                            '<a class="footer-menu-button" href="https://www.hungbok.com">' + langData[selectedLang]['home'] + '</a>'+
                        '</div>'+
                        '<div class="footer-menu">'+
                            '<a class="footer-menu-button" href="https://www.hungbok.com/tv">' + langData[selectedLang]['tv'] + '</a>'+
                        '</div>'+
                        '<div class="footer-menu">'+
                            '<a class="footer-menu-button" href="https://www.hungbok.com/tv/series">' + langData[selectedLang]['series'] + '</a>'+
                        '</div>'+
                        '<div class="footer-menu">'+
                            '<a class="footer-menu-button" href="https://www.hungbok.com/tv/show">' + langData[selectedLang]['show'] + '</a>'+
                        '</div>'+
                        '<div class="footer-menu">'+
                            '<a class="footer-menu-button" href="https://www.hungbok.com/tv/documentary">' + langData[selectedLang]['documentary'] + '</a>'+
                        '</div>'+
                        '<div class="footer-menu">'+
                            '<a class="footer-menu-button" href="https://www.hungbok.com/movie">' + langData[selectedLang]['movie'] + '</a>'+
                        '</div>'+
                        '<div class="footer-menu">'+
                            '<a class="footer-menu-button" href="https://www.hungbok.com/anime/movie">' + langData[selectedLang]['movie_anime'] + '</a>'+
                        '</div>'+
                        '<div class="footer-menu">'+
                            '<a class="footer-menu-button" href="https://www.hungbok.com/anime">' + langData[selectedLang]['anime'] + '</a>'+
                        '</div>'+
                        '<div class="footer-menu">'+
                            '<a class="footer-menu-button" href="https://www.hungbok.com/anime/on-air">' + langData[selectedLang]['onair'] + '</a>'+
                        '</div>'+
                        '<div class="footer-menu">'+
                            '<a class="footer-menu-button" href="https://www.hungbok.com/anime/calendar">' + langData[selectedLang]['anime_calendar'] + '</a>'+
                        '</div>'+
                        '<div class="footer-menu">'+
                            '<a class="footer-menu-button" href="https://www.hungbok.com/anime/quarter">' + langData[selectedLang]['anime_quarter'] + '</a>'+
                        '</div>'+
                        '<div class="footer-menu">'+
                            '<a class="footer-menu-button" href="https://www.hungbok.com/games">' + langData[selectedLang]['games'] + '</a>'+
                        '</div>'+
                        '<div class="footer-menu">'+
                            '<a class="footer-menu-button" href="https://www.hungbok.com/games/free-games">' + langData[selectedLang]['free_games'] + '</a>'+
                        '</div>'+
                        '<div class="footer-menu">'+
                            '<a class="footer-menu-button" href="https://www.hungbok.com/games/calendar">' + langData[selectedLang]['games_calendar'] + '</a>'+
                        '</div>'+
                        '<div class="footer-menu">'+
                            '<a class="footer-menu-button" href="https://www.hungbok.com/books">' + langData[selectedLang]['books'] + '</a>'+
                        '</div>'+
                    '</div>'+
                    '<div class="footer-info">'+
                        '<div class="footer-menu">'+
                            '<a class="footer-menu-button" href="https://www.hungbok.com/about">' + langData[selectedLang]['about'] + '</a>'+
                        '</div>'+
                        '<div class="footer-menu">'+
                            '<a class="footer-menu-button" href="https://www.hungbok.com/news">' + langData[selectedLang]['news'] + '</a>'+
                        '</div>'+
                        '<div class="footer-menu">'+
                            '<a class="footer-menu-button" href="https://www.hungbok.com/terms-of-use">' + langData[selectedLang]['tou'] + '</a>'+
                        '</div>'+
                        '<div class="footer-menu">'+
                            '<a class="footer-menu-button" href="https://www.hungbok.com/privacy-policy">' + langData[selectedLang]['privacy'] + '</a>'+
                        '</div>'+
                        '<div class="footer-menu">'+
                            '<a class="footer-menu-button" href="https://www.hungbok.com/cookie-policy">' + langData[selectedLang]['cookie'] + '</a>'+
                        '</div>'+
                        '<div class="footer-menu">'+
                            '<a class="footer-menu-button" href="https://help.hungbok.com">' + langData[selectedLang]['help'] + '</a>'+
                        '</div>'+
                        '<div class="footer-menu">'+
                            '<a class="footer-menu-button" href="https://help.hungbok.com/contact">' + langData[selectedLang]['contact'] + '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="footer-bottom">'+
                    '<div class="copyright">© 2021-2024 HungBok. All Rights Reserved.</div>'+
                '</div>'+
            '</div>'+
        '</section>');
    });
});