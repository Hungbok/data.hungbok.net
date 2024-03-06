let data = [];
let filteredData = [];
let start = 0;
let limit = 10;

// JSON 파일 불러오기
fetch('//data.hungbok.net/data/free-games.json')
.then(response => response.json())
.then(json => {
    data = json.map(item => {
        const now = new Date();
        const startTime = new Date(item.start.replace(/-/g, '/'));
        const endTime = new Date(item.end.replace(/-/g, '/'));
        if (now >= startTime) {
            item.started = true;
        }
        if (now >= endTime) {
            item.ended = true;
        }
        return item;
    });
    filteredData = [...data];
    loadMoreData();
});

// 필터링 기능
function filterData(type) {
    start = 0;
    const filterStarted = document.getElementById('filter-started').checked;
    const filterEnded = document.getElementById('filter-ended').checked;
    if (type === 'all' || type === 'check') {
        filteredData = [...data];
    } else {
        filteredData = data.filter(item => item.type === type);
    }
    if (filterStarted) {
        filteredData = filteredData.filter(item => item.started);
    }
    if (filterEnded) {
        filteredData = filteredData.filter(item => item.ended);
    }
    document.getElementById('dataContainer').innerHTML = '';
    loadMoreData();
}

// 타이머 생성 함수
function createTimer(timerContainer, endTime) {
    const targetTime = new Date(endTime.replace(/-/g, '/'));
    const timerInterval = setInterval(function() {
        const now = new Date();
        const difference = targetTime - now;
        let formattedTime;
        if (difference > 0) {
            const seconds = Math.floor(difference / 1000) % 60;
            const minutes = Math.floor(difference / 1000 / 60) % 60;
            const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
            const days = Math.floor(difference / 1000 / 60 / 60 / 24);
            if (days > 0) {
                formattedTime = `${days}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            } else {
                formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }
        } else {
            clearInterval(timerInterval);
            formattedTime = "00:00:00";
        }
        timerContainer.textContent = formattedTime;
    }, 1000);
}

// 무한 스크롤 기능
function loadMoreData() {
    let end = start + limit;
    let slicedData = filteredData.slice(start, end);
    start += limit;

    slicedData.forEach(item => {
        let div = document.createElement('div');
        div.className = `item ${item.type} from-${item.from} esd-${item.esd} ${item.started ? 'started' : ''} ${item.ended ? 'ended' : ''}`;
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

        createTimer(div.querySelector('.start'), item.start);
        createTimer(div.querySelector('.end'), item.end);
    });
}

// 스크롤 이벤트
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMoreData();
    }
});
