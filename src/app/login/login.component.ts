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
    let isValidUser: Boolean = this.authService.SignIn(this.user);
    if (isValidUser) {
      if (this.authService.loggedUser == this.user.username) {
        console.log('ok jazz');
        if (this.authService.isAdmin())
          this.router.navigate(['/admin-dashboard']);
        if (this.authService.isLearner())
          this.router.navigate(['/home']);
        if (this.authService.isTrainer())
          this.router.navigate(['/trainer-dashboard']);
      }
    }
    else {
      alert('Username or password is incorrect!');
      this.error = 1;
    }
  }

}
