import ListTask from '../view/list-task-component.js';
import Task from '../view/task-component.js';
import ClearButton from '../view/clear-button.js';
import AreaTask from '../view/area-task-component.js';
import { render, RenderPosition } from '../framework/render.js';
import { Status, StatusArray, StatusLabel } from '../const.js';
import TaskPresenter from './task-presenter.js';
import NoTaskComponent from '../view/task-no-component.js';

export default class TasksBoardPresenter {
  #boardContainer = null;
  #tasksModel = null;
  #taskPresenter = null;

  #tasksBoardComponent = new AreaTask();
  #clearButtonComponent = null;

  constructor({ boardContainer, tasksModel }) {
    this.#boardContainer = boardContainer;
    this.#tasksModel = tasksModel;
    this.#taskPresenter = new TaskPresenter({ tasksModel: this.#tasksModel });

    this.#tasksModel.addObserver(this.#handleEvent);
  }

  init() {
    this.#renderBoard();
    this.#renderTasksList();
    this.#renderBasketList(); 
  }

  addTask(taskTitle) {
    this.#taskPresenter.addTask(taskTitle);
  }

  #handleEvent = () => {
    this.#clearBoard();
    this.#renderTasksList();
    this.#renderBasketList(); 
  };

  #clearBoard() {
    this.#tasksBoardComponent.element.innerHTML = "";
  }

  #renderBoard() {
    render(this.#tasksBoardComponent, this.#boardContainer);
  }

  #renderTasks(task, container) {
    const taskComponent = new Task({ task });
    render(taskComponent, container);
  }

  #renderTasksList() {
    const noStatusInBasket = StatusArray.filter(
      (status) => status !== Status.BASKET
    );
  
    for (const status of noStatusInBasket) {
      const listTask = new ListTask({
        status,
        label: StatusLabel[status],
        onTaskDrop: this.#handleTaskDrop.bind(this), 
      });
  
      listTask.element.setAttribute("data-status", status);
      render(listTask, this.#tasksBoardComponent.element);
  
      const tasksStatus = this.#taskPresenter.getTasksByStatus(status);
      const listElement = listTask.element.querySelector(".tasks__list");
  
      for (const task of tasksStatus) {
        this.#renderTasks(task, listElement);
      }
    }
  }

  #renderBasketList() {
    const status = Status.BASKET;
    const listTask = new ListTask({
      status,
      label: StatusLabel[status],
      onTaskDrop: this.#handleTaskDrop.bind(this), 
    });
  
    listTask.element.setAttribute("data-status", status);
  
    if (!this.#boardContainer.querySelector('[data-status="basket"]')) {
      render(listTask, this.#tasksBoardComponent.element);
    }
  
    const tasksStatus = this.#taskPresenter.getTasksByStatus(status);
    const listElement = listTask.element.querySelector(".tasks__list");
  
    if (tasksStatus.length > 0) {
      for (const task of tasksStatus) {
        this.#renderTasks(task, listElement);
      }
      this.#renderClearButton(listTask.element);
    } else {
      this.#renderNoTasksMessage(listTask.element);
    }
  }
  

  #renderClearButton(container) {
    const isDisabled = false;
    this.#clearButtonComponent = new ClearButton(isDisabled);
    this.#clearButtonComponent.setClickHandler(this.#buttonClick);
    render(this.#clearButtonComponent, container);
  }

  #renderNoTasksMessage(container) {
    const noTaskComponent = new NoTaskComponent();
    render(noTaskComponent, container, RenderPosition.BEFOREEND);
  }

  #buttonClick = () => {
    this.#tasksModel.removeStatusForTasks(Status.BASKET);
    this.#clearBoard();
    this.#renderTasksList();
    this.#renderBasketList(); 
  };

  #handleTaskDrop(taskId, newStatus, index) {
    this.#tasksModel.updateTaskStatus(Number(taskId), newStatus, index);
  }
}
