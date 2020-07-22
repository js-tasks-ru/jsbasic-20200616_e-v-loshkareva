import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.render();
  }

  render() {
    this.elem = createElement(`
      <div class="modal">
        <!--Прозрачная подложка перекрывающая интерфейс-->
        <div class="modal__overlay"></div>

        <div class="modal__inner">
          <div class="modal__header">
            <!--Кнопка закрытия модального окна-->
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>

            <h3 class="modal__title">
            </h3>
          </div>

          <div class="modal__body">
          </div>
        </div>

      </div>
        `);

        this.elem.querySelector('.modal__close').addEventListener('click',this.close,true);

        document.addEventListener('keydown', (event) => {

          if (event.code == 'Escape' && document.body.classList.contains('is-modal-open')) {
            this.close();
          }
        },true);

      }

      close(){

        if (!(document.body.querySelector('.modal')) return;
        document.body.querySelector('.modal').remove();
        document.body.classList.toggle('is-modal-open');
      }

      open() {
        //добавляем тут на страницу, я хз надо добавлять в ".container" или просто в конец
        document.body.appendChild(this.elem);
        document.body.classList.toggle('is-modal-open');


      }
      setTitle(title) {
        //тут заголовок меняем
        this.elem.querySelector('.modal__title').innerHTML = title;
      }
      setBody(body) {
        //  document.body.appendChild( document.createElement( 'div' ) )
        this.elem.querySelector('.modal__body').appendChild(body);
        //тут содержимое меняем
      }

}
