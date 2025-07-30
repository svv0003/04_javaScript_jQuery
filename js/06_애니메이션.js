$(() => {
  // 문제 1: 모달 팝업
  $("#openModal").click(function () {
    $("#modalOverlay").fadeIn(300);
    // HINT: #modalOverlay를 fadeIn(300)으로 나타내세요
  });

  $("#closeModal").click(function () {
    $("#modalOverlay").fadeOut(300);
    // HINT: #modalOverlay를 fadeOut(300)으로 사라지게 하세요
  });

  $("#modalOverlay").click(function (e) {
    // HINT: e.target이 자기 자신일 때만 닫기 (이벤트 버블링 방지)
    /*
    modalOverlay      : modal이 존재하는 전체 화면 배경
    modal-content     : 실제 modal 창
    e.target === this : modalOverlay의 배경 영역을 직접 클릭했을 때
                        조건이 false인 경우는 modal-content나 내부 요소를 클릭했을 때
    이벤트 버블링        : 자식 요소에서 발생한 이벤트가 부모 요소로 차례차례 전달되는 현상
                        에러코드 등의 내용 복사하는 경우를 위해 modal 창은 클릭 꺼짐 방지!
                        
    */
    if (e.target === this) {
      $("#modalOverlay").fadeOut();
    }
  });

  // 문제 2: 탭 메뉴
  $(".tab-btn").click(function(){
    // data-tab 속성값을 가져오기
    // const targetTab = $(".tab-btn").data("tab");
    const targetTab = $(this).data("tab");
    // 모든 탭 버튼에서 active 클래스를 제거한 후 현재 클릭한 버튼에만 active 추가하기
    $(".tab-btn").removeClass("active");
    $(this).addClass("active");
    // 모든 .tab-content를 slideUp 하고, 해당 탭만 slideDown 하기
    // 메소드 .slideUp() .slideDown() 기본 속도는 400ms
    $(".tab-content").slideUp(1);
    $("#" + targetTab).slideDown();
  })
  // .data()
  //  data-tab="tab1/2/3"
  // $("#" + targetTab) : # + 선택한 탭(targetTab)


  // 문제 3: 프로그레스 바
  $("#startProgress").click(function(){
    $("#progressBar").animate({
      // 클릭되면 가로 100% 채우고 2초 뒤에 무언가를 할 것이다. (무언가, 시간초는 필수 X)
      width: "100%",
    }, 2000, function(){
      // 2000=2초 후 실행할 기능
      // 기존 progressBar 내부 "0%" 텍스트를 width 100%로 만들고 나면 텍스트를 "100%"로 변경하겠다.
      $("#progressBar").text("100%");
    })
  })
  $("#resetProgress").click(function(){
    // $("#progressBar").css("width", "0%");
    // $("#progressBar").text("0%");
    $("#progressBar").css("width", "0%").text("0%");
  })

  // 문제 4: 3D 카드 플립 효과
  $("#flipCard").click(function(){
    $(this).toggleClass("flipped");
  })

  // 문제 5: 드롭 다운 메뉴
  /*
  .hover()  : 마우스가 요소에 올라갔을 때 메소드(행동=기능)
  .active() : 마우스로 요소를 선택했을 때 메소드(행동=기능)

  $(선택자).hover(
    function(){
      // 기능 1번 : 마우스가 요소에 올라갔을 때 실행할 기능
    },
    function(){
      // 기능 2번 : 마우스가 요소를 벗어났을 때 실행할 기능
    }
  )

  $(선택자).hover(mouseEnter함수, mouseLeave함수);

  */
  $(".dropdown").hover(
    function(){
      $("#dropdownMenu").slideDown(200);

    },
    function(){
      $("#dropdownMenu").slideUp(200);

    }
  )



});
