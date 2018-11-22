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
    if(!this.todo.status) {
      this.todo.status = 'To be scheduled'
    }
    this.todoService.addTodo( this.todo )
      .subscribe(
        ()=> {
          this.router.navigateByUrl('');
        },
        error => this.errorMsg = error.error.errors);
  }

}
