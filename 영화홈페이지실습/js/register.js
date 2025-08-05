$(function () {
  $("#goToLogin").click(openLoginPopup);
});

function signup() {
  hideMessages();

  const username = $("#username").val().trim();
  const email = $("#email").val().trim();
  const password = $("#password").val();
  const confirmPassword = $("#confirmPassword").val();

  //
  // 비밀번호 확인이 일치한지?
  if (password === confirmPassword) {
  }
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
