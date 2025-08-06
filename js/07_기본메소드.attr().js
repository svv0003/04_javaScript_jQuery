$(function () {

  $(".attrDiv").attr("style", "margin-top:10px;")

  $("#changeImage").click(imgFn);
  $("#changeAlt").click(altFn);
  $("#changeLink").click(linkFn);
  $("#disableInput").click(disInputFn);
  $("#enableInput").click(enInputFn);
  $("#checkAttr").click(attrFn);
  $("#checkProp").click(propFn);
  $("#setData").click(setFn);
  $("#getData").click(getFn);
});


function imgFn(e) {
  e.preventDefault();
  $("#moviePoster").attr("src", "../image/pumpkin.png");
}
function altFn(e) {
  e.preventDefault();
  $("#moviePoster").attr("alt", "변경된 alt 설명 속성");
  $("#moviePoster").attr("id", "logo");
  alert("id, alt 속성이 변경되었습니다.");
}
function linkFn(e) {
  e.preventDefault();
  $("#link").attr("href", "https://google.com");
  $("#link").html("구글 바로가기");
}
function disInputFn(e) {
  e.preventDefault();
  // disabled css 속성으로 disabled 효과 설정하기
  // $("#textInput").addClass("disabled");

  // $("#textInput").attr("disabled", "disabled");
  // $("#textInput").attr("disabled", true);
  // $("#textInput").attr("disabled", "");
  $("#textInput").attr("disabled", "").addClass("disabled");
}
function enInputFn(e) {
  e.preventDefault();
  // $("#textInput").removeAttr("disabled");
  // $("#textInput").removeClass("disabled");
  $("#textInput").removeAttr("disabled").removeClass("disabled");
}
function attrFn(e) {
  e.preventDefault();
  const checked = $("#checkbox").attr("checked");
  /* attr() 사용해서 속성 변경을 한다면 아래 예시처럼 속성 변경되는 값까지 작성해야 한다.
  
  const checked = $("#checkbox").attr("checked", "checked");
  const checked = $("#checkbox").attr("checked", true);
  const checked = $("#checkbox").attr("checked", "");
  */
  alert(".attr() 결과 : " + (checked || "없음"));
}
function propFn(e) {
  e.preventDefault();
  const checked = $("#checkbox").prop("checked");
  alert(".attr() 결과 : " + checked);
}
/*
.attr()     : HTML 코드에 작성된 속성 초기값을 그대로 보인다.
              속성을 설정할 때 변경 사항까지 작성해야 한다.

.prop()     : 사용자와 상호작용하며 현재 상태 확인 가능하다.
 */
function setFn(e) {
  e.preventDefault();
  $("#dataElement").attr("data-id", "12345");
  alert("data-id가 설정되었습니다.");
}
function getFn(e) {
  e.preventDefault();
  const dataId = $("#dataElement").attr("data-id");
  alert("data-id : ", dataId || "없음");
}
