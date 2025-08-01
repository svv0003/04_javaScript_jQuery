// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/posts/1/comments?

let 현재페이지 = 1;
let 전체게시물 = [];
const 페이지당게시물수 = 10; //한 페이지당 10개

$(function () {
  // posts를 클릭하지 않고 가져오기
  // 한 페이지만 10개의 게시물만 볼 수 있도록 설정
  
  getAllPosts();

  // 페이지네이션 버튼
  $("#prevBtn").click(function () {
    if (현재페이지 > 1) {
      --현재페이지;
      getPosts();
      $("#pageInfo").html(`${현재페이지} 페이지`);
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
      $("#pageInfo").html(`${현재페이지} 페이지`);
    } else {
      alert("마지막 페이지입니다.");
    }
  });
});





function getAllPosts() {
  $.get("https://jsonplaceholder.typicode.com/posts").done(function (data) {
    전체게시물 = data; //전체 데이터를 변수에 저장
    getPosts(); // 첫 번째 페이지 표시
  });
}





function getPosts() {
  // 현재 페이지에 해당하는 게시물들만 계산
  const 시작하는게시물 = (현재페이지 - 1) * 페이지당게시물수;
  const 끝인덱스 = 시작하는게시물 + 페이지당게시물수;
  const 현재페이지게시물 = 전체게시물.slice(시작하는게시물, 끝인덱스);

  // 페이지 정보 업데이트

  const 총페이지수 = Math.ceil(전체게시물.length / 페이지당게시물수);
  $("#postsResult").html(
    //map으로 순회하는 데이터를 모두 전달받을것!
    현재페이지게시물.map(
      (post) =>
        `
            <div class="success">
                <div class="post-item">

                    <h4>${post.id}. ${post.title}</h4>
                    <p>${post.body}</p>
                </div>

            </div>
                
            `
    )
  );
}
