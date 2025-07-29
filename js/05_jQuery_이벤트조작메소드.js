$(function () {
  // #add 버튼을 클랙했을 때 #boxArea .append("<div class='box'>박스</div>")
  $("#add").click(function () {
    $("#boxArea").append("<div class='box'>박스</div>");
  });
  $("#del").click(function () {
    $(".box:last").remove();
  });
  // #del 버튼을 클릭했을 때 $(".box:last").remove()
});
