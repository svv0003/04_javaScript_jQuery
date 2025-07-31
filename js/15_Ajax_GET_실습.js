// jQuery 이벤트 처리와 기능 명칭으로 분류하여 기능 호출하기
$(function () {
  $("#btn1").click(문제1번기능);
  $("#btn2").click(문제2번기능);
  $("#btn3").click(문제3번기능);
  $("#btn4").click(문제4번기능);
  $("#btn5").click(문제5번기능);
  $("#btn6").click(문제6번기능);
  $("#btn7").click(문제7번기능);
  $("#btn8").click(문제8번기능);
  $("#btn9").click(문제9번기능);
  $("#btn10").click(문제10번기능);
});

// 문제 1 : 기본 텍스트 가져오기
// https://jsonplaceholder.typicode.com/posts/1
function 문제1번기능() {
  $.get("https://jsonplaceholder.typicode.com/posts/1").done(function (data) {
    $("#result1").html(
      `
        <div class="success"><strong>게시물 제목 : </strong>${data.title}</div>
        <div class="success"><strong>게시물 내용 : </strong>${data.body}</div>
        `
    );
  });
}

// 문제 2 : 사용자 정보 가져오기
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/users/${userId}
function 문제2번기능() {
  const userId = $("#userId").val();
  $.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    // 1. 데이터를 무사히 가져오는 것을 성공했을 때
    .done(function (data) {
      if (!data.id || !data) {
        $("#result2").html(
          `<div class="error">해당 사용자를 찾을 수 없습니다.</div>`
        );
        return; // 데이터가 없으므로 function 아래 기능을 사용 못하도록 돌려보내기
      }

      $("#result2").html(
        `
      <div class="success">
        <strong>이름 : </strong>${data.name}<br>
        <strong>이메일 : </strong>${data.email}<br>
        <strong>연락처 : </strong>${data.phone}
      </div>
      `
      );
    })
    // 2. 아예 주소로 접근 자체가 불가능한 에러 상태일 때 (url 접속 자체가 안 되는 상황)
    .fail(function () {
      $("#result2").html(
        `<div class="error">
        해당 사용자를 찾을 수 없습니다. (404 error 발생)
        주소 자체 접속이 안 되는 상황
        </div>`
      );
    });

  /*
  const userId = $("#userId").val();
  $.get(`https://jsonplaceholder.typicode.com/users`, function (data) {
    $("#result2").html(
      `
      <div class="success">
        <strong>이름 : </strong>${data[userId-1].name}<br>
        <strong>이메일 : </strong>${data[userId-1].email}<br>
        <strong>연락처 : </strong>${data[userId-1].phone}
      </div>
      `);
  });
  */
}

// 문제 3 : 랜덤 명언 가져오기
// https://api.quotable.io/random
function 문제3번기능() {
  $.get("https://api.quotable.io/random")
    .done(function (data) {
      $("#result3").html(
        `
      <div class="success">
        <blockquote>${data.content}</blockquote>
        <strong>${data.author}</strong>
      </div>
      `
      );
    })
    .fail(function () {
      $("#result3").html(
        `
      <div class="error">
      명언을 가져오는데 실패했습니다.
      </div>
      `
      );
    });
}

// 문제 4 : 로딩 상태 표시
// https://jsonplaceholder.typicode.com/posts/1/comments
function 문제4번기능() {
  $.get("https://jsonplaceholder.typicode.com/posts/1/comments")
    .done(function (data) {
      $("#result4").html(
        `
      <div class="success">
      댓글 ${data.length - 1}개를 성공적으로 불러왔습니다.<br><br>
      1번째 댓글 : ${data[0].body}
      `
      );
    })
    .fail(() => {
      $("#result4").html(
        `
      <div class="error">
      댓글을 불러오지 못했습니다.
      </div>
        `
      );
    });
}

