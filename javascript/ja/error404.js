$('body:not([class]) > main > .section, body.body-undefined > main > .section').remove();
$('body:not([class]) > main > .top-backgrounds, body.body-undefined > main > .top-backgrounds').remove();
$("body:not([class]) > main, body.body-undefined > main").append('<section id="unavailable" class="errorpage">'+
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
                '<div class="lang-option" data-lang="en" data-value="en" selected></div>'+
                '<div class="lang-option" data-lang="ja" data-value="ja"></div>'+
                '<div class="lang-option" data-lang="ko" data-value="ko"></div>'+
            '</div>'+
        '</div>'+
        '<div class="error-404-background">404</div>'+
    '</div>'+
'</section>');