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
    $("#strYoutube").html(
      `<iframe width="560" height="315" src="${meal.strYoutube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    );
    let ingredients = "";
    for (let i = 1; i < 20; i++) {
      const ingredient = `meal.strIngredient${i}`;
      const measure = `meal[strMeasure${i}]`;
      ingredients += `${ingredient} : ${measure}<br>`;
    }
    $("#strIngredient").html(`재료 :<br>${ingredients}`);

    $(".tab").removeClass("active");
    $(this).addClass("active");
    $(".slide").slideUp(200);
    $("#strMeal, #strArea, #strInstructions").slideDown(1000);
  });
}

$(".tab").click(function () {
  const selectedTab = $(this).data("tab");
  if (selectedTab) {
    $(".tab").removeClass("active");
    $(this).addClass("active");
    $(".slide").slideUp(200);

    if (selectedTab === "meal") {
      $("#strMeal, #strArea, #strInstructions").slideDown(1000);
    } else {
      $("#strMeal, #" + selectedTab).slideDown(1000);
    }
  }
});

randomMenu();

$("#nextMeal").click(function () {
  randomMenu();
});
