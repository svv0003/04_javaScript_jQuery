const URL = "../json/news.json";

$(function(){
  뉴스불러오기();
  $("#loadBtn").click(검색하기);
})

function 뉴스불러오기(){
  $.get(URL)
  .done(function(data){
    $("#newsContainer").html(
    data.map(
      (i) => 
        `
        <div class="news-card">
          <div class="news-title">${i.title}</div>
          <div class="news-content">${i.content}</div>
        </div>
        `
      )
    )
  })
}

function 검색하기(){
  const newsType = $("#categoryFilter").val();
  const search = $("#search").val();
  $.get(URL)
    .done(function(data){
      if (search && newsType){
        
      }
      $("#newsContainer").html(
        data.filter((news) => news.category == newsType)
          .map((news) =>
          `
          <div class="news-card">
            <div class="news-title">${news.title}</div>
            <div class="news-content">${news.content}</div>
          </div>
          `
        )
      )
    })
}


// 과제 input && category 검색이 일치하는 데이터만 조회하기