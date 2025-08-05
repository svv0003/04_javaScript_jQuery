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

  // 기존 userList에 새로운 유저 정보 추가하기
  userList.push(newUser);

  // localStorage에 문자열 변환된 userList를 저장하기
  localStorage.setItem("userList", JSON.stringify(userList));
  alert("로컬 스토리지에 저장되었습니다.")
}

function searchData(e) {
  e.preventDefault();

  const searchValue = $("#searchValue").val().trim();

  // 로컬스토리지에 저장된 목록 가져오기
  let userList = JSON.parse(localStorage.getItem("userList") || "[]");

  // 배열 내부에 검색한 값이 존재하는지 확인하기
  const searchResult = userList.filter(data => data.name === searchValue);

  // 검색한 값이 존재한다면
  let html = `<h3>검색 결과</h3>`;
  if (searchResult.length > 0) {
    html += searchResult.map(
      (data)=>
      `
      <div class="item-row">
        <strong>${data.name}님</strong><br>
        나이 : ${data.age}세<br>
        이메일 : ${data.email}<br>
        가입일자 : ${data.createAt}<br>
      </div>
      `
    ).join("");
  } 
  // 존재하지 않는다면
    else {
    html += `존재하지 않는 회원입니다.`;
  }
  // 해당 값 출력하기
  $("#searchResult").html(html);
}

function showAllData(e) {
  e.preventDefault();

  // 로컬스토리지에 저장된 목록 가져오기
  let userList = JSON.parse(localStorage.getItem("userList") || "[]");
  console.log("사용자 목록 : ", userList);
  let html = `<h3>저장된 사용자 목록 (총 ${userList.length}명)</h3>`;

  // for문 사용해서 userList 값을 모두 [i]로 가져오기
  for (let i=0; i<userList.length; i++) {
    const key = userList[i];
    html +=
    `
    ${key.name}님<br>
    ${key.age}세<br>
    ${key.email}<br>
    가입일자 : ${key.createAt}<br><br>
    `
  }
  $("#allData").html(html);
}

function clearAllData(e) {
  e.preventDefault();

  // 삭제할 건지 한 번 더 확인
  if (confirm("정말 삭제하시겠습니까?")) {
    // localStorage.removeItem("userList");
    //    로컬스토리지 내부의 특정 키만 삭제
    // localStorage.clear();
    //    로컬스토리지 내부에 존재하는 모든 데이터 삭제
    localStorage.clear();
    $("#allData").html("");
  }
}
