$(() => {
  $(".faq-item").click(function () {
    /*
    순수 JavaScript에서는
    querySelector()를 사용했을 때는 맨 앞에 존재하는 tag나 id, class 선택
    querySelectorAll()를 사용했을 때는 해당하는 모든 tag나 id, class 선택

    jQuery $(선택자)는 기본적으로 querySelectorAll() 상태
    페이지에 존재하는 모든 class="faq-answer"를 선택한 상태
    $(this)는 현재 클릭된 .faq-item을 의미하고, JavaScript에서 현재 이벤트가 발생한 요소를 뜻한다.

    A.not(B) : 선택된 요소들에서 특정 요소들을 제외하는 메소드
               "A에서 B를 제외하겠다."

    $(".faq-answer")          : 모든 FAQ 답변 선택
    .not($(this).children())  : 현재 클릭된 항목은 제외할 것이다.
    .slideUp();               : 현재 클릭된 항목을 제외하고 나머지 faq-answer 모두 닫기
    */
    $(".faq-answer").not($(this).children()).slideUp();
    $(this).children(".faq-answer").slideToggle();
  });
});

// jQuery는 JavaScript를 사용하던 개발자가 JavaScript를 사용하면서 느낀 불편함을 해소하기 위하여 만든 라이브러리이다.
// 불편함을 최소화하는 것이 목적! -> 다양한 방식으로 개발자가 원하는 기능을 동작할 수 있도록 무궁무진한 메소드가 존재한다.
