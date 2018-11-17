import { Component, OnInit } from '@angular/core';
import { TODOS } from '../list-todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  newTodo = {};
  todos = TODOS;

  constructor() { }

  ngOnInit() {
  }

  add(newTodo): void {
    newTodo.id = this.todos[this.todos.length - 1].id + 1;
    this.todos.push(newTodo)
  }

}
