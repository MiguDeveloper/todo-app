export class Todo {
  // usaremos este metodo estatico para retornar una instancia
  static fromJson({ id, descripcion, completado, createdAt }) {
    const tempTarea = new Todo(descripcion);
    tempTarea.id = id;
    tempTarea.completado = completado;
    tempTarea.createdAt = createdAt;

    return tempTarea;
  }

  constructor(descripcionTarea = 'Tarea por default') {
    this.descripcion = descripcionTarea;
    this.id = new Date().getTime();
    this.completado = false;
    this.createdAt = new Date();
  }

  // metodo para probar el retorno de una instancia
  imprimirClase() {}
}
