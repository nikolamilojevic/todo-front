import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { GuestService } from './guest.service';

@Injectable({
  providedIn: 'root'
})
export class GuestGuardService implements CanActivate {

  constructor(
    public guest: GuestService, 
    public router: Router) 
    { }
  canActivate(): boolean {
    if (!this.guest.isGuest()) {
      this.router.navigateByUrl('');
      return false;
    }
    return true;
  }
}
