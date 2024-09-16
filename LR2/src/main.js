import { render, RenderPosition } from './framework/render.js';
import HeaderComponent from './view/header-component.js';
import NewTask from './view/new-task.js';
import AreaTask from './view/area-task.js';
import ListTask from './view/list-task.js';
import Task from './view/task.js';

const bodyContainer = document.querySelector(".body");
const newTask = document.querySelector(".new-task");
const areaTask = document.querySelector(".area-task");

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new NewTask(), newTask, RenderPosition.AFTERBEGIN);
render(new AreaTask(), areaTask, RenderPosition.BEFOREEND);

const listTaskComponent = new ListTask();
render(listTaskComponent, areaTask, RenderPosition.BEFOREEND);

const backlogContainer = listTaskComponent.getElement().querySelector('.backlog .tasks-container');
const inProgressContainer = listTaskComponent.getElement().querySelector('.in-progress .tasks-container');
const doneContainer = listTaskComponent.getElement().querySelector('.done .tasks-container');
const trashContainer = listTaskComponent.getElement().querySelector('.trash .tasks-container');

render(new Task('Выучить JS'), backlogContainer, RenderPosition.BEFOREEND);
render(new Task('Выучить React'), backlogContainer, RenderPosition.BEFOREEND);
render(new Task('Сделать домашку'), backlogContainer, RenderPosition.BEFOREEND);

render(new Task('Выпить смузи'), inProgressContainer, RenderPosition.BEFOREEND);
render(new Task('Попить воды'), inProgressContainer, RenderPosition.BEFOREEND);

render(new Task('Позвонить маме'), doneContainer, RenderPosition.BEFOREEND);
render(new Task('Погладить кота'), doneContainer, RenderPosition.BEFOREEND);

render(new Task('Сходить погулять'), trashContainer, RenderPosition.BEFOREEND);
render(new Task('Прочитать Войну и Мир'), trashContainer, RenderPosition.BEFOREEND);