// search.js

// JSON 파일 경로
const dataUrl = '//data.hungbok.net/data/games/list.json';
const resultsPerPage = 5; // 페이지당 결과 수

let currentPage = 1;
let allData = []; // 모든 데이터를 저장하는 배열
let filteredData = []; // 검색된 데이터를 저장하는 배열

async function loadData() {
    try {
        const response = await fetch(dataUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('데이터를 불러오는 중 오류가 발생했습니다:', error);
    }
}

async function paginateData(data, page) {
    const startIndex = (page - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    const dataToDisplay = data.slice(startIndex, endIndex);

    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    dataToDisplay.forEach(item => {
        // 검색 결과에 추가
        const resultItem = document.createElement('div');
        resultItem.innerHTML = `
            <strong>${item.title}</strong><br>
            ${item.content}
        `;
        searchResults.appendChild(resultItem);
    });
}

function updatePaginationButtons(data) {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(data.length / resultsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.onclick = () => {
            currentPage = i;
            paginateData(data, currentPage);
            updatePaginationButtons(data);
        };
        pagination.appendChild(pageButton);
    }
}

function searchInstantly() {
    const inputText = document.getElementById('searchInput').value;
    const textToSearch = inputText.trim().toLowerCase();

    if (!textToSearch) {
        // 검색어가 비어 있으면 모든 데이터 표시
        currentPage = 1;
        paginateData(allData, currentPage);
        updatePaginationButtons(allData);
        return;
    }

    // 검색어와 일치하는 항목만 필터링
    filteredData = allData.filter(item =>
        item.title.toLowerCase().includes(textToSearch) || item.content.toLowerCase().includes(textToSearch)
    );

    currentPage = 1;

    // 검색 결과 페이지를 업데이트
    paginateData(filteredData, currentPage);
    updatePaginationButtons(filteredData);
}

// 입력 필드 값이 변경될 때마다 실시간 검색 실행
document.getElementById('searchInput').addEventListener('input', searchInstantly);

// 초기 데이터를 로드하고 페이지를 표시하기 위해 페이지 로드 시 호출
loadData().then(data => {
    allData = data;
    paginateData(allData, currentPage);
    updatePaginationButtons(allData);
});

function searchOnEnter(event) {
    if (event.key === 'Enter') {
        searchData();
    }
}