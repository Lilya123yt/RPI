import { createElement } from '../framework/render.js';

function createTaskTemplate(task) {
  return `<li class="tasks__item">${task.title}</li>`;
}

export default class Task {
    constructor({task}) {
      this.task = task;
      this.element = null;
    }
  
    getTemplate() {
      return createTaskTemplate(this.task);
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