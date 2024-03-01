// 언어 감지 함수
function detectLanguage() {
    // 여기에서 실제 언어 감지 로직을 구현해야 합니다.
    // 예제에서는 단순히 'en', 'ko', 'ja'를 확인하고 그 외의 경우는 'en'으로 간주합니다.
    const languages = ['en', 'ko', 'ja'];
    const lang = navigator.language.toLowerCase().substr(0, 2);

    if (languages.includes(lang)) {
        return lang;
    } else {
        return 'en';
    }
}

// 리다이렉션 함수
function redirect() {
    const currentPath = window.location.pathname;
    const currentLanguage = detectLanguage();

    // 언어가 감지된 경우와 그 외의 경우에 따라 새로운 경로를 생성
    let newPath;
    if (currentLanguage === 'en') {
        newPath = `/en${currentPath}`;
    } else {
        newPath = `/${currentLanguage}${currentPath}`;
    }

    // 현재 페이지에서 새로운 경로로 리다이렉트
    window.location.href = `${newPath}${window.location.search}`;
}

// 페이지 로드 시 리다이렉션 실행
redirect();