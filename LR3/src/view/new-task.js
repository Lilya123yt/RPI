import { createElement } from '../framework/render.js';

function createNewTaskTemplate() {
    return (
        `<div><h2>Новая задача</h2>
        <div class="new-task">
            <input type="text" placeholder="Название задачи...">
            <button>+ Добавить</button>
        </div></div>`
    );
}

export default class NewTask {
    getTemplate() {
      return createNewTaskTemplate();
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