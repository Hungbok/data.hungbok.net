// 연도와 계절 결정
var yearClass = Array.from(document.getElementById('calendar').classList).find(className => className.startsWith('y'));
var year = yearClass ? yearClass.slice(1) : null;
var seasonClass = Array.from(document.getElementById('calendar').classList).find(className => ['winter', 'spring', 'summer', 'autumn', 'all'].includes(className));
var season = seasonClass || null;

// 계절에 따른 월 범위 결정
var monthRanges = {
  'winter': ['01', '03'],
  'spring': ['04', '06'],
  'summer': ['07', '09'],
  'autumn': ['10', '12'],
  'all': ['01', '13']
};
var monthRange = monthRanges[season] || null;

if (year && season && monthRange) {
  // JSON 데이터 불러오기
  fetch('//data.hungbok.net/data/games/' + year + '.json')
    .then(response => {
      if (!response.ok) throw new Error('Not Found');
      return response.json();
    })
    .then(data => {
      // '월' 값이 없거나 '13'인 데이터를 '13월 32일'로 취급
      // '월' 값은 있지만 '일' 값이 없는 경우 해당 '월'의 '32일'로 취급
      var filteredData = data.map(item => {
        var dateParts = item.date.split('-');
        if (!dateParts[1] || dateParts[1] === '13') {
          dateParts[1] = '13';
          dateParts[2] = '32';
        } else if (!dateParts[2]) {
          dateParts[2] = '32';
        }
        return {...item, date: dateParts.join('-')};
      });

      // 날짜 형식에 따라 정렬
      filteredData.sort((a, b) => {
        let aDateParts = a.date.split('-').map(part => part.padStart(2, '00'));
        let bDateParts = b.date.split('-').map(part => part.padStart(2, '00'));
        return aDateParts.join('-').localeCompare(bDateParts.join('-'));
      });

      // 언어 코드 결정
      var languageCode = document.body.className || 'en';
    
      // 선택된 데이터를 #calendar에 출력
      var calendarDiv = document.getElementById('calendar');
    
      let sections = {};

      filteredData.forEach(item => {
        let dateParts = item.date.split('-');
        let year = dateParts[0];
        let month = dateParts[1];
        let day = dateParts[2];

        // 계절에 따른 월 범위 결정
        if (monthRange && (month < monthRange[0] || month > monthRange[1])) {
          return; // 요청하신 계절에 속하지 않는 월의 데이터는 건너뜁니다
        }
    
        let sectionKey = year + '-' + month;
    
        if (!sections[sectionKey]) {
          // 새로운 섹션 생성
          let sectionDiv = document.createElement('div');
          sectionDiv.id = 'section-' + sectionKey;
          sectionDiv.className = 'elevator-contents';
          sectionDiv.innerHTML = `
            <h2>${year}년 ${month !== '13' ? month + '월' : ''}</h2>
          `;
          calendarDiv.appendChild(sectionDiv);
    
          // 일자별 섹션 생성, '32일' 섹션은 항상 생성
          let daysInSection = new Date(year, month, 0).getDate();
          for (let i = 1; i <= daysInSection; i++) {
            let dayDiv = document.createElement('div');
            dayDiv.id = 'day-' + sectionKey + '-' + String(i).padStart(2, '00');
            sectionDiv.appendChild(dayDiv);
          }
          let day32Div = document.createElement('div');
          day32Div.id = 'day-' + sectionKey + '-32';
          sectionDiv.appendChild(day32Div);
    
          sections[sectionKey] = {
            div: sectionDiv,
            dayDivs: Array.from(sectionDiv.children)
          };
        }
    
        let targetDayDiv = sections[sectionKey].div.querySelector('#day-' + sectionKey + '-' + day);
        if(targetDayDiv) {
          appendData(item, targetDayDiv);
        }
      });
    
      // 데이터 출력 함수
      function appendData(item, parentDiv) {
        fetch('//data.hungbok.net/data/games/' + item.url + '.json')
        .then(response => {
          if (!response.ok) throw new Error('Not Found');
          return response.json();
        })
        .then(gameData => {
          var div = document.createElement('div');
          div.className = 'calendar-item';
      
          // 값이 없는 경우 'Unknown'으로 대체
          var url = item.url || 'Unknown';
          var platform = item.platform || 'Unknown';
          var title = gameData[languageCode]?.title || 'Unknown';

          // yyyy, mm, dd 값 추가
          var dateParts = item.date.split('-');
          var yyyy = dateParts[0] || 'Unknown';
          var mm = dateParts[1] || 'Unknown';
          var dd = dateParts[2] || 'Unknown';
  
          let template = '';
          if (dd === '32' && mm === '13') {
            template = `<a href="https://www.hungbok.com/games?q=${url}">
            <div class="calendar-item-background">
              <img src="https://data.hungbok.net/image/games/${url}/hb_capsule.jpg" onerror="this.onerror=null; this.src='//data.hungbok.net/image/hb/hb_error_horizontal.svg'">
            </div>
            <div class="calendar-item-info">
              <div class="calendar-item-title">
                <p>${title}</p>
              </div>
              <div class="calendar-item-date">
                <p class="calendar-item-year">${yyyy}</p>
              </div>
              <div class="calendar-item-platform ${platform}">
                <img class="display" src="https://data.hungbok.net/image/icon/display.svg" onerror="this.src='//data.hungbok.net/image/hb/hb_error.svg';">
                <img class="playstation" src="https://data.hungbok.net/image/icon/playstation.svg" onerror="this.src='//data.hungbok.net/image/hb/hb_error.svg';">
                <img class="xbox" src="https://data.hungbok.net/image/icon/xbox.svg" onerror="this.src='//data.hungbok.net/image/hb/hb_error.svg';">
                <img class="nintendo" src="https://data.hungbok.net/image/icon/nintendo.svg" onerror="this.src='//data.hungbok.net/image/hb/hb_error.svg';">
                <img class="phone" src="https://data.hungbok.net/image/icon/phone.svg" onerror="this.src='//data.hungbok.net/image/hb/hb_error.svg';">
                <img class="cloud" src="https://data.hungbok.net/image/icon/cloud.svg" onerror="this.src='//data.hungbok.net/image/hb/hb_error.svg';">
              </div>
            </div>
          </a>`; // dd가 32이고 mm이 13인 경우의 템플릿
          } else if (mm === '13') {
            template = `<a href="https://www.hungbok.com/games?q=${url}">
            <div class="calendar-item-background">
              <img src="https://data.hungbok.net/image/games/${url}/hb_capsule.jpg" onerror="this.onerror=null; this.src='//data.hungbok.net/image/hb/hb_error_horizontal.svg'">
            </div>
            <div class="calendar-item-info">
              <div class="calendar-item-title">
                <p>${title}</p>
              </div>
              <div class="calendar-item-date">
                <p class="calendar-item-year">${yyyy}</p>
              </div>
              <div class="calendar-item-platform ${platform}">
                <img class="display" src="https://data.hungbok.net/image/icon/display.svg" onerror="this.src='//data.hungbok.net/image/hb/hb_error.svg';">
                <img class="playstation" src="https://data.hungbok.net/image/icon/playstation.svg" onerror="this.src='//data.hungbok.net/image/hb/hb_error.svg';">
                <img class="xbox" src="https://data.hungbok.net/image/icon/xbox.svg" onerror="this.src='//data.hungbok.net/image/hb/hb_error.svg';">
                <img class="nintendo" src="https://data.hungbok.net/image/icon/nintendo.svg" onerror="this.src='//data.hungbok.net/image/hb/hb_error.svg';">
                <img class="phone" src="https://data.hungbok.net/image/icon/phone.svg" onerror="this.src='//data.hungbok.net/image/hb/hb_error.svg';">
                <img class="cloud" src="https://data.hungbok.net/image/icon/cloud.svg" onerror="this.src='//data.hungbok.net/image/hb/hb_error.svg';">
              </div>
            </div>
          </a>`; // mm이 13인 경우의 템플릿
          } else if (dd === '32') {
            template = `<a href="https://www.hungbok.com/games?q=${url}">
            <div class="calendar-item-background">
              <img src="https://data.hungbok.net/image/games/${url}/hb_capsule.jpg" onerror="this.onerror=null; this.src='//data.hungbok.net/image/hb/hb_error_horizontal.svg'">
            </div>
            <div class="calendar-item-info">
              <div class="calendar-item-title">
                <p>${title}</p>
              </div>
              <div class="calendar-item-date">
                <p class="calendar-item-year">${yyyy}</p>
                <p class="calendar-item-month">${mm}</p>
              </div>
              <div class="calendar-item-platform ${platform}">
                <img class="display" src="https://data.hungbok.net/image/icon/display.svg" onerror="this.src='//data.hungbok.net/image/hb/hb_error.svg';">
                <img class="playstation" src="https://data.hungbok.net/image/icon/playstation.svg" onerror="this.src='//data.hungbok.net/image/hb/hb_error.svg';">
                <img class="xbox" src="https://data.hungbok.net/image/icon/xbox.svg" onerror="this.src='//data.hungbok.net/image/hb/hb_error.svg';">
                <img class="nintendo" src="https://data.hungbok.net/image/icon/nintendo.svg" onerror="this.src='//data.hungbok.net/image/hb/hb_error.svg';">
                <img class="phone" src="https://data.hungbok.net/image/icon/phone.svg" onerror="this.src='//data.hungbok.net/image/hb/hb_error.svg';">
                <img class="cloud" src="https://data.hungbok.net/image/icon/cloud.svg" onerror="this.src='//data.hungbok.net/image/hb/hb_error.svg';">
              </div>
            </div>
          </a>`; // dd가 32인 경우의 템플릿
          } else {
            template = `<a href="https://www.hungbok.com/games?q=${url}">
            <div class="calendar-item-background">
              <img src="https://data.hungbok.net/image/games/${url}/hb_capsule.jpg" onerror="this.onerror=null; this.src='//data.hungbok.net/image/hb/hb_error_horizontal.svg'">
            </div>
            <div class="calendar-item-info">
              <div class="calendar-item-title">
                <p>${title}</p>
              </div>
              <div class="calendar-item-date">
                <p class="calendar-item-year">${yyyy}</p>
                <p class="calendar-item-month">${mm}</p>
                <p class="calendar-item-day">${dd}</p>
              </div>
              <div class="calendar-item-platform ${platform}">
                <img class="display" src="https://data.hungbok.net/image/icon/display.svg" onerror="this.src='//data.hungbok.net/image/hb/hb_error.svg';">
                <img class="playstation" src="https://data.hungbok.net/image/icon/playstation.svg" onerror="this.src='//data.hungbok.net/image/hb/hb_error.svg';">
                <img class="xbox" src="https://data.hungbok.net/image/icon/xbox.svg" onerror="this.src='//data.hungbok.net/image/hb/hb_error.svg';">
                <img class="nintendo" src="https://data.hungbok.net/image/icon/nintendo.svg" onerror="this.src='//data.hungbok.net/image/hb/hb_error.svg';">
                <img class="phone" src="https://data.hungbok.net/image/icon/phone.svg" onerror="this.src='//data.hungbok.net/image/hb/hb_error.svg';">
                <img class="cloud" src="https://data.hungbok.net/image/icon/cloud.svg" onerror="this.src='//data.hungbok.net/image/hb/hb_error.svg';">
              </div>
            </div>
          </a>`; // 그 외의 경우의 템플릿
          }
  
          div.innerHTML = template;
          parentDiv.appendChild(div);
        })
        .catch(error => {
          // '/games/[url값].json' 파일이 없는 경우
        });
      }
    })
    .catch(error => {
      var script = document.createElement('script');
      script.src = '//data.hungbok.net/javascript/error404.js';
      document.head.appendChild(script);
      // 연도에 해당하는 파일이 없거나 다른 오류가 발생한 경우
    });
} else {
  var script = document.createElement('script');
  script.src = '//data.hungbok.net/javascript/error404.js';
  document.head.appendChild(script);
  // 연도나 계절 클래스가 없는 경우
}

