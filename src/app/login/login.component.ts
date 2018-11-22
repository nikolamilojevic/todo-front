import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User;
  errorMsg = {};

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  login(): void {
    this.userService.login( this.user )
      .subscribe(
        (result)=> {
          localStorage.setItem('token', result.access_token)
          this.router.navigateByUrl('/');
        },
        error => this.errorMsg = error.error)
  }

}

