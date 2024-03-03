// ---------- cookie

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

// ---------- theme

const setTheme = theme => {
    document.documentElement.className = theme;
    setCookie('theme', theme, 30);  // 30일 동안 쿠키를 저장합니다.
};

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

const theme = getCookie('theme');
if (theme) setTheme(theme);

// ---------- top button

function topButton() {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	});
}

// ---------- Message Box

function showMessage(messageText) {
    var completionMessageContainer = document.getElementById("message-container");

    var completionMessage = document.createElement("div");
    completionMessage.className = "completion-message";
    completionMessage.textContent = messageText;

    // 새로운 문구를 중앙에 추가
    completionMessageContainer.prepend(completionMessage);

    // 트랜지션 효과를 이용하여 opacity를 1로 설정하여 나타나게 함
    setTimeout(function() {
        completionMessage.style.opacity = 1;
    }, 10);

    var fadeOutTime = 2000;

    // 일정 시간 후에 사라지기
    setTimeout(function() {
        completionMessage.style.opacity = 0;

        // 사라진 후에 요소 제거
        setTimeout(function() {
            completionMessage.parentNode.removeChild(completionMessage);
        }, fadeOutTime);
    }, fadeOutTime + 1000); // +1000ms 딜레이 추가
}

function showErrorMessage(messageText) {
    var completionMessageContainer = document.getElementById("message-container");

    var completionMessage = document.createElement("div");
    completionMessage.className = "error-message";
    completionMessage.textContent = messageText;

    // 새로운 문구를 중앙에 추가
    completionMessageContainer.prepend(completionMessage);

    // 트랜지션 효과를 이용하여 opacity를 1로 설정하여 나타나게 함
    setTimeout(function() {
        completionMessage.style.opacity = 1;
    }, 10);

    var fadeOutTime = 2000;

    // 일정 시간 후에 사라지기
    setTimeout(function() {
        completionMessage.style.opacity = 0;

        // 사라진 후에 요소 제거
        setTimeout(function() {
            completionMessage.parentNode.removeChild(completionMessage);
        }, fadeOutTime);
    }, fadeOutTime + 1000); // +1000ms 딜레이 추가
}

// ---------- Toggle

// Language 토글 함수
function language() {
    var language = document.getElementById("language-lists");
    if (language.style.display === "block") {
        language.style.display = "none";
    } else {
        language.style.display = "block";
    }
}

// Sidepanel 토글 함수
function sidepanel() {
    var sidepanel = document.getElementById("side-panel-contents");
    var body = document.body;

    if (sidepanel.classList.contains('open')) {
    sidepanel.classList.remove('open');
    } else {
        sidepanel.classList.add('open');
    }

    if (body.classList.contains('overflow-hidden')) {
    body.classList.remove('overflow-hidden'); // 스크롤 가능하게 설정
    } else {
        body.classList.add('overflow-hidden'); // 스크롤 막기
    }
}

$(document).ready(function(){
    $('body').on('click', 'summary', function(e) {
        var details = $(this).parent();
        if(details.attr('open')) {
            e.preventDefault();
            details.find('.franchise-contents, .details-contents').slideUp(function() {
                details.removeAttr('open');
            });
        } else {
            details.find('.franchise-contents, .details-contents').slideDown(function() {
                details.attr('open', '');
            });
        }
    });
});

// 문서 클릭 시 Language 열려있으면 닫기 / .side-panel-overlay 클릭 시 Sidepanel 열려있으면 닫기
window.onclick = function(event) {
    if (!event.target.matches('.header-button-container .language-selecter') && !event.target.closest('.language-lists')) {
        var language = document.getElementsByClassName("language-lists");
        for (var i = 0; i < language.length; i++) {
            var openLanguage = language[i];
            if (openLanguage.style.display === "block") {
                openLanguage.style.display = "none";
            }
        }
    }

    var sidepanel = document.querySelector('.side-panel-contents');
    var body = document.body;

    // ..side-panel-overlay 클릭 시 .side-panel-contents 감추기
    if (event.target.matches('.side-panel-overlay')) {
        sidepanel.classList.remove('open');
        body.classList.remove('overflow-hidden'); // 스크롤 가능하게 설정
    }
}

