$(function () {
  loadMovies();
  $("#openLoginPopup").click(openLoginPopup);
  $("#moveRegister").click(goToRegister);
});

// 지브리 영화 데이터 가져오기
function loadMovies() {
  $.get("https://ghibliapi.vercel.app/films")
    .done(function (data) {
      // $(".loading").hide();
      $(".loading").hide();
      displayMovies(data);
    })
}

// 영화 목록 표시
function displayMovies(movies) {
const movieCard = movies.map(
      (movie) =>
        `
          <div class="movie">
              <h3>${movie.title}</h3>
              <p class="year">개봉년도: ${movie.release_date}</p>
              <p><strong>감독:</strong> ${movie.director}</p>
              <p><strong>제작자:</strong> ${movie.producer}</p>
              <p>
              <span class="detail-link" onclick="goToDetail('${movie.id}'">
              ${movie.description.substring(0,100)+"...상세보기"}
              </span>
              </p>
              <p><img src="${movie.image}"></p>
          </div>
        `
    ).join("");
  $(".movies").html(movieCard);
}

// 상세페이지 이동
function goToDetail(movieId){
  /**
   * http://127.0.0.1:5500/index.html       + ?key=value
   * 개발을 위해 index.html 화면을 보여주는 주소      ? 뒤는 매개변수로 전달받은 값을 detail.html에 전달하겠다.
   *                                          datail.html로 들어가면 -> 상세페이지에서 표시할 내용이 존재하지 않습니다.
   *                                          detail.html?id=id에 해당하는 값을 작성하면 해당 데이터를 
   * detail.html?id=${movieId}
   * 
   */
  window.location.href = `detail.html?id=${movieId}`;
}

// 로그인 팝업 열기
function openLoginPopup() {
  const width = 400;
  const height = 800;
  const left = (window.screen.width - width) / 2;
  const top = (window.screen.height - height) / 2;

  const options =
  `
  width=${width},
  height=${height},
  left=${left},
  top=${top},
  `;

  window.open("login.html", "loginPopup", options);
}

// 회원가입 페이지 이동
function goToRegister() {
  window.location.href = "register.html";
}