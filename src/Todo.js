export class Todo {
  constructor(text, id = new Date().getTime()) {
    this.id = id;
    this.text = text;
    this.status = false;
  }
}