$(document).ready(function() {

    // ---------- Top button

	//Pour afficher le bouton 
	var offset = 120;
	var duration = 500;
	$(window).scroll(function() {
		if (jQuery(this).scrollTop() > offset) {
			$('#top-button').fadeIn(duration);
		} else {
			$('#top-button').fadeOut(duration);
		}
	});

    // ---------- Popup

    // .popup 클릭 시 .popup-content와 .popup-overlay를 생성 및 표시합니다.
    $(document).on('click', '.popup', function(e) {
        var content = $(this).find('.popup-content');
        content.append('<div class="popup-close"></div>'); // .popup-content 아래에 .popup-close 생성
        content.css({
            'position': 'fixed',
        }).hide().fadeIn(); // 페이드인 효과 적용

        // .popup-overlay 생성 및 표시
        $('body').append('<div class="popup-overlay"></div>');
        $('.popup-overlay').css({
            'position': 'fixed'
        }).hide().fadeIn(); // 페이드인 효과 적용

        $('body').css('overflow', 'hidden'); // 스크롤 막기

        e.stopPropagation(); // 이벤트 전파를 막습니다.
    });

    // .popup-content와 그 하위 요소를 클릭 시 이벤트 전파를 막습니다.
    $(document).on('click', '.popup-content, .popup-content *', function(e) {
        e.stopPropagation(); // 이벤트 전파를 막습니다.
    });

    // .popup-close 클릭 시 .popup-content와 .popup-overlay를 숨깁니다.
    $(document).on('click', '.popup-close, .report-button', function(e) {
        e.stopPropagation(); // 이벤트 전파를 막습니다.

        // .popup-content와 .popup-overlay에 페이드아웃 효과 적용 후 숨김
        $(this).closest('.popup').find('.popup-content').fadeOut();
        $('.popup-overlay').fadeOut(function() {
            $(this).remove();
        });

        // .popup-close 삭제
        $(this).closest('.popup').find('.popup-content .popup-close').fadeOut(function() {
            $(this).remove();
        });

        $('body').css('overflow', ''); // 스크롤 복원
    });

    // 화면의 다른 부분 또는 .popup-overlay 클릭 시 .popup-content와 .popup-overlay를 숨깁니다.
    $(document).on('click', function() {
        // .popup-content와 .popup-overlay에 페이드아웃 효과 적용 후 숨김
        $('.popup-content').fadeOut();
        $('.popup-overlay').fadeOut(function() {
            $(this).remove();
        });

        // .popup-close 삭제
        $(this).closest('.popup').find('.popup-content .popup-close').fadeOut(function() {
            $(this).remove();
        });

        $('body').css('overflow', ''); // 스크롤 복원
    });

    // ---------- report

    $(".report-content").append('<div class="popup-title text-report-title"></div>'+
    '<div class="report-text text-report-text"></div>'+
    '<form id="formid" class="gform pure-form pure-form-stacked" method="POST" target="iframe1" data-email="example@email.net" action="https://script.google.com/macros/s/AKfycbzvRWid6uyW4iHvfJCeeEol_YR1dSK9R-vCW4Bo0GKjI3qTQrzDRM4IbVdaCsfP-uxp/exec">'+
        '<div class="form-elements">'+
            '<fieldset class="pure-group name">'+
                '<label for="report-title"></label>'+
                '<input id="report-title" name="이름" value="">'+
            '</fieldset>'+
            '<fieldset class="pure-group">'+
                '<div id="option1" class="report-item"><p></p></div>'+
                '<div id="option2" class="report-item"><p></p></div>'+
                '<div id="option3" class="report-item"><p></p></div>'+
                '<div id="option4" class="report-item"><p></p></div>'+
                '<div id="option5" class="report-item"><p></p></div>'+
                '<div id="option6" class="report-item"><p></p></div>'+
                '<div id="option7" class="report-item"><p></p></div>'+
            '</fieldset>'+
            '<fieldset class="pure-group type">'+
                '<label for="report-type"></label>'+
                '<input id="report-type" name="사유" value=""></input>'+
            '</fieldset>'+
            '<fieldset class="pure-group honeypot-field">'+
                '<label for="honeypot">To help avoid spam, utilize a Honeypot technique with a hidden text field; must be empty to submit the form! Otherwise, we assume the user is a spam bot.</label>'+
                '<input id="honeypot" type="text" name="honeypot" value="" />'+
            '</fieldset>'+
        '</div>'+
        '<button class="button-success pure-button button-xlarge report-button report-text" onclick="showMessage(`신고가 성공적으로 접수되었습니다.`);">'+
            '<p class="text-report-title"></p>'+
        '</button>'+
        '<div class="report-text text-report-more"><a class="text-report-help" href="https://help.hungbok.com/contact"></a></div>'+
        '<div class="thankyou_message" style="display:none;">'+
            '<h2>Your inquiry has been successfully received.</h2>'+
        '</div>'+
    '</form>');

    document.body.addEventListener('click', function(event) {
        if (event.target.id === 'option1') {
            $('#report-type').attr('value',"부적절한 콘텐츠");
            $('.report-item').removeClass('selected');
            $('#option1').addClass('selected');
        } else if (event.target.id === 'option2') {
            $('#report-type').attr('value',"위협적인 콘텐츠");
            $('.report-item').removeClass('selected');
            $('#option2').addClass('selected');
        } else if (event.target.id === 'option3') {
            $('#report-type').attr('value',"법률 위반 및 불법적 콘텐츠");
            $('.report-item').removeClass('selected');
            $('#option3').addClass('selected');
        } else if (event.target.id === 'option4') {
            $('#report-type').attr('value',"유해한 콘텐츠");
            $('.report-item').removeClass('selected');
            $('#option4').addClass('selected');
        } else if (event.target.id === 'option5') {
            $('#report-type').attr('value',"개인 정보 침해 및 명예 훼손");
            $('.report-item').removeClass('selected');
            $('#option5').addClass('selected');
        } else if (event.target.id === 'option6') {
            $('#report-type').attr('value',"스팸 및 사기성 콘텐츠");
            $('.report-item').removeClass('selected');
            $('#option6').addClass('selected');
        } else if (event.target.id === 'option7') {
            $('#report-type').attr('value',"잘못된 정보 또는 잘못된 사실 제공");
            $('.report-item').removeClass('selected');
            $('#option7').addClass('selected');
        }
    });

    // ---------- share

    $(".share-content").append('<div class="popup-title text-share-title"></div>'+
    '<div class="share-text text-share-text"></div>'+
    '<div class="external-links">'+
        '<div class="external-link" ttt="Embed">'+
            `<a class='external-link-button icon-code' copy-item='<iframe src="https://viewer.hungbok.net/{type}?q={url}" width="100%" height="256" frameBorder="0" loading="lazy"></iframe>' target='_blank'></a>`+
        '</div>'+
        '<div class="external-link" ttt="Email">'+
            '<a class="external-link-button icon-mail" href="mailto:?body={title}%0D%0Ahttps://hgbk.me/{share}" target="_blank"></a>'+
        '</div>'+
        '<div class="external-link" ttt="facebook">'+
            '<a class="external-link-button icon-facebook" href="https://www.facebook.com/sharer.php?u=https://hgbk.me/{share}&t={title}" target="_blank"></a>'+
        '</div>'+
        '<div class="external-link" ttt="X">'+
            '<a class="external-link-button icon-x" href="https://twitter.com/intent/post?url=https://hgbk.me/{share}&text={title}" target="_blank"></a>'+
        '</div>'+
        '<div class="external-link" ttt="reddit">'+
            '<a class="external-link-button icon-reddit" href="https://www.reddit.com/r/gaming/submit?url=https://hgbk.me/{share}&title={title}" target="_blank"></a>'+
        '</div>'+
    '</div>'+
    '<div class="share-link">'+
        '<div class="share-url"><input value="https://hgbk.me/{share}" readonly></div>'+
        '<div class="share-copy"><img src="//data.hungbok.net/image/icon/copy.svg" onerror="this.src=`//data.hungbok.net/image/icon/exclamation.svg`;" loading="lazy"></div>'+
    '</div>');
    
    $(document).on('click', '.share-link .share-copy', function() {
        var $parent = $(this).closest('.share-link');
        var $input = $parent.find('.share-url > input');
    
        var valueToCopy = $input.val();
        var tempInput = document.createElement('input');
        
        tempInput.value = valueToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
    
        showMessage('클립보드에 복사되었습니다.');
    });
    
    $(document).on('change', '.share-link .share-url > input', function() {
        var newValue = $(this).val();
        console.log('새로운 값이 입력되었습니다: ' + newValue);
    });

    $(document).on('click', '.share-url > input', function() {
        $(this).select();
    });
    
    $(document).on('click', '[copy-item]', function() {
        var valueToCopy = $(this).attr('copy-item');
        var tempInput = document.createElement('input');
    
        tempInput.value = valueToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
    
        showMessage('클립보드에 복사되었습니다.');
    });
});

