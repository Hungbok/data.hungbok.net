function doSearch() {
    var query = document.getElementById('search').value.toLowerCase() // 검색어 가져오기
    var documents = document.getElementsByClassName('icon-container') // 모든 문서 가져오기
  
    for (var i = 0; i < documents.length; i++) {
      var doc = documents[i]
      var text = doc.textContent.toLowerCase() // 문서의 텍스트 가져오기
      if (text.includes(query)) {
        doc.style.display = 'grid' // 검색어가 포함된 문서 표시
      } else {
        doc.style.display = 'none' // 검색어가 포함되지 않은 문서 숨기기
      }
    }
  }
  
  // 검색어 입력 시 검색 처리
  document.getElementById('search').addEventListener('input', doSearch)
  