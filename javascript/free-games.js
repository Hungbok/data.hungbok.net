let data = [];
let filteredData = [];
let start = 0;
let limit = 5;

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

let filterPlatform = ''; // 플랫폼 필터 상태를 저장하는 변수입니다. 초기값은 빈 문자열입니다.

// 플랫폼에 따라 데이터를 필터링하는 함수
function filterPlatform(platform) {
    filterPlatform = platform; // 필터링할 플랫폼을 설정합니다.
    let itemElements = document.querySelectorAll('.item-container'); // 아이템을 적용할 요소를 선택합니다.

    itemElements.forEach(element => {
        let from = element.getAttribute('from'); // from 속성 값을 가져옵니다.

        // 필터링할 플랫폼의 데이터만 보이게 합니다.
        if (from !== filterPlatform) {
            element.style.display = 'none';
        } else {
            element.style.display = '';
        }
    });
}

// 플랫폼 필터 버튼에 클릭 이벤트 핸들러를 추가합니다.
document.getElementById('platformFilterBtn').addEventListener('click', function() {
    filterPlatform = this.getAttribute('data-platform'); // 버튼의 data-platform 속성 값을 가져와 필터링할 플랫폼으로 설정합니다.
    filterByPlatform(); // 플랫폼에 따라 데이터를 필터링하는 함수를 호출합니다.
});

let filterExpired = false; // 만료 필터 상태를 저장하는 변수입니다. 초기값은 false입니다.

// 만료된 데이터를 제외하는 함수
function filterByDate() {
    let now = new Date();
    let timerElements = document.querySelectorAll('.timer-container.end'); // end 타이머를 적용할 요소를 선택합니다.

    timerElements.forEach(element => {
        let setTime = element.getAttribute('settime'); // settime 속성 값을 가져옵니다.
        let setTimeArray = setTime.split('-'); // '-'로 구분된 setTime 값을 배열로 변환합니다.

        // setTime 값이 yyyy-mm-dd-hh-mm-ss 형식이므로, Date 객체를 이 형식에 맞게 생성합니다.
        let endDate = new Date(setTimeArray[0], setTimeArray[1] - 1, setTimeArray[2], setTimeArray[3], setTimeArray[4], setTimeArray[5]);

        // 만료 필터가 활성화된 경우에만 만료된 데이터를 제외합니다.
        if (filterExpired && endDate < now) {
            element.parentElement.style.display = 'none';
        } else {
            element.parentElement.style.display = '';
        }
    });
}

// 필터 버튼에 클릭 이벤트 핸들러를 추가합니다.
document.getElementById('dateFilterBtn').addEventListener('click', function() {
    filterExpired = !filterExpired; // 만료 필터 상태를 토글합니다.
    filterByDate(); // 만료된 데이터를 제외하는 함수를 호출합니다.
});

// 아이템을 생성하고 추가하는 함수
function createAndAppendItem(item) {
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

    // 아이템을 추가한 후에 타이머를 시작합니다.
    startTimer();
}

// 스크롤이 화면 가장 아래에 닿았을 때 데이터를 추가로 생성하는 함수
window.onscroll = function() {
    const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    const totalPageHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    if (scrollPosition + windowHeight >= totalPageHeight - 500) {
        // 여기에 데이터를 생성하는 코드를 추가합니다.
        loadMoreData();
        // 새롭게 추가된 데이터에 대해 필터링하는 함수를 호출합니다.
        if (filterExpired) {
            filterByDate();
        }
        if (filterPlatform) {
            filterByPlatform();
        }
    }
};

// 무한 스크롤 기능
function loadMoreData() {
    let end = start + limit;
    let slicedData = filteredData.slice(start, end);
    start += limit;

    slicedData.forEach(item => {
        createAndAppendItem(item);
    });
}

// 서버 시간과 로컬 시간 표시 함수
function displayTime() {
    let now = new Date(); // 현재 시간을 받아옵니다.

    // 컴퓨터의 로컬 시간을 UTC 형식으로 변환합니다.
    let localTime = now.toISOString().slice(0,19).replace('T', ' ');

    // 사용자의 시간대를 얻습니다.
    let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // UTC+09:00 기준의 서버 시간을 계산하고 UTC 형식으로 변환합니다.
    let serverTime = new Date(now.getTime() + (now.getTimezoneOffset() * 60 * 1000) + (9 * 60 * 60 * 1000));
    serverTime = serverTime.toISOString().slice(0,19).replace('T', ' ');

    // HTML 요소에 시간을 표시합니다.
    document.getElementById('serverTime').textContent = serverTime + ' UTC+09:00'; // 서버 시간을 표시합니다.
    document.getElementById('localTime').textContent = localTime + ' ' + timeZone; // 로컬 시간을 표시합니다.
}

setInterval(displayTime, 1000); // 1초마다 함수를 반복 실행하여 시간을 업데이트합니다.

// 타이머 기능
function startTimer() {
    let timerElements = document.querySelectorAll('.timer-container'); // 타이머를 적용할 요소를 선택합니다.

    timerElements.forEach(element => { // 각 요소에 대해 반복합니다.
        let setTime = element.getAttribute('settime'); // settime 속성 값을 가져옵니다.
        let setTimeArray = setTime.split('-'); // '-'로 구분된 setTime 값을 배열로 변환합니다.

        // setTime 값이 yyyy-mm-dd-hh-mm-ss 형식이므로, Date 객체를 이 형식에 맞게 생성합니다.
        let endDate = new Date(setTimeArray[0], setTimeArray[1] - 1, setTimeArray[2], setTimeArray[3], setTimeArray[4], setTimeArray[5]);

        let interval = setInterval(function() { // setInterval 함수로 1초마다 반복합니다.
            let now = new Date(); // 현재 시간을 가져옵니다.
            let distance = endDate - now; // 남은 시간을 계산합니다.

            // 시간, 분, 초를 계산합니다.
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // 시간, 분, 초를 항상 두 자리 숫자로 표시합니다.
            hours = hours.toString().padStart(2, '0');
            minutes = minutes.toString().padStart(2, '0');
            seconds = seconds.toString().padStart(2, '0');

            // 남은 시간이 24시간 미만인 경우에는 'hh:mm:ss' 형식으로, 그 이상인 경우에는 'dd:hh:mm:ss' 형식으로 표시합니다.
            if (days > 0) {
                days = days.toString().padStart(2, '0');
                element.textContent = `${days}:${hours}:${minutes}:${seconds}`;
            } else {
                element.textContent = `${hours}:${minutes}:${seconds}`;
            }

            // 남은 시간이 없으면 타이머를 멈춥니다.
            if (distance < 0) {
                clearInterval(interval);
                element.textContent = "EXPIRED";
            }
        }, 100);
    });
}