import ListTask from '../view/list-task.js';
import Task from '../view/task.js';
import AreaTask from '../view/area-task.js';
import { render, RenderPosition } from '../framework/render.js';
import { StatusArray } from '../const.js';
import ClearButton from '../view/clear-button.js';

export default class TasksBoardPresenter {
  tasksBoardComponent = new AreaTask();

  constructor({ boardContainer, tasksModel }) {
    this.boardContainer = boardContainer;
    this.tasksModel = tasksModel;
  }

  init() {
    this.boardTasks = [...this.tasksModel.getTasks()];

    render(this.tasksBoardComponent, this.boardContainer);

    for (const status of StatusArray) {
      const listTask = new ListTask(status);
      render(listTask, this.tasksBoardComponent.getElement());

      const tasksForStatus = this.boardTasks.filter(
        (task) => task.status === status
      );

      const tasksListElement = listTask
        .getElement()
        .querySelector('.tasks__list');

      for (const task of tasksForStatus) {
        const taskComponent = new Task({ task });
        render(taskComponent, tasksListElement);
      }

      if (status === 'basket') {
        const basketContainer = listTask.getElement();

        const clearButtonComponent = new ClearButton();
        clearButtonComponent.setClickHandler(() => {
          this._clearBasketTasks(); 
        });

        render(clearButtonComponent, basketContainer, RenderPosition.BEFOREEND);
      }
    }
  }

  _clearBasketTasks() {
    this.tasksModel.clearBasket();

    this.init();
  }
}
