// https://abhi-api.vercel.app/api/search/yts?text=heat+waves

// 검색버튼 무시하고, 바로 나오는 영화 확인
$.get("../json/youtube.json")
  .done(function(data){
    $("#results").html(
      `
      <p class="title">영화 제목 : ${data.result.title}</p>
      <p class="info">영화 내용 : ${data.result.description}</p>
      <img src="${data.result.thumbnail}">
      <p class="url-text">URL : ${data.result.url}</p>
      `
    )
  })

$("#searchButton").click(function(){
  $.get("../json/youtube.json")
  .done(function(data){
    const search = $("#searchInput").val();
    if (data.result.title == search){
      $("#results").html(
                `
                <p>영화 제목 : ${i.result.title}</p>
                <p>영화 내용 : ${i.result.description}</p>
                <p>썸네일 : <img src="${i.result.thumbnail}"></p>
                <p>URL : ${i.result.url}</p>
                `
      )}}
    )
  })