// Back-end Logic
function ShoppingCart() {
  this.pizzas = [];
  this.currentId = 0;
}

ShoppingCart.prototype.addPizza = function (pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

ShoppingCart.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

ShoppingCart.prototype.findPizza = function (id) {
  for (var i = 0; i < this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].id == id) {
        return this.pizzas[i];
      }
    }
  };
  return false;
}

ShoppingCart.prototype.deletePizza = function (id) {
  for (var i = 0; i < this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].id == id) {
        delete this.pizzas[i];
        return true;
      }
    }
  };
  return false;
}

ShoppingCart.prototype.calculateTotal = function () {
  var total = 0;
  for (var i = 0; i < this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].size == "MED") {
        cost = 6;
      } else if (this.pizzas[i].size == "LG") {
        cost = 8;
      } else if (this.pizzas[i].size == "XL") {
        cost = 10;
      }


    }
    cost += this.pizzas[i].extra;
    total += cost;
  }
  return total;
}

function Pizza(size, veggies, meats, extra) {
  this.size = size,
    this.veggies = veggies,
    this.meats = meats,
    this.extra = extra
}


