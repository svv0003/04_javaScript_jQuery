$(function(){
  $("a").click(signUp);
})

function signUp(){
  // 기본 링크 동작 방지
  // 제출 방지 -> 일시 정지 상태
  // 아래 정규식, 데이터 저장 여부 등의 규정을 모두 확인한 후 result.html 이동하도록 설정
  e.preventDefault();
  
  // 입력값 가져오기
  const userName = $("#userName").val();
  const userPw = $("#userPw").val();

  // 서버로 전송할 데이터
  // userData 형식 또한 추후 DB에 저장할 때 사용 예정
  const userData = {
    userName : userName,
    password : userPw,
  }

  // json 저장할 때, DB 저장할 때 사용 예정 - $.post()

  // localStorage에 저장
  localStorage.setItem("userName", userName);
  localStorage.setItem("userPw", userPw);

  // 모두 저장한 뒤 결과 페이지로 이동
  window.location.href = "22_result.html";



}



