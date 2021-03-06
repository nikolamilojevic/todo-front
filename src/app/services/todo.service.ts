import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { throwError as ObservableThrowError, Observable, of } from 'rxjs';  
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todosUrl = 'http://localhost:8000/api/todos';

  constructor(
    private http: HttpClient,
  ) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl)
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions)
      .pipe(catchError(this.errorHandler))
  }

  deleteTodo (todo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions)
  }

  updateTodo (todo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put<Todo>(url, todo, httpOptions)
  }

  errorHandler(error: HttpErrorResponse) {
    return ObservableThrowError(error || 'Server error')
  }

}

