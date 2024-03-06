$(document).ready(function() {
    
    // 웹 브라우저에서 사용자의 언어 감지
    var headeruserLang = navigator.language || navigator.userLanguage; 
    
    // 언어 코드가 2자리라면, 이를 2자리로 줄입니다. (예: en-US -> en)
    headeruserLang = headeruserLang.substr(0,2);

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
            if (langData[headeruserLang]) {
                // 사용자의 언어에 해당하는 데이터가 있는 경우
                selectedLang = headeruserLang;
            }
        }
        
        $("header").append('<section class="section">'+
            '<div class="side-header">'+
                '<a class="header-button side-panel-icon" onclick="sidepanel()">'+
                    '<img class="header-button-icon" src="//media.hungbok.net/image/icon/menu.svg">'+
                '</a>'+
                '<div class="side-panel-contents" id="side-panel-contents">'+
                    '<div class="side-panel-content">'+
                        '<div class="side-panel-top">'+
                            '<a class="header-button side-panel-icon" onclick="sidepanel()">'+
                                '<img class="header-button-icon" src="//media.hungbok.net/image/icon/close.svg">'+
                            '</a>'+
                            '<a class="menu-logo" href="/">'+
                                '<div class="header-title logo">HUNGBOK</div>'+
                            '</a>'+
                        '</div>'+
                        '<div class="side-panel-middle">'+
                            '<a class="side-panel-menu home" href="https://www.hungbok.com">'+
                                '<div class="side-panel-menu-icon"></div>'+
                                '<div class="side-panel-menu-text">' + langData[selectedLang]['menu_home'] + '</div>'+
                            '</a>'+
                            '<a class="side-panel-menu tv" href="https://www.hungbok.com/tv">'+
                                '<div class="side-panel-menu-icon"></div>'+
                                '<div class="side-panel-menu-text">' + langData[selectedLang]['menu_tv'] + '</div>'+
                            '</a>'+
                            '<a class="side-panel-menu movie" href="https://www.hungbok.com/movie">'+
                                '<div class="side-panel-menu-icon"></div>'+
                                '<div class="side-panel-menu-text">' + langData[selectedLang]['menu_movie'] + '</div>'+
                            '</a>'+
                            '<a class="side-panel-menu anime" href="https://www.hungbok.com/anime">'+
                                '<div class="side-panel-menu-icon"></div>'+
                                '<div class="side-panel-menu-text">' + langData[selectedLang]['menu_anime'] + '</div>'+
                            '</a>'+
                            '<a class="side-panel-menu games" href="https://www.hungbok.com/games">'+
                                '<div class="side-panel-menu-icon"></div>'+
                                '<div class="side-panel-menu-text">' + langData[selectedLang]['menu_games'] + '</div>'+
                            '</a>'+
                            '<a class="side-panel-menu books" href="https://www.hungbok.com/books">'+
                                '<div class="side-panel-menu-icon"></div>'+
                                '<div class="side-panel-menu-text">' + langData[selectedLang]['menu_books'] + '</div>'+
                            '</a>'+
                            '<div class="side-panel-line"></div>'+
                            '<div class="header-footer-menu">'+
                                '<a class="header-footer-menu-button" href="https://www.hungbok.com/about">' + langData[selectedLang]['about'] + '</a>'+
                            '</div>'+
                            '<div class="header-footer-menu">'+
                                '<a class="header-footer-menu-button" href="https://www.hungbok.com/news">' + langData[selectedLang]['news'] + '</a>'+
                            '</div>'+
                            '<div class="header-footer-menu">'+
                                '<a class="header-footer-menu-button" href="https://www.hungbok.com/terms-of-use">' + langData[selectedLang]['tou'] + '</a>'+
                            '</div>'+
                            '<div class="header-footer-menu">'+
                                '<a class="header-footer-menu-button" href="https://www.hungbok.com/privacy-policy">' + langData[selectedLang]['privacy'] + '</a>'+
                            '</div>'+
                            '<div class="header-footer-menu">'+
                                '<a class="header-footer-menu-button" href="https://www.hungbok.com/cookie-policy">' + langData[selectedLang]['cookie'] + '</a>'+
                            '</div>'+
                            '<div class="header-footer-menu">'+
                                '<a class="header-footer-menu-button" href="https://help.hungbok.com">' + langData[selectedLang]['help'] + '</a>'+
                            '</div>'+
                            '<div class="header-footer-menu">'+
                                '<a class="header-footer-menu-button" href="https://help.hungbok.com/contact">' + langData[selectedLang]['contact'] + '</a>'+
                            '</div>'+
                            '<div class="footer-bottom">'+
                                '<div class="copyright">© 2024 HungBok</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                    '<div class="side-panel-overlay"></div>'+
                '</div>'+
            '</div>'+
            '<div class="header">'+
                '<div class="site-header">'+
                    '<div class="header-menu logo-container">'+
                        '<a class="menu-logo" href="/">'+
                            // '<img class="header-logo" src="//media.hungbok.net/image/hb/hb_symbol.svg">'+
                            '<div class="header-title logo">HUNGBOK</div>'+
                        '</a>'+
                    '</div>'+
                    '<div class="header-menu search-container">'+
                        '<div class="search">'+
                            '<input type="text" id="search-value" placeholder="" autocomplete="off">'+
                            '<div class="search-icon">'+
                                '<img src="//media.hungbok.net/image/icon/search.svg">'+
                            '</div>'+
                        '</div>'+
                        '<div class="search-results"></div>'+
                    '</div>'+
                    '<div class="header-menu header-button-container">'+
                        '<a class="header-button" href="/">'+
                            '<img class="header-button-icon" src="//media.hungbok.net/image/icon/help.svg">'+
                        '</a>'+
                        '<a class="header-button language-selecter" onclick="language()">'+
                            '<img class="header-button-icon" src="//media.hungbok.net/image/icon/language.svg">'+
                        '</a>'+
                        '<div class="language-lists" id="language-lists">'+
                            '<div class="language-list">'+
                                '<div class="language-select" data-lang="en">'+
                                    '<div class="language-flag"></div>'+
                                    '<div class="language-text"></div>'+
                                '</div>'+
                                // '<div class="language-select" data-lang="en-gb">'+
                                //     '<div class="language-flag"></div>'+
                                //     '<div class="language-text"></div>'+
                                // '</div>'+
                                // '<div class="language-select" data-lang="en-ca">'+
                                //     '<div class="language-flag"></div>'+
                                //     '<div class="language-text"></div>'+
                                // '</div>'+
                                // '<div class="language-select" data-lang="en-au">'+
                                //     '<div class="language-flag"></div>'+
                                //     '<div class="language-text"></div>'+
                                // '</div>'+
                                // '<div class="language-select" data-lang="ar">'+
                                //     '<div class="language-flag"></div>'+
                                //     '<div class="language-text"></div>'+
                                // '</div>'+
                                // '<div class="language-select" data-lang="bg">'+
                                //     '<div class="language-flag"></div>'+
                                //     '<div class="language-text"></div>'+
                                // '</div>'+
                                // '<div class="language-select" data-lang="cs">'+
                                //     '<div class="language-flag"></div>'+
                                //     '<div class="language-text"></div>'+
                                // '</div>'+
                                // '<div class="language-select" data-lang="da">'+
                                //     '<div class="language-flag"></div>'+
                                //     '<div class="language-text"></div>'+
                                // '</div>'+
                                // '<div class="language-select" data-lang="de">'+
                                //     '<div class="language-flag"></div>'+
                                //     '<div class="language-text"></div>'+
                                // '</div>'+
                                // '<div class="language-select" data-lang="el">'+
                                //     '<div class="language-flag"></div>'+
                                //     '<div class="language-text"></div>'+
                                // '</div>'+
                                // '<div class="language-select" data-lang="es">'+
                                //     '<div class="language-flag"></div>'+
                                //     '<div class="language-text"></div>'+
                                // '</div>'+
                                // '<div class="language-select" data-lang="es-mx">'+
                                //     '<div class="language-flag"></div>'+
                                //     '<div class="language-text"></div>'+
                                // '</div>'+
                                // '<div class="language-select" data-lang="fi">'+
                                //     '<div class="language-flag"></div>'+
                                //     '<div class="language-text"></div>'+
                                // '</div>'+
                                // '<div class="language-select" data-lang="fr">'+
                                //     '<div class="language-flag"></div>'+
                                //     '<div class="language-text"></div>'+
                                // '</div>'+
                                // '<div class="language-select" data-lang="fr-ca">'+
                                //     '<div class="language-flag"></div>'+
                                //     '<div class="language-text"></div>'+
                                // '</div>'+
                                // '<div class="language-select" data-lang="hi">'+
                                //     '<div class="language-flag"></div>'+
                                //     '<div class="language-text"></div>'+
                                // '</div>'+
                                // '<div class="language-select" data-lang="hu">'+
                                //     '<div class="language-flag"></div>'+
                                //     '<div class="language-text"></div>'+
                                // '</div>'+
                                // '<div class="language-select" data-lang="id">'+
                                //     '<div class="language-flag"></div>'+
                                //     '<div class="language-text"></div>'+
                                // '</div>'+
                                // '<div class="language-select" data-lang="it">'+
                                //     '<div class="language-flag"></div>'+
                                //     '<div class="language-text"></div>'+
                                // '</div>'+
                                '<div class="language-select" data-lang="ja">'+
                                    '<div class="language-flag"></div>'+
                                    '<div class="language-text"></div>'+
                                '</div>'+
                                '<div class="language-select" data-lang="ko">'+
                                    '<div class="language-flag"></div>'+
                                    '<div class="language-text"></div>'+
                                '</div>'+
                                // '<div class="language-select" data-lang="ms">'+
                                //     '<div class="language-flag"></div>'+
                                //     '<div class="language-text"></div>'+
                                // '</div>'+
                                // '<div class="language-select" data-lang="nl">'+
                                //     '<div class="language-flag"></div>'+
                                //     '<div class="language-text"></div>'+
                                // '</div>'+
                                // '<div class="language-select" data-lang="no">'+
                                //     '<div class="language-flag"></div>'+
                                //     '<div class="language-text"></div>'+
                                // '</div>'+
                                // '<div class="language-select" data-lang="pl">'+
                                //     '<div class="language-flag"></div>'+
                                //     '<div class="language-text"></div>'+
                                // '</div>'+
                                // '<div class="language-select" data-lang="pt">'+
                                //     '<div class="language-flag"></div>'+
                                //     '<div class="language-text"></div>'+
                                // '</div>'+
                                // '<div class="language-select" data-lang="pt-br">'+
                                //     '<div class="language-flag"></div>'+
                                //     '<div class="language-text"></div>'+
                                // '</div>'+
                                // '<div class="language-select" data-lang="ro">'+
                                //     '<div class="language-flag"></div>'+
                                //     '<div class="language-text"></div>'+
                                // '</div>'+
                                // '<div class="language-select" data-lang="ru">'+
                                //     '<div class="language-flag"></div>'+
                                //     '<div class="language-text"></div>'+
                                // '</div>'+
                                // '<div class="language-select" data-lang="sv">'+
                                //     '<div class="language-flag"></div>'+
                                //     '<div class="language-text"></div>'+
                                // '</div>'+
                                // '<div class="language-select" data-lang="th">'+
                                //     '<div class="language-flag"></div>'+
                                //     '<div class="language-text"></div>'+
                                // '</div>'+
                                // '<div class="language-select" data-lang="tr">'+
                                //     '<div class="language-flag"></div>'+
                                //     '<div class="language-text"></div>'+
                                // '</div>'+
                                // '<div class="language-select" data-lang="uk">'+
                                //     '<div class="language-flag"></div>'+
                                //     '<div class="language-text"></div>'+
                                // '</div>'+
                                // '<div class="language-select" data-lang="vi">'+
                                //     '<div class="language-flag"></div>'+
                                //     '<div class="language-text"></div>'+
                                // '</div>'+
                                // '<div class="language-select" data-lang="zh-cn">'+
                                //     '<div class="language-flag"></div>'+
                                //     '<div class="language-text"></div>'+
                                // '</div>'+
                                // '<div class="language-select" data-lang="zh-tw">'+
                                //     '<div class="language-flag"></div>'+
                                //     '<div class="language-text"></div>'+
                                // '</div>'+
                            '</div>'+
                        '</div>'+
                        '<a class="header-button theme-light" onclick="setTheme(`dark`)">'+
                            '<img class="header-button-icon" src="//media.hungbok.net/image/icon/light_mode.svg">'+
                        '</a>'+
                        '<a class="header-button theme-dark" onclick="setTheme(`light`)">'+
                            '<img class="header-button-icon" src="//media.hungbok.net/image/icon/dark_mode.svg">'+
                        '</a>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</section>');
    });
});