$(function () {
  // 1. 확인 버튼 클릭 시 중복 체크
  $("#check").click(function () {
    const email = $("#childEmail").val();

    // TODO:
    // - localStorage에서 users 가져오기
    // - 중복 확인
    // - 결과 메시지 표시
    // - 중복되지 않으면 "사용하기" 버튼 활성화

    const userEmail = localStorage.getItem(email);
    if (!userEmail) {
      // 버튼 활성화
      alert("사용 가능한 이메일입니다.");
      $("#send").prop("disabled", true / false);
    } else {
      alert("이미 사용중인 이메일입니다.");
      return;
    }
  });

  // 2. 사용하기 버튼 클릭
  $("#send").click(function () {
    const send = document.getElementById("send");
    const childInput = document.getElementById("childInput");

    // TODO:
    // - 부모창의 이메일 입력란에 값 전달
    // - 팝업창 닫기
    $("#inputEmail").textContent =
      opener.document.getElementById("childEmail").value;

    window.close();
  });
});


/*
$("#send").click(function() {
    const email = $("#childEmail").val().trim();
    
    // 부모창의 이메일 입력란에 값 전달
    opener.document.$("#inputEmail").val(email);
    
    // 팝업창 닫기
    window.close();
});
*/