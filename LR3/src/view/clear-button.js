import { createElement } from '../framework/render.js';

export default class ClearButton {
  constructor() {
    this._element = null;
    this._callback = null; 
  }

  getTemplate() {
    return `<button class="clear-button">Очистить</button>`;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  setClickHandler(callback) {
    this._callback = callback;
    this.getElement().addEventListener('click', this._callback);
  }
}
