import { Todo } from '../clases/todo.class';
import { tareas } from '../index';

const ulTareas = document.querySelector('.todo-list');
const inputNewTarea = document.querySelector('.new-todo');
const btnCompleted = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

export const crearTarea = (tarea) => {
  const htmlTarea = `
  <li class="${tarea.completado ? 'completed' : ''}" data-id="${tarea.id}">
						<div class="view">
							<input class="toggle" type="checkbox" ${tarea.completado ? 'checked' : ''}>
							<label>${tarea.descripcion}</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
          </li>`;

  const div = document.createElement('div');
  div.innerHTML = htmlTarea;
  ulTareas.append(div.firstElementChild);

  return div.firstElementChild;
};

inputNewTarea.addEventListener('keyup', (event) => {
  const text = event.target.value;
  if (event.key === 'Enter' && text.length > 0) {
    const tarea = new Todo(text);
    crearTarea(tarea);
    tareas.agregarTarea(tarea);
    inputNewTarea.value = '';
  }
});

ulTareas.addEventListener('click', (event) => {
  const nombreElemento = event.target.localName; // input, label, button
  const todoElemento = event.target.parentElement.parentElement;
  const todoId = todoElemento.getAttribute('data-id');
  if (nombreElemento.includes('input')) {
    tareas.marcarCompletado(todoId);
    todoElemento.classList.toggle('completed');
  } else if (nombreElemento.includes('button')) {
    tareas.eliminarTarea(todoId);
    ulTareas.removeChild(todoElemento);
  }
});

btnCompleted.addEventListener('click', () => {
  tareas.borrarCompletados();

  // borramos de abajo hacia arriba
  for (let idx = ulTareas.children.length - 1; idx >= 0; idx--) {
    const element = ulTareas.children[idx];
    if (element.classList.contains('completed')) {
      ulTareas.removeChild(element);
    }
  }
});

ulFiltros.addEventListener('click', (event) => {
  const filtro = event.target.text;
  if (!filtro) {
    return;
  }

  anchorFiltros.forEach((element) => {
    element.classList.remove('selected');
  });

  event.target.classList.add('selected');

  for (const elemento of ulTareas.children) {
    elemento.classList.remove('hidden');
    const completado = elemento.classList.contains('completed');

    switch (filtro) {
      case 'Pendientes':
        if (completado) {
          elemento.classList.add('hidden');
        }
        break;
      case 'Completados':
        if (!completado) {
          elemento.classList.add('hidden');
        }
        break;
      default:
        break;
    }
  }
});