// ---------- Search

window.addEventListener('load', function() {
    $.getJSON("//data.hungbok.net/data/searchData.json", function(data) { 
        $.getJSON("//data.hungbok.net/data/langData.json", function(langData) { 
            $("#search-value").on("input focus", function() { 
                let searchValue = $(this).val().toLowerCase().trim(); 
                if(searchValue === '') { 
                    $(".search-results").empty().hide(); 
                    return;
                }

                let languageCode = $("body").attr("class").split(' ').find(cls => cls.length === 2) || "en"; // 언어코드를 가져옵니다. 언어 데이터에 해당 언어가 없거나 body에 언어 코드가 없는 경우에는 'en'을 기본으로 합니다.
                
                let results = data.filter(item => { 
                    return (Object.values(item.title).concat(Object.values(item.subtitle))).some(text => {
                        let lowerText = text.toLowerCase();
                        if(lowerText.includes(searchValue)) {
                            return true;
                        }
                        let cleanedText = lowerText.replace(/\s+/g, '');
                        let cleanedSearchValue = searchValue.replace(/\s+/g, '');
                        return cleanedText.includes(cleanedSearchValue);
                    });
                }).slice(0, 5); 

                $(".search-results").empty(); 
                if(results.length === 0) { 
                    $(".search-results").hide();
                    return;
                }
                results.forEach(item => { 
                    let title = Object.values(item.title).find(title => title.toLowerCase().includes(searchValue));
                    if (!title) {
                        title = (item.title[languageCode]) ? item.title[languageCode] : item.title['en']; // 언어코드에 해당하는 title이 없으면 영어를 기본으로 합니다.
                    }
                    let type = item.type && langData[languageCode][item.type] ? langData[languageCode][item.type] : ""; // 해당 언어의 type을 가져옵니다. item에 type이 없거나 언어 데이터에 해당 type이 없는 경우에는 빈 문자열을 사용합니다.
                    $(".search-results").append(`
                        <a href="${item.url}">
                            <img class="search-results-image" src="${item.image}" onerror="this.src='//data.hungbok.net/image/hb/hb_error_horizontal.svg';">
                            ${type ? `<p class="search-results-type">${type}</p>` : ""}<p class="search-results-title" title="${title}">${title}</p>
                        </a>
                    `);
                });
                $(".search-results").show(); 
            });

            $(document).on("click", function(e) { 
                if(!$(e.target).closest('.search-container').length) { 
                    $(".search-results").hide(); 
                }
            });

            $(".search-container").on("click", function(e) { 
                e.stopPropagation(); 
            });
        });
    });
});