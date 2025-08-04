$(function(){
  $("a").click(signUp);
})

function signUp(e){
  // 기본 링크 동작 방지
  // 제출 방지 -> 일시 정지 상태
  // 아래 정규식, 데이터 저장 여부 등의 규정을 모두 확인한 후 result.html 이동하도록 설정
  e.preventDefault();
  
  // 입력값 가져오기
  const username = $("#username").val();
  const userpw = $("#userpw").val();

  // 서버로 전송할 데이터
  // userData 형식 또한 추후 DB에 저장할 때 사용 예정
  const userData = {
    username: username,
    password: userpw,
  };

  // json 저장할 때, DB 저장할 때 사용 예정 - $.post()

  // username과 userpw는 맨 마지막에 가입된 사람의 정보로 덮어쓰기 된다.
  // 배열에 기존 회원 목록 뒤에 새로 가입한 유저의 목록 추가
  // localStorage에도 목록 리스트 형태로 저장

  // 기존 회원 목록 가져오기 (엾으면 빈 배열 형태)
  // 가져온 값을 userList 변수명에 저장
  /*
  JSON.parse()     : JSON 형식의 문자열(String)을 javascript의 객체(object)나 배열(array)로 변환
                     문자열 -> 객체 or 배열 변환
  JSON.stringify() : javascript의 객체(object)나 배열(array)을 JSON 형식의 문자열(String)으로 변환
                     객체 or 배열 -> 문자열 변환

  localStorage     : 문자열만 저장 가능하다. -> localStorage를 저장할 때는 배열, 객체를 문자열 형태로 변환해야 한다.
  userList         : 문자열인 localStorage를 배열, 객체 형태로 변환한 것
  
  .setItem("key":값)  : 데이터를 저장할 때 사용한다.
                        마치 물건에 이름표(key)를 붙여서 사물함에 넣는 것과 같다. 
  .getItem("key")    : setItem()으로 저장한 데이터를 가져올 때 사용한다.
                        사물함에서 이름표(key)를 확인하고 물건을 꺼내는 것과 같다.

  단순한 글자나 숫자 데이터를 저장할 때는 parse()나 stringify()를 작성할 필요 없다.
  왜냐하면 문자열 형태로 하나씩 저장될 것이기 때문이다.

  배열이나 목록은 문자열로 저장된 형태를 배열, 리스트 형태로 변환해서
  JavaScript 내부에서 활용할 것이기 때문에 변환은 필수이다.
  
  */
  let userList = JSON.parse(localStorage.getItem("userList") || "[]");

  // 새 회원 정보를 담을 json 형태의 배열 생성
  const newUser = {
    username: username,
    password: userpw,
  };
  
  // 빈 배열이나 기존 배열에 새로운 유저 정보를 추가
  // localStorage에 저장 -> userList.html에서 유저 목록을 확인하기 위한 배열 저장 형태
  /*
  userList : localStorage에 key 명칭으로 지정되어 있는 유저 목록을 담은 변수명
  .push()  : 브라우저에서 저장된 리스트가 있든 없든 .push() 메소드로 맨 뒤에 추가하여 항목을 저장한다.
  newUser  : 위에서 소비자가 작성한 값을 key:username, 값:username 형태로 가져와서 저장한다.
  */
  // userList.push("username" : username, "password": userpw);
  userList.push(newUser);
  localStorage.setItem("userList", JSON.stringify(userList));

  // result.html에서 개별 사용자가 본인 회원가입 결과를 확인하기 위한 변수명 저장 형태
  localStorage.setItem("username", username);
  localStorage.setItem("userpw", userpw);

  // 모두 저장한 뒤 결과 페이지로 이동
  window.location.href = "22_result.html";



}



/**
 * localStorage에서 회원가입을 진행한다.
 * 입력된 정보는 두 가지 형태로 저장된다.
 * 1) 개별 정보 : 현재 가입한 사용자의 아이디(username)과 비밀번호(userpw)가 단일 항목으로 저장된다.
 * 2) 목록 정보 : 기존 회원 목록에 현재 가입한 사용자의 정보를 추가하여 전체 회원 목록(userList) 배열 형태로 저장된다.
 * 
 * result.html : 가입이 완료되면 개별 가입 확인을 위해 결과 페이지로 이동한다.
 * localStorage에 저장된 개별 정보를 가져와서 사용자가 작성한 데이터를 확인할 수 있도록 설정
 * 
 * userList.html : 가입이 모두 완료되어 localStorage에 저장된 목록을 확인한다.
 * localStorage에 저장된 목록 정보를 가져와서 사이트에 가입된 모든 회원의 아이디와 비밀번호를 화면에 표시한다.
 * 
 * 크롬이나 엣지 등 브라우저의 데이터를 모두 지우기를 하기 전까지
 * 
 * 현재는 악성코드 등의 이유로 json 파일을 localStorage 올리는 것을 막혔다.
 * 
 * 
 * 
 * 
 * 
 * 
 * setItem : localStorage에 개별 정보를 저장하는 메소드
 * getItem : localStorage에 저장된 개별 정보를 불러오는 메소드
 *           (Java에서 많이 사용한다.)
 * 
 * 
 * 
 * 
 */