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
        script.src = '//data.hungbok.net/javascript/en/error404.js';
        break;
    case 'ko':
        script.src = '//data.hungbok.net/javascript/ko/error404.js';
        break;
    case 'ja':
        script.src = '//data.hungbok.net/javascript/ja/error404.js';
        break;
    default:
        script.src = '//data.hungbok.net/javascript/en/error404.js';
        break;
}

// 스크립트를 문서에 추가합니다
document.head.appendChild(script);