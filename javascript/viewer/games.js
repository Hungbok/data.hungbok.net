async function loadAsyncScripts() {
    // 동영상 팝업 재생
    await loadScript('//data.hungbok.net/javascript/youtube-popup.js');
    // 이미지 팝업 슬라이드쇼
    await loadScript('//data.hungbok.net/javascript/lightbox.js');
    // 이미지 및 동영상 슬라이드쇼
    await loadScript('//data.hungbok.net/javascript/slick.js');
    await loadScript('//data.hungbok.net/javascript/html_loader.js');
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
        $.getJSON(`//data.hungbok.net/data/games/${queryParam}.json`, function (data) {
            // 사용자의 언어 설정 가져오기
            var userLang = navigator.language || navigator.userLanguage; 
            userLang = userLang.substr(0,2); // 언어 코드의 앞 2글자만 사용

            var dataTitle, dataType, dataInfo_developer, dataInfo_publisher, dataPlot, dataLearn_more;
            if(data.hasOwnProperty(userLang)) {
                dataTitle = data[userLang].title;
                dataInfo_developer = data[userLang].info_developer;
                dataInfo_publisher = data[userLang].info_publisher;
                dataPlot = data[userLang].plot;
                dataLearn_more = data[userLang].learn_more;
            } else {
                dataTitle = data['en'].title;
                dataInfo_developer = data['en'].info_developer;
                dataInfo_publisher = data['en'].info_publisher;
                dataPlot = data['en'].plot;
                dataLearn_more = data['en'].learn_more;
            }

            // JSON 데이터를 HTML에 대체삽입
            $("#page_title").text(dataTitle + ' | HungBok');
            $('body').addClass('body-' + dataType);

            document.body.innerHTML = document.body.innerHTML.replace(/{type}/g, data.type);
            document.body.innerHTML = document.body.innerHTML.replace(/{title}/g, dataTitle);
            document.body.innerHTML = document.body.innerHTML.replace(/{info_developer}/g, dataInfo_developer);
            document.body.innerHTML = document.body.innerHTML.replace(/{info_publisher}/g, dataInfo_publisher);
            document.body.innerHTML = document.body.innerHTML.replace(/{platform}/g, data.platform);
            document.body.innerHTML = document.body.innerHTML.replace(/{plot}/g, dataPlot);
            document.body.innerHTML = document.body.innerHTML.replace(/{url}/g, data.url);
            document.body.innerHTML = document.body.innerHTML.replace(/{share}/g, data.share);
            document.body.innerHTML = document.body.innerHTML.replace(/{learn_more}/g, dataLearn_more);
            document.body.innerHTML = document.body.innerHTML.replace(/{thumbnail}/g, data.thumbnail);
        });
    }
});

window.addEventListener("scroll", function() {
    var scrolledHeight= window.pageYOffset;
    var newPosition = -(scrolledHeight * 0.5);
    var newPosition2 = (scrolledHeight * 0.5);
  
    if (newPosition >= -250 && newPosition <= 0) {
        document.getElementsByClassName("top-background")[0].style.backgroundPosition = "center " + newPosition + "px";
        document.getElementsByClassName("top-background-mirror")[0].style.backgroundPosition = "center " + newPosition + "px";
    }
  
    if (newPosition2 >= 0 && newPosition2 <= 250) {
        document.getElementsByClassName("top-background-shadow")[0].style.transform = "scaleX(1) scaleY(-1) translate(-50%, " + newPosition2 + "px)";
    }
});

function showError(image) {
    // URL의 쿼리 매개변수에서 'q'값을 가져옴
    var urlParams = new URLSearchParams(window.location.search);
    var q = urlParams.get('q');

    // JSON 파일 불러오기
    fetch(`//data.hungbok.net/data/games/${q}.json`)
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
    image.src = "//data.hungbok.net/image/hb/hb_error_horizontal.svg";
}

function verticalError(image) {
    image.src = "//data.hungbok.net/image/hb/hb_vertical.svg";
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
