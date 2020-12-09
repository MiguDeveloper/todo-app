import { Todo } from './todo.class';

export class TodoList {
  constructor() {
    this.cargarLocalStorage();
  }

  agregarTarea(tarea) {
    this.tareas.push(tarea);
    this.guardarLocalStorage();
  }

  eliminarTarea(id) {
    const idx = this.tareas.findIndex((tarea) => tarea.id == id);
    this.tareas.splice(idx, 1);
    this.guardarLocalStorage();
  }

  marcarCompletado(id) {
    this.tareas.find((tarea) =>
      tarea.id == id ? (tarea.completado = !tarea.completado) : false
    );
    this.guardarLocalStorage();
  }

  borrarCompletados() {
    this.tareas = this.tareas.filter((tarea) => !tarea.completado);
    this.guardarLocalStorage();
  }

  guardarLocalStorage() {
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }

  cargarLocalStorage() {
    const tareasLocal = localStorage.getItem('tareas');
    this.tareas = tareasLocal ? JSON.parse(tareasLocal) : [];

    this.tareas = this.tareas.map((tarea) => Todo.fromJson(tarea));
  }
}
