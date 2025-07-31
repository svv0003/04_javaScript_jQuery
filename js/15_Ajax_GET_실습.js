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
  $.get("https://jsonplaceholder.typicode.com/posts/1", function (data) {
    $("#btn1").click(function () {
      $("#result1").html(
        `
        <div class="success"><strong>게시물 제목 : </strong>${data.title}</div>
        <div class="success"><strong>게시물 내용 : </strong>${data.body}</div>
        `
      );
    });
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
    .fail(
      $("#result3").html(
        `
      <div class="error">
      명언을 가져오는데 실패했습니다.
      </div>
      `
      )
    );
}

// 문제 4 : 로딩 상태 표시
// 문제 5 : 에러 처리
// 문제 6 : 여러 게시물 목록
// 문제 7 : 날씨 정보
// 문제 8 : 검색 기능
// 문제 9 : 카테고리별 데이터
// 문제 10 : 종합 실습
