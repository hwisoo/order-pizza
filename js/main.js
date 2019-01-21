// Front-end Logic
var shoppingCart = new ShoppingCart();

function displayPizzaDetails(pizzaToDisplay) {
  var pizzaList = $("ul#pizzas");
  var htmlForPizzaInfo = "";
  pizzaToDisplay.pizzas.forEach(function (pizza) {
    if (pizza.meats.length == 0 && pizza.veggies.length == 0) {
      htmlForPizzaInfo += "<li id=" + pizza.id + ">" + pizza.size + " Pizza, No Toppings" + "</li>";
    } else if (pizza.meats.length == 0 && pizza.veggies.length == 1) {
      htmlForPizzaInfo += "<li id=" + pizza.id + ">" + pizza.size + " " + pizza.veggies[0] + " Pizza" + `, ${pizza.veggies.length} Veggie` + "</li>";
    } else if (pizza.meats.length == 1 && pizza.veggies.length == 0) {
      htmlForPizzaInfo += "<li id=" + pizza.id + ">" + pizza.size + " " + pizza.meats[0] + " Pizza" + `, ${pizza.meats.length} Meat` + "</li>";
    } else if (pizza.meats.length == 1 && pizza.veggies.length == 1) {
      htmlForPizzaInfo += "<li id=" + pizza.id + ">" + pizza.size + " " + pizza.meats[0] + " Pizza" + `, ${pizza.meats.length} Meat` + `, ${pizza.veggies.length} Veggie` + "</li>";
    } else if (pizza.meats.length == 1 && pizza.veggies.length > 1) {
      htmlForPizzaInfo += "<li id=" + pizza.id + ">" + pizza.size + " " + pizza.meats[0] + " Pizza" + `, ${pizza.meats.length} Meat` + `, ${pizza.veggies.length} Veggies` + "</li>";
    } else if (pizza.meats.length > 1 && pizza.veggies.length == 0) {
      htmlForPizzaInfo += "<li id=" + pizza.id + ">" + pizza.size + " " + pizza.meats[0] + " Pizza" + `, ${pizza.meats.length} Meats` + "</li>";
    } else if (pizza.meats.length > 1 && pizza.veggies.length == 1) {
      htmlForPizzaInfo += "<li id=" + pizza.id + ">" + pizza.size + " " + pizza.meats[0] + " Pizza" + `, ${pizza.meats.length} Meats` + `, ${pizza.veggies.length} Veggie` + "</li>";
    } else if (pizza.veggies.length > 1 && pizza.meats.length == 0) {
      htmlForPizzaInfo += "<li id=" + pizza.id + ">" + pizza.size + " " + pizza.veggies[0] + " Pizza" + `, ${pizza.veggies.length} Veggies` + "</li>";
    } else if (pizza.veggies.length > 1 && pizza.meats.length > 0) {
      htmlForPizzaInfo += "<li id=" + pizza.id + ">" + pizza.size + " " + pizza.meats[0] + " " + pizza.veggies[0] + " Pizza" + `, ${pizza.meats.length} Meats` + `, ${pizza.veggies.length} Veggies` + "</li>";
    }
  });
  pizzaList.html(htmlForPizzaInfo);
}

$(document).ready(function () {
  $("p#totalSentence").hide();
  $("button#add-pizza").click(function () {
    event.preventDefault();
    $("p#totalSentence").hide();
    $("ul#pizzas").hide();

    var size = $("select#size").val();
    var veggies = [];
    var meats = [];

    var total = $("span#total");

    $.each($("input[name='veggies']:checked"), function () {
      veggies.push($(this).val());
    });
    $.each($("input[name='meats']:checked"), function () {
      meats.push($(this).val());
    });
    var extra = meats.length * 2 + veggies.length * 1;

    var newPizza = new Pizza(size, veggies, meats, extra);
    shoppingCart.addPizza(newPizza);
    displayPizzaDetails(shoppingCart);
    total.html("$" + shoppingCart.calculateTotal());
    $("p#totalSentence").fadeIn(1500);
    $("ul#pizzas").fadeIn();
    $("#clear-button").show();


    console.log(newPizza);
    console.log(shoppingCart);

    $("#clear-button").click(function () {
      location.reload();
    });

  });
});