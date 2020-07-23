import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({
    steps,
    value = 0
  }) {
    this.steps = steps;
    this.value = value;
    this.render();
    //  this.createCarusel();

  }

  render() {
    this.elem = createElement(`
      <div class="slider">

        <!--Ползунок слайдера с активным значением-->
        <div class="slider__thumb" style="left: 0%;">
          <span class="slider__value">0</span>
        </div>

        <!--Заполненная часть слайдера-->
        <div class="slider__progress" style="width: 0%;"></div>

        <!--Шаги слайдера-->
        <div class="slider__steps">

        </div>
      </div>
    `);
    this.sliderStepsCreate();
  };


  sliderStepsCreate() {
    for (let i = 0; i < this.steps; i++) {
      let newSpan = document.createElement('span');
      if (i == 0) {
        this.elem.querySelector('.slider__value').innerHTML = 0;
        newSpan.classList.add('slider__step-active');
      }

      this.elem.querySelector('.slider__steps').appendChild(newSpan);
    }

    let spans = this.elem.querySelector('.slider__steps').querySelectorAll("span");
    this.elem.addEventListener("click", () => {

      for (let i = 0; i < spans.length; i++) {
        spans[i].classList.remove('slider__step-active');
      }
      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth;
      let segments = this.steps - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);
      this.elem.querySelector('.slider__value').innerHTML = this.value = value;
      spans[value].classList.add('slider__step-active');
      let valuePercents = value / segments * 100;
      let thumb = this.elem.querySelector('.slider__thumb');
      let progress = this.elem.querySelector('.slider__progress');
      thumb.style.left = `${valuePercents}%`;
      progress.style.width = `${valuePercents}%`;

      this.elem.dispatchEvent(
        new CustomEvent('slider-change', { // имя события должно быть именно 'slider-change'
          detail: this.value, // значение 0, 1, 2, 3, 4
          bubbles: true // событие всплывает - это понадобится в дальнейшем

        }));




    }, true);


  }




}
