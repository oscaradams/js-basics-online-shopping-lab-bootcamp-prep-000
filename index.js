var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  
  
  var list = {};
  var itemName = item;
  var price = Math.floor(Math.random() *101);
  
  list['itemName'] = itemName;
  list[`itemPrice`] = price;
  
  cart.push(list);
  
  return `${itemName} has been added to your cart.`
}

function viewCart() {
  var i = cart.length;
  var nameList = [];
  while(i>0){
    --i
    nameList.unshift(` ${cart[i]['itemName']} at $${cart[i]['itemPrice']}`)
    
  }
  if(cart.length === 0 ){
    return 'Your shopping cart is empty.'
  }
  if(cart.length === 1){
    return `In your cart, you have ${cart[0]['itemName']} at $${cart[0]['itemPrice']}.`
  }
  else{

    return `In your cart, you have${nameList.slice(0, nameList.length - 1)}, and${nameList.pop()}.`
  }
}

function total() {
  var p = Number();
  var t = cart.length;
  do{--t
    p += cart[t]['itemPrice']
  }
  while(0<t)
  return p
  
}



function removeFromCart(item) {
  for(var i = 0; i<cart.length; i++){
    if(item === cart[i]['itemmName']){
      cart.slice(-i)
      return cart
    }
  }
  
}

function placeOrder(cardNumber) {
  // write your code here
}
