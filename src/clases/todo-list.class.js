export class TodoList {
  constructor() {
    this.tareas = [];
  }

  agregarTarea(tarea) {
    this.tareas.push(tarea);
  }

  eliminarTare(id) {}

  marcarCompletado(id) {}

  borrarCompletador() {}
}
