$(function(){
  $("#saveData").click(saveDataFn);
  $("#getBtn").click(getBtnFn)
  $("#showAllBtn").click(showAllBtnFn)
  $("#clearAllBtn").click(clearAllBtnFn)
})

function saveDataFn(e){
  // 버튼 type="submit" 또는 a 태그로 클릭할 경우 제출 방지용
  // 버튼 type="button"인 경우 사용할 필요 없다.
  // a 태그 속성 기본값인 href -> 링크 이동하기 전에 접근 권한 확인이 필요한 경우
  e.preventDefault();

  // 사용자가 작성한 key, value를 저장할 예정
  // const key = document.getElementById("key").value;
  const inputKey = $("#key").val();
  const inputValue = $("#value").val();

  // 실제 localStorage에 저장 (문자열만 가능!!!!!)
  // .setItem() : 기능 내부에는 key value 저장한다
  //              -> 크롬에서 기본적으로 제공하는 저장 위치에
  //                 사용자가 작성한 데이터의 key value를 저장해 놓는 경로까지 작성
  localStorage.setItem(inputKey, inputValue);
}

function getBtnFn(e){
  e.preventDefault();

  // 가져올 key 명칭이 입력된 값을 변수에 저장
  const inputKey = $("#getKey").val();

  // 저장된 데이터를 가져올 때는 가져오는 key 명칭만 작성
  // 가져온 데이터를 사용자가 눈으로 확인할 수 있도록 JS 변수명에 값을 담아서 html에서 표시하기
  // .getItem() : 기능 내부에 key를 활용해서 value를 가져온다.
  //              값을 가져오는 위치는 크롬에서 기본적으로 저장하는 위치
  const getValue = localStorage.getItem(inputKey);
  $("#getResult").html(
   
   `
   <strong>가져오기 성공!</strong>
   저장된 키 명칭 : ${inputKey}<br>
   저장된 키에 존재하는 값 : ${getValue}
   `
  )
}


/*
크롬이나 엣지 등의 브라우저에서 F12 클릭
애플리케이션 -> 로컬 스토리지 내부 확인
해당 URL 주소를 클릭하여 내부에 저장된 key value 확인 가능

key value는 무조건 문자열 형태
따옴표가 없다고 해서 문자열 아닌 것이 아니라 생략 상태!!!

크롬일 경우 인터넷 창에서 chrome://version 입력

프로필 경로 : /Users/svv/Library/Application Support/Google/Chrome/Default

프로필 경로를 따라서 폴더 내부에 들어가면 local Storage 폴더 존재할 것
그 폴더 내부에 db 또는 dbl로 저장된 내부에 컴퓨터가 읽을 수 있는 글씨로 존재한다.

But 크롬에서 저장하는 폴더 경로를 주기적으로 변경한다!

localStorage 내부에는 문자열만 저장 가능한 이유
1) 악성 코드 방지!!
    문자열은 아무 기능이 없다.
2) 인터넷 주소, 즐겨찾기, 간단한 데이터 읽는 정도를 저장
    사용자가 인터넷 사용함에 있어 불편함을 느끼지 않을 최소한의 저장 자료형을 사용한다.
*/


function showAllBtnFn(e){
  e.preventDefault();
  
  let html = `<h3>크롬 브라우저에 저장된 데이터들 확인</h3><ul>`;
  for(let i=0; i<localStorage.length; i++){
    const key = localStorage.key(i);
    html +=
    `
    <li><strong>${key}</strong>:
    ${localStorage.getItem(key)}</li>
    `
  }
  html += `</ul>`
  $("#allData").html(html);
}
// key 명칭을 가져올 때는 idx 번호를 활용해서 ~번 째에 존재하는 key 명칭을,
// 가져온 key 명칭을 활용해서 값을 가져올 수 있다.
// set 저장할 때는 순차적으로 0번부터 저장된다.
// for문보다 localStorage에 리스트 목록을 저장하는 것이 메모리 활용적이다.
// -> localStorage에 데이터를 저장할 때 배열, 리스트 형태로 저장하는 것이다.

function clearAllBtnFn(e){
  e.preventDefault();

  if (confirm("모든 데이터를 삭제하시겠습니까?")){
    localStorage.clear();
    $("#allData").html("");
  }
  showAllBtnFn();
}