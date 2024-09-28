const productField = () =>{
  const productName = document.getElementById('product-name');
  const productQuantity = document.getElementById('product-quantity');
  const product = productName.value;
  const quantity = productQuantity.value;
  productName.value ='';
  productQuantity.value='';

  console.log(product, quantity);

  displayProduct(product, quantity);

  saveProductToLocalStore(product, quantity);
}

const displayProduct = (p, q) =>{
  const ul = document.getElementById('productDisplay');
  const li = document.createElement('li');
  li.innerText = `${p}: ${q}`;
  ul.appendChild(li);
}

const getStoredShoppingCart = () =>{
  let cart = {};
  const storedCart = localStorage.getItem('cart');
  if(storedCart){
    cart = JSON.parse(storedCart);
  }
  return cart;
}
const saveProductToLocalStore = (product, quantity) =>{
  const cart = getStoredShoppingCart();
  cart[product] = quantity;
  const cartString = JSON.stringify(cart);
  localStorage.setItem('cart', cartString);
}


const displayProductFromLocalStorage = () =>{
  const saveCart = getStoredShoppingCart();
  console.log(saveCart);

  for(const product in saveCart){
    const quantity = saveCart[product];
    console.log(product, quantity);
    displayProduct(product, quantity);
  }
}

displayProductFromLocalStorage();