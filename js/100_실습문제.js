$(function () {
  // 문제 1: 텍스트 변경
  $("#p1-changeBtn").click(function () {
    $("#p1-greeting").text("반갑습니다.");
    // HINT: #p1-greeting 요소의 텍스트를 .text()를 사용해 변경하세요.
  });

  // 문제 2: 이미지 토글
  $("#p2-toggleBtn").click(function () {
    $("#p2-myImage").toggle();
    // 이미지 하나를 image 폴더 내 저장 후 이미지 변경 <img src="">
    // HINT: #p2-myImage 요소를 .toggle()을 사용해 숨기거나 보이게 하세요. (속도를 500으로 줘보세요)
  });

  // 문제 3: 슬라이드 토글
  $("#p3-menuBtn").click(function () {
    $("#p3-menuPanel").slideToggle().text("메롱");
    // HINT: #p3-menuPanel 요소를 .slideToggle("slow")을 사용해 슬라이드 효과를 주세요.
  });

  // 문제 4: 입력값 따라쓰기
  $("#p4-myInput").on("keyup", function () {
    $("#p4-displayText").text($(this).val());
    // HINT: $(this).val()로 입력값을 가져와서 #p4-displayText에 .text()로 표시하세요.
  });

  // 문제 5: 마우스 오버 효과
  $("#p5-hoverBox").hover(
    function () {
      $(this).css("background-color", "darkslateblue");
      // HINT (마우스 올렸을 때): $(this)와 .css()를 사용해 배경색을 'darkslateblue'로 바꾸세요.
    },
    function () {
      $(this).css("background-color", "lightcoral");
      // HINT (마우스 벗어났을 때): $(this)와 .css()를 사용해 배경색을 'lightcoral'로 되돌리세요.
    }
  );

  // 문제 6: 항목 추가
  let itemCount = 1;
  $("#p6-addBtn").click(function () {
    $("#p6-myList").append("<li>새로운 항목 " + itemCount + "</li>");
    ++itemCount;
    // HINT: itemCount를 1 증가시키고, .append()를 사용해 #p6-myList에 새로운 '<li>'를 추가하세요.
  });

  // 문제 7: 항목 제거 (이벤트 위임)
  $("#p7-removableList").on("click", "li", function () {
    $(this).remove();
    // HINT: 클릭된 자신($(this))을 .remove()를 사용해 제거하세요.
  });

  // 문제 8: 아코디언
  $(".p8-question").click(function () {
    $(this).next().slideToggle();
    // HINT: 클릭된 자신($(this))의 다음에 오는(.next()) .p8-answer를 .slideToggle() 하세요.
  });

  // 문제 9: 카운터
  let count = 0;
  $("#p9-increaseBtn").click(function () {
    ++count;
    $("#p9-countDisplay").text(count);
    // HINT: count 변수를 1 증가시키고, #p9-countDisplay에 .text()로 표시하세요.
  });
  $("#p9-decreaseBtn").click(function () {
    --count;
    $("#p9-countDisplay").text(count);
    // HINT: count 변수를 1 감소시키고, #p9-countDisplay에 .text()로 표시하세요.
  });

  // 문제 10: 애니메이션
  $("#p10-animateBtn").click(function () {
    $("#p10-myBox").animate(
      {
        left: 300,
        top: 300,
        width: "300px",
        opacity: 0.5,
      },
      1500,
      function(){
        $("#p10-myBox").css("backgroundColor", "red");
      }
    );
    /*
    $("#p10-myBox").animate(
      {
        left: 300,
        top: 300,
        width: "300px",
        opacity: 0.5,
      },
      1500,
      function(){
        $("#p10-myBox").css("backgroundColor", "red");
      }
    );
    */
    // HINT: .animate() 메서드를 사용하세요.
    // 첫 번째 인자로 { width: "300px", opacity: 0.5 } 형태의 CSS 객체를,
    // 두 번째 인자로 시간(1500)을 전달합니다.
  });
});

// animate({css 속성 정의}, 시간, 콜백 함수)