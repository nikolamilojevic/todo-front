import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  todos = [
    { id: 1, description: 'Make your bed', status: 'null', editable: false },
    { id: 2, description: 'Make breakfast', status: 'null', editable: false },
    { id: 3, description: 'Walk the dog', status: 'null', editable: false },
    { id: 4, description: 'Buy bread', status: 'null', editable: false },
    { id: 5, description: 'Buy eggs', status: 'null', editable: false },
    { id: 6, description: 'Call landlord', status: 'null', editable: false },
  ];

  getTodos() {
    return this.todos;
  }

  addTodo(todo) {
    todo.id = this.todos[this.todos.length - 1].id + 1;
    this.todos.push(todo);
  }

  editTodo(todo) {
    todo.editable = !todo.editable;
  }

  deleteTodo(todo) {
    var index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

}
