$(function () {
  $("li").click(function () {
    $("li").removeClass("active");
    $(this).addClass("active");
  });
});

/*
#menu li  : id가 menu인 <ul> 태그 내부에 모든 <li> 태그에 클릭 이벤트 설정

this      : 사용자가 클릭한 <li> 태그만 바라본다.
            단순히 #menu li = this 형식이 아니라 this는 사용자가 감지한 위치를 가리키기도 한다.

            $("#menu li").addClass("active");   <- menu 안에 존재하는 모든 li 태그를 바라보겠다.
            $(this).addClass("active");         <- 사용자가 클릭한 li 태그를 바라보겠다.

this
- 이벤트(행위, 행동) 발생한 HTML 요소를 가리킨다.
- function 안에서만 사용 가능함!!!
*/

// 문의 양식 제출 기능
$(function () {
  $("#btn").click(() => {
    // 1번) 각 입력 필드의 값을 가져와서 앞 뒤 공백을 제거하기
    const name = $("#name").val().trim();
    const email = $("#name").val().trim();
    const message = $("#name").val().trim();

    // 2번) 값 중 하나라도 비어있는지 확인하기
    // addClass removeClass 활용해서 4순위 class 스타일 추가하고 적용 설정
    // <style> 클래스 명칭. red{} .green{}
    // 모든 값이 채워져 있다면 성공 메세지를 초록색으로 표시, 아니라면 빨간색으로 표시

    /*
    if (name && email && message) {
      $("#status")
        .text("문의가 정상적으로 접수되었습니다.")
        .css("color", "green");
    } else {
      $("#status").text("모든 항목을 입력해주세요.").css("color", "red");
    }
      */

    if (name && email && message) {
      $("#status")
        .toggleClass("green")
        .text("문의가 정상적으로 접수되었습니다.");
    } else {
      $("#status").toggleClass("red").text("모든 항목을 입력해주세요.");
    }
  });
});
