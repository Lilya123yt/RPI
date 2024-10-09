import { AbstractComponent } from '../framework/view/abstract-component.js';

function createTaskTemplate(task) {
  return `<li class="tasks__item">${task.title}</li>`;
}

export default class Task extends AbstractComponent {
  constructor({ task }) {
    super();
    this.task = task;
  }

  get template() { 
    return createTaskTemplate(this.task);
  }
}
