$(function(){
  $("#addBtn").click(addData);
  $("#searchBtn").click(searchData);
  $("#showAllBtn").click(showAllData);
  $("#clearAllBtn").click(clearAllData);
})

function addData(e) {
  e.preventDefault();
  
  const name = $("#name").val().trim();
  const age = $("#age").val().trim();
  const email = $("#email").val().trim();

  // 기본에 저장된 데이터가 존재하는지 확인 (없으면 빈 배열)
  // localStorage에 유저 정보들을 보유하고 추후 새로운 데이터를 저장할 변수
  let userList = JSON.parse(localStorage.getItem("userList") || "[]");

  // 사용자가 작성한 데이터를 가지고 있는 변수
  const newUser = {
    name: name,
    age: age,
    email: email,
    // 현재 시간 저장 -> 가입한 날짜는 사용자가 선택할 권한 X
    /*
    Date.now() = ms 기준으로 변환된다.
    new Date().toLocaleString("ko-KR");    <- 한국 연재 시간을 기준으로 문자열 저장
    */
    createAt: new Date().toLocaleString("ko-KR"),
  }

  // 기존 userList에 새로운 유저 정보 추가
  userList.push(newUser);

  // localStorage에 문자열 변환된 userList를 저장
  localStorage.setItem("userList", JSON.stringify(userList));
  alert("로컬 스토리지에 저장되었습니다.")
}

function searchData(e) {
  e.preventDefault();
}

function showAllData(e) {
  e.preventDefault();
}

function clearAllData(e) {
  e.preventDefault();
}
