import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../core/models/user.model';
import { AuthService } from '../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from '../core/services/usersService';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  userForm!: FormGroup;
  user = new User();
  error = 0;
  constructor(private authService: AuthService,
    private router: Router,
    private matDialog: MatDialog,
    private usersService: UsersService) { }

  ngOnInit(): void { }

  onLogIn() {
    this.router.navigate(['/home']);
    localStorage.setItem('loggedUser', "rosy");
    localStorage.setItem('isloggedIn', String(true));
    localStorage.setItem('role', "APPRENANT");
  }
  onSubmitForm() { }
}
