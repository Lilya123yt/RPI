import { tasks } from '../mock/task.js';

export default class TasksModel {
 #boardtasks = tasks;


 getTasks() {
   return this.#boardtasks;
 }

 clearBasket() {
  this.#boardtasks = this.#boardtasks.filter((task) => task.status !== 'basket');
 }
}
