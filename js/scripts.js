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
      if(this.pizza[i].id == id){
        return this.contacts[i];
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
      if(this.pizzas[i].size =="Medium"){
        cost = 5;
      } else if (this.pizzas[i].size =="Large"){
        cost = 7;
      } else if (this.pizzas[i].size =="X-Large"){
        cost = 9;
      }
      total +=cost;
    }
    
  }
  return total;
}

function Pizza(size, veggies, meats) {
  this.size = size,
  this.veggies = veggies,
  this.meats = meats
}


// Front-end Logic
var shoppingCart = new ShoppingCart();

function displayPizzaDetails(pizzaToDisplay){
  var pizzaList = $("ul#pizzas");
  var htmlForPizzaInfo = "";
  pizzaToDisplay.pizzas.forEach(function(pizza){
    if(pizza.meats.length > 0 ){
      htmlForPizzaInfo += "<li id=" + pizza.id + ">" + pizza.size +" " + pizza.meats[0]+ "Pizza" + "</li>";
    }
   
  });
  pizzaList.html(htmlForPizzaInfo);
}

$(document).ready(function(){
  $("p#totalSentence").hide();
  $("button#add-pizza").click(function(){
    event.preventDefault();
    $("p#totalSentence").hide();
    
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
    
    var newPizza = new Pizza(size, veggies, meats);
    shoppingCart.addPizza(newPizza);
    displayPizzaDetails(shoppingCart);
    total.html(shoppingCart.calculateTotal());
    $("p#totalSentence").fadeIn();

    console.log(size);
    console.log(newPizza);
    console.log(shoppingCart);
    console.log();
    
  })
})