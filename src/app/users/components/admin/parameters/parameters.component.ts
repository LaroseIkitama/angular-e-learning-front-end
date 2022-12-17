import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAlertComponent } from 'src/app/core/components/dialog-alert/dialog-alert.component';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { UsersService } from 'src/app/core/services/usersService';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.scss']
})
export class ParametersComponent implements OnInit {

  userConnect = new User();
  currentUser = new User();
  constructor(private authService: AuthService, private usersService: UsersService, private matDialog: MatDialog) {
    this.userConnect = this.authService.setUserLoggedData();
    this.usersService.getUser(+this.userConnect.id).subscribe(
      (user) => {
        if (user) {
          this.currentUser = user;
        }
      });
  }

  ngOnInit(): void {
  }
  updateUser() {
    this.usersService.updateUser(this.currentUser).subscribe(() => {
      this.matDialog.open(DialogAlertComponent, {
        width: '30%',
        enterAnimationDuration: '500ms',
        exitAnimationDuration: '500ms',
        data: {
          message: "Vos données ont été modifier avec succès lors de votre prochaine connexion ils seront mis à jour."
        }
      });
    });

  }
}
