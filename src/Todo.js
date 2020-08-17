export class Todo {
  constructor(title, id = new Date().getTime()) {
    this.id = id;
    this.title = title;
    this.completed = false;
  }
}
