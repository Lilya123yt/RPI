import { AbstractComponent } from '../framework/view/abstract-component.js';

function createNewTaskTemplate() {
    return (
        `<div><h2>Новая задача</h2>
        <div class="new-task">
            <input type="text" placeholder="Название задачи...">
            <button>+ Добавить</button>
        </div></div>`
    );
}

export default class NewTask extends AbstractComponent {
  get template() {
    return createNewTaskTemplate();
  }
}