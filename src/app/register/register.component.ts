import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User;
  errorMsg = {};

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  register(): void {
    this.userService.register( this.user )
      .subscribe(
        ()=> {
          this.router.navigateByUrl('');
        },
        // error => console.log(error))
        error => this.errorMsg = error.error.errors);
  }

}
