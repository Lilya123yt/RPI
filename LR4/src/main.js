import { render, RenderPosition } from './framework/render.js';
import HeaderComponent from './view/header-component.js';
import NewTask from './view/new-task-component.js';
import AreaTask from './view/area-task-component.js';
import ClearButton from './view/clear-button.js'; 
import TasksBoardPresenter from './presenter/tasks-board-presenter.js';
import TasksModel from './model/task-model.js';

const bodyContainer = document.querySelector(".body");
const newTask = document.querySelector(".new-task");
const areaTask = document.querySelector(".area-task");

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new NewTask(), newTask, RenderPosition.AFTERBEGIN);

const tasksModel = new TasksModel();

const tasksBoardPresenter = new TasksBoardPresenter({
    boardContainer: areaTask,
    tasksModel,
});

tasksBoardPresenter.init();

const clearButton = new ClearButton();
const basketContainer = areaTask.querySelector('.tasks__basket');
render(clearButton, basketContainer, RenderPosition.AFTEREND); 

clearButton.setClickHandler(() => {
    tasksModel.clearBasket(); 
    tasksBoardPresenter.init(); 
});
