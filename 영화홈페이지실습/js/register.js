$(function () {
  $("#goToLogin").click(openLoginPopup);
  $("#signup").click(signup);
});

function signup() {
  hideMessages();

  const username = $("#username").val().trim();
  const email = $("#email").val().trim();
  const password = $("#password").val();
  const confirmPassword = $("#confirmPassword").val();

  // 비밀번호 확인이 일치한지?
  if (password !== confirmPassword) {
    alert("비밀번호 확인이 일치하지 않습니다.")
    return;
  }

  // 기존 데이터 변환해서 가져오기
  const userList = JSON.parse(localStorage.getItem("userList") || "[]");

  // 작성된 입력 값을 객체에 저장하기
  const newUser = {
    // 고객이 가입한 ms 값을 id로 이용해서 고객 고유 번호를 활용
    // 그럼 회원 탈퇴할 땐 userList에서 해당 id값의 정보를 삭제하는 건가? 
    id: new Date.now(),
    username: username,
    email: email,
    password: password,
    createAt: new Date().toLocaleString("ko-KR"),
  };

  // 객체를 기존 데이터에 추가하기
  userList.push(newUser);

  // 추가된 기존 데이터를 변환해서 저장하기
  localStorage.setItem("지브리", JSON.stringify(userList));
  alert("회원가입이 완료되었습니다.");
  window.location.href = "index.html";
}

function hideMessages(){

}

function openLoginPopup() {
  const width = 400;
  const height = 800;
  const left = (window.screen.width - width) / 2;
  const top = (window.screen.height - height) / 2;

  const options = `
  width=${width},
  height=${height},
  left=${left},
  top=${top},
  `;

  window.open("login.html", "loginPopup", options);
}
