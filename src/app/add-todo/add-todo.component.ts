import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  newTodo = {};

  constructor(
    private todoService: TodoService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  add(newTodo): void {
    if(!newTodo.status) {
      newTodo.status = 'To be scheduled'
    }
    this.todoService.addTodo( newTodo )
      .subscribe(()=> {
        this.router.navigateByUrl('');
      });
  }

}
