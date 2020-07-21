import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    let container = document.createElement ('div');
    let ribbon = document.createElement ('div');
    container.className = ('container');
    ribbon.className = ('ribbon');
      let ribbon__inner = document.createElement ('nav');
      ribbon__inner.className = ('ribbon__inner');
    for (let i = 0; i < this.categories.length; i++){
//добавить ribbon__item_active
  ribbon__inner.innerHTML += `<a href="#" class="ribbon__item" data-id=${this.categories[i].id}>${this.categories[i].name}</a>`;
}
//ribbon__inner.firstChild.className= 'ribbon__item ribbon__item_active';
ribbon.appendChild(ribbon__inner);
    this.elem = ribbon;  //let menuCategory = document.createElement ('');//?
    //button
    let buttonLeft = document.createElement("button");
    buttonLeft.className = "ribbon__arrow ribbon__arrow_left ribbon__arrow_visible";
    buttonLeft.innerHTML = '<img src="/assets/images/icons/angle-icon.svg" alt="icon">';



  //console.log(scrollLeft);

    let buttonRight = document.createElement("button");
buttonRight.className = "ribbon__arrow ribbon__arrow_right ribbon__arrow_visible";
buttonRight.innerHTML = '<img src="/assets/images/icons/angle-icon.svg" alt="icon">';
let scrollRight=0;
let scrollLeft=0;

function checkButton() {
  //console.log(event.currentTarget.classList);

  //scrollRight = 0;


  if (event.currentTarget.classList.contains('ribbon__arrow_right')) {
    ribbon__inner.scrollBy(350, 0);
  }
  else {
    ribbon__inner.scrollBy(-350, 0);
  }


}
function scrollCheck(){
  let clientWidth= document.querySelector('.ribbon__inner').clientWidth;
  let scrollWidth= document.querySelector('.ribbon__inner').scrollWidth;
  let scrollLeft = document.querySelector('.ribbon__inner').scrollLeft;


scrollRight = scrollWidth - scrollLeft - clientWidth;
//  console.log(scrollRight, scrollLeft,scrollWidth,clientWidth);
  if (scrollLeft==0) {
  buttonLeft.classList.remove("ribbon__arrow_visible");
} else {
  buttonLeft.classList.add("ribbon__arrow_visible");
}

if (scrollRight < 1) {
buttonRight.classList.remove("ribbon__arrow_visible");
} else {
  buttonRight.classList.add("ribbon__arrow_visible");
}
};
function setActive() {
  for (let i = 0; i < ribbon__items.length; i++) {
    ribbon__items[i].classList.remove("ribbon__item_active");
  }
  if (event.currentTarget.classList.contains('ribbon__item')) {
    event.currentTarget.classList.add('ribbon__item_active');
  }

  ribbon.dispatchEvent(
    new CustomEvent('ribbon-select', { // имя события должно быть именно 'ribbon-select'
  detail: event.currentTarget.dataset.id, // уникальный идентификатора категории из её объекта
  bubbles: true // это событие всплывает - это понадобится в дальнейшем
})
)

}
ribbon__inner.addEventListener("scroll", scrollCheck, true);

buttonLeft.addEventListener("click", checkButton, true);
buttonRight.addEventListener("click", checkButton, true);
//ribbon__inner.addEventListener("click", setActive, true);
let ribbon__items = this.elem.querySelectorAll('.ribbon__item');

for (let i = 0; i < ribbon__items.length; i++) {
  ribbon__items[i].addEventListener("click", setActive, true);
}
// if (!button.classList.contains("ribbon__arrow_visible") {
  // button.classList.add("ribbon__arrow_visible");
  //}






    /*  this.elem.dispatchEvent(

        new CustomEvent("product-add", {
          detail: this.slides[i].id,
          bubbles: true
        }));*/
        //button
    ribbon.appendChild(buttonRight);
    ribbon.appendChild(buttonLeft);
//   container.appendChild(ribbon);
   this.elem = ribbon;  //let menuCategory = document.createElement ('');//?

  }

  //ex
/*  <div class="ribbon">
    <!--Кнопка прокрутки влево-->
    <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>

    <!--Ссылки на категории-->
    <nav class="ribbon__inner">
      <a href="#" class="ribbon__item ribbon__item_active" data-id="">All</a>
      <a href="#" class="ribbon__item" data-id="salads">Salads</a>
      <a href="#" class="ribbon__item" data-id="soups">Soups</a>
      <a href="#" class="ribbon__item" data-id="chicken-dishes">Chicken dishes</a>
      <a href="#" class="ribbon__item" data-id="beef-dishes">Beef dishes</a>
      <a href="#" class="ribbon__item" data-id="seafood-dishes">Seafood dishes</a>
      <a href="#" class="ribbon__item" data-id="vegetable-dishes">Vegetable dishes</a>
      <a href="#" class="ribbon__item" data-id="bits-and-bites">Bits and bites</a>
      <a href="#" class="ribbon__item" data-id="on-the-side ribbon__item_active">On the side</a>
    </nav>

    <!--Кнопка прокрутки вправо-->
    <button class="ribbon__arrow ribbon__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
  </div>*/
  //ex
}
