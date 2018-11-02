// Back-end Logic
function ShoppingCart() {
  this.pizzas = [];
  this.currentId = 0;
}

ShoppingCart.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

ShoppingCart.prototype.assignId = function() {
  this.currentId +=1;
  return this.currentId;
}

ShoppingCart.prototype.findPizza = function(id){
  for (var i=0; i <this.pizzas.length; i++){
    if(this.pizzas[i]){
      if(this.pizzas[i].id == id){
        return this.pizzas[i];
      }
    }
  };
  return false;
}

ShoppingCart.prototype.deletePizza = function(id) {
  for(var i=0; i<this.pizzas.length; i++){
    if(this.pizzas[i]){
      if(this.pizzas[i].id == id){
        delete this.pizzas[i];
        return true;
      }
    }
  };
  return false;
}

ShoppingCart.prototype.calculateTotal = function() {
  var total =0;
  for(var i=0; i<this.pizzas.length; i++){
    if(this.pizzas[i]){
      if(this.pizzas[i].size =="MED"){
        cost = 6;
      } else if (this.pizzas[i].size =="LG"){
        cost = 8;
      } else if (this.pizzas[i].size =="XL"){
        cost = 10;
      }

     
    }
    cost+=this.pizzas[i].extra;
    total +=cost;
  }
  return total;
}

function Pizza(size, veggies, meats, extra) {
  this.size = size,
  this.veggies = veggies,
  this.meats = meats,
  this.extra = extra
}


// Front-end Logic
var shoppingCart = new ShoppingCart();

function displayPizzaDetails(pizzaToDisplay){
  var pizzaList = $("ul#pizzas");
  var htmlForPizzaInfo = "";
  pizzaToDisplay.pizzas.forEach(function(pizza){
    if(pizza.meats.length == 0 && pizza.veggies.length == 0){
      htmlForPizzaInfo += "<li id=" + pizza.id + ">" + pizza.size + " Pizza" + "</li>";
    } else if(pizza.meats.length > 0 && pizza.veggies.length == 0){
      htmlForPizzaInfo += "<li id=" + pizza.id + ">" + pizza.size +" " + pizza.meats[0]+ " Pizza" +`, ${pizza.meats.length} Meats` +"</li>";
    } else if (pizza.veggies.length > 0 && pizza.meats.length == 0){
      htmlForPizzaInfo += "<li id=" + pizza.id + ">" + pizza.size +" " + pizza.veggies[0]+ " Pizza" + `, ${pizza.veggies.length} Veggies` +"</li>";
    } else if (pizza.veggies.length > 0 && pizza.meats.length > 0){
      htmlForPizzaInfo += "<li id=" + pizza.id + ">" + pizza.size +" " + pizza.meats[0]+ " " +pizza.veggies[0]+ " Pizza" +`, ${pizza.meats.length} Meats` + `, ${pizza.veggies.length} Veggies` + "</li>";
    }
  });
  pizzaList.html(htmlForPizzaInfo);
}

$(document).ready(function(){
  $("p#totalSentence").hide();
  $("button#add-pizza").click(function(){
    event.preventDefault();
    $("p#totalSentence").hide();
    $("ul#pizzas").hide();
    
    var size = $("select#size").val();
    var veggies = [];
    var meats = [];
  
    var total = $("span#total");
    
    $.each($("input[name='veggies']:checked"), function(){
      veggies.push($(this).val())
    });
    $.each($("input[name='meats']:checked"), function(){
      meats.push($(this).val())
    });
    var extra = meats.length*2 + veggies.length*1;
    
    var newPizza = new Pizza(size, veggies, meats, extra);
    shoppingCart.addPizza(newPizza);
    displayPizzaDetails(shoppingCart);
    total.html("$"+ shoppingCart.calculateTotal());
    $("p#totalSentence").fadeIn(1500);
    $("ul#pizzas").fadeIn();
    $("#clear-button").show();

    console.log(size);
    console.log(newPizza);
    console.log(shoppingCart);
    console.log();
    
  })
})