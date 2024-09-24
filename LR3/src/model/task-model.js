import { tasks } from '../mock/task.js';

export default class TasksModel {
 boardtasks = tasks;


 getTasks() {
   return this.boardtasks;
 }

 clearBasket() {
  this._tasks = this._tasks.filter((task) => task.status !== 'basket');
 }
}
