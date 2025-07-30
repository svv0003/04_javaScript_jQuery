
$(function () {
  $("#로그인기능").click(function (e) {
    e.preventDefault();     // submit 잠시 멈춤 -> 정규식이나 비밀번호 아이디 일치하는지 확인하고 제출
    const userID = $("#username").val();
    const password = $("#password").val();

    $.get("../json/data.json", function (data) {
      console.log("성공적으로 json에서 가져온 데이터 확인하기", data);
        if (data.users[userID]{                                   // 사용자가 존재할 때
          if (data.users[userID].password === password) {         // 사용자도 존재하고, 비밀번호도 일치할 때
            $("#result").html(
              `로그인 성공! 환영합니다. ${data.users[userID].name}님`
            );
            $("#로그인기능").hide();
            $("#로그아웃기능").show();
          } else {                                                 // 사용자가 존재하지만 비밀번호 일치하지 않을 때
            $("#result").html("일치하는 비밀번호가 없습니다.");
          }
        } else {
          $("#result").html("존재하는 아이디가 없습니다.")
        }
    }).fail(function () {
      alert("데이터를 가져오는데 실패했습니다.");
    });
  });
  
  $("#로그아웃기능").click(function (e) {
    // 로그아웃을 진행할 경우 로그인기능 show, 로그아웃기능 hide 설정
    e.preventDefault();           // 로그아웃 button 태그 내부에 type="submit" 설정되어 있어, 제출 방지용
    $("#로그인기능").hide();
    $("#로그아웃기능").show();
    $("#userID").val();
    $("#password").val();
    $("#result").html("로그아웃이 완료되었습니다.");
  });
});
