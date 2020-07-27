import createElement from '../../assets/lib/create-element.js';

export default class CartIcon {
  constructor() {
    this.render();

    this.addEventListeners();
  }

  render() {
    this.elem = createElement('<div class="cart-icon"></div>');
  }

  update(cart) {
    if (!cart.isEmpty()) {
      this.elem.classList.add('cart-icon_visible');

      this.elem.innerHTML = `
        <div class="cart-icon__inner">
          <span class="cart-icon__count">${cart.getTotalCount()}</span>
          <span class="cart-icon__price">€${cart.getTotalPrice().toFixed(2)}</span>
        </div>`;

      this.updatePosition();

      this.elem.classList.add('shake');
      this.elem.addEventListener('transitionend', () => {
        this.elem.classList.remove('shake');
      }, {once: true});

    } else {
      this.elem.classList.remove('cart-icon_visible');
    }
  }

  addEventListeners() {
      document.addEventListener('scroll', () => this.updatePosition());
      window.addEventListener('resize', () => this.updatePosition());
    //this.top = false;

  }

  updatePosition() {
// текущая Y-координата относительно окна + текущая прокрутка
    if (!this.initialTopCoordinate) {
        this.initialTopCoordinate = this.elem.getBoundingClientRect().top + window.pageYOffset;
    }
    //console.log(this.initialTopCoordinate, this.elem.getBoundingClientRect().top, window.pageYOffset);

if (window.pageYOffset > this.initialTopCoordinate) {

  let leftIndent = Math.min(
    document.querySelector('.container').getBoundingClientRect().right + 20,
    document.documentElement.clientWidth - this.elem.offsetWidth - 10
  ) + 'px';

//  console.log(leftIndentdocument.querySelector('.container').getBoundingClientRect().right + 20,document.documentElement.clientWidth - this.elem.offsetWidth - 10);
  Object.assign(this.elem.style, {
    position: 'fixed',
    top: '50px',
    zIndex: 1e3,
    right: '10px',
    left: leftIndent
  });
  //this.elem.dataset.fixed = true;
  //console.log(this.elem.dataset.fixed);
// плавающая корзина
} else {
  Object.assign(this.elem.style, {
    position: '',
    top: '',
    left: '',
    zIndex: ''
  });
}

  // мысли
/*  if (window.pageYOffset < this.initialTopCoordinate) {

    let leftIndent = Math.min(
      document.querySelector('.container').getBoundingClientRect().right + 20,
      document.documentElement.clientWidth - this.elem.offsetWidth - 10
    ) + 'px';
    Object.assign(this.elem.style, {
      position: 'fixed',
      top: '50px',
      zIndex: 1e3,
      right: '10px',
      left: `${leftIndent}px`
    });
    } else {
    Object.assign(this.elem.style, {
      position: '',
      top: '',
      left: '',
      zIndex: ''
    });
  }
*/
  //мысли

//document.querySelector('.container').getBoundingClientRect().right + 20;
//console.log(document.querySelector('.container').getBoundingClientRect());
//document.documentElement.clientWidth - this.elem.offsetWidth - 10;

  }
}
