$(function () {
  // .click() 내부에 함수를 작성할 때 : 기능 명칭만 작성하고 () 괄호는 제외!
  // 특별히 메소드 내부에 함수를 작성하지 않고, 단독으로 함수를 작성할 때는
  //  기능명칭();
  $("#loginBtn").click(loginCheck);
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

  if (
    (username === "admin" && password === "1234")
    ||
    (username === "user" && password === "1234")
  ) {
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
}
