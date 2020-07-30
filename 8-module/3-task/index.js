export default class Cart {
  cartItems = [];

  // [product: {...}, count: N]
  /*
  {
  product: {
    "name": "Laab kai chicken salad",
    "price": 10,
    "category": "salads",
    "image": "laab_kai_chicken_salad.png",
    "id": "laab-kai-chicken-salad",
    "spiciness": 2
  }
  count; 1
}
  */
  constructor(cartIcon) {
    this.cartIcon = cartIcon;

  }

  addProduct(product) {
let indexElement = this.cartItems.findIndex (item => item.product == product);
if (indexElement != -1) {
     this.cartItems[indexElement].count++;

}
   else {
     this.cartItems.push({
       product: product,
     count: 1 // Количество товаров
     });
   }
   this.onProductUpdate(this.cartItems);
  }



  updateProductCount(productId, amount) {
    let indexElement = this.cartItems.findIndex (item => item.product.id == productId);
    if (indexElement != -1) {
         this.cartItems[indexElement].count = this.cartItems[indexElement].count+amount;
         if (this.cartItems[indexElement].count == 0)
        {this.cartItems.splice(indexElement,1);}}
       else {
         return;
       }
       this.onProductUpdate(this.cartItems);
    //productId= this.cartItems.product.id;
    //console.log(productId);
    //let elem = document.getElementById.this.product.id();



  }

  isEmpty() {
    if (this.cartItems.length==0)
    {
  return true;
  } else {
    return false;
  }

  }

  getTotalCount() {
    let resultTotalCount = this.cartItems.reduce(function(sum, item) {
    return sum + item.count;
  }, 0);
return resultTotalCount;

  }

  getTotalPrice() {
  let resultTotalPrice = this.cartItems.reduce(function(sum, item) {
  return sum + item.product.price* item.count;
}, 0);
return resultTotalPrice ;
  }

  onProductUpdate() {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}
