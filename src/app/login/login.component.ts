import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../core/models/user.model';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = new User();
  error = 0;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogIn() {
    console.log(this.user);
    let isValidUser: Boolean = this.authService.SignIn(this.user);
    if (isValidUser) {
      /* this.router.navigate(['/login']); */
      if (this.authService.loggedUser == "admin") {
        console.log('ok jazz');
        this.router.navigate(['admin']);
        /* this.router.navigate([`./admin/${this.user.username}`]); */
      }
    }
    else {
      alert('Username or password is incorrect!');
      this.error = 1;
    }
  }

}
