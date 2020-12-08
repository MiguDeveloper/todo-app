export class Todo {
  constructor(descripcionTarea = 'Tarea por default') {
    this.descripcion = descripcionTarea;
    this.id = new Date().getTime();
    this.completado = false;
    this.createdAt = new Date();
  }
}
