// ready가 아닌 최신 방식의 웹문서 기능 설정 환경
// toggleBtn 클릭했을 때 화살표 익명함수로 toggleClass 활용해서 dark-mode 변경하기

$(() => {
  $("#toggleBtn").click(() => {
    $("body").toggleClass("dark-mode");
  });
});
