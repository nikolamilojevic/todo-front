import { Injectable } from '@angular/core';
import { TODOS } from '../list-todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos() {
    return TODOS;
  }

}
