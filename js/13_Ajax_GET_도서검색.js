// bookTitle author 검색 초기화 result

$(function () {
  $("#도서검색").click(function (e) {
    // bookTitle로 도서 값 val() 가져오기
    // author로 저자 값 val() 가져오기
    const bookTitle = $("#bookTitle").val();
    const author = $("#author").val();

    // JSON 파일에서 도서 데이터 가져오기
    $.get("../json/books.json", function (data) {
      // data에서 length를 활용해서 총 몇 개의 도서가 존재하는지 확인
      // for문이나 while문 대신 총 개수 확인하는 간단한 방법
      //  객체.keys(data.books).length
      // 객체는 length 단독으로 사용 불가, keys values 키나 값들을 모아서 개수 확인 가능
      // 배열은 length 단독으로 사용 가능
      const totalBooks = Object.keys(data.books).length;
      console.log("Object.keys(data.books) : ", Object.keys(data.books));
      console.log("Object.keys(data.books).length : ", Object.keys(data.books).length);
      $("#result").html(`
        <div>총 ${totalBooks} 권의 도서가 존재합니다.</div>
        `);
        
      if (data.books[bookTitle]) {
        // 책 제목이 존재한다면
        console.log("a", data);
        if (data.books[bookTitle].author === author) {
          // json에 저장된 저자와 검색된 저자가 일치하는 항목이 존재한다면
          console.log("b", data);
          $("#result").removeClass("error");
          $("#result").addClass("success");
          $("#result").html(`
              <div class="bool-info">
              <h3>도서 찾기 성공!</h3>
              <p><strong>제목 : ${bookTitle}</strong></p>
              <p><strong>저자 : ${author}</strong></p>
              <p><strong>가격 : ${data.books[bookTitle].price}</strong></p>
              `);
          $("#도서검색").hide();
          $("검색초기화").show();
        } else {
          // 제목은 같지만 저자가 다른 경우
          console.log("c", data);
          $("#result").html(`검색한 도서의 저자가 목록 도서의 ${author}와 일치하지 않습니다.`)
        }
      } else {
        // 책 제목이 존재하지 않는다면
        console.log("d", data);
        $("#result").html(`${bookTitle}과 일치하는 도서가 존재하지 않습니다.`)
      }
    });
  });
});
