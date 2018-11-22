import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  
  constructor(
    private todoService: TodoService,
    private userService: UserService) 
    { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos()
        .subscribe(todos => this.todos = todos);
  }

  edit(todo): void {
    todo.editable = true;
  }
  save(todo): void {
    this.todoService.updateTodo(todo)
     .subscribe();
    todo.editable = false;
  }
  delete(todo): void {
    var sure = confirm('Are you sure?');
    if(sure) {
      this.todos = this.todos.filter(t => t !== todo);
      this.todoService.deleteTodo(todo)
      .subscribe();
    }
  }
  logout(): void {
    this.userService.logout()
  }

}
