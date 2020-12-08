import { Todo } from '../clases/todo.class';
import { tareas } from '../index';

const ulTareas = document.querySelector('.todo-list');
const inputNewTarea = document.querySelector('.new-todo');

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
    console.log(tareas);
  }
});
