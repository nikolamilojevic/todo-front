import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
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
    private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.userService.logout()
    this.router.navigateByUrl('/login');
  }

}
