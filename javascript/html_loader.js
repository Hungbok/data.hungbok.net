$(document).ready(function() {
    // 모든 요소를 선택
    var elements = document.querySelectorAll('[html-loader], [franchise-loader]');
    
    elements.forEach(function (element) {
        // 각 요소의 html-loader 또는 franchise-loader 속성값을 가져옴
        var htmlUrl = element.getAttribute('html-loader');
        var franchiseUrl = element.getAttribute('franchise-loader');

        // 경로를 결정
        var url = htmlUrl ? '//data.hungbok.net/html/' + htmlUrl + '.html' : '//data.hungbok.net/franchise/' + franchiseUrl + '.html';

        // AJAX를 사용하여 파일 로드
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // 파일이 존재할 경우 파일의 body 내용을 가져와 현재 페이지에 출력
                    var tempDiv = document.createElement('div');
                    tempDiv.innerHTML = xhr.responseText;

                    // body 요소를 가져오기 (먼저 body 태그를 직접 가져와보고 없으면 전체 내용을 사용)
                    var bodyElement = tempDiv.querySelector('body') || tempDiv;

                    // html-loader 또는 franchise-loader 속성 제거
                    bodyElement.querySelectorAll('[html-loader], [franchise-loader]').forEach(function (el) {
                        el.removeAttribute('html-loader');
                        el.removeAttribute('franchise-loader');
                    });

                    // script 태그 제거
                    bodyElement.querySelectorAll('.delete').forEach(function (script) {
                        script.parentNode.removeChild(script);
                    });

                    // 해당 내용을 출력
                    element.innerHTML = bodyElement.innerHTML;

                    // html-loader 또는 franchise-loader 속성 제거
                    element.removeAttribute('html-loader');
                    element.removeAttribute('franchise-loader');
                } else {
                    // 파일이 존재하지 않을 경우에 대한 처리
                    console.error('Failed to load ' + url);
                }
            }
        };
        xhr.open('GET', url, true);
        xhr.send();
    });
});