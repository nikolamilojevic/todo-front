import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { GuestService } from '../services/guest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private guestService: GuestService,
    private router: Router) { }

  ngOnInit() {
    console.log(this.guestService.isGuest())
  }

  logout() {
    this.userService.logout()
    this.router.navigateByUrl('/login');
  }

}
