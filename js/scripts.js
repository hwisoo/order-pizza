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

function Pizza(size, toppings) {
  this.size = size,
  this.toppings = []
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

// Front-end Logic