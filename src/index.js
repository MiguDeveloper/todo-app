import './style.css';
import { Todo } from './clases/todo.class';
import { TodoList } from './clases/todo-list.class';
import * as componentes from './js/componentes';

export const tareas = new TodoList();

tareas.tareas.forEach((tarea) => {
  componentes.crearTarea(tarea);
});
componentes.getNoCompletadas();