function addNavigationButtons() {
  // #calendar 요소와 그 클래스를 가져옵니다.
  var calendar = document.getElementById('calendar');
  var calendarClasses = calendar.className.split(' ');

  // 연도와 계절 클래스를 찾습니다.
  var yearClass = calendarClasses.find(c => c.startsWith('y'));
  var seasonClass = calendarClasses.find(c => c === 'all' || c === 'winter' || c === 'spring' || c === 'summer' || c === 'autumn');

  // 연도를 파싱합니다.
  var year = parseInt(yearClass.slice(1));

  // 이전과 다음 계절/연도를 결정합니다.
  var prev, next;
  switch (seasonClass) {
    case 'all':
      prev = `./${year-1}`;
      next = `./${year+1}`;
      break;
    case 'winter':
      prev = `../${year-1}/autumn`;
      next = `../${year}/spring`;
      break;
    case 'spring':
      prev = `../${year}/winter`;
      next = `../${year}/summer`;
      break;
    case 'summer':
      prev = `../${year}/spring`;
      next = `../${year}/autumn`;
      break;
    case 'autumn':
      prev = `../${year}/summer`;
      next = `../${year+1}/winter`;
      break;
  }

  // 제목 생성 부분
  var title = document.createElement('div');
  title.className = 'calendar-title';
  var titleSeason = seasonClass !== 'all' ? convertSeason(seasonClass) : '';
  title.textContent = `${year}년 ${titleSeason} 게임 출시 일정`;
  calendar.insertBefore(title, calendar.firstChild);
  
  // 계절 변환 함수
  function convertSeason(season) {
    switch (season) {
      case 'winter':
        return '겨울';
      case 'spring':
        return '봄';
      case 'summer':
        return '여름';
      case 'autumn':
        return '가을';
      case 'all':
        return '전체';
      default:
        return '';
    }
  }

  if (seasonClass === 'all') {
  // 버튼 생성 부분
  var prevButton = $('<div></div>')
      .addClass('calendar-prev')
      .click(function() { window.location.href = prev; })
      .text('❮ ' + prev.split('/').slice(-2, -1)[0] + '년');  
  
  var nextButton = $('<div></div>')
      .addClass('calendar-next')
      .click(function() { window.location.href = next; })
      .text(next.split('/').slice(-2, -1)[0] + '년 ❯');  
  } else {
    // 계절이 'winter', 'spring', 'summer', 'autumn'일 때의 버튼 생성
    var prevButton = $('<div></div>')
      .addClass('calendar-prev')
      .click(function() { window.location.href = prev; })
      .text('❮ ' + prev.split('/').slice(-2, -1)[0] + '년');
  
    var nextButton = $('<div></div>')
      .addClass('calendar-next')
      .click(function() { window.location.href = next; })
      .text(next.split('/').slice(-2, -1)[0] + '년 ❯');
  }
  
  // 버튼 추가 부분
  $(calendar).append(prevButton, nextButton);
}

// 버튼을 추가합니다.
addNavigationButtons();

$(document).ready(function() {
  $(document).on('click', '.elevator-up, .elevator-down', function() {
      var contents = $('.elevator-contents');
      var currentScroll = $(window).scrollTop();
      var currentIndex = 0;
      var closest = Infinity;

      contents.each(function(index) {
          var distance = Math.abs(currentScroll - $(this).offset().top + 90);
          if(distance < closest) {
              closest = distance;
              currentIndex = index;
          }
      });

      if($(this).hasClass('elevator-up') && currentIndex > 0) {
          currentIndex -= 1;
      } else if($(this).hasClass('elevator-down') && currentIndex < contents.length - 1) {
          currentIndex += 1;
      }

      contents = $('.elevator-contents');  // Update the contents list
      $('html, body').animate({
          scrollTop: $(contents[currentIndex]).offset().top - 90
      }, 500);
  });
});
