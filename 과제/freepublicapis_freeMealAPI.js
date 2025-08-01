const URL = "https://www.themealdb.com/api/json/v1/1/random.php";

function randomMenu() {
  $.get(URL).done(function (data) {
    const meal = data.meals[0];
    console.log("Meal data:", meal);
    $("#strMeal").html(`음식 : ${meal.strMeal}`);
    $("#strArea").html(`나라 : ${meal.strArea}`);
    $("#strInstructions").html(`설명 : ${meal.strInstructions}`);
    $("#strMealThumb").html(
      `<img src="${meal.strMealThumb}" alt="${meal.strMeal}">`
    );
    let videoHTML = "";
    if (meal.strYoutube) {
      const embedURL = meal.strYoutube.replace("watch?v=", "embed/");
      console.log("embedURL : ", embedURL);

      videoHTML = `
          <div class="video-container">
            <iframe
            src="${embedURL}"
            frameborder="0"
            allow="accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture;
            web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen></iframe>
          </div>`;
    }
    $("#strYoutube").html(videoHTML);
    let ingredients = "";
    for (let i = 1; i < 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      ingredients += `${ingredient} ${measure}<br>`;
    }
    $("#strIngredient").html(`재료 :<br><br>${ingredients}`);

    $(".tab").removeClass("active");
    $(this).addClass("active");
    $(".slide").slideUp(100);
    $("#strMeal, #strArea, #strInstructions").slideDown(500);
  });
}

$(".tab").click(function () {
  const selectedTab = $(this).data("tab");
  if (selectedTab) {
    $(".tab").removeClass("active");
    $(this).addClass("active");
    $(".slide").slideUp(100);

    if (selectedTab === "meal") {
      $("#strMeal, #strArea, #strInstructions").slideDown(500);
    } else {
      $("#strMeal, #" + selectedTab).slideDown(500);
    }
  }
});

randomMenu();

$("#nextMeal").click(randomMenu);
