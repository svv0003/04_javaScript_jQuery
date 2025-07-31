// jQuery 이벤트 처리
$(function () {
  $("#btn1").click(getCats);
  $("#btn2").click(getDogs);
  $("#btn3").click(getSelectedAnimal);
  $("#btn4").click(getCatsWithCount);
  $("#btn5").click(getRandomGallery);
});

// 문제 1: 고양이 사진 3장 가져오기
// https://api.thecatapi.com/v1/images/search?limit=10
/* 
힌트:
0. slice() 이용해서 0번부터 2번까지 가져오기 설정
1. 배열을 만들어서 3개의 고양이 사진 URL 생성
2. map()을 사용해서 HTML 생성
3. join('')으로 합쳐서 result1에 표시
*/
function getCats() {
  $("#result1").html(
    '<div class="loading">🐱 고양이 사진을 가져오는 중...</div>'
  );
  $.get("https://api.thecatapi.com/v1/images/search?limit=3").done(function (
    data
  ) {
    // limit=3  -> 3장이어도 무조건 10장 나오는 사이트!!!
    // 이럴때 3장만 가져오는 방법
    // .slice(처음 idx, 마지막 idx+1)
    const threeCats = data.slice(0, 3); // 0번부터 3 전까지 3장 가져오는 방법
    $("#result1").html(
      threeCats.map(
        (cat) =>
          `<div class="photo-item"><img src="${cat.url}"><p>고양이 ID : ${cat.id}</div>`
      )
    );
  });
}

// 문제 2: 강아지 사진 5장 가져오기
// https://api.thedogapi.com/v1/images/search?limit=3
/*
힌트:
0. slice() 이용해서 0번부터 4번까지 가져오기 설정
1. Array.from()이나 반복문으로 5개 배열 생성
2. 각각 다른 강아지 사진 URL 만들기
3. photo-grid 클래스와 photo-item 클래스 사용
*/
function getDogs() {
  $("#result2").html(
    '<div class="loading">🐶 강아지 사진을 가져오는 중...</div>'
  );
  $.get("https://api.thedogapi.com/v1/images/search?limit=3").done(function (
    data
  ) {
    const fiveDogs = data.slice(0, 5);
    $("#result2").html(
      fiveDogs.map(
        (dog) =>
          `<div class="photo-item"><img src="${dog.url}"><p>강아지 ID : ${dog.id}</div>`
      )
    );
  });
}

// 문제 3: 선택한 동물 사진 가져오기
// selected 값이 "cat"이면 고양이 사진 4장
// selected 값이 "dog"이면 강아지 사진 4장
// if문을 사용해서 조건에 따라 다른 사진 표시
function getSelectedAnimal() {
  const selected = $("#animalSelect").val();

  if (!selected) {
    $("#result3").html('<div style="color: red;">동물을 선택해주세요!</div>');
    return;
  }

  $("#result3").html(
    '<div class="loading">선택한 동물 사진을 가져오는 중...</div>'
  );

  $.get(`https://api.the${selected}api.com/v1/images/search?limit=3`)
  .done(function (data) {
        const count = data.slice(0, 4);
        $("#result3").html(
          count.map(
            (animal) =>
              `<div class="photo-item"><img src="${animal.url}"><p>${selected} ID : ${animal.id}</div>`
          )
        );
      }
  );
}

// 문제 4: 원하는 개수만큼 고양이 사진 가져오기
function getCatsWithCount() {
  const count = $("#photoCount").val();

  if (!count || count < 1 || count > 10) {
    $("#result4").html(
      '<div style="color: red;">1-10 사이의 숫자를 입력해주세요!</div>'
    );
    return;
  }

  $("#result4").html('<div class="loading">고양이 사진을 가져오는 중...</div>');

  // 여기에 코드 작성
  // count 개수만큼 고양이 사진 가져오기
  // Array.from({length: count}, (_, i) => ...) 패턴 사용
}

// 문제 5: 랜덤 동물 사진 갤러리
function getRandomGallery() {
  $("#result5").html(
    '<div class="loading">🎲 랜덤 동물 갤러리를 만드는 중...</div>'
  );

  // 여기에 코드 작성
  // 고양이 4장 + 강아지 4장 = 총 8장
  // 두 배열을 합쳐서 하나의 갤러리로 표시
  // concat()이나 spread operator(...) 사용 가능
}
