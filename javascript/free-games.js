let data = [];
let filteredData = [];
let start = 0;
let limit = 10;

// JSON 파일 불러오기
fetch('//data.hungbok.net/data/free-games.json')
.then(response => response.json())
.then(json => {
    data = json;
    filteredData = [...data];
    loadMoreData();
});

// 필터링 기능
function filterData(type) {
    start = 0;
    if (type === 'all') {
        filteredData = [...data];
    } else {
        filteredData = data.filter(item => item.type === type);
    }
    document.getElementById('dataContainer').innerHTML = '';
    loadMoreData();
}

// 무한 스크롤 기능
function loadMoreData() {
    let end = start + limit;
    let slicedData = filteredData.slice(start, end);
    start += limit;

    slicedData.forEach(item => {
        let div = document.createElement('div');
        div.className = `item ${item.type} from-${item.from} esd-${item.esd}`;
        div.innerHTML = `
            <a class="item-image" href="${item.url}">
                <img src="${item.image}" onerror="this.src='//data.hungbok.net/image/hb/hb_error_horizontal.svg';">
            </a>
            <h1>${item.title}</h1>
            <h3>${item.content}</h3>
            <div class="timer-container start" settime="${item.start}"></div>
            <div class="timer-container end" settime="${item.end}"></div>
            <a class="item-link" href="${item.link}" target="_blank"></a>
            <img class="item-background" src="${item.image}">
        `;
        document.getElementById('dataContainer').appendChild(div);
    });

    // 각 아이템을 생성하고 추가한 후
    document.getElementById('dataContainer').appendChild(div);

    // 타이머를 시작합니다.
    startTimer();
}

// 스크롤 이벤트
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMoreData();
    }
});

// 서버 시간 표시 함수
function displayServerTime() {
    let now = new Date(); // 현재 시간을 받아옵니다.
    let utcTime = now.toISOString().slice(0,19).replace('T', '-'); // ISO 형식으로 변환하고, 원하는 형태로 가공합니다.
    document.getElementById('serverTime').textContent = utcTime; // HTML 요소에 표시합니다.
}

setInterval(displayServerTime, 100); // 1초마다 함수를 반복 실행하여 시간을 업데이트합니다.

// 타이머 기능
function startTimer() {
    let timerElements = document.querySelectorAll('.timer-container'); // 타이머를 적용할 요소를 선택합니다.

    timerElements.forEach(element => { // 각 요소에 대해 반복합니다.
        let setTime = element.getAttribute('settime'); // settime 속성 값을 가져옵니다.
        let endDate = new Date(setTime.replace(/-/g, '/')); // settime 값을 Date 객체로 변환합니다.

        let interval = setInterval(function() { // setInterval 함수로 1초마다 반복합니다.
            let now = new Date(); // 현재 시간을 가져옵니다.
            let distance = endDate - now; // 남은 시간을 계산합니다.

            // 시간, 분, 초를 계산합니다.
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // 요소에 남은 시간을 표시합니다.
            element.textContent = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

            // 남은 시간이 없으면 타이머를 멈춥니다.
            if (distance < 0) {
                clearInterval(interval);
                element.textContent = "EXPIRED";
            }
        }, 100);
    });
}