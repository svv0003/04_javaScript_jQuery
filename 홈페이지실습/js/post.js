// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/posts/1/comments?_limit=3

// 전역변수 : posts.js 모든 곳에서 사용할 수 있는 변수명
// 지역변수 : 함수 내애서만 사용 가능한 변수명
// let 전역변수의 값을 재할당하는 것은 가능하지만 지역변수는 함수 밖에선 사용 불가능하다.
// -> 연예인은 어디든 불러주면 행사 뛰지만 일반인은 옆동네에서도 불러주지 않는다.
let 현재페이지 = 1;
let 전체게시물 = [];
console.log("전체게시물1번 : ", 전체게시물);
const 페이지당게시물수 = 3; //한 페이지당 10개

$(function () {
  // posts를 클릭하지 않고 가져오기
  // 한 페이지만 10개의 게시물만 볼 수 있도록 설정
  
  getAllPosts();

  // 페이지네이션 버튼
  $("#prevBtn").click(function () {
    if (현재페이지 > 1) {
      --현재페이지;
      getPosts();
    } else {
      alert("첫 번째 페이지입니다.");
    }
  });
  $("#nextBtn").click(function () {
    // Math.ceil() : 나눈 나머지 값까지 페이지에 넣어주어야 한다.
    const 총페이지수 = Math.ceil(전체게시물.length / 페이지당게시물수);
    if ((현재페이지 < 총페이지수)) {
      ++현재페이지;
      getPosts();
    } else {
      alert("마지막 페이지입니다.");
    }
  });
});

// getAllPosts() : 초반에 데이터 전체를 가져오는 기능
function getAllPosts() {
  $.get("https://jsonplaceholder.typicode.com/posts").done(function (data) {
    전체게시물 = data; //전체 데이터를 변수에 저장
    console.log("전체게시물2번 : ", 전체게시물);
    getPosts(); // 첫 번째 페이지 표시
  });
}

// getPosts() : 페이지에 해당하는 게시물만 보여주는 기능
function getPosts() {
  // 현재 페이지에 해당하는 게시물들만 계산
  const 시작하는게시물 = (현재페이지 - 1) * 페이지당게시물수;
  const 끝인덱스 = 시작하는게시물 + 페이지당게시물수;
  const 현재페이지게시물 = 전체게시물.slice(시작하는게시물, 끝인덱스);
  console.log("전체게시물3번 : ", 시작하는게시물);

  // 페이지 정보 업데이트

  const 총페이지수 = Math.ceil(전체게시물.length / 페이지당게시물수);
  $("#pageInfo").html(`${현재페이지} / ${총페이지수} 페이지`);
  $("#postsResult").html(
    //map으로 순회하는 데이터를 모두 전달받을것!
    현재페이지게시물.map(
      (post) =>
        `
            <div class="success">
                <div class="post-item" onclick="getComments(${post.id})">

                    <h4>${post.id}. ${post.title}</h4>
                    <p>${post.body}</p>
                </div>

            </div>
                
            `
    )
  );
}

// 게시물에 해당하는 댓글 가져오기
function getComments(postId){
  $.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments?_limit=3`)
  .done(function(data){
    $("#commentResult").html(
      data.map(
        (comment) =>
          `
          <h4>${comment.name}</h4>
          <p>${comment.email}</p>
          <p>${comment.body}</p>
          <br>
          `
      )
    )
  })
}