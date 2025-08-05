$(function(){
  // 페이지 시작할 때 모든 저장 데이터 보여주기
  showAllFoodData();
  $("#addBtn").click(addFoodData);
  $("#searchBtn").click(searchFoodData);
  $("#showAllBtn").click(showAllFoodData);
  $("#clearAllBtn").click(clearAllFoodData);
})

/**
 * @param {*} e 
 */



function addFoodData(e) {
  e.preventDefault();

  const foodName = $("#foodName").val().trim();
  const price = $("#price").val().trim();
  const category = $("#category").val().trim();

  let foodList = JSON.parse(localStorage.getItem("foodList") || "[]");

  const newFood = {
    foodName: foodName,
    price: price,
    category: category,
    createAt: new Date().toDateString("ko-KR"),
  }

  foodList.push(newFood);

  localStorage.setItem("foodList", JSON.stringify(foodList));

  alert("로컬스토리지에 저장되었습니다.")

  /*
  $("#foodName").val("");
  $("#price").val("");
  $("#category").val("");
  */
 $("#foodName,#price,#category").val("");
}



function searchFoodData(e) {
  e.preventDefault();

  // 

}



function showAllFoodData(e) {

  /** 
   * function showAllFoodData(e) {    : 행동이 들어왔을 때 행동에 대한 결과를 수행
   *                                    버튼, input처럼 특정 행위가 없을 때는 undefined
   *                                    (행동이 전달되지 않은 상태 / 단순 페이지 오픈 상태)
   *    if (e) e.preventDefault();    : 클릭과 같은 동작이 들어왔을 때 태그 속성을 멈추기 위한 속성
   *                                    if문으로 감싸지 않는다면 페이지 로딩, 모든 저장 데이터 보기 상태에서는
   *                                      undefined.preventDefault()가 되어서 문제 발생
   *                                        아래 기능 수행 불가!!!!!
   * }
  */

  // if문 내부가 한 줄 -> {} 생략 가능
  if (e) e.preventDefault();

  // 함수 내 변수 사용 순서가 꼬이면 오류 발생한다.
  // 변수 선언 및 초기화 전에 사용하면
  //   loading에서 특정 행위나 이벤트가 없을 때는
  //      내부 에러로 인해 데이터 표시 안 될 수 있다.
  let foodList = JSON.parse(localStorage.getItem("foodList") || "[]");
  let html = `<h3>추가한 메뉴 (총 ${foodList.length}개)</h3><br><br>`;

  for (let i=0; i<foodList.length; i++) {
    const key = foodList[i];
    html +=
    `[${key.category}] ${key.foodName} : ${key.price}원 (${key.createAt})<br><br>`
  }
  $("#allData").html(html);
}



function clearAllFoodData(e) {
  e.preventDefault();

  if (confirm("정말 삭제하시겠습니까?")) {
    localStorage.removeItem("foodList");
    alert("모든 음식 데이터가 삭제되었습니다.")
    $("#allData").html("");
  }
}