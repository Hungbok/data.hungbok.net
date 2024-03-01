$('body:not([class]) > main > .section, body.body-undefined > main > .section').remove();
$('body:not([class]) > main > .top-backgrounds, body.body-undefined > main > .top-backgrounds').remove();
$("body:not([class]) > main, body.body-undefined > main").append('<section id="unavailable" class="errorpage">'+
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