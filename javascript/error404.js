// body에서 클래스명을 가져옵니다
var classList = document.body.className.split(/\s+/);
var langCode = null;

// 클래스 중에서 2자리 언어 코드를 찾습니다
for (var i = 0; i < classList.length; i++) {
    if (classList[i].length === 2) {
        langCode = classList[i];
        break;
    }
}

// 언어 코드에 따라 적절한 스크립트를 로드합니다
var script = document.createElement('script');

switch (langCode) {
    case 'en':
        $('body > main > .section').remove();
        $('body > main > .top-backgrounds').remove();
        $("body > main").append('<section id="unavailable" class="errorpage">'+
            '<div class="error-404-container">'+
                '<div class="error-404-content">'+
                    '<div class="error-404-title" data-lang="title">Oops! Looks like this page wandered off...</div>'+
                    '<div class="error-404-subtitle" data-lang="title">The page may have been moved or deleted.<br>Please double-check the address!</div>'+
                    '<div class="error-404-subtitle previous" data-lang="title">Back to</div>'+
                    '<a class="error-404-back" onclick="window.history.back()">'+
                        '<p>Previous page</p>'+
                    '</a>'+
                    '<div class="error-404-subtitle middle" data-lang="title">or</div>'+
                    '<a class="error-404-home" href="https://www.hungbok.com">'+
                        '<p>Home</p>'+
                    '</a>'+
                    '<div class="error-404-subtitle next" data-lang="title"></div>'+
                    '<div class="error-404-subtitle" data-lang="title">Need more help?</div>'+
                    '<a class="error-404-help" href="https://help.hungbok.com/contact">'+
                        '<p>Contact Us</p>'+
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
        break;
    case 'ko':
        $('body > main > .section').remove();
        $('body > main > .top-backgrounds').remove();
        $("body > main").append('<section id="unavailable" class="errorpage">'+
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
                        '<div class="lang-option" data-lang="en" data-value="en"></div>'+
                        '<div class="lang-option" data-lang="ja" data-value="ja"></div>'+
                        '<div class="lang-option" data-lang="ko" data-value="ko" selected></div>'+
                    '</div>'+
                '</div>'+
                '<div class="error-404-background">404</div>'+
            '</div>'+
        '</section>');
        break;
    case 'ja':
        $('body > main > .section').remove();
        $('body > main > .top-backgrounds').remove();
        $("body > main").append('<section id="unavailable" class="errorpage">'+
            '<div class="error-404-container">'+
                '<div class="error-404-content">'+
                    '<div class="error-404-title" data-lang="title">迷子になったようです…</div>'+
                    '<div class="error-404-subtitle" data-lang="title">ページが移動または削除された可能性があります。<br>もう一度確認してください！</div>'+
                    '<div class="error-404-subtitle previous" data-lang="title"></div>'+
                    '<a class="error-404-back" onclick="window.history.back()">'+
                        '<p>前のページ</p>'+
                    '</a>'+
                    '<div class="error-404-subtitle middle" data-lang="title">または</div>'+
                    '<a class="error-404-home" href="https://www.hungbok.com">'+
                        '<p>トップ</p>'+
                    '</a>'+
                    '<div class="error-404-subtitle next" data-lang="title">に戻る</div>'+
                    '<div class="error-404-subtitle" data-lang="title">まだ問題がありますか？</div>'+
                    '<a class="error-404-help" href="https://help.hungbok.com/contact">'+
                        '<p>お問い合わせ</p>'+
                    '</a>'+
                '</div>'+
                '<div class="error-404-lang-selecter">'+
                    '<div data-lang="subtitle"></div>'+
                    '<div id="select_lang">'+
                        '<div class="lang-option" data-lang="en" data-value="en"></div>'+
                        '<div class="lang-option" data-lang="ja" data-value="ja" selected></div>'+
                        '<div class="lang-option" data-lang="ko" data-value="ko"></div>'+
                    '</div>'+
                '</div>'+
                '<div class="error-404-background">404</div>'+
            '</div>'+
        '</section>');
        break;
    default:
        $('body > main > .section').remove();
        $('body > main > .top-backgrounds').remove();
        $("body > main").append('<section id="unavailable" class="errorpage">'+
            '<div class="error-404-container">'+
                '<div class="error-404-content">'+
                    '<div class="error-404-title" data-lang="title">Oops! Looks like this page wandered off...</div>'+
                    '<div class="error-404-subtitle" data-lang="title">The page may have been moved or deleted.<br>Please double-check the address!</div>'+
                    '<div class="error-404-subtitle previous" data-lang="title">Back to</div>'+
                    '<a class="error-404-back" onclick="window.history.back()">'+
                        '<p>Previous page</p>'+
                    '</a>'+
                    '<div class="error-404-subtitle middle" data-lang="title">or</div>'+
                    '<a class="error-404-home" href="https://www.hungbok.com">'+
                        '<p>Home</p>'+
                    '</a>'+
                    '<div class="error-404-subtitle next" data-lang="title"></div>'+
                    '<div class="error-404-subtitle" data-lang="title">Need more help?</div>'+
                    '<a class="error-404-help" href="https://help.hungbok.com/contact">'+
                        '<p>Contact Us</p>'+
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
        break;
}

// 스크립트를 문서에 추가합니다
document.head.appendChild(script);