import { AbstractComponent } from '../framework/view/abstract-component.js';

export default class ClearButton extends AbstractComponent {
  #isDisabled = false;

  constructor(isDisabled) {
    super(); 
    this.#isDisabled = isDisabled;
  }

  get template() {
    return `<button class="clear-button" ${this.#isDisabled ? 'disabled' : ''}>Очистить</button>`;
  }

  setClickHandler(callback) {
    this.element.addEventListener('click', (evt) => {
        if (this.#isDisabled) {
            evt.preventDefault(); // Прерываем действие при отключенной кнопке
            return;
        }
        callback(evt); // Вызываем обработчик только если кнопка активна
    });
  }

  setDisabled(isDisabled) {
    this.#isDisabled = isDisabled;
    this.element.disabled = isDisabled;
  }
}
