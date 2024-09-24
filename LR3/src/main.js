import { render, RenderPosition } from './framework/render.js';
import HeaderComponent from './view/header-component.js';
import NewTask from './view/new-task.js';
import AreaTask from './view/area-task.js';
import TasksBoardPresenter from './presenter/tasks-board-presenter.js';
import TasksModel from './model/task-model.js';

const bodyContainer = document.querySelector(".body");
const newTask = document.querySelector(".new-task");
const areaTask = document.querySelector(".area-task");

// Рендерим заголовок и компонент для новой задачи
render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new NewTask(), newTask, RenderPosition.AFTERBEGIN);

// Инициализируем модель задач
const tasksModel = new TasksModel();

// Инициализируем TasksBoardPresenter, который отвечает за рендеринг задач и колонок
const tasksBoardPresenter = new TasksBoardPresenter({
    boardContainer: areaTask,
    tasksModel,
});

// Запускаем презентер
tasksBoardPresenter.init();
