function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza={} ;
    pizza.crustType=crustType;
    pizza.sauceType=sauceType;
    pizza.cheeses=cheeses;
    pizza.toppings=toppings;

    return pizza;
}
var pizza1= pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]) ;
console.log(pizza1);
var pizza2 =pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);
var pizza3= pizzaOven("bamboucha", 'traditional',['mozzarella',"slice"],["escalop","omlette"]);
console.log(pizza3);
var pizza4= pizzaOven("Normal", 'special',['mozzarella',"slice"],["shawarma","oeuf", "olive", "onion"]);
console.log(pizza4);

var arraypizza=[pizza1,pizza2,pizza3,pizza4];
// random pizza 
function randompizza(pizzaArray){
    var pizza = pizzaArray[Math.floor(Math.random()*pizzaArray.length)];
    console.log(pizza);
    return pizza;
}
var piz=randompizza(arraypizza);
