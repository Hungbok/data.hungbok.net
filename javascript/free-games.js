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
}

// 스크롤 이벤트
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMoreData();
    }
});
