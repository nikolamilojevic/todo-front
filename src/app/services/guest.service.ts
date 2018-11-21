import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GuestService {

  constructor() {}

  public isGuest() {
    return !localStorage.getItem('token');
  }

}