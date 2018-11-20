import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos()
  }

  getTodos(): void {
    this.todos = this.todoService.getTodos()
  }

  edit(todo): void {
    this.todoService.editTodo(todo)
  }
  delete(todo): void {
    this.todoService.deleteTodo(todo)
  }

}
