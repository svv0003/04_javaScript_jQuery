$(function () {
  getUsers();
});

// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/users/${userId}
function getUsers() {
  $.get("https://jsonplaceholder.typicode.com/users")
  .done(function (data) {
    // 모든 사용자를 map을 활용하여 리스트 목록 형태로 표시
    /*
    onclick="getUserDetail(${user.id})"

    onclick         : HTML 요소에서 클릭 이벤트를 직접 연결하는 속성
                      클릭했을 때 실행할 JavaScript 코드를 작성
    
    getUserDetail() : 실행할 함수의 이름 = 사용자 상세 정보를 가져오는 함수
                      data에서 가져온 유저 목록을 순회하여 유저 한 명씩 보유하고 있는
                        id를 이용해서 주소 값으로 사용하고,
                          map으로 유저 정보를 하나씩 보여줄 때 유저 데이터에
                            id, name, username, email, address 등 데이터를 보관
                      -> 관리자가 보길 원하는 유저의 이름을 클릭했을 때
                          해당 유저의 id 값을 getUserDetail() 함수의 매개변수 값으로 전달하고,
                            해당 유저의 정보를 확인할 수 있도록 설정
    
    usersList 변수명 대신 직접적으로 $("#usersList").html() 내부에 data.map() 형태도 가능하지만
      코드의 가독성을 위해 변수명에 담아서 보여질 결과를 분리하여 사용하기도 한다.
    */
    const usersList = data.map(user => 
      `
      <p class="user-detail" onclick="getUserDetail(${user.id})">
        ${user.id}번 : ${user.name}님
      </p>
      `
    ).join("");         // map 뒤에 자동으로 붙는 , 등의 특수문자 제거
    $("#usersList").html(
      `
      <div class="success">
        <h3>전체 사용자 목록</h3>
        ${usersList}
      </div>
      `);
 });
}


function getUserDetail(userId) {
  $("#userResult").html('<div class="loading">사용자 상세 정보를 가져오는 중...</div>');
            
  $.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
  .done(function(data) {
      $("#userResult").html(`
          <div class="success">
              <div class="user-card">
                  <h3>👤 ${data.name} (ID: ${data.id})</h3>
                  <p><strong>사용자명:</strong> ${data.username}</p>
                  <p><strong>이메일:</strong> ${data.email}</p>
                  <p><strong>전화번호:</strong> ${data.phone}</p>
                  <p><strong>웹사이트:</strong> ${data.website}</p>
                  <p><strong>회사:</strong> ${data.company.name}</p>
                  <p><strong>회사 업무:</strong> ${data.company.catchPhrase}</p>
                  <p><strong>주소:</strong> ${data.address.street}, ${data.address.city}</p>
                  <p><strong>우편번호:</strong> ${data.address.zipcode}</p>
              </div>
          </div>
      `);
  })
}