// 문제 5 : 에러 처리
// https://jsonplaceholder.typicode.com/posts/999999
function 문제5번기능() {
  $.get("https://jsonplaceholder.typicode.com/posts/999999")
    .done(function () {
      $("#result5").html(
        `
      <div class="success">
      데이터를 성공적으로 가져왔습니다.
      </div>
      `
      );
    })
    // error 발생했을 때도 매개변수에 data 라는 변수명 사용 가능하지만
    // err 또는 xhr를 변수명으로 사용하는 것이 개발자간의 규칙!
    .fail(function (xhr) {
      $("#result5").html(
        `
        <div class="error">
        에러 발생!<br>
        <strong>상태 코드 : </strong>${xhr.status}<br>
        <strong>에러 메세지 : </strong>${xhr.statusText}<br>
        </div>
        `
      );
    });
}

// 문제 6 : 여러 게시물 목록
// https://jsonplaceholder.typicode.com/posts?_limit=5
function 문제6번기능() {
  $.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
  .done(function (data) {
    // data가 배열 = 목록 = 리스트 형태로 다수 존재할 경우
    //  (for문 대신) data.map() 배열 형태로 하나씩 꺼내서 나열하는 메소드 사용하기
    $("#result6").html(
      data.map(
        (i) => `<p><strong>${i.title}</strong></p>`
    ));
  });
}

// 문제 7 : 유저 정보
// https://jsonplaceholder.typicode.com/users
function 문제7번기능() {
  $.get("https://jsonplaceholder.typicode.com/users")
  .done(function(data){
    $("#result7").html(
      data.map(
        (user) =>
        `
        <p>닉네임 : ${user.username}<p>
        <p>이메일 : ${user.email}</p><br>
        `
      )
    )
  })
}

// 문제 8 : 검색 기능
// https://jsonplaceholder.typicode.com/users
function 문제8번기능(){
  // filter() 기능을 사용해서 원하는 소비자를 검색으로 걸러내기
  // 
  const searchName = $("#searchName").val();
  $.get("https://jsonplaceholder.typicode.com/users")
    .done(function(data){
      $("#result8").html(
      data.filter((user) => user.name == searchName)                  // 1. filter() 검색에 해당하는 사람들만 목록(리스트) 형태로 조회하고,
          .map((user) => `<p>${user.name}</p><p>${user.email}</p>`)   // 2. map()으로 하나씩 꺼내서 나열하기
    )}
  )
}

/*
filter()
배열 = 목록 = 리스트에서 조건에 맞는 것들만 골라내는 기능
배열.filter(조건함수)

data                                            url에서 가져온 data를
    .filter(                                    걸러낼게요
            (user) =>                           data를 하나씩 꺼내서 user 변수명으로 확인
                      user.name == searchName)  user 내의 name과 소비자가 검색한 이름이 같은 것들만
  
data                                            url에서 가져온 data를 담고 있는 변수명
    .filter(                                    data에서 가져온 data를 걸러내는 작업 진행
            (user) =>                           우선은 data=user 서로 갖고 있는 리스트가 동일하지만
                      user.name == searchName)  추후 소비자가 찾는 이름과 user 내에서 name 키가 일치하는 값만 user 변수명에 담아놓기 설정

*/

// 문제 9 : 카테고리별 데이터
// https://jsonplaceholder.typicode.com/albums/{albumId}/photos?_limit=3
function 문제9번기능(){
  const albumId = $("#albumId").val();  // 사용자가 선택한 value 값 가져오기
  $.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos?_limit=3`)
    .done(function(data){
      $("#result9").html(
        // select 선택을 진행할 때 filter 사용하라는 조건이 있을 수도 있지만
        // 주소 값에서 작성된 모든 데이터를 조회할 때는 굳이 filter()를 사용하지 않아도 된다.
        data.map((photo) =>
        `
        <p><strong>title : ${photo.title}</strong></p>
        <p><strong>url : ${photo.url}</strong></p>
        <img src="${photo.url}"><br>`)
      )
      
    })
}
// 문제 10 : 종합 실습

