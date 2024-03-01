$('body:not([class]) > main > .section, body.body-undefined > main > .section').remove();
$('body:not([class]) > main > .top-backgrounds, body.body-undefined > main > .top-backgrounds').remove();
$("body:not([class]) > main, body.body-undefined > main").append('<section id="unavailable" class="errorpage">'+
    '<div class="error-404-container">'+
        '<div class="error-404-content">'+
            '<div class="error-404-title" data-lang="title">페이지가 길을 잃었습니다...</div>'+
            '<div class="error-404-subtitle" data-lang="title">페이지가 없거나 이동 혹은 삭제되었습니다.<br>주소를 다시 한번 확인해주세요.</div>'+
            '<div class="error-404-subtitle previous" data-lang="title"></div>'+
            '<a class="error-404-back" onclick="window.history.back()">'+
                '<p>이전 페이지</p>'+
            '</a>'+
            '<div class="error-404-subtitle middle" data-lang="title">혹은</div>'+
            '<a class="error-404-home" href="https://www.hungbok.com">'+
                '<p>메인</p>'+
            '</a>'+
            '<div class="error-404-subtitle next" data-lang="title">으로 돌아가기</div>'+
            '<div class="error-404-subtitle" data-lang="title">다른 문제가 있나요?</div>'+
            '<a class="error-404-help" href="https://help.hungbok.com/contact">'+
                '<p>문의하기</p>'+
            '</a>'+
        '</div>'+
        '<div class="error-404-lang-selecter">'+
            '<div data-lang="subtitle"></div>'+
            '<div id="select_lang">'+
                '<div class="lang-option" data-lang="en" data-value="en" selected></div>'+
                '<div class="lang-option" data-lang="ja" data-value="ja"></div>'+
                '<div class="lang-option" data-lang="ko" data-value="ko"></div>'+
            '</div>'+
        '</div>'+
        '<div class="error-404-background">404</div>'+
    '</div>'+
'</section>');