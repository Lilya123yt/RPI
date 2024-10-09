import { AbstractComponent } from '../framework/view/abstract-component.js';

export default class ClearButton extends AbstractComponent {
  constructor() {
    super(); 
  }

  get template() {
    return `<button class="clear-button">Очистить</button>`;
  }

  setClickHandler(callback) {
    this.getElement().addEventListener('click', callback); 
  }
}
