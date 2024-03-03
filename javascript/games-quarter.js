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
  'all': ['01', '12']
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
      var lastYear = null;
      var monthDiv = null;
      var yearDiv = null;

      filteredData.forEach(item => {
        var dateParts = item.date.split('-');
        var year = dateParts[0];
        var month = dateParts[1];
        
        // 월별 데이터 출력
        if (dateParts.length == 3) {
          if (month !== lastMonth || year !== lastYear) {
            monthDiv = document.createElement('div');
            monthDiv.id = 'section-' + month;
            monthDiv.innerHTML = `
              <p>${year}</p>
              <p>${month}</p>
            `;
            calendarDiv.appendChild(monthDiv);
            lastMonth = month;
            lastYear = year;
          }
      
          console.error('월별 데이터 출력');
          appendData(item, monthDiv);
        }
      });

      // 모든 월별 데이터가 출력되면, 연도별 데이터 출력
      if (lastMonth == 12) {
        filteredData.forEach(item => {
          var dateParts = item.date.split('-');
          var year = dateParts[0];
          console.error('연도별 데이터 출력 1');
      
          if (dateParts.length == 2 && year !== lastYear) {
            yearDiv = document.createElement('div');
            yearDiv.id = 'section-' + year;
            yearDiv.innerHTML = `
              <p>${year}</p>
            `;
            calendarDiv.appendChild(yearDiv);
            lastYear = year;
      
            console.error('연도별 데이터 출력');
            appendData(item, yearDiv);
          }
        });
      }

      // 모든 연도별 데이터가 출력되면, 연도만 있는 데이터 출력
      if (lastYear) {
        filteredData.forEach(item => {
          var dateParts = item.date.split('-');
          var year = dateParts[0];
          console.error('연도만 있는 데이터 출력 1');
      
          if (dateParts.length == 1 && year !== lastYear) {
            yearDiv = document.createElement('div');
            yearDiv.id = 'section-' + year;
            yearDiv.innerHTML = `
              <p>${year}</p>
            `;
            calendarDiv.appendChild(yearDiv);
            lastYear = year;
      
            console.error('연도만 있는 데이터 출력');
            appendData(item, yearDiv);
          }
        });
      }

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
      
          div.innerHTML = `
            <a href="https://www.hungbok.com/games?q=${url}">
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
            </a>
          `;
          parentDiv.appendChild(div);
        })
      }

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
