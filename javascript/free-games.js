let data = [];
let filteredData = [];
let start = 0;
let limit = 16;

// JSON 파일 불러오기
fetch('//data.hungbok.net/data/free-games.json')
.then(response => response.json())
.then(json => {
    data = json;
    filteredData = [...data];
    loadMoreData();
});

// 필터링 기능
function filterData(esd, key) {
    start = 0;
    filteredData = data.filter(item => item.esd === esd && item.key === key);
    document.querySelector('.container').innerHTML = '';
    loadMoreData();
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
        document.querySelector('.container').appendChild(div);
        loadScript('//data.hungbok.net/javascript/free-games-timer.js', function() {
            console.log('Script loaded for item:', item.title);
        });
    });
}

// 스크롤 이벤트
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        loadMoreData();
    }
});

// 스크립트 동적 로딩 함수
function loadScript(url, callback){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onload = callback;
    document.head.appendChild(script);
}
