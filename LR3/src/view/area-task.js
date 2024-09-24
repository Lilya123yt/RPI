import { createElement } from '../framework/render.js';

function createAreaTaskTemplate() {
  return `<div class="task-area">
        </div>`;
}

export default class AreaTask {
  getTemplate() {
    return createAreaTaskTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}