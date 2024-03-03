// 연도와 계절 결정
var yearClass = Array.from(document.getElementById('calendar').classList).find(className => className.startsWith('y'));
var year = yearClass ? yearClass.slice(1) : null;
var seasonClass = Array.from(document.getElementById('calendar').classList).find(className => ['winter', 'spring', 'summer', 'autumn'].includes(className));
var season = seasonClass || null;

// 계절에 따른 월 범위 결정
var monthRanges = {
  'winter': ['01', '03'],
  'spring': ['04', '06'],
  'summer': ['07', '09'],
  'autumn': ['10', '12']
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
      // 월에 따른 데이터 선택
      var filteredData = data.filter(item => {
        var month = item.date.split('-')[1];
        return month >= monthRange[0] && month <= monthRange[1];
      });

      // 날짜 순으로 정렬
      filteredData.sort((a, b) => new Date(a.date) - new Date(b.date));

      // 언어 코드 결정
      var languageCode = document.body.className || 'en';

      // 선택된 데이터를 #calendar에 출력
      var calendarDiv = document.getElementById('calendar');
      var lastMonth = null;
      var monthDiv = null;
      filteredData.forEach((item, index) => {
        var year = item.date.split('-')[0];
        var month = item.date.split('-')[1];

        if (month !== lastMonth) {
          // 월이 바뀌는 경우 월을 출력
          monthDiv = document.createElement('div');
          monthDiv.id = 'section-' + month;
          monthDiv.innerHTML = `
            <p>${year}</p>
            <p>${month}</p>
          `;
          calendarDiv.appendChild(monthDiv);
      
          lastMonth = month;
        }
        
        // 'url' 필드 값을 이용하여 '/games/[url값].json' 파일 불러오기
        fetch('//data.hungbok.net/data/games/' + item.url + '.json')
        .then(response => {
          if (!response.ok) throw new Error('Not Found');
          return response.json();
        })
        .then(gameData => {
          var div = document.createElement('div');
          div.className = 'calendar-item';
          div.innerHTML = `
            <a href="https://www.hungbok.com/games?q=${item.url}">
              <div class="calendar-item-background">
                <img src="https://data.hungbok.net/image/games/${item.url}/hb_capsule.jpg" onerror="this.onerror=null; this.src='//data.hungbok.net/image/hb/hb_error_horizontal.svg'">
              </div>
              <div class="calendar-item-info">
                <div class="calendar-item-title">
                  <p>${gameData[languageCode].title}</p>
                </div>
                <div class="calendar-item-date">
                  <p class="calendar-item-year">${item.date.split('-')[0]}</p>
                  <p class="calendar-item-month">${item.date.split('-')[1]}</p>
                  <p class="calendar-item-day">${item.date.split('-')[2]}</p>
                </div>
                <div class="calendar-item-platform ${item.platform}">
                  <img class="display" src="https://data.hungbok.net/image/icon/display.svg" onerror="this.src='//data.hungbok.net/image/hb/hb_error.svg';">
                  <img class="playstation" src="https://data.hungbok.net/image/icon/playstation.svg" onerror="this.src='//data.hungbok.net/image/hb/hb_error.svg';">
                  <img class="xbox" src="https://data.hungbok.net/image/icon/xbox.svg" onerror="this.src='//data.hungbok.net/image/hb/hb_error.svg';">
                  <img class="nintendo" src="https://data.hungbok.net/image/icon/nintendo.svg" onerror="this.src='//data.hungbok.net/image/hb/hb_error.svg';">
                  <img class="phone" src="https://data.hungbok.net/image/icon/phone.svg" onerror="this.src='//data.hungbok.net/image/hb/hb_error.svg';">
                  <img class="cloud" src="https://data.hungbok.net/image/icon/cloud.svg" onerror="this.src='//data.hungbok.net/image/hb/hb_error.svg';">
                </div>
              </div>
            </a>
          `;
          calendarDiv.appendChild(div);
        })
        .catch(error => {
          console.error('Error:', error);
          // '/games/[url값].json' 파일이 없는 경우
          $('main > .top-backgrounds').remove();
        });
      });
    })
    .catch(error => {
      console.error('Error:', error);
      // 연도에 해당하는 파일이 없거나 다른 오류가 발생한 경우
      $('main > .top-backgrounds').remove();
    });
} else {
  // 연도나 계절 클래스가 없는 경우
  $('main > .top-backgrounds').remove();
}