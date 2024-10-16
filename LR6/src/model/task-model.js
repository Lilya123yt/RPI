import { tasks } from '../mock/task.js';

export default class TasksModel {
  #tasks = tasks;
  #observers = [];

  get tasks() {
    return this.#tasks;
  }

  addNewTask(task) {
    this.#tasks.push(task);
    this._notifyObservers();
  }

  updateTaskStatus(taskId, newStatus, index) {
    const taskIndex = this.#tasks.findIndex(task => task.id === Number(taskId));
    if (taskIndex !== -1) {
      const task = this.#tasks[taskIndex]; 
      this.#tasks.splice(taskIndex, 1);
      task.status = newStatus;
      this.#tasks.splice(index, 0, task);
      this._notifyObservers();
    }
  }

  removeStatusForTasks(status) {
    this.#tasks = this.#tasks.filter(task => task.status !== status);
    this._notifyObservers();
  }

  addObserver(observer) {
    this.#observers.push(observer);
  }

  removeObserver(observer) {
    this.#observers = this.#observers.filter(obs => obs !== observer);
  }

  _notifyObservers() {
    for (const observer of this.#observers) {
      observer(); 
    }
  }
}
