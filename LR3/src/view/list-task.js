import { createElement } from '../framework/render.js';
import {StatusLabel} from '../const.js';

function createListTaskTemplate(status) {
  return `<li class="tasks-area__item">
            <h3 class="title tasks-area__title title__${status}">${StatusLabel[status]}</h3>
            <ul class="tasks__list tasks__${status} list-reset"></ul>
          </li>`;
}

export default class ListTask {
  constructor(status) {
    this.status = status;
  }

  getTemplate() {
    return createListTaskTemplate(this.status);
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