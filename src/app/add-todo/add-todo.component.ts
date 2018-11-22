import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  todo = new Todo;
  errorMsg = {};

  constructor(
    private todoService: TodoService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  add(): void {
    this.todo.user_id = parseInt(localStorage.getItem('user_id'));
    if(!this.todo.status) {
      this.todo.status = 'To be scheduled'
    }
    this.todoService.addTodo( this.todo )
      .subscribe(
        ()=> {
          this.router.navigateByUrl('/todos');
        },
        error => this.errorMsg = error.error.errors);
  }

}
