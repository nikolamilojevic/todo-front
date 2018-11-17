import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TODOS } from '../list-todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos = TODOS;
  
  constructor() { }

  ngOnInit() {
  }

  edit(todo): void {
    todo.editable = !todo.editable;
  }
  delete(todo): void {
    var index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

}
