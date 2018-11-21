import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { throwError as ObservableThrowError, Observable, of } from 'rxjs';  
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // public isAuthenticated = !!localStorage.getItem('token');

  private authUrl = 'http://localhost:8000/api/auth/';

  constructor(
    private http: HttpClient,
  ) { }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.authUrl + 'register', user, httpOptions)
      .pipe(catchError(this.errorHandler))
  }

  login(user: User): Observable<any> {
    return this.http.post<User>(this.authUrl + 'login', user, httpOptions)
      .pipe(catchError(this.errorHandler))
  }

  logout() {
    localStorage.removeItem('token')
  }

  errorHandler(error: HttpErrorResponse) {
    return ObservableThrowError(error || 'Server error')
  }

}
