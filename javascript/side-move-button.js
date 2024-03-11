
$(document).ready(function() {
    $(document).on('click', '.elevator-up, .elevator-down', function() {
        var contents = $('.elevator-contents');
        var currentScroll = $(window).scrollTop();
        var currentIndex = 0;
        var closest = Infinity;
  
        contents.each(function(index) {
            var distance = Math.abs(currentScroll - $(this).offset().top + 90);
            if(distance < closest) {
                closest = distance;
                currentIndex = index;
            }
        });
  
        if($(this).hasClass('elevator-up') && currentIndex > 0) {
            currentIndex -= 1;
        } else if($(this).hasClass('elevator-down') && currentIndex < contents.length - 1) {
            currentIndex += 1;
        }
  
        contents = $('.elevator-contents');  // Update the contents list
        $('html, body').animate({
            scrollTop: $(contents[currentIndex]).offset().top - 90
        }, 500);
    });
  });
  
  window.addEventListener('load', function() {
      var isScrolling = false; // 스크롤 이동 여부를 확인하는 변수
  
      // .chapter-contents 인 요소들을 모두 찾고, 각 요소의 chapter-data와 chapter-text 속성 값을 가져와서 .chapter 에 <div>[chapter-text 값]</div> 형식으로 순서대로 출력
      $('.chapter-contents').each(function() {
          var chapterData = $(this).attr('chapter-data');
          var chapterText = $(this).attr('chapter-text');
          if(chapterData && chapterText) {
              $('.chapter').append('<div class="chapter-link" data-link="' + chapterData + '"><p class="chapter-title">' + chapterText + '</p></div>');
          }
      });
  
      // 첫 번째 .chapter-link에 .active 추가
      $('.chapter .chapter-link:first').addClass('active');
  
      // .chapter-link 클릭 시 해당 요소로 스크롤 이동
      $('.chapter').on('click', '.chapter-link', function() {
          if (isScrolling) return; // 스크롤 이동 중이면 함수 종료
          isScrolling = true; // 스크롤 이동 시작
          var link = $(this).data('link');
          var target = $('.chapter-contents[chapter-data="' + link + '"]');
          $('html, body').animate({
              scrollTop: target.offset().top - 90
          }, 1000, function() {
              isScrolling = false; // 스크롤 이동 종료
          });
      });
  
      // 스크롤 이벤트
      $(window).scroll(function() {
          var scrollPos = $(window).scrollTop();
          $('.chapter-contents').each(function() {
              var top = $(this).offset().top - 100; // 100 is the padding from the top
              var bottom = top + $(this).height();
              if (scrollPos >= top && scrollPos <= bottom) {
                  var chapterData = $(this).attr('chapter-data');
                  $('.chapter-link').removeClass('active');
                  $('.chapter-link[data-link="' + chapterData + '"]').addClass('active');
              }
          });
      });
  
      // up 버튼 클릭 이벤트
      $('#chapter-up').click(function() {
          if (isScrolling) return; // 스크롤 이동 중이면 함수 종료
          var activeLink = $('.chapter-link.active');
          if (activeLink.length > 0) {
              var prevLink = activeLink.prev('.chapter-link');
              if (prevLink.length > 0) {
                  isScrolling = true; // 스크롤 이동 시작
                  var link = prevLink.data('link');
                  var target = $('.chapter-contents[chapter-data="' + link + '"]');
                  $('html, body').animate({
                      scrollTop: target.offset().top - 90
                  }, 1000, function() {
                      isScrolling = false; // 스크롤 이동 종료
                  });
              }
          }
      });
  
      // down 버튼 클릭 이벤트
      $('#chapter-down').click(function() {
          if (isScrolling) return; // 스크롤 이동 중이면 함수 종료
          var activeLink = $('.chapter-link.active');
          if (activeLink.length > 0) {
              var nextLink = activeLink.next('.chapter-link');
              if (nextLink.length > 0) {
                  isScrolling = true; // 스크롤 이동 시작
                  var link = nextLink.data('link');
                  var target = $('.chapter-contents[chapter-data="' + link + '"]');
                  $('html, body').animate({
                      scrollTop: target.offset().top - 90
                  }, 1000, function() {
                      isScrolling = false; // 스크롤 이동 종료
                  });
              }
          }
      });
  });