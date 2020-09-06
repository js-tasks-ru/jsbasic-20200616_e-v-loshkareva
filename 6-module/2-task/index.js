import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.card = product;
    let card = document.createElement('div');
    let card__top = document.createElement('div');
    let card__body = document.createElement('div');
    card.className = "card";
    card__top.className = "card__top";
    card__body.className = "card__body";
    card__top.innerHTML = `<img src="/assets/images/products/${this.card.image}" class="card__image" alt="product"><span class="card__price">€${this.card.price.toFixed(2)}</span>`;
    card.appendChild(card__top);
    card__body.innerHTML = `<div class="card__title">${this.card.name}</div>`;


    card.appendChild(card__body);


    let button = document.createElement("button");
    button.className = "card__button";
    button.innerHTML = '<img src="/assets/images/icons/plus-icon.svg" alt="icon">';


    button.onclick = (e) => {
      this.elem.dispatchEvent(
        new CustomEvent("product-add", {
          detail: this.card.id,
          bubbles: true
        }));

    }



    card__body.appendChild(button);
    this.elem = card;
  };

}
