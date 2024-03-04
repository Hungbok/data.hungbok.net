async function loadAsyncScripts() {
    // 이미지 및 동영상 슬라이드쇼
    await loadScript('//data.hungbok.net/javascript/slick.js');
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

var urlParams = new URLSearchParams(window.location.search);
var y = urlParams.get('y');
var m = urlParams.get('m');

if (!y || !m) {
    var today = new Date();
    var currentYear = today.getFullYear();
    var currentMonth = ("0" + (today.getMonth() + 1)).slice(-2);
    window.location.href = window.location.pathname + "?y=" + currentYear + "&m=" + currentMonth; // 페이지 이동
} else if (isNaN(y) || isNaN(m) || m < 1 || m > 12) {
    $('main > .section').remove();
    $('main > .top-backgrounds').remove();
    $("main").append('<section id="unavailable" class="errorpage">'+
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
} else {
    m = ("0" + m).slice(-2); // 두 자리로 맞춤
    var date = new Date(y + "-" + m);
    var month = date.getMonth();
    var year = date.getFullYear();

    fetch(`//data.hungbok.net/data/games/${y}.json`) // 해당 연도 파일 확인
    .then(response => {
        if (!response.ok) { throw response }
        return response.json() // 파일이 존재하면 json 데이터 반환
    })
    .then(data => {
        function createCalendar(year, month, data) {
            var firstDay = (new Date(year, month)).getDay();
            var daysInMonth = 32 - new Date(year, month, 32).getDate();
        
            var prevYear = month === 0 ? year - 1 : year;
            var nextYear = month === 11 ? year + 1 : year;
            var prevMonth = month === 0 ? 11 : month - 1;
            var nextMonth = month === 11 ? 0 : month + 1;
            var prevMonthFormatted = ("0" + (prevMonth + 1)).slice(-2); // 수정된 부분
            var nextMonthFormatted = ("0" + (nextMonth + 1)).slice(-2); // 수정된 부분
        
            var firstDayOfYear = (new Date(year, 0, 1)).getDay();
            var weekOfYear = Math.ceil((dayOfYear(year, month, 1) + firstDayOfYear) / 7); // 수정된 부분
        
            var calendar = "<div class='calendar-title'>" + year + '년 ' + (month + 1) + '월' + " 게임 출시 일정</div>" +
                           "<div class='calendar-prev' onclick='window.location.href=\"?y=" + prevYear + "&m=" + prevMonthFormatted + "\"'>❮ " + prevYear + "년 " + prevMonthFormatted + "월 게임 출시 일정</div> " +
                           "<div class='calendar-next' onclick='window.location.href=\"?y=" + nextYear + "&m=" + nextMonthFormatted + "\"'>" + nextYear + "년 " + nextMonthFormatted + "월 게임 출시 일정 ❯</div> " +
                           "<div class='calendar'>" +
                           "<div class='calendar-header'></div><div class='calendar-header'>일</div><div class='calendar-header'>월</div><div class='calendar-header'>화</div><div class='calendar-header'>수</div><div class='calendar-header'>목</div><div class='calendar-header'>금</div><div class='calendar-header'>토</div>";
        
            var today = new Date();

            for (var i = 0; i < 7; i++) { 
                if (i === 0 || i % 7 === 0) { // 수정된 부분
                    weekOfYear = Math.ceil((dayOfYear(year, month, i - firstDay + 1) + firstDayOfYear) / 7); // 수정된 부분
                    if (weekOfYear === 53 && daysInMonth - i + 1 < 7) {
                        weekOfYear = 1;
                    }
                    calendar += "<div class='calendar-week'>" + weekOfYear + "</div>";
                }
                if (i < firstDay) {
                    calendar += "<div class='calendar-day'></div>";
                } else {
                    var day = i - firstDay + 1;
                    var items = data.filter(x => new Date(x.date).getFullYear() === year &&
                                                 new Date(x.date).getMonth() === month &&
                                                 new Date(x.date).getDate() === day);
                    calendar += "<div class='calendar-day" + (today.getFullYear() === year && today.getMonth() === month && today.getDate() === day ? " today" : "") + "'><div class='calendar-background'></div><div class='calendar-number'>" + day + "일</div><div class='calendar-container'>";
                    items.forEach(item => {
                        var platform = item.platform;
                        var url = item.url;
                        calendar += (url ? " <a class='calendar-item' href='https://www.hungbok.com/games?q=" + url + "'>" : "") + (url ? " <img class='calendar-image' src='https://data.hungbok.net/image/games/" + url + "/hb_thumbnail.jpg' onerror='this.src=`//data.hungbok.net/image/hb/hb_error_vertical.svg`;'/>" : "") + "<div class='calendar-item-info'><p class='calendar-item-title'>" + (url ? " <img class='calendar-image' src='https://data.hungbok.net/image/games/" + url + "/hb_logo.png' onerror='this.src=`//data.hungbok.net/image/hb/hb_error.svg`;'/>" : "") + "</p>" + (platform ? " <p class='calendar-item-text " + platform + "'></p>" : "") + "</div></a>";
                    });
                    calendar += "</div></div>";
                }
            }
        
            for (var i = 7; i < daysInMonth + firstDay; i++) {
                if (i % 7 === 0) { // 수정된 부분
                    weekOfYear = Math.ceil((dayOfYear(year, month, i - firstDay + 1) + firstDayOfYear) / 7); // 수정된 부분
                    if (weekOfYear === 53 && daysInMonth - i + 1 < 7) {
                        weekOfYear = 1;
                    }
                    calendar += "<div class='calendar-week'>" + weekOfYear + "</div>";
                }
                var day = i - firstDay + 1;
                var items = data.filter(x => new Date(x.date).getFullYear() === year &&
                                             new Date(x.date).getMonth() === month &&
                                             new Date(x.date).getDate() === day);
                calendar += "<div class='calendar-day" + (today.getFullYear() === year && today.getMonth() === month && today.getDate() === day ? " today" : "") + "'><div class='calendar-background'></div><div class='calendar-number'>" + day + "일</div><div class='calendar-container'>";
                items.forEach(item => {
                    var platform = item.platform;
                    var url = item.url;
                    calendar += (url ? " <a class='calendar-item' href='https://www.hungbok.com/games?q=" + url + "'>" : "") + (url ? " <img class='calendar-image' src='https://data.hungbok.net/image/games/" + url + "/hb_thumbnail.jpg' onerror='this.src=`//data.hungbok.net/image/hb/hb_error_vertical.svg`;'/>" : "") + "<div class='calendar-item-info'><p class='calendar-item-title'>" + (url ? " <img class='calendar-image' src='https://data.hungbok.net/image/games/" + url + "/hb_logo.png' onerror='this.src=`//data.hungbok.net/image/hb/hb_error.svg`;'/>" : "") + "</p>" + (platform ? " <p class='calendar-item-text " + platform + "'></p>" : "") + "</div></a>";
                });
                calendar += "</div></div>";
            }
        
            while (i % 7 !== 0) {
                if (i % 7 === 0) {
                    weekOfYear = Math.floor((firstDay + dayOfYear(year, month, i - firstDay + 1) - 1) / 7) + 1;
                    calendar += "<div class='calendar-week'>" + weekOfYear + "</div>";
                }
                calendar += "<div class='calendar-day'></div>";
                i++;
            }
            calendar += "</div>";
        
            document.getElementById('calendar').innerHTML = calendar;
        }
        
        function dayOfYear(year, month, day) {
            var now = new Date(year, month, day);
            var start = new Date(year, 0, 0);
            var diff = now - start;
            var oneDay = 1000 * 60 * 60 * 24;
            return Math.floor(diff / oneDay); // 수정된 부분
        }

        fetch('//data.hungbok.net/data/games/' + y + '.json')
        .then(response => response.json())
        .then(data => {
            var calendarData = data.filter(item => {
                var dateParts = item.date.split('-');
                return dateParts.length === 3; // 'date' 값이 'yyyy-mm-dd' 형식인 데이터만 필터링
            });
    
            createCalendar(year, month, calendarData); // 'createCalendar' 함수를 호출
    
            var remainderData = data.filter(item => {
                var dateParts = item.date.split('-');
                return dateParts.length === 2 && item.date === `${y}-${m}`; // 'date' 값이 'yyyy-mm' 형식이고, URL 매개변수와 일치하는 데이터만 필터링
            });
    
            remainderData.forEach(item => {
                $("#calendar-remainder").append("<div class='calendar-day'>"+
                    "<a class='calendar-item' href='https://www.hungbok.com/games?q=" + item.url + "'>"+
                        "<img class='calendar-image' src='https://data.hungbok.net/image/games/" + item.url + "/hb_thumbnail.jpg' onerror='this.src=`//data.hungbok.net/image/hb/hb_error_vertical.svg`;'/>"+
                        "<div class='calendar-item-info'>"+
                            "<p class='calendar-item-title'>"+
                                "<img class='calendar-image' src='https://data.hungbok.net/image/games/" + item.url + "/hb_logo.png' onerror='this.src=`//data.hungbok.net/image/hb/hb_error.svg`;'/>"+
                            "</p>"+
                            "<p class='calendar-item-text " + item.platform + "'></p>"+
                        "</div>"+
                    "</a>"+
                "</div>"); // '#calendar-remainder'에 데이터 추가
            });
        });

        window.addEventListener('load', function() {
            loadAsyncScripts();

            $(".pc").append('<img src="https://data.hungbok.net/image/icon/display.svg">');
            $(".ps").append('<img src="https://data.hungbok.net/image/icon/playstation.svg">');
            $(".xb").append('<img src="https://data.hungbok.net/image/icon/xbox.svg">');
            $(".ns").append('<img src="https://data.hungbok.net/image/icon/nintendo.svg">');
            $(".mo").append('<img src="https://data.hungbok.net/image/icon/phone.svg">');
            $(".cl").append('<img src="https://data.hungbok.net/image/icon/cloud.svg">');
        });
    })
    .catch(error => {
        console.log('Error:', error);
        $('main > .section').remove();
        $('main > .top-backgrounds').remove();
        $("main").append('<section id="unavailable" class="errorpage">'+
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
    });
}

$('.calendar-day').on('mousedown', function() {
    $(this).find('.calendar-container').trigger('mousedown');
});
  
$('.calendar-day').on('mouseup', function() {
    $(this).find('.calendar-container').trigger('mouseup');
});