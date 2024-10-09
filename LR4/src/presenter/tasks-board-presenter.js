import ListTask from '../view/list-task-component.js';
import Task from '../view/task-component.js';
import AreaTask from '../view/area-task-component.js';
import { render, RenderPosition } from '../framework/render.js';
import { StatusArray } from '../const.js';

export default class TasksBoardPresenter {
  #boardContainer = null;
  #tasksModel = null;
  #tasksBoardComponent = new AreaTask();
  #boardTasks = [];

  constructor({ boardContainer, tasksModel }) {
    this.#boardContainer = boardContainer;
    this.#tasksModel = tasksModel;
  }

  init() {
    this.#renderBoard();
  }

  #renderBoard() {
    this.#boardTasks = this.#tasksModel.getTasks(); 
    render(this.#tasksBoardComponent, this.#boardContainer);
    
    for (const status of StatusArray) {
      const listTask = new ListTask(status);
      render(listTask, this.#tasksBoardComponent.element); 

      const tasksStatus = this.#boardTasks.filter(
        (task) => task.status === status
      );

      const listElement = listTask.element.querySelector(".tasks__list"); 

      for (const task of tasksStatus) {
        const taskComponent = new Task({ task });
        render(taskComponent, listElement);
      }
    }
  }
}
