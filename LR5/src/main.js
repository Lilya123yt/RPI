import { render, RenderPosition } from './framework/render.js';
import HeaderComponent from './view/header-component.js';
import NewTask from './view/new-task-component.js';
import TasksBoardPresenter from './presenter/tasks-board-presenter.js';
import TasksModel from './model/task-model.js';

const bodyContainer = document.querySelector(".body");
const newTaskContainer = document.querySelector(".new-task");
const areaTaskContainer = document.querySelector(".area-task");

const tasksModel = new TasksModel();

const tasksBoardPresenter = new TasksBoardPresenter({
    boardContainer: areaTaskContainer,
    tasksModel,
});

tasksBoardPresenter.init();

function handleNewTaskSubmit() {
    const taskInput = document.querySelector('.new-task input');
    const taskTitle = taskInput.value.trim();

    if (!taskTitle) {
        return;
    }

    tasksBoardPresenter.addTask(taskTitle);

    taskInput.value = '';
}

const newTasks = new NewTask({ onClick: handleNewTaskSubmit });
render(newTasks, newTaskContainer, RenderPosition.AFTERBEGIN);

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
