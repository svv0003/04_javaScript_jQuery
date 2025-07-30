$(() => {
  let nowPage = 0;
  const width = 300;
  const imgAmount = $(".slide").length;

  $("#next").click(function () {
    // 현재 페이지가 이미지 총 개수보다 적을 때
    if (nowPage < imgAmount - 1) {
      nowPage++;
      $(".slide-wrap").animate(
        {
          // 이미지 교체 (왼쪽으로, 0.5초)
          left: -width * nowPage,
        },
        500
      );
    } else {
      alert("마지막 이미지입니다.")
    }
  });

  $("#prev").click(function () {
    // 현재 페이지가 0보다 클 때
    if (nowPage > 0) {
      nowPage--;
      $(".slide-wrap").animate(
        {
          left: -width * nowPage,
        },
        500
      );
    } else {
      alert("첫 번째 페이지입니다.")
    }
  });
});

/*

left: -width * nowPage

첫 번째 이미지 (nowPage=0)
left: -300px * 0 = 0        : 슬라이드 위치가 0, 원래 위치에 첫 번째 사진이 존재

두 번째 이미지 (nowPage=1)
left: -300px * 1 = -300px   : 슬라이드 위치가 1, 현재 위치에 두 번째 사진이 존재

세 번째 이미지 (nowPage=2)
left: -300px * 2 = -600px   : 슬라이드 위치가 2, 현재 위치에 세 번째 사진이 존재

*/