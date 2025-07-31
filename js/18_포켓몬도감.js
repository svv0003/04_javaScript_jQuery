// https://pokeapi.co/api/v2/pokemon/681
// https://pokeapi.co/api/v2/pokemon-species/aegislash

let nowPage = 1;

$(function () {
  pokeInfo(1); // 클릭하지 않아도 자동으로 1번부터 포켓몬 호출

  $("#prevBtn").click(() => {
    if (nowPage > 1) {
      --nowPage;
      pokeInfo(nowPage);
    } else {
      alert("첫 번째 페이지입니다.");
    }
  });

  $("#nextBtn").click(() => {
    ++nowPage;
    pokeInfo(nowPage);
  });
});

/*
range(시작 idx, 마지막idx+1){}    : 파이썬의 range() 메소드처럼 숫자 배열을 만드는 함수
*/

/*
...
Array()             : 배열 생성
end - start + 1 = 10개의 배열을 생성하겠다. 소비자가 원하는 페이지의 번호 배열
.keys()             : key들의 값으로 숫자를 넣겠다. 배열은 0부터 시작 [0,1,2,3...7,8,9]
.map((i)=>i+start)  : 시작 값 더하기
                      포켓몬 사이트는 1부터 시작하기 때분에 배열은 0이지만 0번째 값으로 1을 넣어서 시작! 
*/

function range(start, end) {
  return [...Array(end - start + 1).keys()].map((i) => i + start);
}

function pokeInfo(page) {
  const startId = (page - 1) * 10 + 1;
  const ids = range(startId, startId + 9);
  $("#pokemonContainer").html(""); // 페이지 변경될 때마다 기존 데이터 지우기
  $("#pageInfo").html(`${page}페이지`);
  ids.map((i) => {
    $.get(`https://pokeapi.co/api/v2/pokemon/${i}`).done(function (data) {
      $("#pokemonContainer").html(
        $("#pokemonContainer").html() +
          `<img src="${data.sprites.front_default}">`
      );
    });
  });
}

/*
function pokeInfo() {
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
    $.get(`https://pokeapi.co/api/v2/pokemon/${i}`).done(function (data) {
      $("#pokemonContainer").html(
        $("#pokemonContainer").html() +
          `<img src="${data.sprites.front_default}">`
      );
    });
  });
}
*/

/*
function pokeInfo(){
  for (숫자=1; 숫자<=10; 숫자++){
    $.get(`https://pokeapi.co/api/v2/pokemon/${숫자}`)
      .done(function(data){
        $("#pokemonContainer").html(
          $("#pokemonContainer").html() + `<img src="${data.sprites.front_default}">`);
  })}
}
*/
