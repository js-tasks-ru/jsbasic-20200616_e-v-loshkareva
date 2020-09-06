import Carousel from '../../6-module/3-task/index.js';
import slides from '../../6-module/3-task/slides.js';

import RibbonMenu from '../../7-module/1-task/index.js';
import categories from '../../7-module/1-task/categories.js';

import StepSlider from '../../7-module/4-task/index.js';
import ProductsGrid from '../../8-module/2-task/index.js';

import CartIcon from '../../8-module/1-task/index.js';
import Cart from '../../8-module/4-task/index.js';

export default class Main {

  constructor() {

  }

  async render() {
    
    let carousel = new Carousel(slides);
    let containerElement = document.body.querySelector('[data-carousel-holder]');
    containerElement.append(carousel.elem);

    let ribbon = new RibbonMenu(categories);
    let container = document.querySelector('[data-ribbon-holder]');
    container.append(ribbon.elem);



    let stepSlider = new StepSlider({
      steps: 5,
      value: 3
    });

    let holder = document.querySelector('[data-slider-holder]');
    holder.append(stepSlider.elem);


    let cartIcon = new CartIcon();
    let cartIconHolder = document.querySelector('[data-cart-icon-holder]');
    cartIconHolder.append(cartIcon.elem);

    let cart = new Cart(cartIcon);

    let prodArray = await fetch('products.json')
      .then(response => response.json())

    let productsGrid = new ProductsGrid(prodArray);
    let productGridHolder = document.querySelector('[data-products-grid-holder]');
    document.querySelector('.products-grid').remove();
    productGridHolder.append(productsGrid.elem);

    productsGrid.updateFilter({
      noNuts: document.getElementById('nuts-checkbox').checked,
      vegeterianOnly: document.getElementById('vegeterian-checkbox').checked,
      maxSpiciness: stepSlider.value,
      category: ribbon.value
    });

    document.body.addEventListener('product-add', function(e) {

      for (let i = 0; i < prodArray.length; i++) {
        let chosenProduct = prodArray[i];
        if (e.detail == chosenProduct.id) {
          cart.addProduct(chosenProduct);
        }
      }
    });

    document.addEventListener('slider-change', function(s) {
      productsGrid.updateFilter({
        maxSpiciness: s.detail // значение остроты из события 'slider-change'
      });
    });

    document.addEventListener('ribbon-select', function(r) {
      productsGrid.updateFilter({
        category: r.detail // категория из события 'ribbon-select'
      });
    });

    document.addEventListener('change', () => {
      productsGrid.updateFilter({
        noNuts: document.getElementById('nuts-checkbox').checked,
        vegeterianOnly: document.getElementById('vegeterian-checkbox').checked
      })
    });

  }
}
