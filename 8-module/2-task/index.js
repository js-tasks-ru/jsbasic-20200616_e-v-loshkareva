import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
    this.render(this.products);

  //  console.log(this.filters);
  }
  updateFilter(yui) {
    let filteredProducts = this.products.concat();

    //this.render(this.products);
    for (let key in yui) {
          this.filters[key] = yui[key];
    }
    //console.log(this.filters);
    //let number = 0;
    for (let i = 0; i < filteredProducts.length; i++) {
      //  console.log(this.product[i]);
      //let id = this.products[i].id;
      let status = "flex";

      if (filteredProducts[i].nuts == this.filters.noNuts && filteredProducts[i].nuts && this.filters.noNuts) status = "none";
      if (filteredProducts[i].vegeterian !== this.filters.vegeterianOnly && !filteredProducts[i].vegeterian && this.filters.vegeterianOnly) status = "none";
      if (filteredProducts[i].category !== this.filters.category && this.filters.category) status = "none";
      if (filteredProducts[i].spiciness > this.filters.maxSpiciness) status = "none";

      if ( status != "flex") filteredProducts[i] = false;

    }

    this.render(filteredProducts)
  }

  render(products) {
    //let output ="";

    if (!this.elem) this.elem = createElement(`
      <div class="products-grid">
        <div class="products-grid__inner">
        </div>
      </div>
    `);
    this.elem.querySelector('.products-grid__inner').innerHTML= '';
    for (let i = 0; i < products.length; i++) {


      if (products[i])
      {
        let card = new ProductCard(products[i]);
        this.elem.querySelector('.products-grid__inner').appendChild(card.elem);
      }
      /*
      output = output +
        `<div class="card" id="${products[i].id}">
      <div class="card__top">
        <img src="/assets/images/products/${products[i].image}" class="card__image" alt="product">
        <span class="card__price">€${products[i].price.toFixed(2)}</span>
      </div>
      <div class="card__body">
        <div class="card__title">${products[i].name}</div>
      <button type="button" class="card__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>
    ` ;
    */
    }


    //this.elem.querySelector('.products-grid__inner').innerHTML = output;

  
  }

}
