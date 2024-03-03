
// JSON 데이터 불러오기
fetch('//data.hungbok.net/data/games/2024.json')
  .then(response => response.json())
  .then(data => {
    // 'date' 값이 'yyyy-mm-dd' 형식인 데이터 중, mm이 01~03인 데이터만 선택
    var filteredData = data.filter(item => {
      var month = item.date.split('-')[1];
      return month >= '01' && month <= '03';
    });

    // 언어 코드 결정
    var languageCode = document.body.className || 'en';

    // 선택된 데이터를 #calendar에 출력
    var calendarDiv = document.getElementById('calendar');
    filteredData.forEach(item => {
      // 'url' 필드 값을 이용하여 '/games/[url값].json' 파일 불러오기
      fetch('//data.hungbok.net/data/games/' + item.url + '.json')
        .then(response => response.json())
        .then(gameData => {
          var p = document.createElement('p');
          // 'title' 값을 '/games/[url값].json' 파일의 해당 언어의 'title' 값으로 설정
          p.textContent = "Title: " + gameData[languageCode].title + ", URL: " + item.url + ", Platform: " + item.platform;
          calendarDiv.appendChild(p);
        })
        .catch(error => console.error('Error:', error));
    });
  })
  .catch(error => console.error('Error:', error));