$(function () {
  // .click() 내부에 함수를 작성할 때 : 기능 명칭만 작성하고 () 괄호는 제외!
  // 특별히 메소드 내부에 함수를 작성하지 않고, 단독으로 함수를 작성할 때는
  //  기능명칭();
  $("#loginBtn").click(loginCheck);
  $("#logoutBtn").click(logoutCheck);
});

function loginCheck() {
  // 1. html 내부에 소비자가 작성한 값을 가져오기 위해서 val() 메소드 활용
  const username = $("#username").val();
  const password = $("#password").val();

  // 아이디 또는 비밀번호가 입력되지 않은 경우
  if (!username || !password) {
    $("#loginResult").html(
      `
      <div class="error">아이디와 비밀번호를 입력하세요</div>
      `
    );
    // if문을 탈출한 후 아래 코드를 실행하지 못하도록 돌려보내기!!
    return;
  }

  $("#loginResult").html(
    `
    <div class="loading">로그인 중입니다...</div>
    `
  );

  // 로그인 성공 시
  // form-group 숨김 처리, loginBtn 로그아웃 버튼으로 변경
  // 로그아웃 버튼 클릭 시 form-group 보이기 처리, 로그인 버튼으로 변경
  // $.get 이용해서 json에 해당하는 username과 password가 일치하는지 확인
  $.get("../json/userInfo.json")
    .done(function (data) {
      const id = data.users;
      if (id[username] && id[username].password === password) {
        $(".form-group").hide();
        $("#loginBtn").hide();
        $("#logoutBtn").show();
        $("#loginResult").html(
          `
      <div class="success">
      <p><strong>로그인 성공!</strong></p>
      <p>${username}님, 환영합니다.</p>
      </div>
      `
        );
      } else {
        $("#loginResult").html(
          `
      <div class="error">아이디 또는 비밀번호가 일치하지 않습니다.</div>
      `
        );
      }
    })
    .fail();
}

function logoutCheck() {
  // 입력 필드 초기화
  $("#username").val("");
  $("#password").val("");

  // UI 원래대로 복구
  $(".form-group").show();
  $("#loginBtn").show();
  $("#logoutBtn").hide();

  // 로그아웃 완료 메세지
  $("#loginResult").html(
    `
    <div class="success">로그아웃이 완료되었습니다.</div>
    `
  );

  // 메세지 나타내고 1초 뒤에는 사라지도록 설정
  // 일반적으로 소비자가 느끼기엔 3초가 너무 길어서 0.5초, 1초로 많이 설정한다.
  setTimeout(function () {
    $("#loginResult").html("");
  }, 1000);
}
