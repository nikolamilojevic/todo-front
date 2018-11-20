import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { AddTodoComponent } from './add-todo/add-todo.component';

const routes: Routes = [
  { path: 'add', component: AddTodoComponent },
  { path: '',  
    data: {
      name: 'home'
    }, 
    component: TodosComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
