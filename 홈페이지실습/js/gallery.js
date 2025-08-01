// 강아지 사진을 클릭하지 않아도 랜덤으로 1장 보이도록 설정
// https://api.thecatapi.com/v1/images/search
// https://dog.ceo/api/breeds/image/random

// 어디서든 현재페이지를 확인 가능한 전역변수 설정
let 현재페이지 = 1;

$(function () {
  // 강아지 사진이 무조건 랜덤으로 한 장 출력
  randomDog();
  // 강아지 사진 이미지를 클릭할 때 새로운 강아지 사진을 랜덤으로 변경
  $("#dogResult").click(randomDog);

  // 고양이 사진 10개 랜덤 설정
  getCats();

  // 페이지네이션 버튼 이벤트
  $("#prevBtn").click(function () {
    if (현재페이지 > 1) {
      --현재페이지;
      getCats();
      $("#pageInfo").html(`${현재페이지} 페이지`)
    } else {
      alert("첫 번째 페이지입니다.");
    }
  });
  $("#nextBtn").click(function () {
    ++현재페이지;
    getCats();
    $("#pageInfo").html(`${현재페이지} 페이지`)
  });
});

function randomDog() {
  $.get("https://dog.ceo/api/breeds/image/random").done(function (data) {
    $("#dogResult").html(`<img src="${data.message}" alt="dog">`);
  });
}

function getCats() {
  //https://api.thecatapi.com/v1/images/search?limit=10
  $.get("https://api.thecatapi.com/v1/images/search?limit=10").done(function (
    data
  ) {
    const catImages = data
      .map(
        (cat) =>
          `   <div class="cat-card">
                <img src = " ${cat.url}" 
                     class="cat-detail"  
                     onclick="showFullImg('${cat.url}')"  />
             </div>
                `
      )
      .join("");
    $("#catResult").html(
      `
        ${catImages}
        `
    );
  });
}

// 이미지 클릭 시 큰 이미지로 볼 수 있도록 설정
// .prepend() : 맨 앞에 새로운 것을 이어서 추가
// .append()  : 맨 뒤에 새로운 것을 이어서 추가
// .html()    : 내용 전체 교체
function showFullImg(imageUrl) {
  $("#catResult").prepend(
    `
    <div id="abc" class="cat-modal" onclick="closeFullImg()">
      <img src="${imageUrl}" class="cat-detail-show">
    </div>
    `
  );
}

// 큰 이미지 클릭 시 이미지 닫기 설정
// close() open() 과 같은 예약어 메소드나 함수 명칭으로 변수명 사용하는 것을 지양
// 각 회사 개발자가 만든 듯한 명칭으로 함수, 메소드 변수명을 만드는 것이 좋다.
function closeFullImg() {
  $("#abc").remove();
}
