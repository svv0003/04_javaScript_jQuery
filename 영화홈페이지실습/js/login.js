$(function(){
  $("#goToSignup").click(goToRegister);
})

// 회원가입 페이지로 이동
function goToRegister() {
  opener.window.location.href = "register.html";
  window.close();
}
