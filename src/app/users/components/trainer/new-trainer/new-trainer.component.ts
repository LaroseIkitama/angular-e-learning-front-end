import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { DialogAlertComponent } from 'src/app/core/components/dialog-alert/dialog-alert.component';
import { User } from 'src/app/core/models/user.model';
import { UsersService } from 'src/app/core/services/usersService';

@Component({
  selector: 'app-new-trainer',
  templateUrl: './new-trainer.component.html',
  styleUrls: ['./new-trainer.component.scss']
})
export class NewTrainerComponent implements OnInit {
  userForm!: FormGroup;
  constructor(private usersService: UsersService,
    private formBuilder: FormBuilder,
    private router: Router,
    private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      id: [500],
      username: [null, Validators.required],
      firstName: [null,Validators.required],
      lastName: [null,Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required],
      biography: [null],
      website: [null],
      role: ["TRAINER"],
      enabled: [true],
    });
  }

  onSubmitForm() {
    if (this.userForm.value.password === this.userForm.value.confirmPassword) {
      const u = new User();
      u.id = this.userForm.value.id;
      u.username = this.userForm.value.username;
      u.firstName = this.userForm.value.firstName;
      u.lastName = this.userForm.value.lastName;
      u.email = this.userForm.value.email;
      u.password = this.userForm.value.password;
      u.biography = this.userForm.value.biography;
      u.website = this.userForm.value.website;
      u.role = this.userForm.value.role;
      u.enabled = this.userForm.value.enabled;
      this.usersService.createUser(u).pipe(
        tap(() => this.router.navigate(['/trainer-list']))
      ).subscribe();
    } else {
      this.matDialog.open(DialogAlertComponent, {
        width: '30%',
        enterAnimationDuration: '500ms',
        exitAnimationDuration: '500ms',
        data: {
          message: "Confirmation de mot passe étonnée."
        }
      });
    }
  }
}
