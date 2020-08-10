import createElement from '../../assets/lib/create-element.js';
import escapeHtml from '../../assets/lib/escape-html.js';

import Modal from '../../7-module/2-task/index.js';

export default class Cart {
  cartItems = []; // [product: {...}, count: N]
  modalBody = {};
  constructor(cartIcon) {
    this.cartIcon = cartIcon;
    this.modal = new Modal();

    this.addEventListeners();
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
       this.onProductUpdate();

       //this.onProductUpdate(this.cartItems);
      }

  updateProductCount(productId, amount) {
    let indexElement = this.cartItems.findIndex (item => item.product.id == productId);
    let productPrice;
    let newQant;

    if (indexElement != -1) {
         newQant = this.cartItems[indexElement].count = this.cartItems[indexElement].count+amount;
         productPrice = this.cartItems[indexElement].product.price;

         if (this.cartItems[indexElement].count == 0)
        {this.cartItems.splice(indexElement,1);}}
       else {
         return;
       }
       this.onProductUpdate(productId,newQant, productPrice);
           //this.onProductUpdate(this.cartItems);
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

  renderProduct(product, count) {
    return createElement(`
    <div class="cart-product" data-product-id="${product.id}">
      <div class="cart-product__img">
        <img src="/assets/images/products/${product.image}" alt="product">
      </div>
      <div class="cart-product__info">
        <div class="cart-product__title">${escapeHtml(product.name)}</div>
        <div class="cart-product__price-wrap">
          <div class="cart-counter">
            <button type="button" class="cart-counter__button cart-counter__button_minus">
              <img src="/assets/images/icons/square-minus-icon.svg" alt="minus">
            </button>
            <span class="cart-counter__count">${count}</span>
            <button type="button" class="cart-counter__button cart-counter__button_plus">
              <img src="/assets/images/icons/square-plus-icon.svg" alt="plus">
            </button>
          </div>
          <div class="cart-product__price">€${product.price.toFixed(2)}</div>
        </div>
      </div>
    </div>`);

    }

  renderOrderForm() {
    return createElement(`<form class="cart-form">
      <h5 class="cart-form__title">Delivery</h5>
      <div class="cart-form__group cart-form__group_row">
        <input name="name" type="text" class="cart-form__input" placeholder="Name" required value="Santa Claus">
        <input name="email" type="email" class="cart-form__input" placeholder="Email" required value="john@gmail.com">
        <input name="tel" type="tel" class="cart-form__input" placeholder="Phone" required value="+1234567">
      </div>
      <div class="cart-form__group">
        <input name="address" type="text" class="cart-form__input" placeholder="Address" required value="North, Lapland, Snow Home">
      </div>
      <div class="cart-buttons">
        <div class="cart-buttons__buttons btn-group">
          <div class="cart-buttons__info">
            <span class="cart-buttons__info-text">total</span>
            <span class="cart-buttons__info-price">€${this.getTotalPrice().toFixed(
              2
            )}</span>
          </div>
          <button type="submit" class="cart-buttons__button btn-group__button button">order</button>
        </div>
      </div>
    </form>`);
  }

  renderModal() {
let modalBody = createElement('<div></div>');
    for (let i = 0; i < this.cartItems.length; i++) {
  modalBody.appendChild(this.renderProduct(this.cartItems[i].product, this.cartItems[i].count));

  }
  modalBody.appendChild(this.renderOrderForm());

  //
  let form = modalBody.querySelector('.cart-form');
  form.addEventListener('submit', () => this.onSubmit(event));
  //



    this.modal.setTitle("Your order");
    this.modal.setBody(modalBody);
    this.modalBody = modalBody;
    this.modal.open();
    let buttons = modalBody.querySelectorAll('.cart-counter__button');
    for (let i=0; i < buttons.length; i++){
      buttons[i].addEventListener('click',() =>{
        let parentNode = buttons[i].parentNode.parentNode.parentNode.parentNode;
        let productId = parentNode.dataset.productId;
        let amount = 0;
        if (buttons[i].classList.contains('cart-counter__button_minus')) {
         amount= -1;

        } else {
amount= 1;        }


      this.updateProductCount(productId, amount);
      //modal.close();


  }


);
    }


  }

  onProductUpdate(productId,amount, price) {
      if (document.body.classList.contains('is-modal-open')) {

      if (this.cartItems.length) {
          let modalBody = this.modalBody;//.querySelector('.modal__body');//корневой элемент тела модального окна, который мы получили, вызвав метод renderModal
        // Элемент, который хранит количество товаров с таким productId в корзине
        let productCount = modalBody.querySelector(`[data-product-id="${productId}"] .cart-counter__count`);
        // Элемент с общей стоимостью всех единиц этого товара
        let productPrice = modalBody.querySelector(`[data-product-id="${productId}"] .cart-product__price`);
        // Элемент с суммарной стоимостью всех товаров
        let infoPrice = modalBody.querySelector(`.cart-buttons__info-price`);
        if (amount==0) {
          modalBody.querySelector(`[data-product-id="${productId}"]`).remove();
        } else {
          productCount.innerHTML = amount ; //новое количество единиц товара
          productPrice.innerHTML = `€${(price*amount).toFixed(2)}`;
        }
        //Изменение этих данных:

        infoPrice.innerHTML = `€${this.getTotalPrice().toFixed(2)}`;

      } else {
        this.modal.close();
      }

    }
    this.cartIcon.update(this);
  }

  onSubmit(event) {
      event.preventDefault();
    let formData = new FormData(document.body.querySelector('.cart-form'));

let sendData = async () =>  {
  let buttonOrder= document.querySelector('[type="submit"]');

    buttonOrder.classList.add('is-loading');

      // запрашиваем JSON с данными пользователя
      let response = await fetch('https://httpbin.org/post', {
        method: 'POST',
        body: formData
      });

      if (response) {

        this.modal.setTitle("Success!");
        this.modal.setBody(createElement(`<div class="modal__body-inner">
  <p>
    Order successful! Your order is being cooked :) <br>
    We’ll notify you about delivery time shortly.<br>
    <img src="/assets/images/delivery.gif">
  </p>
</div>
`))
      }

      this.cartItems=[];
    }


    sendData();
    return;

}

  addEventListeners() {
    this.cartIcon.elem.onclick = () => this.renderModal();
  }

}
