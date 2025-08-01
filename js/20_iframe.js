const URL = "https://www.themealdb.com/api/json/v1/1/random.php";


$("#btn").click(loadWatch());

loadWatch();

function loadWatch() {
  $.get(URL).done(function (data) {
    const meal = data.meals[0].strYoutube; // API 결과에서 첫 번째 음식 정보 가져오기
    if (meal) {
      // 음식이 존재한다면
      // 매우 자주 쓰이고 중요한 메소드
      // replace() : 특정 문자열을 특정 문자열로 변환
      // .replace("변경될 문자열", "삽입할 문자열")
      let videoHTML = "";
      if (meal.strYoutube) {
        // 유튜브 링크가 들어있는 문자열 존재 확인하기
        const embedURL = meal.strYoutube.replace("watch?v=", "embed/");
        console.log("embedURL : ", embedURL);

        // 1. 백틱 사용
        // 2. iframe 복붙
        // 3. 링크 부분에 삽입
        videoHTML = `
          <div class="video-container">
            <iframe
            src="${embedURL}"
            frameborder="0"
            allow="accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture;
            web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen></iframe>
          </div>`;
      } else {
        videoHTML = "<div>영상이 존재하지 않습니다.</div>";
      }
    }
    $("#result").html(videoHTML);
  });
}

/*
const watchURL  = "https://www.youtube.com/watch?v=mTvlmY4vCug";
const iframeURL = "https://www.youtube.com/embed/mTvlmY4vCug?si=BMPb4XHVR3SBNxOr";
                   https://www.youtube.com/watch?v=UVAMAoA2_WU
                   https://www.youtube.com/embed/UVAMAoA2_WU?si=0gFalJaEON0yKPDO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/mTvlmY4vCug?si=BMPb4XHVR3SBNxOr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
*/
