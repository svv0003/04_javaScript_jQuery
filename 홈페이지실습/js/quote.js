$(function () {
  $("#getQuote").click(getQuote);
});

function getQuote() {
  // https://api.quotable.io/random
  // 안전하지 않음에서 고급 -> 사이트 이동

  $.get("https://api.quotable.io/random").done(function (data) {
    $("#quoteResult").html(
      `
      <div class="success">
        <div class="quote-box">
          <h3> ${data.content} </h3>
          <p> ${data.author} </p>
        </div>
      </div>
      `
    );
  });
}
