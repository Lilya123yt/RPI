import { AbstractComponent } from '../framework/view/abstract-component.js';

function createNewTaskTemplate() {
    return (
        `<div><h2>Новая задача</h2>
        <div class="new-task">
            <input type="text" placeholder="Название задачи...">
            <button type="button">+ Добавить</button>
        </div></div>`
    );
}

export default class NewTask extends AbstractComponent {
  #handleClick = null;

  constructor({ onClick }) {
    super();
    this.#handleClick = onClick;
    this.element.querySelector('button').addEventListener('click', this.#clickHandler);
  }

  get template() {
    return createNewTaskTemplate();
  }

  #clickHandler = (evt) => {
    evt.preventDefault();
    this.#handleClick();
  };
}
