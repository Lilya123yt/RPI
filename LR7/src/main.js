import { render, RenderPosition } from './framework/render.js';
import HeaderComponent from './view/header-component.js';
import NewTask from './view/new-task-component.js';
import TasksBoardPresenter from './presenter/tasks-board-presenter.js';
import TasksModel from './model/task-model.js';
import TaskApiService from './tasks-api-service.js';

const END_POINT = 'https://67210d5a98bbb4d93ca740d7.mockapi.io';
const bodyContainer = document.querySelector(".body");
const newTaskContainer = document.querySelector(".new-task");
const areaTaskContainer = document.querySelector(".area-task");

const tasksModel = new TasksModel({
    tasksApiService: new TaskApiService(END_POINT),
});

const tasksBoardPresenter = new TasksBoardPresenter({
    boardContainer: areaTaskContainer,
    tasksModel,
});

tasksBoardPresenter.init();

function handleNewTaskSubmit(taskTitle) {
    tasksBoardPresenter.addNewTask(taskTitle);
}

const newTasks = new NewTask({ onClick: handleNewTaskSubmit });
render(newTasks, newTaskContainer, RenderPosition.AFTERBEGIN);

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);

window.tasksBoardPresenter = tasksBoardPresenter;
