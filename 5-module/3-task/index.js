function initCarousel() {
  let button = document.querySelectorAll('.carousel');
  let buttons = document.querySelectorAll('.carousel__arrow');
  let buttonRight = document.querySelector('.carousel__arrow_right');
  let buttonLeft = document.querySelector('.carousel__arrow_left');
  // на каждый элемент повесить обработчик на стадии перехвата
  let movement = 0;
  let inner = document.querySelectorAll('.carousel__slide');
  let innerContainer = document.querySelector('.carousel__inner');

  let innerWidth = 0;
  //inner.offsetWidth;
  for (let n = 0; n < inner.length; n++) {
    innerWidth += inner[n].offsetWidth;

  }

  let slide = document.querySelector('.carousel__slide');
  let slideWidth = slide.offsetWidth;
  if (movement == 0) {
    buttonLeft.style.display = 'none';
  } else {
    buttonLeft.style.display = '';
  }

  function checkButton() {

    if (event.currentTarget.classList.contains('carousel__arrow_left')) {

      movement -= slideWidth;
    } else {
      movement += slideWidth;
    }

    if (movement == 0) {
      buttonLeft.style.display = 'none';
    } else {
      buttonLeft.style.display = '';
    }
    if (movement >= innerWidth - slideWidth) {
      buttonRight.style.display = 'none';
    } else {
      buttonRight.style.display = '';
    }
    innerContainer.style.transform = `translateX(-${movement}px)`;
  };


  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", checkButton, true);
  }
}
