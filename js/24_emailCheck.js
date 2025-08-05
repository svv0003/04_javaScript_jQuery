$(function () {
  // 1. 확인 버튼 클릭 시 중복 체크
  $("#check").click(function () {
    const email = $("#childEmail").val();

    // - localStorage에서 users 가져오기
    // - 중복 확인
    // - 결과 메시지 표시
    // - 중복되지 않으면 "사용하기" 버튼 활성화

    let userList = JSON.parse(localStorage.getItem("userList") || "[]");

    // filter()와 달리 some()은 하나라도 해당하는 값이 있다면 true
    // const sameEmail = userList.filter(u => u.email === email);
    const sameEmail = userList.filter(u => u.email === email);

    // if (sameEmail === email) {
    if (sameEmail) {
      $("#result").html("이미 사용중인 이메일입니다.");
      $("#send").prop("disabled", true);
      return;
    } else {
      $("#result").html("사용 가능한 이메일입니다.");
      $("#send").prop("disabled", false);
    }
  });

  // 2. 사용하기 버튼 클릭
  $("#send").click(function () {

    // - 부모창의 이메일 입력란에 값 전달
    // - 팝업창 닫기

    // 순수 JavaScript와 jQuery는 언제든 혼용해서 사용 가능하다.
    // 순수 JavaScript 조합                                 = jQuery 조합
    // opener.document.getElementById("inputEmail").value = $("#childEmail").val();

    // jQuery 조합              (jQuery 조합)
    opener.$("#inputEmail").val($("#childEmail").val());
    window.close();
  });
});

/**
 * 
 * open   : 무언가를 여는 행위
 * 
 * window.open("팝업창.html");   <-   메인 html에서 팝업창 html을 여는 메소드
 * 
 * 
 * opener : 열어준 것 / 개방자
 * 
 * opener.$("main-result").html("");   <-   팝업창 html을 열어준 메인 html을 뜻하는 메소드
 * 
 * 
 * opener.document.querySelector("#inputEmail").value = document.querySelector("#childEmail").value;         
 * 팝업창 html을 연 메인 html의 id="inputEmail"의 값에      ↑ 현재 팝업창의 id="childEmail"의 값을
 *                                                    |
 *                                                 전달하겠다
 * 
 */